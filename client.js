const slotIdToIndex = {
    0: 0,
    1: 1,
    2: 2,
    4: 4,
    5: 7,
    6: 8,
    7: 9,
    8: 5,
    9: 6,
    10: 10,
    11: 11,
    12: 12,
    13: 13,
    14: 3,
    15: 14,
    16: 15,
    17: 16
}

function makeItem(fullItem) {
    let item = {}
    item.id = fullItem.id
    item.name = fullItem.name
    item.type = fullItem.type
    item.armorType = fullItem.armorType
    item.weaponType = fullItem.weaponType
    item.handType = fullItem.handType
    item.rangedWeaponType = fullItem.rangedWeaponType
    item.stats = fullItem.stats
    item.gemSockets = fullItem.gemSockets
    item.socketBonus = fullItem.socketBonus
    item.weaponDamageMin = fullItem.weaponDamageMin
    item.weaponDamageMax = fullItem.weaponDamageMax
    item.weaponSpeed = fullItem.weaponSpeed
    item.setName = fullItem.setName
    return item
}

function makeEnchant(fullEnchant) {
    let enchant = {}
    enchant.effectId = fullEnchant.effectId
    enchant.name = fullEnchant.name
    enchant.type = fullEnchant.type
    enchant.stats = fullEnchant.stats
    return enchant
}

function makeGem(fullGem) {
    let gem = {}
    gem.id = fullGem.id
    gem.name = fullGem.name
    gem.color = fullGem.color
    gem.stats = fullGem.stats
    return gem
}

function makeDatabase(fullDB, equipment) {
    let db = {}
    db.items = []
    db.enchants = []
    db.gems = []
    for (let item of equipment.items) {
        let fullItem = fullDB.items.find(e => e.id == item.id)
        if (fullItem) {
            db.items.push(makeItem(fullItem))
        }     
        if (item.enchant) {
            let inDb = db.enchants.find(e => e.effectId == item.enchant)
            if (!inDb) {
                let enchant = fullDB.enchants.find(e => e.effectId == item.enchant)
                db.enchants.push(makeEnchant(enchant))
            }
        }
        if (item.gems) {
            for (let gem of item.gems) {
                let inDb = db.gems.find(e => e.id == gem)
                if (!inDb) {
                    let fullGem = fullDB.gems.find(e => e.id == gem)
                    if (fullGem) {
                        db.gems.push(makeGem(fullGem))
                    }
                }
            }
        }
    }
    return db
}

function makePlayer(name, race, clazz, equipment, consumes, bonusStats, buffs, glyphs, profession1, profession2, applyOptions, fullDB, phase) {
    var player = {}
    player.name = name
    player.race = race
    player.class = clazz
    player.equipment = equipment
    player.consumes = consumes
    player.bonusStats = bonusStats
    player.buffs = buffs
    player.glyphs = glyphs
    player.profession1 = profession1
    player.profession2 = profession2
    player = applyOptions(player, phase)
    player.database = makeDatabase(fullDB, equipment)
    return player
}

function makeWeights() {
    var epWeights = [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ]
    return epWeights
}

function makeWowsimsImport(settings, buffs, debuffs, player, encounter) {
    var config = {}
    config.settings = settings
    config.raidBuffs = buffs
    config.partyBuffs = {}
    config.debuffs = debuffs
    config.player = player
    config.encounter = encounter
    return config
}

function makeEmptyParty() {
    return {"players": [{}, {}, {}, {}, {}], "buffs":{}}
}

function makeWowsimsRequest(player, buffs, debuffs, encounter) {
    var request = {}
    request.raid = {}
    request.raid.parties = [makeEmptyParty(), makeEmptyParty(), makeEmptyParty(), makeEmptyParty(), makeEmptyParty()]
    request.raid.parties[0].players[0] = player
    request.raid.buffs = buffs
    request.raid.debuffs = debuffs
    request.encounter = encounter
    request.simOptions = {
        iterations: 5000,
        debugFirstIteration: false
    }
    return request
}

function makeWowsimsRequestForPlayer(player) {
    return makeWowsimsRequest(player, DefaultBuffs, DefaultDebuffs, DefaultEncounter)
}

function makeWowsimsImportForPlayer(player) {
    let settings = {}
    settings.iterations = DefaultSettings.iterations
    settings.phase = 2
    settings.faction = "Horde"
    return makeWowsimsImport(settings, DefaultBuffs, DefaultDebuffs, player, DefaultEncounter, makeWeights())
}
