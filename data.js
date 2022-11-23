const CommunityContributedConfigs = {
  "WarriorFury": "Improved sim configurations provided by Beanna from Fight Club",
  "WarriorArms": "Improved sim configurations provided by Falfa from Fight Club",
  "WarlockAffliction": "Improved sim configurations provided by Whiskeypig, Neem|eth",
  "RogueAssassination": "Improved sim configurations provided by hexa",
  "HunterMarksman": "Improved sim configurations provided by Anthrax",
  "HunterSurvival": "Improved sim configurations provided by Anthrax",
  "PriestShadow": "Improved sim configurations provided by Linelo",
  "DeathKnightFrost": "Improved sim configurations provided by Frosst",
  "DeathKnightUnholy": "Improved sim configurations provided by RaiN",
}

const DefaultSettings = {
    iterations: 300,
    randomSeed: 0,
    phase: 2,
    showDamageMetrics: true,
    faction: "Horde",
}

const DefaultTarget = {
    level: 83,
    mobType: "MobTypeUnknown",
    stats: [
        0,0,0,0,0,0,0,0,0,0,0,640,0,0,0,0,0,0,0,0,10643,0,0,0,0,0,0,0,16950147,0,0,0,0,0
    ],
    minBaseDamage: 38068,
    swingSpeed: 0.75,
}

const DefaultEncounter = {
    duration: 150,
    durationVariation: 5,
    executeProportion20: 0.2,
    executeProportion25: 0.25,
    executeProportion35: 0.35,
    targets: [DefaultTarget],
}

const DefaultDebuffs = {
  ebonPlaguebringer: true,
  totemOfWrath: true,
  faerieFire: "TristateEffectImproved",
  earthAndMoon: true,
  heartOfTheCrusader: true,
  judgementOfWisdom: true,
  shadowMastery: true,
  bloodFrenzy: true,
  mangle: true,
  sunderArmor: true
}

const DefaultBuffs = {
    giftOfTheWild: "TristateEffectImproved",
    arcaneBrilliance: true,
    devotionAura: "TristateEffectImproved",
    divineSpirit: true,
    strengthOfEarthTotem: "TristateEffectImproved",
    abominationsMight: true,
    leaderOfThePack: "TristateEffectImproved",
    powerWordFortitude: "TristateEffectImproved",
    icyTalons: true,
    swiftRetribution: true,
    elementalOath: true,
    sanctifiedRetribution: true,
    swiftRetribution: true,
    totemOfWrath: true,
    wrathOfAirTotem: true,
    bloodlust: true
}

const DefaultPlayerBuffs = {
    blessingOfKings: true,
    blessingOfMight: "TristateEffectImproved",
    blessingOfWisdom: "TristateEffectImproved",
    judgementsOfTheWise: true,
    vampiricTouch: true,
}

const RogueCombatTalents = {
	malice:          5,
	ruthlessness:    3,
	bloodSpatter:    2,
	lethality:       5,
	vilePoisons:     2,
	improvedPoisons: 3,

	improvedSinisterStrike:  2,
	dualWieldSpecialization: 5,
	improvedSliceAndDice:    2,
	precision:               5,
	endurance:               1,
	closeQuartersCombat:     5,
	lightningReflexes:       3,
	aggression:              5,
	bladeFlurry:             true,
	weaponExpertise:         2,
	bladeTwisting:           2,
	vitality:                3,
	adrenalineRush:          true,
	combatPotency:           5,
	surpriseAttacks:         true,
	savageCombat:            2,
	preyOnTheWeak:           5,
	killingSpree:            true,
}

const RogueAssassinationTalents = {
	malice:           5,
	ruthlessness:     3,
	puncturingWounds: 3,
	lethality:        5,
	vilePoisons:      3,
	improvedPoisons:  5,
	fleetFooted:      2,
	coldBlood:        true,
	sealFate:         5,
	murder:           2,
	overkill:         true,
	focusedAttacks:   3,
	findWeakness:     3,
	masterPoisoner:   3,
	mutilate:         true,
	cutToTheChase:    5,
	hungerForBlood:   true,

	dualWieldSpecialization: 5,
	precision:               5,
	closeQuartersCombat:     3,

	relentlessStrikes: 5,
	opportunity:       2,
}

const DKFrostTalents = {
  butchery: 2,
  subversion: 3,
  bladedArmor: 5,
  darkConviction: 5,

  improvedIcyTouch: 3,
  runicPowerMastery: 2,
  blackIce: 5,
  nervesOfColdSteel: 3,
  icyTalons: 5,
  annihilation: 3,
  killingMachine: 5,
  chillOfTheGrave: 2,
  endlessWinter: 2,
  glacierRot: 3,
  improvedIcyTalons: true,
  mercilessCombat:2,
  rime: 3,
  threatOfThassarian: 3,
  bloodOfTheNorth: 3,
  unbreakableArmor: true,
  frostStrike: true,
  guileOfGorefiend: 3,
  tundraStalker: 5,
  howlingBlast: true,
}

const DKUnholyTalents = {
  improvedIcyTouch: 3,
  runicPowerMastery: 2,
  blackIce: 4,
  nervesOfColdSteel: 3,
  icyTalons: 5,
  chillOfTheGrave: 2,

  viciousStrikes: 2,
  virulence: 3,
  epidemic: 2,
  ravenousDead: 3,
  necrosis: 5,
  bloodCakedBlade: 3,
  nightOfTheDead: 2,
  unholyBlight: true,
  impurity: 5,
  dirge: 5,
  masterOfGhouls: true,
  ghoulFrenzy: true,
  desolation: 5,
  cryptFever: 3,
  boneShield: true,
  wanderingPlague: 3,
  ebonPlaguebringer: 3,
  rageOfRivendare: 5,
  summonGargoyle: true,
}

const MageArcaneTalents = {
  arcaneSubtlety: 2,
  arcaneFocus: 3,
  arcaneConcentration: 5,
  magicAttunement: 1,
  spellImpact: 3,
  studentOfTheMind: 3,
  focusMagic: true,
  arcaneMeditation: 3,
  tormentTheWeak: 3,
  presenceOfMind: true,
  arcaneMind: 5,
  arcaneInstability: 3,
  arcanePotency: 2,
  arcaneEmpowerment: 3,
  arcanePower: true,
  arcaneFlows: 2,
  mindMastery: 5,
  missileBarrage: 5,
  netherwindPresence: 3,
  spellPower: 2,

  incineration: 3,
  improvedFrostbolt: 2,
  iceFloes: 3,
  iceShards: 3,
  precision: 3,
  icyVeins: true
}

const ShamanEnhanceTalents = {
  concussion: 5,
  callOfFlame: 3,
  elementalDevastation: 3,
  elementalFocus: true,
  elementalFury: 5,
  improvedFireNova: 2,

  enhancingTotems: 3,
  ancestralKnowledge: 4,
  thunderingStrikes: 5,
  elementalWeapons: 3,
  shamanisticFocus: true,
  flurry: 5,
  improvedWindfuryTotem: 2,
  spiritWeapons: true,
  mentalDexterity: 3,
  unleashedRage:3,
  weaponMastery: 3,
  dualWieldSpecialization: 3,
  dualWield: true,
  stormstrike: true,
  staticShock: 3,
  lavaLash: true,
  mentalQuickness: 3,
  shamanisticRage: true,
  maelstromWeapon: 5,
  feralSpirit: true
}

const WarriorArmsTalents = {
  improvedHeroicStrike: 3,
  improvedRend: 2,
  improvedCharge: 2,
  tacticalMastery: 3,
  improvedOverpower: 2,
  impale: 2,
  deepWounds: 3,
  twoHandedWeaponSpecialization: 3,
  tasteForBlood: 3,
  poleaxeSpecialization: 5,
  sweepingStrikes: true,
  weaponMastery: 1,
  trauma: 2,
  mortalStrike: true,
  strengthOfArms: 2,
  improvedSlam: 2,
  juggernaut: true,
  improvedMortalStrike: 3,
  unrelentingAssault: 2,
  suddenDeath: 3,
  endlessRage: true,
  bloodFrenzy: 2,
  wreckingCrew: 5,
  bladestorm: true,

  armoredToTheTeeth: 3,
  cruelty: 5,

  improvedBloodrage: 2,
  improvedThunderClap: 3,
  incite: 3,
}

const WarriorFuryTalents = {
  improvedHeroicStrike: 3,
  improvedRend: 2,
  ironWill: 2,
  tacticalMastery: 3,
  angerManagement: true,
  impale: 2,
  deepWounds: 3,
  twoHandedWeaponSpecialization: 3,
  
  armoredToTheTeeth: 3,
  cruelty: 5,
  unbridledWrath: 5,
  improvedCleave: 3,
  dualWieldSpecialization: 5,
  improvedExecute: 2,
  precision: 3,
  deathWish: true,
  flurry: 5,
  intensifyRage: 3,
  bloodthirst: true,
  improvedWhirlwind: 2,
  improvedBerserkerStance: 5,
  bloodsurge: 3,
  unendingFury: 5,
  titansGrip: true
}

const WarriorFuryCooldowns = {
   "cooldowns": [
        {
          "id": {
            "tag": -1,
            "spellId": 2825
          },
          "timings": [
            0
          ]
        },
        {
          "id": {
            "spellId": 54758
          },
          "timings": [
            3
          ]
        },
        {
          "id": {
            "itemId": 42641
          },
          "timings": [
            3
          ]
        },
        {
          "id": {
            "spellId": 12292
          },
          "timings": [
            3
          ]
        },
        {
          "id": {
            "spellId": 1719
          },
          "timings": [
            7
          ]
        },
        {
          "id": {
            "tag": -1,
            "spellId": 64382
          },
          "timings": [
            0
          ]
        },
        {
          "id": {
            "spellId": 33697
          },
          "timings": [
            3
          ]
        }
      ]
}

const RogueAssassinationGlyphs = {
    major1: 45768,
    major2: 45767,
    major3: 45761
}

const RogueCombatGlyphs = {
    major1: 45762,
    major2: 45767,
    major3: 42969
}

const RogueAssassinationPreRaidEquipment = {
    "items": [
        {
            "id": 42550,
            "enchant": 3817,
            "gems": [
            41398,
            40058
            ]
        },
        {
            "id": 40678
        },
        {
            "id": 43481,
            "enchant": 3808
        },
        {
            "id": 38614,
            "enchant": 3605
        },
        {
            "id": 39558,
            "enchant": 3832,
            "gems": [
            40003,
            42702
            ]
        },
        {
            "id": 34448,
            "enchant": 3845,
            "gems": [
            40003,
            0
            ]
        },
        {
            "id": 39560,
            "enchant": 3604,
            "gems": [
            40058,
            0
            ]
        },
        {
            "id": 40694,
            "gems": [
            40003,
            40003
            ]
        },
        {
            "id": 37644,
            "enchant": 3823
        },
        {
            "id": 34575,
            "enchant": 3606,
            "gems": [
            40003
            ]
        },
        {
            "id": 40586
        },
        {
            "id": 37642
        },
        {
            "id": 40684
        },
        {
            "id": 44253
        },
        {
            "id": 37856,
            "enchant": 3789
        },
        {
            "id": 37667,
            "enchant": 3789
        },
        {
            "id": 43612
        }
    ]
} 

const RogueAssassinationP1Equipment = {
  "items": [
    {
      "id": 40499,
      "enchant": 3817,
      "gems": [
        41398,
        42702
      ]
    },
    {
      "id": 44664,
      "gems": [
        36766
      ]
    },
    {
      "id": 40502,
      "enchant": 3808,
      "gems": [
        36766
      ]
    },
    {
      "id": 40403,
      "enchant": 3605
    },
    {
      "id": 40539,
      "enchant": 3832,
      "gems": [
        40003
      ]
    },
    {
      "id": 40186,
      "enchant": 3845,
      "gems": [
        0
      ]
    },
    {
      "id": 40496,
      "enchant": 3604,
      "gems": [
        40058,
        0
      ]
    },
    {
      "id": 40205,
      "gems": [
        36766
      ]
    },
    {
      "id": 40500,
      "enchant": 3823,
      "gems": [
        39999,
        39999
      ]
    },
    {
      "id": 40243,
      "enchant": 3606,
      "gems": [
        40052
      ]
    },
    {
      "id": 40074
    },
    {
      "id": 40474
    },
    {
      "id": 40684
    },
    {
      "id": 44253
    },
    {
      "id": 39714,
      "enchant": 3789
    },
    {
      "id": 40386,
      "enchant": 3789
    },
    {
      "id": 40385
    }
  ]
}

const RogueAssassinationP2Equipment = {
  "items": [
    {
      "id": 46125,
      "enchant": 3817,
      "gems": [
        41398,
        39999
      ]
    },
    {
      "id": 45517,
      "gems": [
        36766
      ]
    },
    {
      "id": 45245,
      "enchant": 3808,
      "gems": [
        40003,
        40003
      ]
    },
    {
      "id": 45461,
      "enchant": 3605,
      "gems": [
        40053
      ]
    },
    {
      "id": 45473,
      "enchant": 3832,
      "gems": [
        40053,
        49110,
        39999
      ]
    },
    {
      "id": 45611,
      "enchant": 3845,
      "gems": [
        40053,
        0
      ]
    },
    {
      "id": 46124,
      "enchant": 3604,
      "gems": [
        39999,
        0
      ]
    },
    {
      "id": 46095,
      "gems": [
        39999,
        39999,
        39999
      ]
    },
    {
      "id": 45536,
      "enchant": 3823,
      "gems": [
        39999,
        39999,
        39999
      ]
    },
    {
      "id": 45564,
      "enchant": 3606,
      "gems": [
        40003,
        40003
      ]
    },
    {
      "id": 45608,
      "gems": [
        36766
      ]
    },
    {
      "id": 45456,
      "gems": [
        36766
      ]
    },
    {
      "id": 45609
    },
    {
      "id": 46038
    },
    {
      "id": 45484,
      "enchant": 3789,
      "gems": [
        39999
      ]
    },
    {
      "id": 45484,
      "enchant": 3789,
      "gems": [
        39999
      ]
    },
    {
      "id": 45570
    }
  ]
}

const RogueCombatPreRaidEquipment = {
"items": [
        {
          "id": 42550,
          "enchant": 3817,
          "gems": [
            41398,
            40014
          ]
        },
        {
          "id": 40678
        },
        {
          "id": 37139,
          "enchant": 3808,
          "gems": [
            39999
          ]
        },
        {
          "id": 34241,
          "enchant": 3605,
          "gems": [
            40014
          ]
        },
        {
          "id": 39558,
          "enchant": 3832,
          "gems": [
            39999,
            40014
          ]
        },
        {
          "id": 34448,
          "enchant": 3845,
          "gems": [
            39999,
            0
          ]
        },
        {
          "id": 39560,
          "enchant": 3604,
          "gems": [
            40014,
            0
          ]
        },
        {
          "id": 40694,
          "gems": [
            42702,
            39999
          ]
        },
        {
          "id": 37644,
          "enchant": 3823
        },
        {
          "id": 34575,
          "enchant": 3606,
          "gems": [
            39999
          ]
        },
        {
          "id": 40586
        },
        {
          "id": 37642
        },
        {
          "id": 40684
        },
        {
          "id": 44253
        },
        {
          "id": 37693,
          "enchant": 3789
        },
        {
          "id": 37856,
          "enchant": 3789
        },
        {
          "id": 44504,
          "gems": [
            40053
          ]
        }
      ]
}

const RogueCombatP1Equipment = {
    "items": [
        {
          "id": 40499,
          "enchant": 3817,
          "gems": [
            41398,
            42702
          ]
        },
        {
          "id": 44664,
          "gems": [
            39999
          ]
        },
        {
          "id": 40502,
          "enchant": 3808,
          "gems": [
            39999
          ]
        },
        {
          "id": 40403,
          "enchant": 3605
        },
        {
          "id": 40539,
          "enchant": 3832,
          "gems": [
            39999
          ]
        },
        {
          "id": 39765,
          "enchant": 3845,
          "gems": [
            39999,
            0
          ]
        },
        {
          "id": 40541,
          "enchant": 3604,
          "gems": [
            0
          ]
        },
        {
          "id": 40205,
          "gems": [
            39999
          ]
        },
        {
          "id": 44011,
          "enchant": 3823,
          "gems": [
            39999,
            39999
          ]
        },
        {
          "id": 39701,
          "enchant": 3606
        },
        {
          "id": 40074
        },
        {
          "id": 40474
        },
        {
          "id": 40684
        },
        {
          "id": 44253
        },
        {
          "id": 40383,
          "enchant": 3789
        },
        {
          "id": 39714,
          "enchant": 3789
        },
        {
          "id": 40385
        }
      ]
}

const RogueCombatP2Equipment = {
        "items": [
        {
          "id": 46125,
          "enchant": 3817,
          "gems": [
            41398,
            39999
          ]
        },
        {
          "id": 45517,
          "gems": [
            42702
          ]
        },
        {
          "id": 46127,
          "enchant": 3808,
          "gems": [
            39999
          ]
        },
        {
          "id": 46032,
          "enchant": 3605,
          "gems": [
            39999,
            39999
          ]
        },
        {
          "id": 46123,
          "enchant": 3832,
          "gems": [
            39999,
            39999
          ]
        },
        {
          "id": 45869,
          "enchant": 3845,
          "gems": [
            39999,
            0
          ]
        },
        {
          "id": 46124,
          "enchant": 3604,
          "gems": [
            39999,
            0
          ]
        },
        {
          "id": 45555,
          "gems": [
            39999,
            39999,
            39999
          ]
        },
        {
          "id": 45536,
          "enchant": 3823,
          "gems": [
            39999,
            39999,
            39999
          ]
        },
        {
          "id": 45162,
          "enchant": 3606
        },
        {
          "id": 46048,
          "gems": [
            36766
          ]
        },
        {
          "id": 45608,
          "gems": [
            36766
          ]
        },
        {
          "id": 45609
        },
        {
          "id": 45931
        },
        {
          "id": 45132,
          "enchant": 3789,
          "gems": [
            39999
          ]
        },
        {
          "id": 45494,
          "enchant": 3789,
          "gems": [
            39999
          ]
        },
        {
          "id": 45296,
          "gems": [
            39999
          ]
        }
      ]
}

const DKFrostPreRaidEquipment = {
"items": [
        {
          "id": 41386,
          "enchant": 3817,
          "gems": [
            41398,
            49110
          ]
        },
        {
          "id": 42645,
          "gems": [
            42142
          ]
        },
        {
          "id": 34388,
          "enchant": 3808,
          "gems": [
            39996,
            39996
          ]
        },
        {
          "id": 37647,
          "enchant": 3831
        },
        {
          "id": 39617,
          "enchant": 3832,
          "gems": [
            42142,
            39996
          ]
        },
        {
          "id": 41355,
          "enchant": 3845,
          "gems": [
            0
          ]
        },
        {
          "id": 39618,
          "enchant": 3604,
          "gems": [
            39996,
            0
          ]
        },
        {
          "id": 37171,
          "gems": [
            39996,
            39996
          ]
        },
        {
          "id": 37193,
          "enchant": 3823,
          "gems": [
            42142,
            39996
          ]
        },
        {
          "id": 44306,
          "enchant": 3606,
          "gems": [
            39996,
            39996
          ]
        },
        {
          "id": 42642,
          "gems": [
            39996
          ]
        },
        {
          "id": 44935
        },
        {
          "id": 40684
        },
        {
          "id": 42987
        },
        {
          "id": 41383,
          "enchant": 3370
        },
        {
          "id": 43611,
          "enchant": 3368
        },
        {
          "id": 40715
        }
      ]
}

const DKFrostP1Equipment = {
 "items": [
        {
          "id": 44006,
          "enchant": 3817,
          "gems": [
            41398,
            42702
          ]
        },
        {
          "id": 44664,
          "gems": [
            39996
          ]
        },
        {
          "id": 40557,
          "enchant": 3808,
          "gems": [
            39996
          ]
        },
        {
          "id": 40403,
          "enchant": 3831
        },
        {
          "id": 40550,
          "enchant": 3832,
          "gems": [
            42142,
            39996
          ]
        },
        {
          "id": 40330,
          "enchant": 3845,
          "gems": [
            39996,
            0
          ]
        },
        {
          "id": 40552,
          "enchant": 3604,
          "gems": [
            39996,
            0
          ]
        },
        {
          "id": 40278,
          "gems": [
            39996,
            42142
          ]
        },
        {
          "id": 40556,
          "enchant": 3823,
          "gems": [
            42142,
            39996
          ]
        },
        {
          "id": 40591,
          "enchant": 3606
        },
        {
          "id": 39401
        },
        {
          "id": 40075
        },
        {
          "id": 40256
        },
        {
          "id": 42987
        },
        {
          "id": 40189,
          "enchant": 3370
        },
        {
          "id": 40189,
          "enchant": 3368
        },
        {
          "id": 40207
        }
      ]
}

const DKFrostP2Equipment = {
 "items": [
        {
          "id": 45472,
          "enchant": 3817,
          "gems": [
            41398,
            42702
          ]
        },
        {
          "id": 45459,
          "gems": [
            39996
          ]
        },
        {
          "id": 46037,
          "enchant": 3808,
          "gems": [
            39996,
            39996
          ]
        },
        {
          "id": 45588,
          "enchant": 3831,
          "gems": [
            39996
          ]
        },
        {
          "id": 46111,
          "enchant": 3832,
          "gems": [
            42142,
            39996
          ]
        },
        {
          "id": 45663,
          "enchant": 3845,
          "gems": [
            39996,
            0
          ]
        },
        {
          "id": 46113,
          "enchant": 3604,
          "gems": [
            39996,
            0
          ]
        },
        {
          "id": 45241,
          "gems": [
            39996,
            39996,
            42142
          ]
        },
        {
          "id": 45134,
          "enchant": 3823,
          "gems": [
            39996,
            42142,
            39996
          ]
        },
        {
          "id": 45599,
          "enchant": 3606,
          "gems": [
            39996,
            39996
          ]
        },
        {
          "id": 45534,
          "gems": [
            39996
          ]
        },
        {
          "id": 45469
        },
        {
          "id": 45609
        },
        {
          "id": 42987
        },
        {
          "id": 46097,
          "enchant": 3370,
          "gems": [
            39996
          ]
        },
        {
          "id": 46097,
          "enchant": 3368,
          "gems": [
            39996
          ]
        },
        {
          "id": 45254
        }
      ]
}

const DKUnholyPreRaidEquipment = {
   "items": [
        {
          "id": 41386,
          "enchant": 3817,
          "gems": [
            41400,
            49110
          ]
        },
        {
          "id": 37397
        },
        {
          "id": 37627,
          "enchant": 3808,
          "gems": [
            39996
          ]
        },
        {
          "id": 37647,
          "enchant": 3831
        },
        {
          "id": 39617,
          "enchant": 3832,
          "gems": [
            42142,
            39996
          ]
        },
        {
          "id": 41355,
          "enchant": 3845,
          "gems": [
            0
          ]
        },
        {
          "id": 39618,
          "enchant": 3604,
          "gems": [
            39996,
            0
          ]
        },
        {
          "id": 40688,
          "gems": [
            39996,
            42142
          ]
        },
        {
          "id": 37193,
          "enchant": 3823,
          "gems": [
            42142,
            39996
          ]
        },
        {
          "id": 44306,
          "enchant": 3606,
          "gems": [
            39996,
            39996
          ]
        },
        {
          "id": 37642
        },
        {
          "id": 44935
        },
        {
          "id": 40684
        },
        {
          "id": 42987
        },
        {
          "id": 41383,
          "enchant": 3368
        },
        {
          "id": 40703,
          "enchant": 3790
        },
        {
          "id": 40867
        }
      ]
}

const DKUnholyP1Equipment = {
  "items": [
    {
      "id": 44006,
      "enchant": 3817,
      "gems": [
        41398,
        42702
      ]
    },
    {
      "id": 39421
    },
    {
      "id": 40557,
      "enchant": 3808,
      "gems": [
        39996
      ]
    },
    {
      "id": 40403,
      "enchant": 3831
    },
    {
      "id": 40550,
      "enchant": 3832,
      "gems": [
        42142,
        39996
      ]
    },
    {
      "id": 40330,
      "enchant": 3845,
      "gems": [
        39996,
        0
      ]
    },
    {
      "id": 40347,
      "enchant": 3604,
      "gems": [
        39996,
        0
      ]
    },
    {
      "id": 40278,
      "gems": [
        42142,
        42142
      ]
    },
    {
      "id": 40294,
      "enchant": 3823
    },
    {
      "id": 39706,
      "enchant": 3606,
      "gems": [
        39996
      ]
    },
    {
      "id": 39401
    },
    {
      "id": 40075
    },
    {
      "id": 37390
    },
    {
      "id": 42987
    },
    {
      "id": 40402,
      "enchant": 3368
    },
    {
      "id": 40491,
      "enchant": 3368
    },
    {
      "id": 42620
    }
  ]
}

const DruidFeralPreRaidEquipment = {
 "items": [
        {
          "id": 42550,
          "enchant": 3817,
          "gems": [
            41398,
            39996
          ]
        },
        {
          "id": 40678
        },
        {
          "id": 37139,
          "enchant": 3808,
          "gems": [
            39996
          ]
        },
        {
          "id": 37840,
          "enchant": 3605
        },
        {
          "id": 37219,
          "enchant": 3832
        },
        {
          "id": 44203,
          "enchant": 3845,
          "gems": [
            0
          ]
        },
        {
          "id": 37409,
          "enchant": 3604,
          "gems": [
            0
          ]
        },
        {
          "id": 40694,
          "gems": [
            49110,
            39996
          ]
        },
        {
          "id": 37644,
          "enchant": 3823
        },
        {
          "id": 44297,
          "enchant": 3606
        },
        {
          "id": 37642
        },
        {
          "id": 37624
        },
        {
          "id": 40684
        },
        {
          "id": 37166
        },
        {
          "id": 37883,
          "enchant": 3827
        },
        {},
        {
          "id": 40713
        }
      ]
}

const DruidFeralP1Equipment = {
        "items": [
        {
          "id": 40473,
          "enchant": 3817,
          "gems": [
            41398,
            39996
          ]
        },
        {
          "id": 44664,
          "gems": [
            39996
          ]
        },
        {
          "id": 40494,
          "enchant": 3808,
          "gems": [
            39996
          ]
        },
        {
          "id": 40403,
          "enchant": 3605
        },
        {
          "id": 40539,
          "enchant": 3832,
          "gems": [
            39996
          ]
        },
        {
          "id": 39765,
          "enchant": 3845,
          "gems": [
            39996,
            0
          ]
        },
        {
          "id": 40541,
          "enchant": 3604,
          "gems": [
            0
          ]
        },
        {
          "id": 40205,
          "gems": [
            39996
          ]
        },
        {
          "id": 44011,
          "enchant": 3823,
          "gems": [
            39996,
            49110
          ]
        },
        {
          "id": 40243,
          "enchant": 3606,
          "gems": [
            40014
          ]
        },
        {
          "id": 40474
        },
        {
          "id": 40717
        },
        {
          "id": 42987
        },
        {
          "id": 40256
        },
        {
          "id": 40388,
          "enchant": 3789
        },
        {},
        {
          "id": 39757
        }
      ]
}

const DruidFeralP2Equipment = {
        "items": [
        {
          "id": 46161,
          "enchant": 3817,
          "gems": [
            41398,
            39996
          ]
        },
        {
          "id": 45945,
          "gems": [
            39996
          ]
        },
        {
          "id": 46157,
          "enchant": 3808,
          "gems": [
            39996
          ]
        },
        {
          "id": 46032,
          "enchant": 3605,
          "gems": [
            39996,
            39996
          ]
        },
        {
          "id": 46159,
          "enchant": 3832,
          "gems": [
            39996,
            39996
          ]
        },
        {
          "id": 45869,
          "enchant": 3845,
          "gems": [
            39996,
            0
          ]
        },
        {
          "id": 46158,
          "enchant": 3604,
          "gems": [
            39996,
            0
          ]
        },
        {
          "id": 46095,
          "gems": [
            42142,
            42142,
            42142
          ]
        },
        {
          "id": 45536,
          "enchant": 3823,
          "gems": [
            39996,
            39996,
            49110
          ]
        },
        {
          "id": 45564,
          "enchant": 3606,
          "gems": [
            39996,
            39996
          ]
        },
        {
          "id": 45608,
          "gems": [
            39996
          ]
        },
        {
          "id": 46048,
          "gems": [
            39996
          ]
        },
        {
          "id": 45609
        },
        {
          "id": 45931
        },
        {
          "id": 45613,
          "enchant": 3789,
          "gems": [
            39996,
            39996
          ]
        },
        {},
        {
          "id": 39757
        }
      ]
}

const HunterMMPreRaidEquipment = {
        "items": [
        {
          "id": 42551,
          "enchant": 3817,
          "gems": [
            41398,
            42143
          ]
        },
        {
          "id": 40678
        },
        {
          "id": 37373,
          "enchant": 3808
        },
        {
          "id": 43566,
          "enchant": 3605
        },
        {
          "id": 39579,
          "enchant": 3832,
          "gems": [
            39997,
            49110
          ]
        },
        {
          "id": 37170,
          "enchant": 3845,
          "gems": [
            0
          ]
        },
        {
          "id": 39582,
          "enchant": 3604,
          "gems": [
            40014,
            0
          ]
        },
        {
          "id": 37407,
          "enchant": 3601,
          "gems": [
            42143
          ]
        },
        {
          "id": 37669,
          "enchant": 3823
        },
        {
          "id": 37167,
          "enchant": 3606,
          "gems": [
            42143,
            39997
          ]
        },
        {
          "id": 37685
        },
        {
          "id": 42642,
          "gems": [
            40044
          ]
        },
        {
          "id": 40684
        },
        {
          "id": 44253
        },
        {
          "id": 44249,
          "enchant": 3827
        },
        {},
        {
          "id": 37191,
          "enchant": 3608
        }
      ]
}

const HunterMMP1Equipment = {
  "items": [
    {
      "id": 40543,
      "enchant": 3817,
      "gems": [
        41398,
        39997
      ]
    },
    {
      "id": 44664,
      "gems": [
        39997
      ]
    },
    {
      "id": 40507,
      "enchant": 3808,
      "gems": [
        42143
      ]
    },
    {
      "id": 40403,
      "enchant": 3605
    },
    {
      "id": 43998,
      "enchant": 3832,
      "gems": [
        42143,
        42143
      ]
    },
    {
      "id": 40282,
      "enchant": 3845,
      "gems": [
        39997,
        0
      ]
    },
    {
      "id": 40541,
      "enchant": 3604,
      "gems": [
        0
      ]
    },
    {
      "id": 40275,
      "enchant": 3601,
      "gems": [
        39997
      ]
    },
    {
      "id": 40506,
      "enchant": 3823,
      "gems": [
        39997,
        42702
      ]
    },
    {
      "id": 40549,
      "enchant": 3606
    },
    {
      "id": 40074
    },
    {
      "id": 40474
    },
    {
      "id": 40684
    },
    {
      "id": 44253
    },
    {
      "id": 40388,
      "enchant": 3827
    },
    {},
    {
      "id": 40385,
      "enchant": 3608
    }
  ]
}

const HunterMMP2Equipment = {
  "items": [
    {
      "id": 46143,
      "enchant": 3817,
      "gems": [
        41398,
        42143
      ]
    },
    {
      "id": 45517,
      "gems": [
        39997
      ]
    },
    {
      "id": 45300,
      "enchant": 3808,
      "gems": [
        39997
      ]
    },
    {
      "id": 46032,
      "enchant": 3605,
      "gems": [
        42143,
        40043
      ]
    },
    {
      "id": 46141,
      "enchant": 3832,
      "gems": [
        39997,
        39997
      ]
    },
    {
      "id": 45869,
      "enchant": 3845,
      "gems": [
        40044,
        0
      ]
    },
    {
      "id": 45444,
      "enchant": 3604,
      "gems": [
        42143,
        42702,
        0
      ]
    },
    {
      "id": 45467,
      "gems": [
        39997
      ]
    },
    {
      "id": 45536,
      "enchant": 3823,
      "gems": [
        39997,
        39997,
        39997
      ]
    },
    {
      "id": 45562,
      "enchant": 3606,
      "gems": [
        39997,
        39997
      ]
    },
    {
      "id": 45608,
      "gems": [
        39997
      ]
    },
    {
      "id": 46048,
      "gems": [
        39997
      ]
    },
    {
      "id": 46038
    },
    {
      "id": 45931
    },
    {
      "id": 45613,
      "enchant": 3827,
      "gems": [
        39997,
        39997
      ]
    },
    {},
    {
      "id": 45570,
      "enchant": 3608
    }
  ]
}

const MageArcanePreRaidEquipment = {
        "items": [
        {
          "id": 42553,
          "enchant": 3820,
          "gems": [
            41285,
            40049
          ]
        },
        {
          "id": 39472
        },
        {
          "id": 37673,
          "enchant": 3810,
          "gems": [
            39998
          ]
        },
        {
          "id": 41610,
          "enchant": 3722
        },
        {
          "id": 39492,
          "enchant": 3832,
          "gems": [
            39998,
            40049
          ]
        },
        {
          "id": 37361,
          "enchant": 2332,
          "gems": [
            0
          ]
        },
        {
          "id": 39495,
          "enchant": 3604,
          "gems": [
            39998,
            0
          ]
        },
        {
          "id": 40696,
          "gems": [
            40049,
            40026
          ]
        },
        {
          "id": 37854,
          "enchant": 3719
        },
        {
          "id": 44202,
          "enchant": 3606,
          "gems": [
            40026
          ]
        },
        {
          "id": 40585
        },
        {
          "id": 37694
        },
        {
          "id": 37873
        },
        {
          "id": 40682
        },
        {
          "id": 37360,
          "enchant": 3854
        },
        {},
        {
          "id": 37238
        }
      ]
}

const MageArcaneP1Equipment = {
      "items": [
        {
          "id": 40416,
          "enchant": 3820,
          "gems": [
            41285,
            39998
          ]
        },
        {
          "id": 44661,
          "gems": [
            40026
          ]
        },
        {
          "id": 40419,
          "enchant": 3810,
          "gems": [
            40051
          ]
        },
        {
          "id": 44005,
          "enchant": 3722,
          "gems": [
            40026
          ]
        },
        {
          "id": 44002,
          "enchant": 3832,
          "gems": [
            39998,
            39998
          ]
        },
        {
          "id": 44008,
          "enchant": 2332,
          "gems": [
            39998,
            0
          ]
        },
        {
          "id": 40415,
          "enchant": 3604,
          "gems": [
            39998,
            0
          ]
        },
        {
          "id": 40561,
          "gems": [
            39998
          ]
        },
        {
          "id": 40417,
          "enchant": 3719,
          "gems": [
            39998,
            40051
          ]
        },
        {
          "id": 40558,
          "enchant": 3606
        },
        {
          "id": 40719
        },
        {
          "id": 40399
        },
        {
          "id": 39229
        },
        {
          "id": 40255
        },
        {
          "id": 40396,
          "enchant": 3834
        },
        {
          "id": 40273
        },
        {
          "id": 39426
        }
      ]
}

const MageArcaneP2Equipment = {
      "items": [
        {
          "id": 46129,
          "enchant": 3820,
          "gems": [
            41285,
            39998
          ]
        },
        {
          "id": 45243,
          "gems": [
            39998
          ]
        },
        {
          "id": 46134,
          "enchant": 3810,
          "gems": [
            40051
          ]
        },
        {
          "id": 45618,
          "enchant": 3722,
          "gems": [
            40026
          ]
        },
        {
          "id": 46130,
          "enchant": 3832,
          "gems": [
            39998,
            39998
          ]
        },
        {
          "id": 45446,
          "enchant": 2332,
          "gems": [
            39998,
            39998
          ]
        },
        {
          "id": 45665,
          "enchant": 3604,
          "gems": [
            40026,
            40051,
            0
          ]
        },
        {
          "id": 45619,
          "gems": [
            40049,
            40049,
            39998
          ]
        },
        {
          "id": 46133,
          "enchant": 3719,
          "gems": [
            39998,
            39998
          ]
        },
        {
          "id": 45135,
          "enchant": 3606,
          "gems": [
            39998,
            40026
          ]
        },
        {
          "id": 46046,
          "gems": [
            40049
          ]
        },
        {
          "id": 45495,
          "gems": [
            39998
          ]
        },
        {
          "id": 45518
        },
        {
          "id": 45490
        },
        {
          "id": 45620,
          "gems": [
            39998
          ]
        },
        {
          "id": 45271
        },
        {
          "id": 39712
        }
      ]
}

const ShamanEnhancePreRaidEquipment = {
        "items": [
        {
          "id": 43311,
          "enchant": 3817,
          "gems": [
            41398,
            42156
          ]
        },
        {
          "id": 40678
        },
        {
          "id": 37373,
          "enchant": 3808
        },
        {
          "id": 37840,
          "enchant": 3605
        },
        {
          "id": 39597,
          "enchant": 3832,
          "gems": [
            40053,
            40088
          ]
        },
        {
          "id": 43131,
          "enchant": 3845,
          "gems": [
            0
          ]
        },
        {
          "id": 39601,
          "enchant": 3604,
          "gems": [
            40053,
            0
          ]
        },
        {
          "id": 37407,
          "gems": [
            42156
          ]
        },
        {
          "id": 37669,
          "enchant": 3823
        },
        {
          "id": 37167,
          "enchant": 3606,
          "gems": [
            40053,
            42156
          ]
        },
        {
          "id": 37685
        },
        {
          "id": 37642
        },
        {
          "id": 37390
        },
        {
          "id": 40684
        },
        {
          "id": 41384,
          "enchant": 3789
        },
        {
          "id": 40704,
          "enchant": 3789
        },
        {
          "id": 33507
        }
      ]
}

const ShamanEnhanceP1Equipment = {
      "items": [
        {
          "id": 40543,
          "enchant": 3817,
          "gems": [
            41398,
            40014
          ]
        },
        {
          "id": 44661,
          "gems": [
            40014
          ]
        },
        {
          "id": 40524,
          "enchant": 3808,
          "gems": [
            40014
          ]
        },
        {
          "id": 40403,
          "enchant": 3605
        },
        {
          "id": 40523,
          "enchant": 3832,
          "gems": [
            40003,
            40014
          ]
        },
        {
          "id": 40282,
          "enchant": 3845,
          "gems": [
            42702,
            0
          ]
        },
        {
          "id": 40520,
          "enchant": 3604,
          "gems": [
            42154,
            0
          ]
        },
        {
          "id": 40275,
          "gems": [
            42156
          ]
        },
        {
          "id": 40522,
          "enchant": 3823,
          "gems": [
            39999,
            42156
          ]
        },
        {
          "id": 40367,
          "enchant": 3606,
          "gems": [
            40058
          ]
        },
        {
          "id": 40474
        },
        {
          "id": 40074
        },
        {
          "id": 40684
        },
        {
          "id": 37390
        },
        {
          "id": 39763,
          "enchant": 3789
        },
        {
          "id": 39468,
          "enchant": 3789
        },
        {
          "id": 40322
        }
      ]
}

const ShamanEnhanceP2Equipment = {
        "items": [
        {
          "id": 46212,
          "enchant": 3817,
          "gems": [
            41398,
            39999
          ]
        },
        {
          "id": 45133,
          "gems": [
            40014
          ]
        },
        {
          "id": 46203,
          "enchant": 3808,
          "gems": [
            39999
          ]
        },
        {
          "id": 45873,
          "enchant": 3605
        },
        {
          "id": 45473,
          "enchant": 3832,
          "gems": [
            40014,
            40029,
            39999
          ]
        },
        {
          "id": 45611,
          "enchant": 3845,
          "gems": [
            42702,
            0
          ]
        },
        {
          "id": 46200,
          "enchant": 3604,
          "gems": [
            40053,
            0
          ]
        },
        {
          "id": 45553,
          "gems": [
            36766,
            40029,
            42156
          ]
        },
        {
          "id": 46208,
          "enchant": 3823,
          "gems": [
            39999,
            39999
          ]
        },
        {
          "id": 45244,
          "enchant": 3606,
          "gems": [
            36766,
            39999
          ]
        },
        {
          "id": 45456,
          "gems": [
            40014
          ]
        },
        {
          "id": 46046,
          "gems": [
            40014
          ]
        },
        {
          "id": 45609
        },
        {
          "id": 45522
        },
        {
          "id": 45612,
          "enchant": 3789,
          "gems": [
            39999
          ]
        },
        {
          "id": 46097,
          "enchant": 3789,
          "gems": [
            39999
          ]
        },
        {
          "id": 40322
        }
      ]
}

const WarlockAfflictionPreRaidEquipment = {
        "items": [
        {
          "id": 44910,
          "enchant": 3820,
          "gems": [
            41285,
            39998
          ]
        },
        {
          "id": 42647,
          "gems": [
            39998
          ]
        },
        {
          "id": 34210,
          "enchant": 3810,
          "gems": [
            39998,
            40051
          ]
        },
        {
          "id": 41610,
          "enchant": 3722
        },
        {
          "id": 39497,
          "enchant": 3832,
          "gems": [
            39998,
            40051
          ]
        },
        {
          "id": 37361,
          "enchant": 2332,
          "gems": [
            0
          ]
        },
        {
          "id": 42113,
          "enchant": 3604,
          "gems": [
            0
          ]
        },
        {
          "id": 40696,
          "gems": [
            40051,
            39998
          ]
        },
        {
          "id": 34181,
          "enchant": 3719,
          "gems": [
            39998,
            39998,
            40051
          ]
        },
        {
          "id": 44202,
          "enchant": 3606,
          "gems": [
            40026
          ]
        },
        {
          "id": 43253,
          "gems": [
            40026
          ]
        },
        {
          "id": 37694
        },
        {
          "id": 40682
        },
        {
          "id": 37873
        },
        {
          "id": 45085,
          "enchant": 3834
        },
        {
          "id": 40698
        },
        {
          "id": 34348,
          "gems": [
            39998
          ]
        }
      ]
}

const WarlockAfflictionP1Equipment = {
        "items": [
        {
          "id": 40421,
          "enchant": 3820,
          "gems": [
            41285,
            40051
          ]
        },
        {
          "id": 44661,
          "gems": [
            40026
          ]
        },
        {
          "id": 40424,
          "enchant": 3810,
          "gems": [
            39998
          ]
        },
        {
          "id": 44005,
          "enchant": 3722,
          "gems": [
            40026
          ]
        },
        {
          "id": 40423,
          "enchant": 3832,
          "gems": [
            39998,
            40051
          ]
        },
        {
          "id": 44008,
          "enchant": 2332,
          "gems": [
            39998,
            0
          ]
        },
        {
          "id": 40420,
          "enchant": 3604,
          "gems": [
            39998,
            0
          ]
        },
        {
          "id": 40561,
          "gems": [
            39998
          ]
        },
        {
          "id": 40560,
          "enchant": 3719
        },
        {
          "id": 40558,
          "enchant": 3606
        },
        {
          "id": 40399
        },
        {
          "id": 40719
        },
        {
          "id": 40432
        },
        {
          "id": 40255
        },
        {
          "id": 40396,
          "enchant": 3834
        },
        {
          "id": 39766
        },
        {
          "id": 39712
        }
      ]
}

const WarlockAfflictionP2Equipment = {
  "items": [
    {
      "id": 45497,
      "enchant": 3820,
      "gems": [
        41285,
        39998
      ]
    },
    {
      "id": 45243,
      "gems": [
        39998
      ]
    },
    {
      "id": 46136,
      "enchant": 3810,
      "gems": [
        40051
      ]
    },
    {
      "id": 45618,
      "enchant": 3722,
      "gems": [
        40026
      ]
    },
    {
      "id": 46137,
      "enchant": 1144,
      "gems": [
        39998,
        40051
      ]
    },
    {
      "id": 45446,
      "enchant": 2332,
      "gems": [
        39998,
        0
      ]
    },
    {
      "id": 45665,
      "enchant": 3604,
      "gems": [
        40026,
        40051,
        0
      ]
    },
    {
      "id": 45619,
      "gems": [
        40049,
        40049,
        39998
      ]
    },
    {
      "id": 45488,
      "enchant": 3719,
      "gems": [
        39998,
        40051,
        40026
      ]
    },
    {
      "id": 45135,
      "enchant": 3606,
      "gems": [
        39998,
        40051
      ]
    },
    {
      "id": 45495,
      "gems": [
        40026
      ]
    },
    {
      "id": 46046,
      "gems": [
        40051
      ]
    },
    {
      "id": 45466
    },
    {
      "id": 45518
    },
    {
      "id": 45620,
      "enchant": 3834,
      "gems": [
        40026
      ]
    },
    {
      "id": 45617
    },
    {
      "id": 45511
    }
  ]
}

const WarriorFuryPreRaidEquipment = {
        "items": [
        {
          "id": 41386,
          "enchant": 3817,
          "gems": [
            41285,
            42702
          ]
        },
        {
          "id": 42645,
          "gems": [
            40003
          ]
        },
        {
          "id": 44195,
          "enchant": 3808
        },
        {
          "id": 37647,
          "enchant": 3605
        },
        {
          "id": 39606,
          "enchant": 3832,
          "gems": [
            40003,
            40034
          ]
        },
        {
          "id": 44203,
          "enchant": 3845,
          "gems": [
            0
          ]
        },
        {
          "id": 39609,
          "enchant": 3604,
          "gems": [
            40037,
            0
          ]
        },
        {
          "id": 40694,
          "gems": [
            42142,
            42142
          ]
        },
        {
          "id": 44205,
          "enchant": 3823
        },
        {
          "id": 44306,
          "enchant": 3606,
          "gems": [
            40088,
            42142
          ]
        },
        {
          "id": 42642,
          "gems": [
            40037
          ]
        },
        {
          "id": 37642
        },
        {
          "id": 42987
        },
        {
          "id": 40684
        },
        {
          "id": 37852,
          "enchant": 3789
        },
        {
          "id": 37852,
          "enchant": 3789
        },
        {
          "id": 37191
        }
      ]
}

const WarriorFuryP1Equipment = {
        "items": [
        {
          "id": 40528,
          "enchant": 3817,
          "gems": [
            41398,
            39996
          ]
        },
        {
          "id": 44664,
          "gems": [
            42142
          ]
        },
        {
          "id": 40530,
          "enchant": 3808,
          "gems": [
            40037
          ]
        },
        {
          "id": 40403,
          "enchant": 3605
        },
        {
          "id": 40539,
          "enchant": 3832,
          "gems": [
            40003
          ]
        },
        {
          "id": 40733,
          "enchant": 3845,
          "gems": [
            0
          ]
        },
        {
          "id": 40541,
          "enchant": 3604,
          "gems": [
            0
          ]
        },
        {
          "id": 40317,
          "gems": [
            42142
          ]
        },
        {
          "id": 40318,
          "enchant": 3823,
          "gems": [
            42702,
            40037
          ]
        },
        {
          "id": 40591,
          "enchant": 3606
        },
        {
          "id": 43993,
          "gems": [
            42142
          ]
        },
        {
          "id": 40474
        },
        {
          "id": 42987
        },
        {
          "id": 40256
        },
        {
          "id": 40384,
          "enchant": 3789
        },
        {
          "id": 40384,
          "enchant": 3789
        },
        {
          "id": 40385
        }
      ]
}

const WarriorFuryP2Equipment = {
        "items": [
        {
          "id": 46151,
          "enchant": 3817,
          "gems": [
            41398,
            39996
          ]
        },
        {
          "id": 45517,
          "gems": [
            39996
          ]
        },
        {
          "id": 46149,
          "enchant": 3808,
          "gems": [
            39996
          ]
        },
        {
          "id": 46032,
          "enchant": 3605,
          "gems": [
            39996,
            40038
          ]
        },
        {
          "id": 46146,
          "enchant": 3832,
          "gems": [
            39996,
            42702
          ]
        },
        {
          "id": 45611,
          "enchant": 3845,
          "gems": [
            40037,
            0
          ]
        },
        {
          "id": 46148,
          "enchant": 3604,
          "gems": [
            40058,
            0
          ]
        },
        {
          "id": 46095,
          "gems": [
            42154,
            42142,
            42142
          ]
        },
        {
          "id": 45536,
          "enchant": 3823,
          "gems": [
            39996,
            39996,
            39996
          ]
        },
        {
          "id": 40591,
          "enchant": 3606
        },
        {
          "id": 45608,
          "gems": [
            39996
          ]
        },
        {
          "id": 45534,
          "gems": [
            39996
          ]
        },
        {
          "id": 42987
        },
        {
          "id": 45931
        },
        {
          "id": 45516,
          "enchant": 3789,
          "gems": [
            39996,
            39996
          ]
        },
        {
          "id": 45516,
          "enchant": 3789,
          "gems": [
            39996,
            39996
          ]
        },
        {
          "id": 45296,
          "gems": [
            39996
          ]
        }
      ]
}

const DKUnholyP2Equipment = {
  "items": [
    {
      "id": 45472,
      "enchant": 3817,
      "gems": [
        41400,
        49110
      ]
    },
    {
      "id": 45459,
      "gems": [
        39996
      ]
    },
    {
      "id": 46117,
      "enchant": 3808,
      "gems": [
        39996
      ]
    },
    {
      "id": 45588,
      "enchant": 3831,
      "gems": [
        39996
      ]
    },
    {
      "id": 46111,
      "enchant": 3832,
      "gems": [
        42142,
        42142
      ]
    },
    {
      "id": 45663,
      "enchant": 3845,
      "gems": [
        42142,
        0
      ]
    },
    {
      "id": 45481,
      "enchant": 3604,
      "gems": [
        0
      ]
    },
    {
      "id": 45241,
      "gems": [
        39996,
        39996,
        39996
      ]
    },
    {
      "id": 45134,
      "enchant": 3823,
      "gems": [
        39996,
        39996,
        39996
      ]
    },
    {
      "id": 45599,
      "enchant": 1597,
      "gems": [
        39996,
        39996
      ]
    },
    {
      "id": 45534,
      "gems": [
        39996
      ]
    },
    {
      "id": 45250
    },
    {
      "id": 45609
    },
    {
      "id": 42987
    },
    {
      "id": 46097,
      "enchant": 3368,
      "gems": [
        39996
      ]
    },
    {
      "id": 46097,
      "enchant": 3790,
      "gems": [
        39996
      ]
    },
    {
      "id": 45254
    }
  ]
}

const DruidBalanceP1Equipment = {
        "items": [
        {
          "id": 40467,
          "enchant": 3820,
          "gems": [
            41285,
            42144
          ]
        },
        {
          "id": 44661,
          "gems": [
            40026
          ]
        },
        {
          "id": 40470,
          "enchant": 3810,
          "gems": [
            42144
          ]
        },
        {
          "id": 44005,
          "enchant": 3859,
          "gems": [
            40026
          ]
        },
        {
          "id": 40469,
          "enchant": 3832,
          "gems": [
            42144,
            39998
          ]
        },
        {
          "id": 44008,
          "enchant": 2332,
          "gems": [
            39998,
            0
          ]
        },
        {
          "id": 40466,
          "enchant": 3604,
          "gems": [
            39998,
            0
          ]
        },
        {
          "id": 40561,
          "enchant": 3601,
          "gems": [
            39998
          ]
        },
        {
          "id": 40560,
          "enchant": 3719
        },
        {
          "id": 40519,
          "enchant": 3606
        },
        {
          "id": 40399
        },
        {
          "id": 40080
        },
        {
          "id": 40255
        },
        {
          "id": 40432
        },
        {
          "id": 40395,
          "enchant": 3834
        },
        {
          "id": 40192
        },
        {
          "id": 40321
        }
      ]
}

const DruidBalancePreRaidEquipment = {
        "items": [
        {
          "id": 42554,
          "enchant": 3820,
          "gems": [
            41285,
            40049
          ]
        },
        {
          "id": 40680
        },
        {
          "id": 37673,
          "enchant": 3810,
          "gems": [
            42144
          ]
        },
        {
          "id": 41610,
          "enchant": 3859
        },
        {
          "id": 39547,
          "enchant": 3832,
          "gems": [
            42144,
            40026
          ]
        },
        {
          "id": 37884,
          "enchant": 2332,
          "gems": [
            0
          ]
        },
        {
          "id": 39544,
          "enchant": 3604,
          "gems": [
            42144,
            0
          ]
        },
        {
          "id": 40696,
          "enchant": 3601,
          "gems": [
            40014,
            39998
          ]
        },
        {
          "id": 37854,
          "enchant": 3719
        },
        {
          "id": 44202,
          "enchant": 3606,
          "gems": [
            39998
          ]
        },
        {
          "id": 40585
        },
        {
          "id": 43253,
          "gems": [
            40026
          ]
        },
        {
          "id": 37873
        },
        {
          "id": 40682
        },
        {
          "id": 45085,
          "enchant": 3834
        },
        {
          "id": 40698
        },
        {
          "id": 40712
        }
      ]
}

const HunterSurvivalPreRaidEquipment = {
        "items": [
        {
          "id": 42551,
          "enchant": 3817,
          "gems": [
            41398,
            42143
          ]
        },
        {
          "id": 40678
        },
        {
          "id": 37373,
          "enchant": 3808
        },
        {
          "id": 43406,
          "enchant": 3605
        },
        {
          "id": 39579,
          "enchant": 3832,
          "gems": [
            39997,
            49110
          ]
        },
        {
          "id": 37170,
          "enchant": 3845,
          "gems": [
            0
          ]
        },
        {
          "id": 39582,
          "enchant": 3604,
          "gems": [
            39997,
            0
          ]
        },
        {
          "id": 37407,
          "enchant": 3601,
          "gems": [
            42143
          ]
        },
        {
          "id": 37669,
          "enchant": 3823
        },
        {
          "id": 37167,
          "enchant": 3606,
          "gems": [
            42143,
            39997
          ]
        },
        {
          "id": 37685
        },
        {
          "id": 42642,
          "gems": [
            39997
          ]
        },
        {
          "id": 40684
        },
        {
          "id": 44253
        },
        {
          "id": 44249,
          "enchant": 3827
        },
        {},
        {
          "id": 37191,
          "enchant": 3608
        }
      ]
}

const HunterSurvivalP1Equipment = {
  "items": [
    {
      "id": 40543,
      "enchant": 3817,
      "gems": [
        41398,
        40044
      ]
    },
    {
      "id": 44664,
      "gems": [
        39997
      ]
    },
    {
      "id": 40507,
      "enchant": 3808,
      "gems": [
        39997
      ]
    },
    {
      "id": 40403,
      "enchant": 3605
    },
    {
      "id": 40503,
      "enchant": 3832,
      "gems": [
        42143,
        42143
      ]
    },
    {
      "id": 40282,
      "enchant": 3845,
      "gems": [
        39997,
        0
      ]
    },
    {
      "id": 40541,
      "enchant": 3604,
      "gems": [
        0
      ]
    },
    {
      "id": 39762,
      "gems": [
        40014
      ]
    },
    {
      "id": 40331,
      "enchant": 3823,
      "gems": [
        42143,
        42702
      ]
    },
    {
      "id": 40549,
      "enchant": 3606
    },
    {
      "id": 40074
    },
    {
      "id": 40474
    },
    {
      "id": 39257
    },
    {
      "id": 44253
    },
    {
      "id": 40388,
      "enchant": 3827
    },
    {},
    {
      "id": 40385,
      "enchant": 3608
    }
  ]
}

const MageFirePreRaidEquipment = {
        "items": [
        {
          "id": 42553,
          "enchant": 3820,
          "gems": [
            41285,
            40014
          ]
        },
        {
          "id": 39472
        },
        {
          "id": 34210,
          "enchant": 3810,
          "gems": [
            40049,
            40014
          ]
        },
        {
          "id": 41610,
          "enchant": 3859
        },
        {
          "id": 39492,
          "enchant": 3832,
          "gems": [
            40049,
            40014
          ]
        },
        {
          "id": 37361,
          "enchant": 2332,
          "gems": [
            0
          ]
        },
        {
          "id": 39495,
          "enchant": 3604,
          "gems": [
            40049,
            0
          ]
        },
        {
          "id": 40696,
          "gems": [
            40014,
            40026
          ]
        },
        {
          "id": 37854,
          "enchant": 3719
        },
        {
          "id": 44202,
          "enchant": 3826,
          "gems": [
            40026
          ]
        },
        {
          "id": 40585
        },
        {
          "id": 42644,
          "gems": [
            40049
          ]
        },
        {
          "id": 37873
        },
        {
          "id": 40682
        },
        {
          "id": 45085,
          "enchant": 3834
        },
        {
          "id": 40698
        },
        {
          "id": 37177
        }
      ]
}

const MageFireP1Equipment = {
     "items": [
        {
          "id": 40416,
          "enchant": 3820,
          "gems": [
            41285,
            39998
          ]
        },
        {
          "id": 44661,
          "gems": [
            40026
          ]
        },
        {
          "id": 40419,
          "enchant": 3810,
          "gems": [
            40049
          ]
        },
        {
          "id": 44005,
          "enchant": 3722,
          "gems": [
            40026
          ]
        },
        {
          "id": 40418,
          "enchant": 3832,
          "gems": [
            39998,
            40048
          ]
        },
        {
          "id": 44008,
          "enchant": 2332,
          "gems": [
            39998,
            0
          ]
        },
        {
          "id": 40415,
          "enchant": 3604,
          "gems": [
            39998,
            0
          ]
        },
        {
          "id": 40301,
          "gems": [
            39998
          ]
        },
        {
          "id": 40560,
          "enchant": 3719
        },
        {
          "id": 40246,
          "enchant": 3606
        },
        {
          "id": 40399
        },
        {
          "id": 40719
        },
        {
          "id": 40255
        },
        {
          "id": 40432
        },
        {
          "id": 40396,
          "enchant": 3834
        },
        {
          "id": 40273
        },
        {
          "id": 39712
        }
      ]
}

const MageFireP2Equipment = {
      "items": [
        {
          "id": 46129,
          "enchant": 3820,
          "gems": [
            41285,
            39998
          ]
        },
        {
          "id": 45133,
          "gems": [
            40051
          ]
        },
        {
          "id": 46134,
          "enchant": 3810,
          "gems": [
            40051
          ]
        },
        {
          "id": 45242,
          "enchant": 3722,
          "gems": [
            40051
          ]
        },
        {
          "id": 46130,
          "enchant": 3832,
          "gems": [
            39998,
            39998
          ]
        },
        {
          "id": 45275,
          "enchant": 2332,
          "gems": [
            39998
          ]
        },
        {
          "id": 45665,
          "enchant": 3604,
          "gems": [
            40026,
            40051,
            0
          ]
        },
        {
          "id": 45619,
          "gems": [
            40051,
            40051,
            39998
          ]
        },
        {
          "id": 46133,
          "enchant": 3719,
          "gems": [
            39998,
            39998
          ]
        },
        {
          "id": 45537,
          "enchant": 3606,
          "gems": [
            39998,
            40026
          ]
        },
        {
          "id": 46046,
          "gems": [
            40051
          ]
        },
        {
          "id": 45495,
          "gems": [
            39998
          ]
        },
        {
          "id": 45308
        },
        {
          "id": 45518
        },
        {
          "id": 45620,
          "enchant": 3790,
          "gems": [
            39998
          ]
        },
        {
          "id": 45617
        },
        {
          "id": 39712
        }
      ]
}

const WarlockDemonologyPreRaidEquipment = {
        "items": [
        {
          "id": 44910,
          "enchant": 3820,
          "gems": [
            41285,
            39998
          ]
        },
        {
          "id": 42647,
          "gems": [
            40049
          ]
        },
        {
          "id": 34210,
          "enchant": 3810,
          "gems": [
            39998,
            40014
          ]
        },
        {
          "id": 41610,
          "enchant": 3722
        },
        {
          "id": 39497,
          "enchant": 3832,
          "gems": [
            39998,
            40014
          ]
        },
        {
          "id": 37361,
          "enchant": 2332,
          "gems": [
            0
          ]
        },
        {
          "id": 42113,
          "enchant": 3604,
          "gems": [
            0
          ]
        },
        {
          "id": 40696,
          "gems": [
            40014,
            39998
          ]
        },
        {
          "id": 34181,
          "enchant": 3719,
          "gems": [
            39998,
            39998,
            40014
          ]
        },
        {
          "id": 44202,
          "enchant": 3606,
          "gems": [
            40026
          ]
        },
        {
          "id": 43253,
          "gems": [
            40026
          ]
        },
        {
          "id": 37694
        },
        {
          "id": 40682
        },
        {
          "id": 37873
        },
        {
          "id": 45085,
          "enchant": 3834
        },
        {
          "id": 40698
        },
        {
          "id": 34348,
          "gems": [
            39998
          ]
        }
      ]
}

const WarlockDemonologyP1Equipment = {
      "items": [
        {
          "id": 40421,
          "enchant": 3820,
          "gems": [
            41285,
            40014
          ]
        },
        {
          "id": 44661,
          "gems": [
            40099
          ]
        },
        {
          "id": 40424,
          "enchant": 3810,
          "gems": [
            40049
          ]
        },
        {
          "id": 44005,
          "enchant": 3722,
          "gems": [
            40099
          ]
        },
        {
          "id": 40423,
          "enchant": 3832,
          "gems": [
            40049,
            40014
          ]
        },
        {
          "id": 44008,
          "enchant": 2332,
          "gems": [
            39998,
            0
          ]
        },
        {
          "id": 40420,
          "enchant": 3604,
          "gems": [
            39998,
            0
          ]
        },
        {
          "id": 40561,
          "gems": [
            40014
          ]
        },
        {
          "id": 40560,
          "enchant": 3719
        },
        {
          "id": 40558,
          "enchant": 3606
        },
        {
          "id": 40399
        },
        {
          "id": 40719
        },
        {
          "id": 40432
        },
        {
          "id": 40255
        },
        {
          "id": 40396,
          "enchant": 3834
        },
        {
          "id": 39766
        },
        {
          "id": 39712
        }
      ]
}

const WarlockDemonologyP2Equipment = {
        "items": [
        {
          "id": 45497,
          "enchant": 3820,
          "gems": [
            41285,
            40049
          ]
        },
        {
          "id": 45243,
          "gems": [
            40049
          ]
        },
        {
          "id": 46068,
          "enchant": 3810,
          "gems": [
            40049,
            40049
          ]
        },
        {
          "id": 45618,
          "enchant": 3722,
          "gems": [
            40026
          ]
        },
        {
          "id": 46137,
          "enchant": 3832,
          "gems": [
            40049,
            40014
          ]
        },
        {
          "id": 45446,
          "enchant": 2332,
          "gems": [
            39998,
            0
          ]
        },
        {
          "id": 45520,
          "enchant": 3604,
          "gems": [
            40049,
            40049,
            0
          ]
        },
        {
          "id": 45619,
          "gems": [
            40049,
            40049,
            39998
          ]
        },
        {
          "id": 46139,
          "enchant": 3719,
          "gems": [
            40026,
            40014
          ]
        },
        {
          "id": 45135,
          "enchant": 3606,
          "gems": [
            39998,
            40014
          ]
        },
        {
          "id": 45495,
          "gems": [
            40026
          ]
        },
        {
          "id": 45297,
          "gems": [
            40049
          ]
        },
        {
          "id": 40432
        },
        {
          "id": 40255
        },
        {
          "id": 45620,
          "enchant": 3834,
          "gems": [
            40026
          ]
        },
        {
          "id": 45271
        },
        {
          "id": 39712
        }
      ]
}

const  HunterSurvivalP2Equipment = {
  "items": [
    {
      "id": 45610,
      "enchant": 3817,
      "gems": [
        41398,
        42702
      ]
    },
    {
      "id": 45517,
      "gems": [
        39997
      ]
    },
    {
      "id": 45300,
      "enchant": 3808,
      "gems": [
        39997
      ]
    },
    {
      "id": 46032,
      "enchant": 3605,
      "gems": [
        42143,
        40043
      ]
    },
    {
      "id": 45473,
      "enchant": 3832,
      "gems": [
        39997,
        39997,
        42143
      ]
    },
    {
      "id": 45108,
      "enchant": 3845,
      "gems": [
        0
      ]
    },
    {
      "id": 45444,
      "enchant": 3604,
      "gems": [
        42143,
        39997,
        0
      ]
    },
    {
      "id": 45467,
      "gems": [
        39997
      ]
    },
    {
      "id": 45536,
      "enchant": 3823,
      "gems": [
        39997,
        39997,
        39997
      ]
    },
    {
      "id": 45244,
      "enchant": 3606,
      "gems": [
        39997,
        39997
      ]
    },
    {
      "id": 45608,
      "gems": [
        39997
      ]
    },
    {
      "id": 45456,
      "gems": [
        39997
      ]
    },
    {
      "id": 44253
    },
    {
      "id": 46038
    },
    {
      "id": 46033,
      "enchant": 3827,
      "gems": [
        39997,
        39997
      ]
    },
    {},
    {
      "id": 45570,
      "enchant": 3608
    }
  ]
}

const DruidBalanceP2Equipment = {
        "items": [
        {
          "id": 46191,
          "enchant": 3820,
          "gems": [
            41285,
            40049
          ]
        },
        {
          "id": 45133,
          "gems": [
            40051
          ]
        },
        {
          "id": 46196,
          "enchant": 3810,
          "gems": [
            40026
          ]
        },
        {
          "id": 45242,
          "enchant": 3859,
          "gems": [
            40051
          ]
        },
        {
          "id": 46194,
          "enchant": 3832,
          "gems": [
            42144,
            40051
          ]
        },
        {
          "id": 45446,
          "enchant": 2332,
          "gems": [
            39998,
            0
          ]
        },
        {
          "id": 45665,
          "enchant": 3604,
          "gems": [
            40026,
            40051,
            0
          ]
        },
        {
          "id": 45619,
          "enchant": 3601,
          "gems": [
            40014,
            40051,
            42144
          ]
        },
        {
          "id": 46192,
          "enchant": 3719,
          "gems": [
            40051,
            40026
          ]
        },
        {
          "id": 45537,
          "enchant": 3606,
          "gems": [
            42144,
            40026
          ]
        },
        {
          "id": 46046,
          "gems": [
            40051
          ]
        },
        {
          "id": 40399
        },
        {
          "id": 45518
        },
        {
          "id": 45308
        },
        {
          "id": 45612,
          "enchant": 3834,
          "gems": [
            40026
          ]
        },
        {
          "id": 45617
        },
        {
          "id": 40321
        }
      ]
}

const PaladinRetPreRaidEquipment = {
        "items": [
        {
          "id": 41386,
          "enchant": 3817,
          "gems": [
            41398,
            40022
          ]
        },
        {
          "id": 40678
        },
        {
          "id": 34388,
          "enchant": 3875,
          "gems": [
            39996,
            40037
          ]
        },
        {
          "id": 37647,
          "enchant": 3605
        },
        {
          "id": 39633,
          "enchant": 3832,
          "gems": [
            39996,
            40038
          ]
        },
        {
          "id": 41355,
          "enchant": 3845,
          "gems": [
            0
          ]
        },
        {
          "id": 39634,
          "enchant": 3604,
          "gems": [
            39996,
            0
          ]
        },
        {
          "id": 40694,
          "gems": [
            39996,
            39996
          ]
        },
        {
          "id": 37193,
          "enchant": 3326,
          "gems": [
            39996,
            39996
          ]
        },
        {
          "id": 44297,
          "enchant": 3606
        },
        {
          "id": 40586
        },
        {
          "id": 37685
        },
        {
          "id": 42987
        },
        {
          "id": 40684
        },
        {
          "id": 37852,
          "enchant": 3789
        },
        {},
        {
          "id": 37574
        }
      ]
}
const PaladinRetP1Equipment = {
        "items": [
        {
          "id": 40576,
          "enchant": 3817,
          "gems": [
            41398,
            40037
          ]
        },
        {
          "id": 44664,
          "gems": [
            42142
          ]
        },
        {
          "id": 40578,
          "enchant": 3808,
          "gems": [
            49110
          ]
        },
        {
          "id": 40403,
          "enchant": 3605
        },
        {
          "id": 40574,
          "enchant": 3832,
          "gems": [
            42142,
            39996
          ]
        },
        {
          "id": 40186,
          "enchant": 3845,
          "gems": [
            0
          ]
        },
        {
          "id": 40541,
          "enchant": 3604,
          "gems": [
            0
          ]
        },
        {
          "id": 40205,
          "gems": [
            39996
          ]
        },
        {
          "id": 40577,
          "enchant": 3823,
          "gems": [
            42142,
            40038
          ]
        },
        {
          "id": 39701,
          "enchant": 3606
        },
        {
          "id": 40075
        },
        {
          "id": 40474
        },
        {
          "id": 42987
        },
        {
          "id": 40431
        },
        {
          "id": 40384,
          "enchant": 3789
        },
        {},
        {
          "id": 42852
        }
      ]
}
const PaladinRetP2Equipment = {
        "items": [
        {
          "id": 46156,
          "enchant": 3817,
          "gems": [
            41398,
            40003
          ]
        },
        {
          "id": 45517,
          "gems": [
            39996
          ]
        },
        {
          "id": 46152,
          "enchant": 3808,
          "gems": [
            40059
          ]
        },
        {
          "id": 45461,
          "enchant": 3605,
          "gems": [
            39996
          ]
        },
        {
          "id": 46154,
          "enchant": 3832,
          "gems": [
            39996,
            39996
          ]
        },
        {
          "id": 45611,
          "enchant": 3845,
          "gems": [
            39996,
            0
          ]
        },
        {
          "id": 46155,
          "enchant": 3604,
          "gems": [
            39996,
            0
          ]
        },
        {
          "id": 46095,
          "gems": [
            39996,
            39996,
            39996
          ]
        },
        {
          "id": 45134,
          "enchant": 3823,
          "gems": [
            42142,
            42142,
            42142
          ]
        },
        {
          "id": 45599,
          "enchant": 3606,
          "gems": [
            40003,
            49110
          ]
        },
        {
          "id": 45456,
          "gems": [
            39996
          ]
        },
        {
          "id": 45525
        },
        {
          "id": 45609
        },
        {
          "id": 45522
        },
        {
          "id": 45533,
          "enchant": 3789,
          "gems": [
            39996,
            39996
          ]
        },
        {},
        {
          "id": 42852
        }
      ]
}

const ShamanElementalPreRaidEquipment = {
        "items": [
        {
          "id": 37180,
          "enchant": 3820,
          "gems": [
            41285,
            39998
          ]
        },
        {
          "id": 37595
        },
        {
          "id": 37673,
          "enchant": 3810,
          "gems": [
            39998
          ]
        },
        {
          "id": 41610,
          "enchant": 3722
        },
        {
          "id": 39592,
          "enchant": 3832,
          "gems": [
            39998,
            40025
          ]
        },
        {
          "id": 37788,
          "enchant": 2332,
          "gems": [
            0
          ]
        },
        {
          "id": 39593,
          "enchant": 3246,
          "gems": [
            40051,
            0
          ]
        },
        {
          "id": 40696,
          "gems": [
            40049,
            39998
          ]
        },
        {
          "id": 37791,
          "enchant": 3719
        },
        {
          "id": 44202,
          "enchant": 3826,
          "gems": [
            39998
          ]
        },
        {
          "id": 43253,
          "gems": [
            40027
          ]
        },
        {
          "id": 37694
        },
        {
          "id": 40682
        },
        {
          "id": 37873
        },
        {
          "id": 41384,
          "enchant": 3834
        },
        {
          "id": 40698
        },
        {
          "id": 40708
        }
      ]
}
const ShamanElementalP1Equipment = {
      "items": [
        {
          "id": 40516,
          "enchant": 3820,
          "gems": [
            41285,
            40027
          ]
        },
        {
          "id": 44661,
          "gems": [
            39998
          ]
        },
        {
          "id": 40286,
          "enchant": 3810
        },
        {
          "id": 44005,
          "enchant": 3722,
          "gems": [
            40027
          ]
        },
        {
          "id": 40514,
          "enchant": 3832,
          "gems": [
            39998,
            39998
          ]
        },
        {
          "id": 40324,
          "enchant": 2332,
          "gems": [
            39998,
            0
          ]
        },
        {
          "id": 40302,
          "enchant": 3246,
          "gems": [
            0
          ]
        },
        {
          "id": 40301,
          "gems": [
            40014
          ]
        },
        {
          "id": 40560,
          "enchant": 3721
        },
        {
          "id": 40519,
          "enchant": 3826
        },
        {
          "id": 37694
        },
        {
          "id": 40399
        },
        {
          "id": 40432
        },
        {
          "id": 40255
        },
        {
          "id": 40395,
          "enchant": 3834
        },
        {
          "id": 40401,
          "enchant": 1128
        },
        {
          "id": 40267
        }
      ]
}
const ShamanElementalP2Equipment = {
        "items": [
        {
          "id": 46209,
          "enchant": 3820,
          "gems": [
            41285,
            40048
          ]
        },
        {
          "id": 45133,
          "gems": [
            40048
          ]
        },
        {
          "id": 46211,
          "enchant": 3810,
          "gems": [
            39998
          ]
        },
        {
          "id": 44005,
          "enchant": 3722,
          "gems": [
            40027
          ]
        },
        {
          "id": 46206,
          "enchant": 3832,
          "gems": [
            39998,
            39998
          ]
        },
        {
          "id": 45460,
          "enchant": 2332,
          "gems": [
            39998,
            0
          ]
        },
        {
          "id": 45665,
          "enchant": 3246,
          "gems": [
            39998,
            39998,
            0
          ]
        },
        {
          "id": 45557,
          "gems": [
            39998,
            39998,
            39998
          ]
        },
        {
          "id": 46210,
          "enchant": 3721,
          "gems": [
            39998,
            39998
          ]
        },
        {
          "id": 45537,
          "enchant": 3826,
          "gems": [
            39998,
            39998
          ]
        },
        {
          "id": 46046,
          "gems": [
            40049
          ]
        },
        {
          "id": 40399
        },
        {
          "id": 40432
        },
        {
          "id": 45518
        },
        {
          "id": 46035,
          "enchant": 3834,
          "gems": [
            40048
          ]
        },
        {
          "id": 45470,
          "enchant": 1128,
          "gems": [
            40027
          ]
        },
        {
          "id": 40267
        }
      ]
}

const PriestShadowPreRaidEquipment = {
        "items": [
        {
          "id": 42553,
          "enchant": 3820,
          "gems": [
            41285,
            40049
          ]
        },
        {
          "id": 40680
        },
        {
          "id": 34210,
          "enchant": 3810,
          "gems": [
            39998,
            40026
          ]
        },
        {
          "id": 41610,
          "enchant": 3722
        },
        {
          "id": 43792,
          "enchant": 1144,
          "gems": [
            39998,
            40051
          ]
        },
        {
          "id": 37361,
          "enchant": 2332,
          "gems": [
            0
          ]
        },
        {
          "id": 39530,
          "enchant": 3604,
          "gems": [
            40049,
            0
          ]
        },
        {
          "id": 40696,
          "gems": [
            40049,
            39998
          ]
        },
        {
          "id": 37854,
          "enchant": 3719
        },
        {
          "id": 44202,
          "enchant": 3826,
          "gems": [
            40026
          ]
        },
        {
          "id": 40585
        },
        {
          "id": 37694
        },
        {
          "id": 37835
        },
        {
          "id": 37873
        },
        {
          "id": 41384,
          "enchant": 3834
        },
        {
          "id": 40698
        },
        {
          "id": 37177
        }
      ]
}

const PriestShadowP1Equipment = {      
  "items": [
    {
      "id": 40562,
      "enchant": 3820,
      "gems": [
        41285,
        39998
      ]
    },
    {
      "id": 44661,
      "gems": [
        40026
      ]
    },
    {
      "id": 40459,
      "enchant": 3810,
      "gems": [
        39998
      ]
    },
    {
      "id": 44005,
      "enchant": 3722,
      "gems": [
        40026
      ]
    },
    {
      "id": 44002,
      "enchant": 3832,
      "gems": [
        39998,
        39998
      ]
    },
    {
      "id": 44008,
      "enchant": 2332,
      "gems": [
        39998,
        0
      ]
    },
    {
      "id": 40454,
      "enchant": 3604,
      "gems": [
        40049,
        0
      ]
    },
    {
      "id": 40561,
      "gems": [
        39998
      ]
    },
    {
      "id": 40560,
      "enchant": 3719
    },
    {
      "id": 40558,
      "enchant": 3606
    },
    {
      "id": 40399
    },
    {
      "id": 40719
    },
    {
      "id": 40255
    },
    {},
    {
      "id": 40395,
      "enchant": 3834
    },
    {
      "id": 40273
    },
    {
      "id": 39712
    }
  ]
}

const PriestShadowP2Equipment = {
  "items": [
    {
      "id": 46172,
      "enchant": 3820,
      "gems": [
        41285,
        45883
      ]
    },
    {
      "id": 45133,
      "gems": [
        40051
      ]
    },
    {
      "id": 46165,
      "enchant": 3810,
      "gems": [
        39998
      ]
    },
    {
      "id": 45618,
      "enchant": 3722,
      "gems": [
        39998
      ]
    },
    {
      "id": 46168,
      "enchant": 3832,
      "gems": [
        39998,
        39998
      ]
    },
    {
      "id": 45446,
      "enchant": 2332,
      "gems": [
        39998,
        0
      ]
    },
    {
      "id": 45665,
      "enchant": 3604,
      "gems": [
        40026,
        40051,
        0
      ]
    },
    {
      "id": 45557,
      "gems": [
        40026,
        39998,
        40049
      ]
    },
    {
      "id": 46170,
      "enchant": 3719,
      "gems": [
        39998,
        39998
      ]
    },
    {
      "id": 45135,
      "enchant": 3606,
      "gems": [
        39998,
        39998
      ]
    },
    {
      "id": 46046,
      "gems": [
        39998
      ]
    },
    {
      "id": 45495,
      "gems": [
        39998
      ]
    },
    {
      "id": 45518
    },
    {
      "id": 45466
    },
    {
      "id": 45620,
      "enchant": 3834,
      "gems": [
        40026
      ]
    },
    {
      "id": 45617
    },
    {
      "id": 45294,
      "gems": [
        39998
      ]
    }
  ]
}

const WarriorArmsPreRaidEquipment = {
        "items": [
        {
          "id": 41386,
          "enchant": 3817,
          "gems": [
            41285,
            42702
          ]
        },
        {
          "id": 42645,
          "gems": [
            40002
          ]
        },
        {
          "id": 44195,
          "enchant": 3808
        },
        {
          "id": 37647,
          "enchant": 3605
        },
        {
          "id": 39606,
          "enchant": 3832,
          "gems": [
            40002,
            40002
          ]
        },
        {
          "id": 41355,
          "enchant": 3845,
          "gems": [
            0
          ]
        },
        {
          "id": 39609,
          "enchant": 3604,
          "gems": [
            40037,
            0
          ]
        },
        {
          "id": 40694,
          "gems": [
            42149,
            42149
          ]
        },
        {
          "id": 37193,
          "enchant": 3823,
          "gems": [
            40002,
            40037
          ]
        },
        {
          "id": 44306,
          "enchant": 3606,
          "gems": [
            40086,
            40002
          ]
        },
        {
          "id": 42642,
          "gems": [
            42149
          ]
        },
        {
          "id": 37642
        },
        {
          "id": 42987
        },
        {
          "id": 40684
        },
        {
          "id": 37852,
          "enchant": 3789
        },
        {},
        {
          "id": 37191
        }
      ]
}

const WarriorArmsP1Equipment = {
        "items": [
        {
          "id": 40528,
          "enchant": 3817,
          "gems": [
            41398,
            42153
          ]
        },
        {
          "id": 44664,
          "gems": [
            39996
          ]
        },
        {
          "id": 40530,
          "enchant": 3808,
          "gems": [
            40038
          ]
        },
        {
          "id": 40403,
          "enchant": 3605
        },
        {
          "id": 40539,
          "enchant": 3832,
          "gems": [
            42153
          ]
        },
        {
          "id": 40330,
          "enchant": 3845,
          "gems": [
            40002,
            0
          ]
        },
        {
          "id": 40541,
          "enchant": 3604,
          "gems": [
            0
          ]
        },
        {
          "id": 40205,
          "gems": [
            42153
          ]
        },
        {
          "id": 40318,
          "enchant": 3823,
          "gems": [
            49110,
            40038
          ]
        },
        {
          "id": 40591,
          "enchant": 3606
        },
        {
          "id": 43993,
          "gems": [
            40002
          ]
        },
        {
          "id": 40474
        },
        {
          "id": 42987
        },
        {
          "id": 40256
        },
        {
          "id": 40384,
          "enchant": 3789
        },
        {},
        {
          "id": 40385
        }
      ]
}

const WarriorArmsP2Equipment = {
  "items": [
    {
      "id": 46151,
      "enchant": 3817,
      "gems": [
        41398,
        42153
      ]
    },
    {
      "id": 45459,
      "gems": [
        40002
      ]
    },
    {
      "id": 46149,
      "enchant": 3808,
      "gems": [
        42153
      ]
    },
    {
      "id": 46032,
      "enchant": 3605,
      "gems": [
        39996,
        40037
      ]
    },
    {
      "id": 46146,
      "enchant": 3832,
      "gems": [
        42153,
        39996
      ]
    },
    {
      "id": 45663,
      "enchant": 3845,
      "gems": [
        39996,
        0
      ]
    },
    {
      "id": 46148,
      "enchant": 3604,
      "gems": [
        40037,
        0
      ]
    },
    {
      "id": 45241,
      "gems": [
        49110,
        40037,
        40002
      ]
    },
    {
      "id": 45536,
      "enchant": 3823,
      "gems": [
        39996,
        39996,
        39996
      ]
    },
    {
      "id": 45599,
      "enchant": 3606,
      "gems": [
        40002,
        40002
      ]
    },
    {
      "id": 45608,
      "gems": [
        40002
      ]
    },
    {
      "id": 46322,
      "gems": [
        40002
      ]
    },
    {
      "id": 46038
    },
    {
      "id": 45931
    },
    {
      "id": 45533,
      "enchant": 3789,
      "gems": [
        39996,
        39996
      ]
    },
    {},
    {
      "id": 45296,
      "gems": [
        40002
      ]
    }
  ]
}

const WarriorArmsGlyphs = {
  major1: 43423,
  major2: 43421,
  major3: 43416,
  minor1: 43399,
  minor2: 49084,
  minor3: 43397
}

const PriestShadowGlyphs = {
  major1: 42407,
  major2: 42415,
  major3: 42414,
  minor1: 43371,
  minor2: 43372,
  minor3: 43374
}

const ShamanElementalGlyphs = {
  major1: 41524,
  major2: 45776,
  major3: 41536,
  minor1: 44923,
  minor2: 43386,
  minor3: 43725
}

const PaladinRetGlyphs = {
  major1: 43869,
  major2: 41092,
  major3: 41099,
  minor1: 43368,
  minor2: 43367,
  minor3: 43365
}

const DruidBalanceGlyphs = {
  major1: 44928,
  major2: 40919,
  major3: 40921,
  minor1: 44922,
  minor2: 43331,
  minor3: 43335
}

const WarriorFuryGlyphs = {
  major1: 43432,
  major2: 43418,
  major3: 43423,
  minor1: 43395,
  minor2: 43396,
  minor3: 43397
}

const WarlockAfflictionGlyphs = {
  major1: 50077,
  major2: 45785,
  major3: 45779,
  minor1: 43394,
  minor2: 43390,
  minor3: 43393
}

const WarlockDemonologyGlyphs = {
  major1: 45785,
  major2: 50077,
  major3: 42459,
  minor1: 43394,
  minor2: 43390,
  minor3: 43393
}

const DKFrostGlyphs = {
    major1: 43547,
    major2: 43543,
    major3: 45805,
    minor1: 43544,
    minor2: 43672,
    minor3: 43673
}

const DKUnholyGlyphs = {
    major1: 43549,
    major2: 45804,
    major3: 43542,
    minor1: 43544,
    minor2: 43672,
    minor3: 43673
}

const DruidFeralGlyphs = {
    major1: 40902,
    major2: 45604,
    major3: 40901,
    minor1: 43674,
    minor2: 43335,
    minor3: 43331
}

const HunterMMGlyphs = {
    major1: 42912,
    major2: 45733,
    major3: 45625,
    minor1: 43351,
    minor2: 43338,
    minor3: 43350
}

const HunterMMGlyphsP2 = {
    major1: 42912,
    major2: 45733,
    major3: 42914,
    minor1: 43351,
    minor2: 43338,
    minor3: 43350
}

const HunterSurvivalGlyphs = {
  major1: 45733,
  major2: 45731,
  major3: 45732,
  minor1: 43351,
  minor2: 43338,
  minor3: 43350
}

const MageArcaneGlyphs = {
    major1: 44955,
    major2: 42735,
    major3: 42751,
    minor1: 43364,
    minor2: 43360,
    minor3: 44920
}

const MageFireGlyphs = {
  major1: 42739,
  major2: 42751,
  major3: 45737,
  minor1: 43364,
  minor2: 43360,
  minor3: 44920
}

const ShamanEnhanceGlyphs = {
  major1: 41539,
  major2: 41532,
  major3: 45771
}

const DruidBalanceTalents = {
  starlightWrath: 5,
  moonglow: 3,
  naturesMajesty: 2,
  naturesGrace: 3,
  naturesSplendor: true,
  naturesReach: 1,
  vengeance: 5,
  celestialFocus: 3,
  lunarGuidance: 3,
  insectSwarm: true,
  improvedInsectSwarm: 3,
  moonfury: 3,
  balanceOfPower: 2,
  moonkinForm: true,
  improvedMoonkinForm: 3,
  improvedFaerieFire: 3,
  wrathOfCenarius: 5,
  eclipse: 3,
  typhoon: true,
  forceOfNature: true,
  galeWinds: 2,
  earthAndMoon: 3,
  starfall: true,

  improvedMarkOfTheWild: 2,
  furor: 5,
  omenOfClarity: true,
  masterShapeshifter: 2,
}

const DruidFeralTalents = {
  ferocity: 5,
  feralInstinct: 3,
  savageFury: 2,
  feralSwiftness: 2,
  survivalInstincts: true,
  sharpenedClaws: 3,
  shreddingAttacks: 2,
  predatoryStrikes: 3,
  primalFury: 2,
  primalPrecision: 2,
  feralCharge: true,
  heartOfTheWild: 5,
  survivalOfTheFittest: 3,
  leaderOfThePack: true,
  improvedLeaderOfThePack: 2,
  protectorOfThePack: 2,
  predatoryInstincts: 3,
  kingOfTheJungle: 3,
  mangle: true,
  rendAndTear: 5,
  primalGore: true,
  berserk: true,
  
  improvedMarkOfTheWild: 2,
  furor: 5,
  naturalist: 5,
  naturalShapeshifter: 3,
  omenOfClarity: true,
  masterShapeshifter: 2
}

const HunterMMTalentsP0 = {
  improvedAspectOfTheHawk: 5,
  focusedFire: 2,

  focusedAim: 3,
  lethalShots: 5,
  carefulAim: 3,
  improvedHuntersMark: 3,
  mortalShots: 5,
  goForTheThroat: 1,
  aimedShot: true,
  improvedStings: 3,
  readiness: true,
  barrage: 3,
  combatExperience: 2,
  rangedWeaponSpecialization: 3,
  piercingShots: 3,
  improvedBarrage: 3,
  masterMarksman: 5,
  wildQuiver: 3,
  silencingShot: true,
  markedForDeath: 5,
  chimeraShot: true,

  improvedTracking: 5,
  trapMastery: 3,
  survivalInstincts: 2
}

const HunterMMTalentsP2 = {
  improvedAspectOfTheHawk: 5,
  focusedFire: 2,

  focusedAim: 1,
  lethalShots: 5,
  carefulAim: 3,
  improvedHuntersMark: 3,
  mortalShots: 5,
  goForTheThroat: 1,
  aimedShot: true,
  improvedStings: 3,
  readiness: true,
  barrage: 3,
  combatExperience: 2,
  rangedWeaponSpecialization: 3,
  piercingShots: 3,
  improvedBarrage: 3,
  masterMarksman: 5,
  rapidRecuperation: 1,
  wildQuiver: 3,
  silencingShot: true,
  improvedSteadyShot: 1,
  markedForDeath: 5,
  chimeraShot: true,

  improvedTracking: 5,
  trapMastery: 3,
  survivalInstincts: 2
}

const HunterSurvivalTalents = {
  improvedAspectOfTheHawk: 3,
  
  focusedAim: 3,
  lethalShots: 5,
  carefulAim: 3,
  mortalShots: 5,
  goForTheThroat: 1,

  improvedTracking: 5,
  trapMastery: 3,
  survivalInstincts: 2,
  survivalist: 5,
  tNT: 3,
  lockAndLoad: 3,
  hunterVsWild: 3,
  killerInstinct: 3,
  lightningReflexes: 5,
  resourcefulness: 3,
  exposeWeakness: 2,
  wyvernSting: true,
  masterTactician: 5,
  noxiousStings: 3,
  blackArrow: true,
  sniperTraining: 3,
  explosiveShot: true
}

const HunterSurvivalTalentsP1 = {
  improvedAspectOfTheHawk: 5,
  focusedFire: 1,
  
  lethalShots: 5,
  carefulAim: 3,
  mortalShots: 5,
  goForTheThroat: 1,

  improvedTracking: 5,
  trapMastery: 3,
  survivalInstincts: 2,
  survivalist: 5,
  tNT: 3,
  lockAndLoad: 3,
  hunterVsWild: 3,
  killerInstinct: 3,
  lightningReflexes: 5,
  resourcefulness: 3,
  exposeWeakness: 2,
  wyvernSting: true,
  masterTactician: 5,
  noxiousStings: 3,
  blackArrow: true,
  sniperTraining: 3,
  explosiveShot: true
}

const HunterSurvivalTalentsP2 = {
  improvedAspectOfTheHawk: 5,
  focusedFire: 1,
  
  lethalShots: 5,
  carefulAim: 3,
  mortalShots: 5,
  goForTheThroat: 1,

  improvedTracking: 5,
  trapMastery: 3,
  survivalInstincts: 2,
  survivalist: 5,
  tNT: 3,
  lockAndLoad: 3,
  hunterVsWild: 3,
  killerInstinct: 3,
  lightningReflexes: 5,
  resourcefulness: 3,
  exposeWeakness: 1,
  wyvernSting: true,
  thrillOfTheHunt: 1,
  masterTactician: 5,
  noxiousStings: 3,
  blackArrow: true,
  sniperTraining: 3,
  explosiveShot: true
}

const WarlockAfflictionTalents = {
  improvedCurseOfAgony: 2,
  suppression: 3,
  improvedCorruption: 5,
  soulSiphon: 2,
  felConcentration: 3,
  nightfall: 2,
  empoweredCorruption: 3,
  shadowEmbrace: 5,
  siphonLife: true,
  improvedFelhunter: 2,
  shadowMastery: 5,
  eradication: 3,
  contagion: 5,
  malediction: 3,
  deathsEmbrace: 3,
  unstableAffliction: true, 
  pandemic: true,
  everlastingAffliction: 5,
  haunt: true,

  improvedShadowBolt: 5,
  bane: 5,
  ruin: 5,
  intensity: 1,
}

const WarlockDemonologyTalents = {
  improvedHealthstone: 2,
  demonicEmbrace: 3,
  felSynergy: 2,
  demonicBrutality: 3,
  felVitality: 3,
  soulLink: true,
  demonicAegis: 3,
  unholyPower: 5,
  manaFeed: true,
  masterConjuror: 2,
  masterDemonologist: 5,
  moltenCore: 3,
  demonicEmpowerment: true,
  demonicKnowledge: 3,
  demonicTactics: 5,
  decimation: 2,
  summonFelguard: true,
  nemesis: 3,
  demonicPact: 5,
  metamorphosis: true,

  improvedShadowBolt: 5,
  bane: 5,
  ruin: 5,
  intensity: 2,
}

const MageFireTalents = {
  arcaneSubtlety: 2,
  arcaneFocus: 3,
  arcaneConcentration: 5,
  spellImpact: 4,
  studentOfTheMind: 1,
  focusMagic: true,
  tormentTheWeak: 3,
  improvedFireball: 5,
  ignite: 5,
  worldInFlames: 3,
  pyroblast: true,
  burningSoul: 1,
  improvedScorch: 3,
  masterOfElements: 2,
  playingWithFire:3,
  criticalMass: 3,
  blastWave: true,
  firePower: 5,
  pyromaniac: 3,
  combustion: true,
  moltenFury: 2,
  empoweredFire: 3,
  firestarter: 2,
  dragonsBreath: true,
  hotStreak: 3,
  burnout: 5,
  livingBomb: true,
}

const PaladinRetTalents = {
  sealsOfThePure: 5,
  divineIntellect: 5,
  auraMastery: true,

  divineStrength: 5,

  benediction: 5,
  improvedJudgements: 2,
  heartOfTheCrusader: 3,
  improvedBlessingOfMight: 2,
  conviction: 5,
  sealOfCommand: true,
  pursuitOfJustice: 2,
  sanctityOfBattle: 3,
  crusade: 3,
  twoHandedWeaponSpecialization: 3,
  sanctifiedRetribution: true,
  vengeance: 3,
  theArtOfWar: 2,
  repentance: true,
  judgementsOfTheWise: 3,
  fanaticism: 3,
  sanctifiedWrath: 2,
  swiftRetribution: 3,
  crusaderStrike: true,
  sheathOfLight: 3,
  righteousVengeance: 3,
  divineStorm: true
}

const ShamanElementalTalents = {
  concussion: 5,
  callOfFlame: 3,
  elementalWarding: 2,
  elementalFocus: true,
  elementalFury: 5,
  improvedFireNova: 2,
  eyeOfTheStorm: 3,
  elementalReach: 2,
  callOfThunder: true,
  unrelentingStorm: 2,
  elementalPrecision: 3,
  lightningMastery: 5,
  elementalMastery: true,
  stormEarthAndFire: 3,
  boomingEchoes: 2,
  elementalOath: 2,
  lightningOverload: 3,
  totemOfWrath: true,
  lavaFlows: 3,
  shamanism: 5,
  thunderstorm: true,

  ancestralKnowledge: 5,
  thunderingStrikes: 5,
  improvedGhostWolf: 2,
  elementalWeapons: 3,
  shamanisticRage: true
}

const PriestShadowTalents = {
  twinDisciplines: 5,
  improvedInnerFire: 3, 
  improvedPowerWordFortitude: 2,
  meditation: 3,
  innerFocus: true,

  spiritTap: 3,
  improvedSpiritTap: 2,
  darkness: 5,
  improvedShadowWordPain: 2,
  shadowFocus: 3,
  improvedMindBlast: 4,
  mindFlay: true,
  veiledShadows: 2, 
  shadowReach: 2,
  shadowWeaving: 3,
  vampiricEmbrace: true,
  focusedMind: 3,
  mindMelt: 2,
  improvedDevouringPlague: 3,
  shadowform: true,
  shadowPower: 5,
  improvedShadowform: 2, 
  misery: 3,
  vampiricTouch: true,
  painAndSuffering: 3,
  twistedFaith: 5,
  dispersion: true
}

const PriestShadowTalentsP2 = {
  twinDisciplines: 5,
  improvedInnerFire: 3, 
  improvedPowerWordFortitude: 2,
  meditation: 3,
  innerFocus: true,

  spiritTap: 3,
  improvedSpiritTap: 2,
  darkness: 5,
  improvedShadowWordPain: 2,
  shadowFocus: 3,
  improvedMindBlast: 5,
  mindFlay: true,
  veiledShadows: 2, 
  shadowReach: 2,
  shadowWeaving: 3,
  vampiricEmbrace: true,
  focusedMind: 3,
  mindMelt: 2,
  improvedDevouringPlague: 3,
  shadowform: true,
  shadowPower: 5,
  improvedShadowform: 1, 
  misery: 3,
  vampiricTouch: true,
  painAndSuffering: 3,
  twistedFaith: 5,
  dispersion: true
}

const DefaultMeleeConsumes = {
    prepopPotion: "PotionOfSpeed",
    defaultPotion: "PotionOfSpeed",
    flask: "FlaskOfEndlessRage",
    food: "FoodFishFeast",
    thermalSapper: true,
    fillerExplosive: "ExplosiveSaroniteBomb"
}

const DefaultCasterConsumes = {
    prepopPotion: "PotionOfSpeed",
    defaultPotion: "PotionOfSpeed",
    flask: "FlaskOfTheFrostWyrm",
    food: "FoodFirecrackerSalmon",
    thermalSapper: true,
    fillerExplosive: "ExplosiveSaroniteBomb"
}

const RogueAssassinationApplyOptions = function(player) {
    player.rogue = {}
    player.rogue.rotation = {
        tricksOfTheTradeFrequency: "Maintain",
        envenomEnergyThreshold: 60,
    }
    player.rogue.talents = RogueAssassinationTalents
    player.talentsString = "005303005352100520103331051-005005003-502"
    player.rogue.options = {
        mhImbue: "DeadlyPoison",
        ohImbue: "InstantPoison",
        applyPoisonsManually: false,
        startingOverkillDuration: 15,
    }
    player.cooldowns = {
      "cooldowns": [
        {
          "id": {
            "tag": -1,
            "spellId": 2825
          },
          "timings": [
            0
          ]
        },
        {
          "id": {
            "spellId": 33697
          },
          "timings": [
            3
          ]
        },
        {
          "id": {
            "spellId": 54758
          },
          "timings": [
            3
          ]
        },
        {
          "id": {
            "itemId": 42641
          },
          "timings": [
            3
          ]
        }
      ]
    }
    return player
}

const RogueCombatApplyOptions = function(player) {
    player.rogue = {}
    player.rogue.rotation = {
        tricksOfTheTradeFrequency: "Maintain",
        minimumComboPointsPrimaryFinisher: 3,
    }
    player.rogue.talents = RogueCombatTalents
    player.talentsString = "00532000523-0252051050035010223100501251"
    player.rogue.options = {
        mhImbue: "InstantPoison",
        ohImbue: "DeadlyPoison",
        applyPoisonsManually: false,
        startingOverkillDuration: 0,
    }
    return player
}

const PaladinRetApplyOptions = function(player) {
    player.retributionPaladin = {}
    player.retributionPaladin.rotation = {
      type: "Standard",
      useDivinePlea: true,
      exoSlack: 500,
      consSlack: 500,
      divinePleaPercentage: 0.75,
      holyWrathThreshold: 4,
      customRotation: {
        spells: [
          {spell: 1}, {spell: 3}, {spell: 6}, {spell: 2}, {spell: 7}, {spell: 4}
        ]
      },
      customCastSequence: {
        spells: [
          {spell: 1}, {spell: 6}, {spell: 2}, {spell: 4}, {spell: 6}, {spell: 7},
          {spell: 1}, {spell: 6}, {spell: 2}, {spell: 4}, {spell: 6}
        ]
      }
    }
    player.retributionPaladin.talents = PaladinRetTalents
    player.talentsString = "050501-05-05232051203331302133231331"
    player.retributionPaladin.options = {
      aura: "RetributionAura"
    }
    return player
}

const DKFrostApplyOptions = function(player) {
    player.deathknight = {}
    player.deathknight.rotation = {
        frostRotationType: "SingleTarget",
        armyOfTheDead: "PreCast",
        useDeathAndDecay: true,
        btGhoulFrenzy: true,
        useEmpowerRuneWeapon: true,
        bloodRuneFiller: "BloodBoil",
        startingPresence: "Unholy",
        oblitDelayDuration: 1100,
        useGargoyle: true
    }
    player.deathknight.talents = DKFrostTalents
    player.talentsString = "23050005-32005350352203012300033101351"
    player.deathknight.options = {
        petUptime: 1,
        precastHornOfWinter: true
    }
    return player
}

const DKUnholyApplyOptions = function(player) {
    player.deathknight = {}
    player.deathknight.rotation = {
        frostRotationType: "SingleTarget",
        armyOfTheDead: "AsMajorCd",
        useEmpowerRuneWeapon: true,
        bloodRuneFiller: "BloodBoil",
        startingPresence: "Unholy",
        avgAmsSuccessRate: 0.5,
        avgAmsHit: 5000,
        useGargoyle: true
    }
    player.deathknight.talents = DKUnholyTalents
    player.talentsString = "-320043500002-2300303050032152000150013133051"
    player.deathknight.options = {
        petUptime: 1,
        precastHornOfWinter: true
    }
    return player
}

const DruidBalanceApplyOptions = function(player) {
  player.balanceDruid = {}
  player.balanceDruid.rotation = {
    type: "Adaptive",
    useIs: true,
    isInsideEclipseThreshold: 15,
    useSmartCooldowns: true,
    maximizeIsUptime: true,
  }
  player.balanceDruid.talents = DruidBalanceTalents
  player.talentsString = "5032003115331303213305311231--205003012"
  player.balanceDruid.options = {
  }
  return player
}

const DruidFeralApplyOptions = function(player) {
  player.feralDruid = {}
  player.feralDruid.rotation = {
    bearWeaveType: "Lacerate",
    maintainFaerieFire: true,
    minCombosForRip: 5,
    useRake: true,
    biteTime: 10,
    minCombosForBite: 5,
    berserkBiteThresh: 30,
    maxRoarOffset: 14
  }
  player.feralDruid.talents = DruidFeralTalents
  player.talentsString = "-503202132322010053120230310511-205503012"
  player.feralDruid.options = {
    latencyMs: 100,
  }
  return player
}

const HunterSurvivalApplyOptions = function(player, phase) {
  player.hunter = {}
  player.hunter.rotation = {
    type: "Custom",
    sting: "SerpentSting",
    trapWeave: true,
    timeToTrapWeaveMs: 2000,
    customRotation: {
      spells: [
        {
          spell: 7
        },
        {
          spell: 10 
        },
        {
          spell: 13
        },
        {
          spell: 11
        },
        {
          spell: 5
        },
        {
          spell: 9
        },
        {
          spell: 3
        },
        {
          spell: 4
        },
        {
          spell: 1
        }
      ]
    },
    viperStartManaPercent: 0.05,
    viperStopManaPercent: 0.2
  }
  if (phase == 0) {
    player.talentsString = "3-0353051-5000032500033330532105301301"
    player.hunter.talents = HunterSurvivalTalents
  } else if (phase == 1) {
    player.talentsString = "501-0053051-5000032500033330532105301301"
    player.hunter.talents = HunterSurvivalTalentsP1
  } else {
    player.talentsString = "501-0053051-5000032500033330531115301301"
    player.hunter.talents = HunterSurvivalTalentsP2
  }
  player.hunter.options = {
    ammo: "SaroniteRazorheads",
    petType: "Wolf",
    petTalents: {
      cobraReflexes: 2,
      dive: true,
      boarsSpeed: true,
      spikedCollar: 3,
      cullingTheHerd: 3,
      wildHunt: 1,
      spidersBite: 3,
      rabid: true,
      callOfTheWild: true
    },
    petUptime: 1,
    sniperTrainingUptime: 0.8,
    useHuntersMark: true
  }
  player.cooldowns = {
    "cooldowns": [
      {
        "id": {
          "spellId": 33697
        },
        "timings": [
          1.5
        ]
      },
      {
        "id": {
          "spellId": 3045
        },
        "timings": [
          1.5,
          15.9
        ]
      },
      {
        "id": {
          "spellId": 23989
        },
        "timings": [
          4.5
        ]
      },
      {
        "id": {
          "tag": -1,
          "spellId": 2825
        },
        "timings": [
          0
        ]
      },
      {
        "id": {
          "spellId": 54758
        },
        "timings": [
          1.5
        ]
      },
      {
        "id": {
          "itemId": 22788
        },
        "timings": [
          1.5
        ]
      },
      {
        "id": {
          "spellId": 53434
        },
        "timings": [
          1.5
        ]
      },
      {
        "id": {
          "spellId": 34026
        },
        "timings": [
          1.5
        ]
      },
      {
        "id": {
          "spellId": 53401
        },
        "timings": [
          1.5
        ]
      },
      {
        "id": {
          "itemId": 40211
        },
        "timings": [
          61.5
        ]
      },
      {
        "id": {
          "spellId": 64495
        },
        "timings": [
          1.5
        ]
      }
    ]
  }
  return player

}

const HunterMMApplyOptions = function(player, phase) {
  player.hunter = {}
  player.hunter.rotation = {
    type: "Custom",
    sting: "SerpentSting",
    trapWeave: true,
    timeToTrapWeaveMs: 2000,
    customRotation: {
      "spells": [
        {
          "spell": 7
        },
        {
          "spell": 10
        },
        {
          "spell": 5
        },
        {
          "spell": 9
        },
        {
          "spell": 3
        },
        {
          "spell": 11
        },
        {
          "spell": 4
        },
        {
          "spell": 2
        },
        {
          "spell": 1
        }
      ]
    },
    viperStartManaPercent: 0.05,
    viperStopManaPercent: 0.2
  }
  if (phase < 2) {
    player.talentsString = "502-035335101030013233035031051-5000032"
    player.hunter.talents = HunterMMTalentsP0
  } else {
    player.talentsString = "502-015335101030013233035131151-5000032"
    player.hunter.talents = HunterMMTalentsP2
  }
  player.hunter.options = {
    ammo: "SaroniteRazorheads",
    petType: "Wolf",
    petTalents: {
      cobraReflexes: 2,
      dive: true,
      boarsSpeed: true,
      spikedCollar: 3,
      cullingTheHerd: 3,
      wildHunt: 1,
      spidersBite: 3,
      rabid: true,
      callOfTheWild: true
    },
    petUptime: 1,
    sniperTrainingUptime: 0.8,
    useHuntersMark: true
  }
  player.cooldowns = {
    "cooldowns": [
      {
        "id": {
          "spellId": 33697
        },
        "timings": [
          1.5
        ]
      },
      {
        "id": {
          "spellId": 3045
        },
        "timings": [
          1.5,
          15.9
        ]
      },
      {
        "id": {
          "spellId": 23989
        },
        "timings": [
          4.5
        ]
      },
      {
        "id": {
          "tag": -1,
          "spellId": 2825
        },
        "timings": [
          0
        ]
      },
      {
        "id": {
          "spellId": 54758
        },
        "timings": [
          1.5
        ]
      },
      {
        "id": {
          "itemId": 22788
        },
        "timings": [
          1.5
        ]
      },
      {
        "id": {
          "spellId": 53434
        },
        "timings": [
          1.5
        ]
      },
      {
        "id": {
          "spellId": 34026
        },
        "timings": [
          1.5
        ]
      },
      {
        "id": {
          "spellId": 53401
        },
        "timings": [
          1.5
        ]
      },
      {
        "id": {
          "itemId": 40211
        },
        "timings": [
          61.5
        ]
      },
      {
        "id": {
          "spellId": 64495
        },
        "timings": [
          1.5
        ]
      }
    ]
  }
  return player
}

const MageArcaneApplyOptions = function(player) {
  player.mage = {}
  player.mage.rotation = {
    type: "Arcane",
    minBlastBeforeMissiles: 4,
    num4StackBlastsToMissilesGamble: 12,
    num4StackBlastsToEarlyMissiles: 6,
    extraBlastsDuringFirstAp: 2
  }
  player.mage.talents = MageArcaneTalents
  player.talentsString = "23000513310033015032310250532-03-023303001"
  player.mage.options = {
    armor: "MoltenArmor",
    focusMagicPercentUptime: 99,
  }
  return player
}

const MageFireApplyOptions = function(player) {
  player.mage = {}
  player.mage.rotation = {
    type: "Fire",
    minBlastBeforeMissiles: 4,
    num4StackBlastsToMissilesGamble: 12,
    num4StackBlastsToEarlyMissiles: 6,
    extraBlastsDuringFirstAp: 2
  }
  player.mage.talents = MageFireTalents
  player.talentsString = "23000503110003-0055030011302331053120321351"
  player.mage.options = {
    armor: "MoltenArmor",
    focusMagicPercentUptime: 99,
  }
  return player
}

const ShamanElementalApplyOptions = function(player) {
  player.elementalShaman = {}
  player.elementalShaman.rotation = {
    totems: {
      earth: "StrengthOfEarthTotem",
      air: "WrathOfAirTotem",
      fire: "TotemOfWrath",
      water: "ManaSpringTotem",
      useFireElemental: true,
    },
    type: "Adaptive",
    fnMinManaPer: 66,
    clMinManaPer: 33,
    useThunderstorm: true,
  }
  player.elementalShaman.talents = ShamanElementalTalents
  player.talentsString = "0532001523212351322301351-005052031"
  player.elementalShaman.options = {
    shield: "WaterShield",
    bloodlust: true,
  }
  return player
}

const ShamanEnhanceApplyOptions = function(player) {
  player.enhancementShaman = {}
  player.enhancementShaman.rotation = {
    totems: {
      earth: "StrengthOfEarthTotem",
      air: "WindfuryTotem",
      fire: "MagmaTotem",
      water: "ManaSpringTotem",
      useFireElemental: true,
    },
    rotationType: "Priority",
    lightningboltWeave: true,
    maelstromweaponMinStack: 3,
    weaveFlameShock: true
  }
  player.enhancementShaman.talents = ShamanEnhanceTalents
  player.talentsString = "053030152-30405003105021333031131031051"
  player.enhancementShaman.options = {
    shield: "LightningShield",
    bloodlust: true,
    syncType: "SyncMainhandOffhandSwings",
    imbueMh: "WindfuryWeapon",
    imbueOh: "FlametongueWeapon",
  }
  return player
}

const PriestShadowApplyOptions = function(player, phase) {
  player.shadowPriest = {}
  player.shadowPriest.rotation = {
    rotationType: "Ideal"
  }
  if (phase < 2) {
    player.talentsString = "05032031--325023041223010323152301351"
    player.shadowPriest.talents = PriestShadowTalents
  } else {
    player.talentsString = "05032031--325023051223010323151301351"
    player.shadowPriest.talents = PriestShadowTalentsP2
  }
  player.shadowPriest.options = {
    armor: "InnerFire",
    useShadowfiend: true,
    useMindBlast: true,
    useShadowWordDeath: true
  }
  return player
}

const WarlockAfflictionApplyOptions = function(player) {
  player.warlock = {}
  player.distanceFromTarget = 25
  player.warlock.rotation = {
    preset: "Automatic",
    curse: "Agony",
    primarySpell: "ShadowBolt",
    secondaryDot: "UnstableAffliction",
    corruption: true,
    detonateSeed: true,
    specSpell: "Haunt",
  }
  player.warlock.talents = WarlockAfflictionTalents
  player.talentsString = "2350002030023510253500331151--550000051"
  player.warlock.options = {
    armor: "FelArmor",
    summon: "Felhunter",
    weaponImbue: "GrandSpellstone"
  }
  return player
}

const WarlockDemonologyApplyOptions = function(player) {
  player.warlock = {}
  player.distanceFromTarget = 25
  player.warlock.rotation = {
    preset: "Automatic",
    type: "Demonology",
    curse: "Doom",
    primarySpell: "ShadowBolt",
    secondaryDot: "Immolate",
    corruption: true,
    detonateSeed: true,
    specSpell: "Haunt",
  }
  player.warlock.talents = WarlockDemonologyTalents
  player.talentsString = "-203203301035012530135201351-550000052"
  player.warlock.options = {
    armor: "FelArmor",
    summon: "Felguard",
    weaponImbue: "GrandSpellstone"
  }
  return player
}

const WarriorFuryApplyOptions = function(player) {
  player.warrior = {}
  player.warrior.rotation = {
    useRend: true,
    useMs: true,
    hsRageThreshold: 30,
    msRageThreshold: 35,
    rendRageThresholdBelow: 100,
    slamRageThreshold: 25,
    useHsDuringExecute: true,
    useBtDuringExecute: true,
    spamExecute: true,
    useWwDuringExecute: true,
    rendHealthThresholdAbove: 20,
  }
  player.warrior.talents = WarriorFuryTalents
  player.talentsString = "30202301233-305053000520310053120500351"
  player.warrior.options = {
    useRecklessness: true
  }
  player.cooldowns = WarriorFuryCooldowns
  return player
}

const WarriorArmsApplyOptions = function(player) {
  player.warrior = {}
  player.warrior.rotation = {
    useRend: true,
    useMs: true,
    prioritizeWw: true,
    hsRageThreshold: 40,
    msRageThreshold: 30,
    rendRageThresholdBelow: 70,
    slamRageThreshold: 15,
    useHsDuringExecute: true,
    useBtDuringExecute: true,
    spamExecute: true,
    useWwDuringExecute: true,
    useSlamOverExecute: true,
  }
  player.warrior.talents = WarriorArmsTalents
  player.talentsString = "3022032023335100102012213231251-305-2033"
  player.warrior.options = {
    shout: "WarriorShoutCommanding"
  }
  return player
}