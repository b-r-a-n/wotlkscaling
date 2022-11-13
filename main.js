function registerWorker(getJobs) {
    let formatter = new Intl.NumberFormat()
    let worker = new Worker('worker.js')
    worker.onmessage = (e) => {
        const msg = e.data.msg
        if (msg == 'ready') {
            let nextJob = null
            for (let job of getJobs()) {
                if (job.status == "waiting") {
                    nextJob = job
                    job.status = "progress"
                    document.getElementById("result-" + job.id).innerHTML = 'simming'
                    break
                }
            }

            if (nextJob == null) { 
                document.getElementById("startButton").classList.remove("disabled")
                return 
            }
            worker.postMessage({msg: nextJob.msg, id: nextJob.id, inputData: nextJob.request})
        }
        if (msg == 'raidSim') {
            const id = e.data.id
            for (let job of getJobs()) {
                if (job.id == id) {
                    job.status == "complete"
                    break
                }
            }
            let element = document.getElementById("result-" + id)
            element.innerHTML = formatter.format(Math.round(e.data.outputData.raidMetrics.dps.avg))
        }
    }
    return worker
}

function clearValues() {
    for (let node of document.querySelectorAll(".dps-value")) { node.innerHTML = "" }
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

    let mageConsumes = DefaultCasterConsumes
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
        "ArcanePreRaid",
        "RaceTroll",
        "ClassMage",
        MageArcaneP1Equipment,
        mageConsumes,
        makeWeights(),
        DefaultPlayerBuffs, MageArcaneGlyphs, "Engineering", "Tailoring", MageArcaneApplyOptions
    )
    let mageArcaneP2 = makePlayer(
        "ArcanePreRaid",
        "RaceTroll",
        "ClassMage",
        MageArcaneP2Equipment,
        mageConsumes,
        makeWeights(),
        DefaultPlayerBuffs, MageArcaneGlyphs, "Engineering", "Tailoring", MageArcaneApplyOptions
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
        "EnhancePreRaid",
        "RaceOrc", 
        "ClassShaman", 
        ShamanEnhanceP1Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, ShamanEnhanceGlyphs, "Engineering", "Jewelcrafting", ShamanEnhanceApplyOptions
    )
    let shamanEnhanceP2 = makePlayer(
        "EnhancePreRaid",
        "RaceOrc", 
        "ClassShaman", 
        ShamanEnhanceP2Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, ShamanEnhanceGlyphs, "Engineering", "Jewelcrafting", ShamanEnhanceApplyOptions
    )
    let warlockConsumes = DefaultCasterConsumes
    warlockConsumes.petFood = "PetFoodSpicedMammothTreats"
    warlockConsumes.prepopPotion = "PotionOfWildMagic"
    warlockConsumes.defaultPotion = "PotionOfWildMagic"
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

    let warriorFuryPreRaid = makePlayer(
        "FuryPreRaid",
        "RaceOrc", 
        "ClassWarrior", 
        WarriorFuryPreRaidEquipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarriorFuryGlyphs, "Engineering", "Jewelcrafting", WarriorFuryApplyOptions
    )
    let warriorFuryP1 = makePlayer(
        "FuryP1",
        "RaceOrc", 
        "ClassWarrior", 
        WarriorFuryP1Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarriorFuryGlyphs, "Engineering", "Jewelcrafting", WarriorFuryApplyOptions
    )
    let warriorFuryP2 = makePlayer(
        "FuryP2",
        "RaceOrc", 
        "ClassWarrior", 
        WarriorFuryP2Equipment, 
        DefaultMeleeConsumes, 
        makeWeights(),
        DefaultPlayerBuffs, WarriorFuryGlyphs, "Engineering", "Jewelcrafting", WarriorFuryApplyOptions
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
            name: "MM",
            players: [
                {player: hunterMMPreRaid, stats: false},
                {player: hunterMMP1, stats: false},
                {player: hunterMMP2, stats: false},
                {player: hunterMMP2, stats: true}
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
        cell.innerHTML = spec.name

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
            jobID = jobID + 1
            
            settingsCell = settingsRow.insertCell(-1)
            let settings = makeWowsimsImportForPlayer(player)
            let settingsJSON = JSON.stringify(settings, null, 2)
            settingsCell.classList.add("json-value")
            settingsCell.innerHTML = "json"
            settingsCell.dataset.json = settingsJSON
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
        startSim(encounterDuration, simIterations, workerCount, jobs)
    }
}