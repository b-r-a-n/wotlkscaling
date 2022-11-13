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

function makePlayer(name, race, clazz, equipment, consumes, bonusStats, buffs, glyphs, profession1, profession2, applyOptions) {
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
    player = applyOptions(player)
    return player
}

function makeWeights() {
    var epWeights = [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ]
    return epWeights
}

function makeWowsimsImport(settings, buffs, debuffs, player, encounter, ep) {
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
    return makeWowsimsImport(DefaultSettings, DefaultBuffs, DefaultDebuffs, player, DefaultEncounter, makeWeights())
}
