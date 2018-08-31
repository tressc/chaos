const preloadedState = {
  ui: {
    current_scenario: 0,
    current_difficulty: "easy",
    current_investigator: 0,
    current_team: [0]
  },
  static: {
    difficulties: {
      easy: {
        '+1': 2,
        '0': 3,
        '-1': 3,
        '-2': 2,
        'skull': 2,
        'cultist': 1,
        'tablet': 1,
        'tentacles': 1,
        'elder_sign': 1
      },
      standard: {
        '+1': 1,
        '0': 2,
        '-1': 3,
        '-2': 2,
        '-3': 1,
        '-4': 1,
        'skull': 2,
        'cultist': 1,
        'tablet': 1,
        'tentacles': 1,
        'elder_sign': 1
      },
      hard: {
        '0': 3,
        '-1': 2,
        '-2': 2,
        '-3': 2,
        '-4': 1,
        '-5': 1,
        'skull': 2,
        'cultist': 1,
        'tablet': 1,
        'tentacles': 1,
        'elder_sign': 1
      },
      expert: {
        '0': 1,
        '-1': 2,
        '-2': 2,
        '-3': 2,
        '-4': 2,
        '-5': 1,
        '-6': 1,
        '-8': 1,
        'skull': 2,
        'cultist': 1,
        'tablet': 1,
        'tentacles': 1,
        'elder_sign': 1
      }
    },
    investigators: {
      0: {
        name: 'Roland Banks',
        elder_sign_effect: '+1 for each clue on your location.'
      },
      1: {
        name: 'Daisy Walker',
        elder_sign_effect: '+0. If you succeed, draw one card for each Tome you control.'
      },
      2: {
        name: '\'Skids\' O\'Tool',
        elder_sign_effect: '+2. If you succeed, gain 2 resources.'
      },
      3: {
        name: 'Agnes Baker',
        elder_sign_effect: '+1 for each horror on Agnes Baker.'
      },
      4: {
        name: 'Wendy Adams',
        elder_sign_effect: '+0. If Wendy\'s Amulet is in play, you automatically succeed instead.'
      },
    },
    scenarios: {
      0: {
        name: 'The Gathering',
        cycle: 'Night of the Zealot',
        rules: {
          easy_standard: {
            skull: '-X. X is the number of Ghoul enemies at your location.',
            cultist: '-1. If you fail, take 1 horror.',
            tablet: '-2. If there is a Ghould enemy at your location, take 1 damage.'
          },
          hard_expert: {
            skull: '-2. If you fail, after this skill test, search the encounter deck and discard pile for a Ghoul enemy, and draw it. Shuffle the encounter deck.',
            cultist: 'Reveal another token. If you fail, take 2 horror.',
            tablet: '-4. If there is a Ghoul enemy at your location, take 1 damage and 1 horror.'
          }
        }
      },
      1: {
        name: 'The Midnight Masks',
        cycle: 'Night of the Zealot',
        rules: {
          easy_standard: {
            skull: '-X. X is the highest number of doom on a Cultist enemy in play.',
            cultist: '-2. Place 1 doom on the nearest Cultist enemy.',
            tablet: '-3. If you fail, place 1 of your clues on your location.'
          },
          hard_expert: {
            skull: '-X. X is the total number of doom in play.',
            cultist: '-2. Place 1 doom on each Cultist enemy in play. If there are no Cultist enemies in play, reveal another token.',
            tablet: '-4. If you fail, place all your clues on your location.'
          }
        }
      },
      2: {
        name: 'The Devourer Below',
        cycle: 'Night of the Zealot',
        elder_thing: 1,
        rules: {
          easy_standard: {
            skull: '-X. X is the number of Monster enemies in play.',
            cultist: '-2. Place 1 doom on the nearest enemy.',
            tablet: '-3. If there is a Monster enemy at your location, take 1 damage.',
            elder_thing: '-5. If there is an Ancient One enemy in play, reveal another token.'
          },
          hard_expert: {
            skull: '-3. If you fail, after this skill test, search the encounter deck and discard pile for a Monster enemy, and draw it. Shuffle the encounter deck.',
            cultist: '-4. Place 2 doom on the nearest enemy.',
            tablet: '-5. If there is a Monster enemy at your location, take 1 damage and 1 horror.',
            elder_thing: '-7. If there is an Ancient One enemy in play, reveal another token.'
          }
        }
      }
    }
  }
};

export default preloadedState;
