function registerWorker(getJobs) {
    let formatter = new Intl.NumberFormat()
    let worker = new Worker('worker.js')
    worker.onmessage = (e) => {
        const msg = e.data.msg
        if (msg == 'ready') {
            let nextJob = null
            let inProgress = 0
            for (let job of getJobs()) {
                if (job.status == "waiting") {
                    nextJob = job
                    job.status = "progress"
                    document.getElementById("result-" + job.id).innerHTML = 'simming'
                    break
                } else if (job.status == "progress") {
                    inProgress = inProgress + 1
                }
            }

            if (nextJob == null) { 
                if (inProgress < 1) {
                    document.getElementById("startButton").classList.remove("disabled")
                    addTrends()
                }
                return 
            }
            worker.postMessage({msg: nextJob.msg, id: nextJob.id, inputData: nextJob.request})
        }
        if (msg == 'raidSim') {
            const id = e.data.id
            for (let job of getJobs()) {
                if (job.id == id) {
                    job.status = "complete"
                    break
                }
            }
            let element = document.getElementById("result-" + id)
            element.innerHTML = formatter.format(Math.round(e.data.outputData.raidMetrics.dps.avg))
        }
        if (msg == 'bonusStats') {
            const id = e.data.id
            let element = document.getElementById("config-" + id)
            let json = JSON.parse(element.dataset.json)
            json.player.bonusStats = e.data.outputData
            element.dataset.json = JSON.stringify(json, null, 2)
        }
    }
    return worker
}

function clearValues() {
    for (let node of document.querySelectorAll(".dps-value")) { node.innerHTML = "" }
    for (let node of document.querySelectorAll(".trend-value")) { node.innerHTML = "" }
}

function addTrends() {
    let rows = document.querySelectorAll("#compareTable tbody tr")
    for (let row of rows) {
        let values = row.querySelectorAll("td.dps-value")
        let first = parseInt(values[0].innerHTML.replace(/,/g, ''))
        let last = parseInt(values[2].innerHTML.replace(/,/g, ''))
        let amnt = (last - first) / first * 100
        row.querySelector("td.trend-value").innerHTML = amnt.toFixed(1)
    }
}

function startSim(encounterDuration, simIterations, workerCount, jobs) {
    for (let job of jobs) {
        job.request.encounter.duration = encounterDuration
        job.request.simOptions.iterations = simIterations
    }
    for (const x of Array(workerCount).keys()) {
        registerWorker(() => { return jobs })
    }
}

async function main() {
    let db = await loadDB()

    for (let jsonStr of ItemDumpDB) {
        let json = JSON.parse(jsonStr)
        let item = db.items.find(e => e.id == json.id)
        if (item) {
            if (json.ilvl > item.ilvl) {
                if (json.weaponDPS) {
                    let currDps = (item.weaponDamageMin + item.weaponDamageMax) / (2 * item.weaponSpeed)
                    let extraDmg = Math.ceil((json.weaponDPS - currDps) / item.weaponSpeed)
                    item.weaponDamageMin = item.weaponDamageMin + extraDmg
                    item.weaponDamageMax = item.weaponDamageMax + extraDmg
                }
                for (let idx in json.stats) {
                    if (json.stats[idx] > item.stats[idx]) {
                        item.stats[idx] = json.stats[idx]
                    }
                }
            }
        }
    }

    let rogueAssassinationPreRaid = makePlayer(
        "AssassinationPreRaid",
        "RaceOrc", 
        "ClassRogue", 
        RogueAssassinationPreRaidEquipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, RogueAssassinationGlyphs, "Engineering", "Jewelcrafting", RogueAssassinationApplyOptions,
        db
    )
    let rogueAssassinationP1 = makePlayer(
        "AssassinationP1",
        "RaceOrc", 
        "ClassRogue", 
        RogueAssassinationP1Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, RogueAssassinationGlyphs, "Engineering", "Jewelcrafting", RogueAssassinationApplyOptions,
        db
    )
    let rogueAssassinationP2 = makePlayer(
        "AssassinationP2",
        "RaceOrc", 
        "ClassRogue", 
        RogueAssassinationP2Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, RogueAssassinationGlyphs, "Engineering", "Jewelcrafting", RogueAssassinationApplyOptions,
        db
    )
    let rogueCombatPreRaid = makePlayer(
        "CombatPreRaid",
        "RaceOrc", 
        "ClassRogue", 
        RogueCombatPreRaidEquipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, RogueCombatGlyphs, "Engineering", "Jewelcrafting", RogueCombatApplyOptions,
        db
    )
    let rogueCombatP1 = makePlayer(
        "CombatP1",
        "RaceOrc", 
        "ClassRogue", 
        RogueCombatP1Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, RogueCombatGlyphs, "Engineering", "Jewelcrafting", RogueCombatApplyOptions,
        db
    )
    let rogueCombatP2 = makePlayer(
        "CombatP2",
        "RaceOrc", 
        "ClassRogue", 
        RogueCombatP2Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, RogueCombatGlyphs, "Engineering", "Jewelcrafting", RogueCombatApplyOptions,
        db
    )
    let dkConsumes = JSON.parse(JSON.stringify(DefaultMeleeConsumes))
    dkConsumes.food = "FoodDragonfinFilet"
    dkConsumes.petFood = "PetFoodSpicedMammothTreats"
    let dkFrostPreRaid = makePlayer(
        "FrostPreRaid",
        "RaceOrc", 
        "ClassDeathknight", 
        DKFrostPreRaidEquipment, 
        dkConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DKFrostGlyphs, "Engineering", "Jewelcrafting", DKFrostApplyOptions,
        db
    )
    let dkFrostP1 = makePlayer(
        "FrostP1",
        "RaceOrc", 
        "ClassDeathknight", 
        DKFrostP1Equipment, 
        dkConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DKFrostGlyphs, "Engineering", "Jewelcrafting", DKFrostApplyOptions,
        db
    )
    let dkFrostP2 = makePlayer(
        "FrostP2",
        "RaceOrc", 
        "ClassDeathknight", 
        DKFrostP2Equipment, 
        dkConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DKFrostGlyphs, "Engineering", "Jewelcrafting", DKFrostApplyOptions,
        db
    )

    let dkUnholyPreRaid = makePlayer(
        "UnholyPreRaid",
        "RaceOrc", 
        "ClassDeathknight", 
        DKUnholyPreRaidEquipment, 
        dkConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DKUnholyGlyphs, "Engineering", "Jewelcrafting", DKUnholyApplyOptions,
        db
    )
    let dkUnholyP1 = makePlayer(
        "UnholyP1",
        "RaceOrc", 
        "ClassDeathknight", 
        DKUnholyP1Equipment, 
        dkConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DKUnholyGlyphs, "Engineering", "Jewelcrafting", DKUnholyApplyOptions,
        db
    )
    let dkUnholyP2 = makePlayer(
        "UnholyP2",
        "RaceOrc", 
        "ClassDeathknight", 
        DKUnholyP2Equipment, 
        dkConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DKUnholyGlyphs, "Engineering", "Jewelcrafting", DKUnholyApplyOptions,
        db
    )

    let druidBalancePreRaid = makePlayer(
        "BalancePreRaid",
        "RaceTauren", 
        "ClassDruid", 
        DruidBalancePreRaidEquipment, 
        DefaultCasterConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DruidBalanceGlyphs, "Engineering", "Jewelcrafting", DruidBalanceApplyOptions,
        db, 0
    )
    let druidBalanceP1 = makePlayer(
        "BalanceP1",
        "RaceTauren", 
        "ClassDruid", 
        DruidBalanceP1Equipment, 
        DefaultCasterConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DruidBalanceGlyphs, "Engineering", "Jewelcrafting", DruidBalanceApplyOptions,
        db, 1
    )
    let druidBalanceP2 = makePlayer(
        "BalanceP1",
        "RaceTauren", 
        "ClassDruid", 
        DruidBalanceP2Equipment, 
        DefaultCasterConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DruidBalanceGlyphsP2, "Engineering", "Jewelcrafting", DruidBalanceApplyOptions,
        db, 2
    )

    let druidFeralPreRaid = makePlayer(
        "FeralPreRaid",
        "RaceTauren", 
        "ClassDruid", 
        DruidFeralPreRaidEquipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DruidFeralGlyphs, "Engineering", "Jewelcrafting", DruidFeralApplyOptions,
        db
    )
    let druidFeralP1 = makePlayer(
        "FeralP1",
        "RaceTauren", 
        "ClassDruid", 
        DruidFeralP1Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DruidFeralGlyphs, "Engineering", "Jewelcrafting", DruidFeralApplyOptions,
        db
    )
    let druidFeralP2 = makePlayer(
        "FeralP2",
        "RaceTauren", 
        "ClassDruid", 
        DruidFeralP2Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DruidFeralGlyphs, "Engineering", "Jewelcrafting", DruidFeralApplyOptions,
        db
    )
    let hunterConsumes = JSON.parse(JSON.stringify(DefaultMeleeConsumes))
    hunterConsumes.food = "FoodBlackenedDragonfin"
    hunterConsumes.petFood = "PetFoodSpicedMammothTreats"
    hunterConsumes.defaultConjured = "ConjuredFlameCap"
    let hunterMMPreRaid = makePlayer(
        "MMPreRaid",
        "RaceOrc", 
        "ClassHunter", 
        HunterMMPreRaidEquipment, 
        hunterConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, HunterMMGlyphs, "Engineering", "Jewelcrafting", HunterMMApplyOptions, 
        db, 0
    )
    let hunterMMP1 = makePlayer(
        "MMPreRaid",
        "RaceOrc", 
        "ClassHunter", 
        HunterMMP1Equipment, 
        hunterConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, HunterMMGlyphs, "Engineering", "Jewelcrafting", HunterMMApplyOptions, 
        db, 1
    )
    let hunterMMP2 = makePlayer(
        "MMPreRaid",
        "RaceOrc", 
        "ClassHunter", 
        HunterMMP2Equipment, 
        hunterConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, HunterMMGlyphs, "Engineering", "Jewelcrafting", HunterMMApplyOptions, 
        db, 2
    )
    let hunterSurvivalPreRaid = makePlayer(
        "SurvivalPreRaid",
        "RaceOrc", 
        "ClassHunter", 
        HunterSurvivalPreRaidEquipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, HunterSurvivalGlyphs, "Engineering", "Jewelcrafting", HunterSurvivalApplyOptions, 
        db, 0
    )
    let hunterSurvivalP1 = makePlayer(
        "SurvivalPreRaid",
        "RaceOrc", 
        "ClassHunter", 
        HunterSurvivalP1Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, HunterSurvivalGlyphs, "Engineering", "Jewelcrafting", HunterSurvivalApplyOptions, 
        db, 1
    )
    let hunterSurvivalP2 = makePlayer(
        "SurvivalPreRaid",
        "RaceOrc", 
        "ClassHunter", 
        HunterSurvivalP2Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, HunterSurvivalGlyphs, "Engineering", "Jewelcrafting", HunterSurvivalApplyOptions, 
        db, 2
    )

    let mageConsumes = JSON.parse(JSON.stringify(DefaultCasterConsumes))
    mageConsumes.defaultConjured = "ConjuredDarkRune"
    let mageArcanePreRaid = makePlayer(
        "ArcanePreRaid",
        "RaceTroll",
        "ClassMage",
        MageArcanePreRaidEquipment,
        mageConsumes,
        makeWeights(),
        DefaultPlayerBuffs, MageArcaneGlyphs, "Engineering", "Tailoring", MageArcaneApplyOptions,
        db
    )
    let mageArcaneP1 = makePlayer(
        "ArcaneP1",
        "RaceTroll",
        "ClassMage",
        MageArcaneP1Equipment,
        mageConsumes,
        makeWeights(),
        DefaultPlayerBuffs, MageArcaneGlyphs, "Engineering", "Tailoring", MageArcaneApplyOptions,
        db
    )
    let mageArcaneP2 = makePlayer(
        "ArcaneP2",
        "RaceTroll",
        "ClassMage",
        MageArcaneP2Equipment,
        mageConsumes,
        makeWeights(),
        DefaultPlayerBuffs, MageArcaneGlyphs, "Engineering", "Tailoring", MageArcaneApplyOptions,
        db
    )
    let mageFirePreRaid = makePlayer(
        "FirePreRaid",
        "RaceTroll",
        "ClassMage",
        MageFirePreRaidEquipment,
        mageConsumes,
        makeWeights(),
        DefaultPlayerBuffs, MageFireGlyphs, "Engineering", "Tailoring", MageFireApplyOptions,
        db
    )
    let mageFireP1 = makePlayer(
        "FireP1",
        "RaceTroll",
        "ClassMage",
        MageFireP1Equipment,
        mageConsumes,
        makeWeights(),
        DefaultPlayerBuffs, MageFireGlyphs, "Engineering", "Tailoring", MageFireApplyOptions,
        db
    )
    let mageFireP2 = makePlayer(
        "FireP2",
        "RaceTroll",
        "ClassMage",
        MageFireP2Equipment,
        mageConsumes,
        makeWeights(),
        DefaultPlayerBuffs, MageFireGlyphs, "Engineering", "Tailoring", MageFireApplyOptions,
        db
    )
    let paladinRetPreRaid = makePlayer(
        "RetPreRaid",
        "RaceBloodElf",
        "ClassPaladin",
        PaladinRetPreRaidEquipment,
        DefaultMeleeConsumes,
        makeWeights(),
        DefaultPlayerBuffs, PaladinRetGlyphs, "Engineering", "Tailoring", PaladinRetApplyOptions,
        db
    )
    let paladinRetP1 = makePlayer(
        "RetP1",
        "RaceBloodElf",
        "ClassPaladin",
        PaladinRetP1Equipment,
        DefaultMeleeConsumes,
        makeWeights(),
        DefaultPlayerBuffs, PaladinRetGlyphs, "Engineering", "Tailoring", PaladinRetApplyOptions,
        db
    )
    let paladinRetP2 = makePlayer(
        "RetP2",
        "RaceBloodElf",
        "ClassPaladin",
        PaladinRetP2Equipment,
        DefaultMeleeConsumes,
        makeWeights(),
        DefaultPlayerBuffs, PaladinRetGlyphs, "Engineering", "Tailoring", PaladinRetApplyOptions,
        db
    )
    let shamanElementalPreRaid = makePlayer(
        "ElementalPreRaid",
        "RaceOrc", 
        "ClassShaman", 
        ShamanElementalPreRaidEquipment, 
        DefaultCasterConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, ShamanElementalGlyphs, "Engineering", "Tailoring", ShamanElementalApplyOptions,
        db
    )
    let shamanElementalP1 = makePlayer(
        "ElementalP1",
        "RaceOrc", 
        "ClassShaman", 
        ShamanElementalP1Equipment, 
        DefaultCasterConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, ShamanElementalGlyphs, "Engineering", "Tailoring", ShamanElementalApplyOptions,
        db
    )
    let shamanElementalP2 = makePlayer(
        "ElementalP2",
        "RaceOrc", 
        "ClassShaman", 
        ShamanElementalP2Equipment, 
        DefaultCasterConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, ShamanElementalGlyphs, "Engineering", "Tailoring", ShamanElementalApplyOptions,
        db
    )
    let shamanEnhancePreRaid = makePlayer(
        "EnhancePreRaid",
        "RaceOrc", 
        "ClassShaman", 
        ShamanEnhancePreRaidEquipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, ShamanEnhanceGlyphs, "Engineering", "Jewelcrafting", ShamanEnhanceApplyOptions,
        db
    )
    let shamanEnhanceP1 = makePlayer(
        "EnhanceP1",
        "RaceOrc", 
        "ClassShaman", 
        ShamanEnhanceP1Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, ShamanEnhanceGlyphs, "Engineering", "Jewelcrafting", ShamanEnhanceApplyOptions,
        db
    )
    let shamanEnhanceP2 = makePlayer(
        "EnhanceP2",
        "RaceOrc", 
        "ClassShaman", 
        ShamanEnhanceP2Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, ShamanEnhanceGlyphs, "Engineering", "Jewelcrafting", ShamanEnhanceApplyOptions,
        db
    )
    let warlockConsumes = JSON.parse(JSON.stringify(DefaultCasterConsumes))
    warlockConsumes.petFood = "PetFoodSpicedMammothTreats"
    warlockConsumes.prepopPotion = "PotionOfWildMagic"
    warlockConsumes.defaultPotion = "PotionOfSpeed"
    warlockConsumes.defaultConjured = "ConjuredDarkRune"
    let warlockAfflictionPreRaid = makePlayer(
        "AfflictionPreRaid",
        "RaceOrc", 
        "ClassWarlock", 
        WarlockAfflictionPreRaidEquipment, 
        warlockConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarlockAfflictionGlyphs, "Engineering", "Tailoring", WarlockAfflictionApplyOptions,
        db
    )
    let warlockAfflictionP1 = makePlayer(
        "AfflictionP1",
        "RaceOrc", 
        "ClassWarlock", 
        WarlockAfflictionP1Equipment, 
        warlockConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarlockAfflictionGlyphs, "Engineering", "Tailoring", WarlockAfflictionApplyOptions,
        db
    )
    let warlockAfflictionP2 = makePlayer(
        "AfflictionP2",
        "RaceOrc", 
        "ClassWarlock", 
        WarlockAfflictionP2Equipment, 
        warlockConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarlockAfflictionGlyphs, "Engineering", "Tailoring", WarlockAfflictionApplyOptions,
        db
    )
    let warlockDemonologyPreRaid = makePlayer(
        "DemonologyPreRaid",
        "RaceOrc", 
        "ClassWarlock", 
        WarlockDemonologyPreRaidEquipment, 
        warlockConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarlockDemonologyGlyphs, "Engineering", "Tailoring", WarlockDemonologyApplyOptions,
        db
    )
    let warlockDemonologyP1 = makePlayer(
        "DemonologyP1",
        "RaceOrc", 
        "ClassWarlock", 
        WarlockDemonologyP1Equipment, 
        warlockConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarlockDemonologyGlyphs, "Engineering", "Tailoring", WarlockDemonologyApplyOptions,
        db
    )
    let warlockDemonologyP2 = makePlayer(
        "DemonologyP2",
        "RaceOrc", 
        "ClassWarlock", 
        WarlockDemonologyP2Equipment, 
        warlockConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarlockDemonologyGlyphs, "Engineering", "Tailoring", WarlockDemonologyApplyOptions,
        db
    )

    let warriorConsumes = JSON.parse(JSON.stringify(DefaultMeleeConsumes))
    warriorConsumes.food = "FoodDragonfinFilet"
    let warriorArmsPreRaid = makePlayer(
        "ArmsPreRaid",
        "RaceOrc", 
        "ClassWarrior", 
        WarriorArmsPreRaidEquipment, 
        warriorConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarriorArmsGlyphs, "Engineering", "Jewelcrafting", WarriorArmsApplyOptions,
        db
    )
    let warriorArmsP1 = makePlayer(
        "ArmsPr1",
        "RaceOrc", 
        "ClassWarrior", 
        WarriorArmsP1Equipment, 
        warriorConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarriorArmsGlyphs, "Engineering", "Jewelcrafting", WarriorArmsApplyOptions,
        db
    )
    let warriorArmsP2 = makePlayer(
        "ArmsP2",
        "RaceOrc", 
        "ClassWarrior", 
        WarriorArmsP2Equipment, 
        warriorConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarriorArmsGlyphs, "Engineering", "Jewelcrafting", WarriorArmsApplyOptions,
        db
    )

    let warriorFuryPreRaid = makePlayer(
        "FuryPreRaid",
        "RaceOrc", 
        "ClassWarrior", 
        WarriorFuryPreRaidEquipment, 
        warriorConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarriorFuryGlyphs, "Engineering", "Jewelcrafting", WarriorFuryApplyOptions,
        db
    )
    let warriorFuryP1 = makePlayer(
        "FuryP1",
        "RaceOrc", 
        "ClassWarrior", 
        WarriorFuryP1Equipment, 
        warriorConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarriorFuryGlyphs, "Engineering", "Jewelcrafting", WarriorFuryApplyOptions,
        db
    )
    let warriorFuryP2 = makePlayer(
        "FuryP2",
        "RaceOrc", 
        "ClassWarrior", 
        WarriorFuryP2Equipment, 
        warriorConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarriorFuryGlyphs, "Engineering", "Jewelcrafting", WarriorFuryApplyOptions,
        db
    )
    let shadowPriestConsumes = JSON.parse(JSON.stringify(DefaultCasterConsumes))
    shadowPriestConsumes.food = "FoodFishFeast"
    shadowPriestConsumes.defaultPotion = "PotionOfSpeed"
    shadowPriestConsumes.prepopPotion = "PotionOfWildMagic"
    let shadowPriestPreRaid = makePlayer(
        "ShadowPreRaid",
        "RaceTroll", 
        "ClassPriest", 
        PriestShadowPreRaidEquipment, 
        shadowPriestConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, PriestShadowGlyphs, "Engineering", "Tailoring", PriestShadowApplyOptions,
        db
    )
    let shadowPriestP1 = makePlayer(
        "ShadowP1",
        "RaceTroll", 
        "ClassPriest", 
        PriestShadowP1Equipment, 
        shadowPriestConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, PriestShadowGlyphs, "Engineering", "Tailoring", PriestShadowApplyOptions,
        db
    )
    let shadowPriestP2 = makePlayer(
        "ShadowP2",
        "RaceTroll", 
        "ClassPriest", 
        PriestShadowP2Equipment, 
        shadowPriestConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, PriestShadowGlyphs, "Engineering", "Tailoring", PriestShadowApplyOptions,
        db
    )

    let specs = [
        {
            cls: "DeathKnight",
            path: "deathknight",
            name: "Frost",
            players: [
                {player: dkFrostPreRaid, stats: false}, 
                {player: dkFrostP1, stats: false}, 
                {player: dkFrostP2, stats: false},
            ],
        },
        {
            cls: "DeathKnight",
            path: "deathknight",
            name: "Unholy",
            players: [
                {player: dkUnholyPreRaid, stats: false},
                {player: dkUnholyP1, stats: false},
                {player: dkUnholyP2, stats: false},
            ]
        },
        {
            cls: "Druid",
            path: "balance_druid",
            name: "Balance",
            players: [
                {player: druidBalancePreRaid, stats: false},
                {player: druidBalanceP1, stats: false},
                {player: druidBalanceP2, stats: false},
            ]
        },
        {
            cls: "Druid",
            path: "feral_druid",
            name: "Feral",
            players: [
                {player: druidFeralPreRaid, stats: false},
                {player: druidFeralP1, stats: false},
                {player: druidFeralP2, stats: false},
            ]
        },
        {
            cls: "Hunter",
            path: "hunter",
            name: "Marksman",
            players: [
                {player: hunterMMPreRaid, stats: false},
                {player: hunterMMP1, stats: false},
                {player: hunterMMP2, stats: false},
            ]
        },
        {
            cls: "Hunter",
            path: "hunter",
            name: "Survival",
            players: [
                {player: hunterSurvivalPreRaid, stats: false},
                {player: hunterSurvivalP1, stats: false},
                {player: hunterSurvivalP2, stats: false},
            ]
        },
        {
            cls: "Mage",
            path: "mage",
            name: "Arcane",
            players: [
                {player: mageArcanePreRaid, stats: false},
                {player: mageArcaneP1, stats: false},
                {player: mageArcaneP2, stats: false},
            ]
        },
        {
            cls: "Mage",
            path: "mage",
            name: "Fire",
            players: [
                {player: mageFirePreRaid, stats: false},
                {player: mageFireP1, stats: false},
                {player: mageFireP2, stats: false},
            ]
        },
        {
            cls: "Paladin",
            path: "retribution_paladin",
            name: "Retribution",
            players: [
                {player: paladinRetPreRaid, stats: false},
                {player: paladinRetP1, stats: false},
                {player: paladinRetP2, stats: false},
            ]
        },
        {
            cls: "Priest",
            path: "shadow_priest",
            name: "Shadow",
            players: [
                {player: shadowPriestPreRaid, stats: false},
                {player: shadowPriestP1, stats: false},
                {player: shadowPriestP2, stats: false},
            ]
        },
        {
            cls: "Rogue",
            path: "rogue",
            name: "Assassination",
            players: [
                {player: rogueAssassinationPreRaid, stats: false}, 
                {player: rogueAssassinationP1, stats: false}, 
                {player: rogueAssassinationP2, stats: false},
            ],
        },
        {
            cls: "Rogue",
            path: "rogue",
            name: "Combat",
            players: [
                {player: rogueCombatPreRaid, stats: false},
                {player: rogueCombatP1, stats: false},
                {player: rogueCombatP2, stats: false},
            ]
        },
        {
            cls: "Shaman",
            path: "elemental_shaman",
            name: "Elemental",
            players: [
                {player: shamanElementalPreRaid, stats: false},
                {player: shamanElementalP1, stats: false},
                {player: shamanElementalP2, stats: false},
            ]
        },
        {
            cls: "Shaman",
            path: "enhancement_shaman",
            name: "Enhancement",
            players: [
                {player: shamanEnhancePreRaid, stats: false},
                {player: shamanEnhanceP1, stats: false},
                {player: shamanEnhanceP2, stats: false},
            ]
        },
        {
            cls: "Warlock",
            name: "Affliction",
            path: "warlock",
            players: [
                {player: warlockAfflictionPreRaid, stats: false},
                {player: warlockAfflictionP1, stats: false},
                {player: warlockAfflictionP2, stats: false},
            ]
        },
        {
            cls: "Warlock",
            name: "Demonology",
            path: "warlock",
            players: [
                {player: warlockDemonologyPreRaid, stats: false},
                {player: warlockDemonologyP1, stats: false},
                {player: warlockDemonologyP2, stats: false},
            ]
        },
        {
            cls: "Warrior",
            path: "warrior",
            name: "Arms",
            players: [
                {player: warriorArmsPreRaid, stats: false},
                {player: warriorArmsP1, stats: false},
                {player: warriorArmsP2, stats: false},
            ]
        },
        {
            cls: "Warrior",
            path: "warrior",
            name: "Fury",
            players: [
                {player: warriorFuryPreRaid, stats: false},
                {player: warriorFuryP1, stats: false},
                {player: warriorFuryP2, stats: false},
            ]
        },

    ]
    let jobs = []
    let tableBody = document.getElementById("compareTable").getElementsByTagName('tbody')[0]
    let settingsTableBody = document.getElementById("settingsTable").getElementsByTagName('tbody')[0]
    document.getElementById("compareContainer").hidden = false
    let jobID = 1
    for (let spec of specs) {
        let row = tableBody.insertRow(-1)
        let settingsRow = settingsTableBody.insertRow(-1)

        let cell = row.insertCell(0)
        cell.classList.add("info-value")
        cell.classList.add(spec.cls)
        cell.innerHTML = spec.cls

        let settingsCell = settingsRow.insertCell(0)
        settingsCell.classList.add("info-value")
        settingsCell.classList.add(spec.cls)
        settingsCell.innerHTML = spec.cls

        cell = row.insertCell(1)
        cell.classList.add("info-value")
        cell.classList.add(spec.cls)
        let attributionText = CommunityContributedConfigs[spec.cls+spec.name]
        if (attributionText != undefined) {
            cell.innerHTML = spec.name +"<sup>*</sup><span class='tooltiptext'>" + attributionText + "</span>"
            cell.classList.add("tooltip")
        } else {
            cell.innerHTML = spec.name
        }

        cell = row.insertCell(2)
        cell.classList.add("trend-value")

        settingsCell = settingsRow.insertCell(1)
        settingsCell.classList.add("info-value")
        settingsCell.classList.add(spec.cls)
        settingsCell.innerHTML = spec.name

        for (let playerInfo of spec.players) {
            let player = playerInfo.player
            let msg = "raidSim"
            if (playerInfo.stats) {
                msg = "stats"
            }
            let request = makeWowsimsRequestForPlayer(player)
            //if (msg == "raidSim") {
                jobs.push({msg: msg, id: jobID, status: "waiting", request: request})
            //}
            cell = row.insertCell(-1)
            cell.id = "result-" + jobID
            cell.classList.add("dps-value")
            
            settingsCell = settingsRow.insertCell(-1)
            let settings = makeWowsimsImportForPlayer(player)
            let settingsJSON = JSON.stringify(settings, null, 2)
            settingsCell.classList.add("json-value")
            settingsCell.innerHTML = "json"
            settingsCell.dataset.json = settingsJSON
            settingsCell.id = "config-" + jobID

            jobID = jobID + 1
            settingsCell.onclick = async (e) => {
                try {
                    await navigator.clipboard.writeText(e.target.dataset.json)
                    alert("Copied settings. Paste into Wowsims import.")
                    window.open("https://wowsims.github.io/wotlk/" + spec.path)
                } catch(err) {
                    console.log(err)
                    alert("Failed to copy settings!")

                }
            }
        }
    }
    document.getElementById("startButton").onclick = (e) => {
        let encounterDuration = parseInt(document.getElementById("encounterDuration").value)
        let simIterations = parseInt(document.getElementById("simIterations").value)
        let workerCount = parseInt(document.getElementById("workerCount").value)
        document.getElementById("startButton").classList.add("disabled")
        clearValues()
        for (let job of jobs) {
            job.status = "waiting"
        }
        startSim(encounterDuration, simIterations, workerCount, jobs)
    }
}