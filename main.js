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
        let last = parseInt(values[3].innerHTML.replace(/,/g, ''))
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

function main() {
    let rogueAssassinationPreRaid = makePlayer(
        "AssassinationPreRaid",
        "RaceOrc", 
        "ClassRogue", 
        RogueAssassinationPreRaidEquipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, RogueAssassinationGlyphs, "Engineering", "Jewelcrafting", RogueAssassinationApplyOptions
    )
    let rogueAssassinationP1 = makePlayer(
        "AssassinationP1",
        "RaceOrc", 
        "ClassRogue", 
        RogueAssassinationP1Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, RogueAssassinationGlyphs, "Engineering", "Jewelcrafting", RogueAssassinationApplyOptions
    )
    let rogueAssassinationP2 = makePlayer(
        "AssassinationP2",
        "RaceOrc", 
        "ClassRogue", 
        RogueAssassinationP2Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, RogueAssassinationGlyphs, "Engineering", "Jewelcrafting", RogueAssassinationApplyOptions
    )
    let rogueCombatPreRaid = makePlayer(
        "CombatPreRaid",
        "RaceOrc", 
        "ClassRogue", 
        RogueCombatPreRaidEquipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, RogueCombatGlyphs, "Engineering", "Jewelcrafting", RogueCombatApplyOptions
    )
    let rogueCombatP1 = makePlayer(
        "CombatP1",
        "RaceOrc", 
        "ClassRogue", 
        RogueCombatP1Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, RogueCombatGlyphs, "Engineering", "Jewelcrafting", RogueCombatApplyOptions
    )
    let rogueCombatP2 = makePlayer(
        "CombatP2",
        "RaceOrc", 
        "ClassRogue", 
        RogueCombatP2Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, RogueCombatGlyphs, "Engineering", "Jewelcrafting", RogueCombatApplyOptions
    )
    let dkFrostPreRaid = makePlayer(
        "FrostPreRaid",
        "RaceOrc", 
        "ClassDeathknight", 
        DKFrostPreRaidEquipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DKFrostGlyphs, "Engineering", "Jewelcrafting", DKFrostApplyOptions
    )
    let dkFrostP1 = makePlayer(
        "FrostP1",
        "RaceOrc", 
        "ClassDeathknight", 
        DKFrostP1Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DKFrostGlyphs, "Engineering", "Jewelcrafting", DKFrostApplyOptions
    )
    let dkFrostP2 = makePlayer(
        "FrostP2",
        "RaceOrc", 
        "ClassDeathknight", 
        DKFrostP2Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DKFrostGlyphs, "Engineering", "Jewelcrafting", DKFrostApplyOptions
    )

    let dkUnholyPreRaid = makePlayer(
        "UnholyPreRaid",
        "RaceOrc", 
        "ClassDeathknight", 
        DKUnholyPreRaidEquipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DKUnholyGlyphs, "Engineering", "Jewelcrafting", DKUnholyApplyOptions
    )
    let dkUnholyP1 = makePlayer(
        "UnholyP1",
        "RaceOrc", 
        "ClassDeathknight", 
        DKUnholyP1Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DKUnholyGlyphs, "Engineering", "Jewelcrafting", DKUnholyApplyOptions
    )
    let dkUnholyP2 = makePlayer(
        "UnholyP2",
        "RaceOrc", 
        "ClassDeathknight", 
        DKUnholyP2Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DKUnholyGlyphs, "Engineering", "Jewelcrafting", DKUnholyApplyOptions
    )

    let druidBalancePreRaid = makePlayer(
        "BalancePreRaid",
        "RaceTauren", 
        "ClassDruid", 
        DruidBalancePreRaidEquipment, 
        DefaultCasterConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DruidBalanceGlyphs, "Engineering", "Jewelcrafting", DruidBalanceApplyOptions
    )
    let druidBalanceP1 = makePlayer(
        "BalanceP1",
        "RaceTauren", 
        "ClassDruid", 
        DruidBalanceP1Equipment, 
        DefaultCasterConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DruidBalanceGlyphs, "Engineering", "Jewelcrafting", DruidBalanceApplyOptions
    )
    let druidBalanceP2 = makePlayer(
        "BalanceP1",
        "RaceTauren", 
        "ClassDruid", 
        DruidBalanceP2Equipment, 
        DefaultCasterConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DruidBalanceGlyphs, "Engineering", "Jewelcrafting", DruidBalanceApplyOptions
    )

    let druidFeralPreRaid = makePlayer(
        "FeralPreRaid",
        "RaceTauren", 
        "ClassDruid", 
        DruidFeralPreRaidEquipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DruidFeralGlyphs, "Engineering", "Jewelcrafting", DruidFeralApplyOptions
    )
    let druidFeralP1 = makePlayer(
        "FeralP1",
        "RaceTauren", 
        "ClassDruid", 
        DruidFeralP1Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DruidFeralGlyphs, "Engineering", "Jewelcrafting", DruidFeralApplyOptions
    )
    let druidFeralP2 = makePlayer(
        "FeralP2",
        "RaceTauren", 
        "ClassDruid", 
        DruidFeralP2Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, DruidFeralGlyphs, "Engineering", "Jewelcrafting", DruidFeralApplyOptions
    )
    let hunterMMPreRaid = makePlayer(
        "MMPreRaid",
        "RaceOrc", 
        "ClassHunter", 
        HunterMMPreRaidEquipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, HunterMMGlyphs, "Engineering", "Jewelcrafting", HunterMMApplyOptions
    )
    let hunterMMP1 = makePlayer(
        "MMPreRaid",
        "RaceOrc", 
        "ClassHunter", 
        HunterMMP1Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, HunterMMGlyphs, "Engineering", "Jewelcrafting", HunterMMApplyOptions
    )
    let hunterMMP2 = makePlayer(
        "MMPreRaid",
        "RaceOrc", 
        "ClassHunter", 
        HunterMMP2Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, HunterMMGlyphs, "Engineering", "Jewelcrafting", HunterMMApplyOptions
    )
    let hunterSurvivalPreRaid = makePlayer(
        "SurvivalPreRaid",
        "RaceOrc", 
        "ClassHunter", 
        HunterSurvivalPreRaidEquipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, HunterSurvivalGlyphs, "Engineering", "Jewelcrafting", HunterSurvivalApplyOptions
    )
    let hunterSurvivalP1 = makePlayer(
        "SurvivalPreRaid",
        "RaceOrc", 
        "ClassHunter", 
        HunterSurvivalP1Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, HunterSurvivalGlyphs, "Engineering", "Jewelcrafting", HunterSurvivalApplyOptions
    )
    let hunterSurvivalP2 = makePlayer(
        "SurvivalPreRaid",
        "RaceOrc", 
        "ClassHunter", 
        HunterSurvivalP2Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, HunterSurvivalGlyphs, "Engineering", "Jewelcrafting", HunterSurvivalApplyOptions
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
        DefaultPlayerBuffs, MageArcaneGlyphs, "Engineering", "Tailoring", MageArcaneApplyOptions
    )
    let mageArcaneP1 = makePlayer(
        "ArcaneP1",
        "RaceTroll",
        "ClassMage",
        MageArcaneP1Equipment,
        mageConsumes,
        makeWeights(),
        DefaultPlayerBuffs, MageArcaneGlyphs, "Engineering", "Tailoring", MageArcaneApplyOptions
    )
    let mageArcaneP2 = makePlayer(
        "ArcaneP2",
        "RaceTroll",
        "ClassMage",
        MageArcaneP2Equipment,
        mageConsumes,
        makeWeights(),
        DefaultPlayerBuffs, MageArcaneGlyphs, "Engineering", "Tailoring", MageArcaneApplyOptions
    )
    let mageFirePreRaid = makePlayer(
        "FirePreRaid",
        "RaceTroll",
        "ClassMage",
        MageFirePreRaidEquipment,
        mageConsumes,
        makeWeights(),
        DefaultPlayerBuffs, MageFireGlyphs, "Engineering", "Tailoring", MageFireApplyOptions
    )
    let mageFireP1 = makePlayer(
        "FireP1",
        "RaceTroll",
        "ClassMage",
        MageFireP1Equipment,
        mageConsumes,
        makeWeights(),
        DefaultPlayerBuffs, MageFireGlyphs, "Engineering", "Tailoring", MageFireApplyOptions
    )
    let mageFireP2 = makePlayer(
        "FireP2",
        "RaceTroll",
        "ClassMage",
        MageFireP2Equipment,
        mageConsumes,
        makeWeights(),
        DefaultPlayerBuffs, MageFireGlyphs, "Engineering", "Tailoring", MageFireApplyOptions
    )
    let paladinRetPreRaid = makePlayer(
        "RetPreRaid",
        "RaceBloodElf",
        "ClassPaladin",
        PaladinRetPreRaidEquipment,
        DefaultMeleeConsumes,
        makeWeights(),
        DefaultPlayerBuffs, PaladinRetGlyphs, "Engineering", "Tailoring", PaladinRetApplyOptions
    )
    let paladinRetP1 = makePlayer(
        "RetP1",
        "RaceBloodElf",
        "ClassPaladin",
        PaladinRetP1Equipment,
        DefaultMeleeConsumes,
        makeWeights(),
        DefaultPlayerBuffs, PaladinRetGlyphs, "Engineering", "Tailoring", PaladinRetApplyOptions
    )
    let paladinRetP2 = makePlayer(
        "RetP2",
        "RaceBloodElf",
        "ClassPaladin",
        PaladinRetP2Equipment,
        DefaultMeleeConsumes,
        makeWeights(),
        DefaultPlayerBuffs, PaladinRetGlyphs, "Engineering", "Tailoring", PaladinRetApplyOptions
    )
    let shamanElementalPreRaid = makePlayer(
        "ElementalPreRaid",
        "RaceOrc", 
        "ClassShaman", 
        ShamanElementalPreRaidEquipment, 
        DefaultCasterConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, ShamanElementalGlyphs, "Engineering", "Tailoring", ShamanElementalApplyOptions
    )
    let shamanElementalP1 = makePlayer(
        "ElementalP1",
        "RaceOrc", 
        "ClassShaman", 
        ShamanElementalP1Equipment, 
        DefaultCasterConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, ShamanElementalGlyphs, "Engineering", "Tailoring", ShamanElementalApplyOptions
    )
    let shamanElementalP2 = makePlayer(
        "ElementalP2",
        "RaceOrc", 
        "ClassShaman", 
        ShamanElementalP2Equipment, 
        DefaultCasterConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, ShamanElementalGlyphs, "Engineering", "Tailoring", ShamanElementalApplyOptions
    )
    let shamanEnhancePreRaid = makePlayer(
        "EnhancePreRaid",
        "RaceOrc", 
        "ClassShaman", 
        ShamanEnhancePreRaidEquipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, ShamanEnhanceGlyphs, "Engineering", "Jewelcrafting", ShamanEnhanceApplyOptions
    )
    let shamanEnhanceP1 = makePlayer(
        "EnhanceP1",
        "RaceOrc", 
        "ClassShaman", 
        ShamanEnhanceP1Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, ShamanEnhanceGlyphs, "Engineering", "Jewelcrafting", ShamanEnhanceApplyOptions
    )
    let shamanEnhanceP2 = makePlayer(
        "EnhanceP2",
        "RaceOrc", 
        "ClassShaman", 
        ShamanEnhanceP2Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, ShamanEnhanceGlyphs, "Engineering", "Jewelcrafting", ShamanEnhanceApplyOptions
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
        DefaultPlayerBuffs, WarlockAfflictionGlyphs, "Engineering", "Tailoring", WarlockAfflictionApplyOptions
    )
    let warlockAfflictionP1 = makePlayer(
        "AfflictionP1",
        "RaceOrc", 
        "ClassWarlock", 
        WarlockAfflictionP1Equipment, 
        warlockConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarlockAfflictionGlyphs, "Engineering", "Tailoring", WarlockAfflictionApplyOptions
    )
    let warlockAfflictionP2 = makePlayer(
        "AfflictionP2",
        "RaceOrc", 
        "ClassWarlock", 
        WarlockAfflictionP2Equipment, 
        warlockConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarlockAfflictionGlyphs, "Engineering", "Tailoring", WarlockAfflictionApplyOptions
    )
    let warlockDemonologyPreRaid = makePlayer(
        "DemonologyPreRaid",
        "RaceOrc", 
        "ClassWarlock", 
        WarlockDemonologyPreRaidEquipment, 
        warlockConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarlockDemonologyGlyphs, "Engineering", "Tailoring", WarlockDemonologyApplyOptions
    )
    let warlockDemonologyP1 = makePlayer(
        "DemonologyP1",
        "RaceOrc", 
        "ClassWarlock", 
        WarlockDemonologyP1Equipment, 
        warlockConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarlockDemonologyGlyphs, "Engineering", "Tailoring", WarlockDemonologyApplyOptions
    )
    let warlockDemonologyP2 = makePlayer(
        "DemonologyP2",
        "RaceOrc", 
        "ClassWarlock", 
        WarlockDemonologyP2Equipment, 
        warlockConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarlockDemonologyGlyphs, "Engineering", "Tailoring", WarlockDemonologyApplyOptions
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
        DefaultPlayerBuffs, WarriorArmsGlyphs, "Engineering", "Jewelcrafting", WarriorArmsApplyOptions
    )
    let warriorArmsP1 = makePlayer(
        "ArmsPr1",
        "RaceOrc", 
        "ClassWarrior", 
        WarriorArmsP1Equipment, 
        warriorConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarriorArmsGlyphs, "Engineering", "Jewelcrafting", WarriorArmsApplyOptions
    )
    let warriorArmsP2 = makePlayer(
        "ArmsP2",
        "RaceOrc", 
        "ClassWarrior", 
        WarriorArmsP2Equipment, 
        warriorConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarriorArmsGlyphs, "Engineering", "Jewelcrafting", WarriorArmsApplyOptions
    )

    let warriorFuryPreRaid = makePlayer(
        "FuryPreRaid",
        "RaceOrc", 
        "ClassWarrior", 
        WarriorFuryPreRaidEquipment, 
        warriorConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarriorFuryGlyphs, "Engineering", "Jewelcrafting", WarriorFuryApplyOptions
    )
    let warriorFuryP1 = makePlayer(
        "FuryP1",
        "RaceOrc", 
        "ClassWarrior", 
        WarriorFuryP1Equipment, 
        warriorConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarriorFuryGlyphs, "Engineering", "Jewelcrafting", WarriorFuryApplyOptions
    )
    let warriorFuryP2 = makePlayer(
        "FuryP2",
        "RaceOrc", 
        "ClassWarrior", 
        WarriorFuryP2Equipment, 
        warriorConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarriorFuryGlyphs, "Engineering", "Jewelcrafting", WarriorFuryApplyOptions
    )
    let shadowPriestPreRaid = makePlayer(
        "ShadowPreRaid",
        "RaceTroll", 
        "ClassPriest", 
        PriestShadowPreRaidEquipment, 
        DefaultCasterConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, PriestShadowGlyphs, "Engineering", "Tailoring", PriestShadowApplyOptions
    )
    let shadowPriestP1 = makePlayer(
        "ShadowP1",
        "RaceTroll", 
        "ClassPriest", 
        PriestShadowP1Equipment, 
        DefaultCasterConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, PriestShadowGlyphs, "Engineering", "Tailoring", PriestShadowApplyOptions
    )
    let shadowPriestP2 = makePlayer(
        "ShadowP2",
        "RaceTroll", 
        "ClassPriest", 
        PriestShadowP2Equipment, 
        DefaultCasterConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, PriestShadowGlyphs, "Engineering", "Tailoring", PriestShadowApplyOptions
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
                {player: dkFrostP2, stats: true},
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
                {player: dkUnholyP2, stats: true}
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
                {player: druidBalanceP2, stats: true}
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
                {player: druidFeralP2, stats: true}
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
                {player: hunterMMP2, stats: true}
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
                {player: hunterSurvivalP2, stats: true}
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
                {player: mageArcaneP2, stats: true}
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
                {player: mageFireP2, stats: true}
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
                {player: paladinRetP2, stats: true}
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
                {player: shadowPriestP2, stats: true}
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
                {player: rogueAssassinationP2, stats: true},
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
                {player: rogueCombatP2, stats: true}
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
                {player: shamanElementalP2, stats: true}
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
                {player: shamanEnhanceP2, stats: true}
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
                {player: warlockAfflictionP2, stats: true}
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
                {player: warlockDemonologyP2, stats: true}
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
                {player: warriorArmsP2, stats: true}
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
                {player: warriorFuryP2, stats: true}
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
            jobs.push({msg: msg, id: jobID, status: "waiting", request: request})
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