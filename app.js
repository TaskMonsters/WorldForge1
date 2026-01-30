// ========================================
// WORLDFORGE - MONOCHROME EDITION
// Elite Author Edition with Enhanced Features
// ========================================

// ========================================
// GENRE-SPECIFIC ICON SETS
// ========================================
const GENRE_ICONS = {
  fantasy: {
    castle: '🏰',
    village: '🏘️',
    temple: '⛪',
    forest: '🌲',
    mountain: '⛰️',
    cave: '🕳️',
    tower: '🗼',
    ruins: '🏛️'
  },
  'sci-fi': {
    station: '🛸',
    lab: '🔬',
    reactor: '⚡',
    base: '🏭',
    dome: '🔵',
    portal: '🌀',
    satellite: '📡',
    ship: '🚀'
  },
  horror: {
    graveyard: '⚰️',
    mansion: '🏚️',
    asylum: '🏥',
    church: '⛪',
    crypt: '🪦',
    woods: '🌲',
    cabin: '🛖',
    lighthouse: '🗼'
  },
  thriller: {
    building: '🏢',
    warehouse: '🏭',
    apartment: '🏘️',
    office: '🏢',
    parking: '🅿️',
    alley: '🌃',
    bridge: '🌉',
    station: '🚉'
  },
  adventure: {
    camp: '⛺',
    port: '⚓',
    jungle: '🌴',
    desert: '🏜️',
    island: '🏝️',
    waterfall: '💧',
    volcano: '🌋',
    canyon: '🏔️'
  },
  historical: {
    palace: '🏛️',
    fort: '🏰',
    market: '🏪',
    harbor: '⚓',
    plaza: '🏛️',
    cathedral: '⛪',
    library: '📚',
    arena: '🏟️'
  }
};

// ========================================
// MODULE DEFINITIONS
// ========================================
const ALL_MODULES = [
  { id: 'locations', icon: '📍', title: 'Locations', description: 'Define places, cultures, and resources', dataKey: 'locations' },
  { id: 'characters', icon: '👤', title: 'Characters', description: 'Build complex characters with relationships', dataKey: 'characters' },
  { id: 'factions', icon: '⚔️', title: 'Factions', description: 'Create organizations and power structures', dataKey: 'factions' },
  { id: 'timeline', icon: '⏳', title: 'Timeline', description: 'Chronicle events and history', dataKey: 'timeline' },
  { id: 'rules', icon: '✨', title: 'Rules', description: 'Define magic, technology, and natural laws', dataKey: 'rules' },
  { id: 'themes', icon: '🎭', title: 'Themes', description: 'Explore central themes and tensions', dataKey: 'themes' },
  { id: 'religions', icon: '🕊️', title: 'Religion', description: 'Create belief systems and spiritual practices', dataKey: 'religions' },
  { id: 'fashions', icon: '👗', title: 'Fashion', description: 'Design clothing styles and cultural attire', dataKey: 'fashions' },
  { id: 'magicSystems', icon: '✨', title: 'Magic', description: 'Build magical systems and supernatural forces', dataKey: 'magicSystems' },
  { id: 'languages', icon: '📜', title: 'Languages', description: 'Develop languages and writing systems', dataKey: 'languages' },
  { id: 'economies', icon: '💰', title: 'Economy', description: 'Design economic systems and trade networks', dataKey: 'economies' },
  { id: 'politics', icon: '⚖️', title: 'Politics', description: 'Create political systems and power dynamics', dataKey: 'politics' },
  { id: 'technologies', icon: '🔬', title: 'Technology', description: 'Define technological advancement and innovations', dataKey: 'technologies' },
  { id: 'floraFauna', icon: '🌿', title: 'Flora & Fauna', description: 'Catalog plants and wildlife', dataKey: 'floraFauna' },
  { id: 'creatures', icon: '🐉', title: 'Animals & Creatures', description: 'Design unique creatures and beasts', dataKey: 'creatures' },
  { id: 'cuisines', icon: '🍽️', title: 'Cuisine', description: 'Develop food culture and culinary traditions', dataKey: 'cuisines' },
  { id: 'artifacts', icon: '🗡️', title: 'Artifacts', description: 'Create legendary items and relics', dataKey: 'artifacts' },
  { id: 'socialInteractions', icon: '🤝', title: 'Social Interactions', description: 'Define social customs and interactions', dataKey: 'socialInteractions' },
  { id: 'hierarchies', icon: '👑', title: 'Hierarchy', description: 'Build social hierarchies and class systems', dataKey: 'hierarchies' },
  { id: 'etiquette', icon: '🎩', title: 'Etiquette', description: 'Establish manners and social protocols', dataKey: 'etiquette' },
  { id: 'quickReference', icon: '📋', title: 'Quick Reference', description: 'Access all world data in one place', dataKey: null }
];

const DEFAULT_DASHBOARD_MODULES = ['map', 'locations', 'characters', 'factions', 'timeline', 'rules', 'themes'];

// ========================================
// SAMPLE DATA GENERATOR
// ========================================
const SampleData = {
  getFantasyWorld() {
    return {
      id: 'sample-fantasy-' + Date.now(),
      name: 'Eldoria',
      genres: ['Fantasy'],
      logline: 'A realm where ancient magic intertwines with political intrigue, and forgotten gods stir beneath the earth.',
      banner: null,
      lastEdited: new Date().toISOString(),
      locations: [
        {
          id: 'loc-1',
          name: 'Silverpeak',
          type: 'City',
          description: 'The capital city built into the side of a mountain, known for its silver mines and mage academy.',
          culture: 'Scholarly and industrious, with a strong tradition of magical education',
          resources: 'Silver, magical crystals, rare herbs',
          population: '50,000',
          government: 'Council of Mages'
        },
        {
          id: 'loc-2',
          name: 'The Whispering Woods',
          type: 'Forest',
          description: 'An ancient forest where the trees are said to remember the old world and speak to those who listen.',
          culture: 'Home to reclusive druids and wood elves',
          resources: 'Rare timber, medicinal plants, wild game',
          population: 'Unknown',
          government: 'Druidic Circle'
        }
      ],
      characters: [
        {
          id: 'char-1',
          name: 'Elara Moonwhisper',
          role: 'Archmage',
          description: 'The youngest archmage in Silverpeak history, struggling with visions of an ancient threat.',
          background: 'Orphaned as a child, raised by the mage academy',
          personality: 'Brilliant but haunted, compassionate yet burdened by responsibility',
          relationships: 'Mentored by High Mage Aldric, rivals with Councilor Theron'
        },
        {
          id: 'char-2',
          name: 'Kael Ironforge',
          role: 'Warrior',
          description: 'A battle-scarred veteran seeking redemption for past failures.',
          background: 'Former captain of the Silver Guard, exiled after a failed defense',
          personality: 'Gruff exterior hiding deep loyalty and honor',
          relationships: 'Childhood friend of Elara, sworn enemy of the Shadow Cult'
        }
      ],
      factions: [
        {
          id: 'fac-1',
          name: 'The Mage Council',
          type: 'Government',
          description: 'The ruling body of Silverpeak, composed of seven archmages who govern through wisdom and magical might.',
          goals: 'Maintain order, preserve magical knowledge, protect the realm',
          resources: 'Vast magical libraries, trained battlemages, political influence',
          allies: 'The Druidic Circle, The Silver Guard',
          enemies: 'The Shadow Cult, Rogue mages'
        }
      ],
      timeline: [
        {
          id: 'event-1',
          name: 'The Sundering',
          date: 'Year 0',
          description: 'The old gods fell silent, and magic began to fade from the world. The mages of Silverpeak discovered how to preserve it.',
          impact: 'Established the Mage Council and changed the course of history',
          linkedLocationId: 'loc-1'
        },
        {
          id: 'event-2',
          name: 'The Whispering Begins',
          date: 'Year 500',
          description: 'The trees of the ancient forest began to speak, warning of a darkness stirring in the deep places.',
          impact: 'Formation of the Druidic Circle to interpret the warnings',
          linkedLocationId: 'loc-2'
        }
      ],
      rules: [
        {
          id: 'rule-1',
          category: 'Magic',
          name: 'The Law of Conservation',
          description: 'Magic cannot be created or destroyed, only channeled from the ancient sources. Overuse depletes the source.'
        },
        {
          id: 'rule-2',
          category: 'Technology',
          name: 'Limited Advancement',
          description: 'Technology is medieval-level. Magic has prevented industrial revolution.'
        }
      ],
      themes: [
        {
          id: 'theme-1',
          name: 'Power and Responsibility',
          description: 'Those with great power must choose how to use it - for personal gain or the greater good.'
        },
        {
          id: 'theme-2',
          name: 'Memory and Forgetting',
          description: 'What happens when a world forgets its past? Can ancient wisdom save or doom the present?'
        }
      ],
      religions: [
        {
          id: 'rel-1',
          name: 'The Luminous Path',
          domain: 'Light, Knowledge, Truth',
          description: 'Worship of the ancient light-bringers who illuminated the world before The Sundering. Followers believe knowledge and enlightenment can restore the old gods.',
          practices: 'Daily meditation at dawn, study of ancient texts, pilgrimage to Silverpeak\'s Crystal Sanctum',
          followers: 'Scholars, mages, and urban dwellers of Silverpeak',
          sites: 'The Crystal Sanctum in Silverpeak, The Lighthouse of Remembrance'
        },
        {
          id: 'rel-2',
          name: 'The Green Covenant',
          domain: 'Nature, Growth, Balance',
          description: 'Ancient druidic faith that predates The Sundering. Believers maintain that nature itself is divine and the trees hold the memories of the old gods.',
          practices: 'Seasonal rituals, tree-planting ceremonies, communion with forest spirits',
          followers: 'Druids, wood elves, forest dwellers',
          sites: 'The Heart Oak in Whispering Woods, Stone circles throughout the realm'
        }
      ],
      fashions: [
        {
          id: 'fash-1',
          name: 'Mage Robes of Silverpeak',
          culture: 'Silverpeak Mages',
          description: 'Flowing robes in deep blues and silvers, adorned with constellation patterns that shimmer with embedded magical crystals. The number of stars indicates rank.',
          materials: 'Silk, silver thread, enchanted crystals',
          colors: 'Deep blue, silver, white accents',
          significance: 'Each constellation represents a school of magic mastered. Archmages wear robes with seven constellations.'
        },
        {
          id: 'fash-2',
          name: 'Druidic Vestments',
          culture: 'Whispering Woods Druids',
          description: 'Layered garments of natural fabrics in earth tones, woven with living vines and flowers that continue to grow. Bark armor plates protect vital areas.',
          materials: 'Linen, wool, living plants, treated bark',
          colors: 'Forest green, brown, moss, with seasonal flower accents',
          significance: 'The living plants symbolize connection to nature. Elder druids\' robes bloom year-round regardless of season.'
        }
      ],
      magicSystems: [
        {
          id: 'mag-1',
          name: 'Aetherial Channeling',
          type: 'Hard Magic - Source-Based',
          description: 'Mages draw power from ancient Aether Wells scattered across the realm. Each well has finite capacity that slowly regenerates. Magic manifests as glowing geometric patterns.',
          source: 'Ancient Aether Wells created by the old gods before The Sundering',
          limitations: 'Wells can be depleted, causing magic to fail. Distance from wells weakens spells. Overuse causes physical exhaustion and crystal sickness.',
          cost: 'Physical stamina, mental focus, and gradual crystallization of the body with excessive use'
        },
        {
          id: 'mag-2',
          name: 'Verdant Weaving',
          type: 'Soft Magic - Nature-Based',
          description: 'Druids commune with nature spirits to request aid. The magic is unpredictable but powerful, manifesting as plant growth, weather changes, and animal communication.',
          source: 'The collective consciousness of nature and ancient tree spirits',
          limitations: 'Requires natural surroundings, cannot be forced, spirits may refuse requests, ineffective in cities',
          cost: 'Time, patience, offerings to nature, and gradual transformation into plant-like beings for elder druids'
        }
      ],
      languages: [
        {
          id: 'lang-1',
          name: 'High Aetheric',
          speakers: 'Mages, scholars, nobility of Silverpeak',
          description: 'The formal language of magic and scholarship, descended from the tongue of the old gods. Precise and mathematical in structure.',
          writing: 'Geometric runes that glow when written correctly, used for spellcasting',
          phrases: 'Lux Veritas (Light of Truth), Aether Vinculum (Aether Bond), Memoria Aeterna (Eternal Memory)',
          related: 'Common Tongue (simplified descendant), Ancient Divine (extinct parent language)'
        },
        {
          id: 'lang-2',
          name: 'Sylvan Whisper',
          speakers: 'Druids, wood elves, forest creatures',
          description: 'A melodic language that mimics natural sounds - rustling leaves, bird calls, flowing water. More emotion than words.',
          writing: 'Carved into living trees, the marks grow and change with the tree\'s growth',
          phrases: 'Sha\'leth (Peace-growth), Mor\'vani (Dark-warning), Ael\'thara (Light-friend)',
          related: 'Ancient Primordial (parent language of all nature tongues)'
        }
      ],
      economies: [
        {
          id: 'econ-1',
          name: 'Silverpeak Trade Network',
          type: 'Market Economy with Guild Control',
          description: 'Silver-backed currency system centered on Silverpeak. Powerful merchant and mage guilds control trade routes and prices.',
          currency: 'Silver Marks (coins infused with trace magic to prevent counterfeiting)',
          exports: 'Enchanted items, magical crystals, silver, trained mages, spell scrolls',
          routes: 'Mountain passes to the Eastern Kingdoms, river trade to coastal cities, secret teleportation circles for high-value goods'
        },
        {
          id: 'econ-2',
          name: 'Forest Barter System',
          type: 'Gift Economy and Barter',
          description: 'The druids and forest folk operate on mutual aid and direct exchange. Services and goods flow based on need and relationship rather than profit.',
          currency: 'None - barter of goods and services, favor-debt system',
          exports: 'Rare herbs, medicinal plants, enchanted wood, druidic healing',
          routes: 'Forest paths known only to druids, occasional trade with Silverpeak at forest edge markets'
        }
      ],
      politics: [
        {
          id: 'pol-1',
          name: 'The Mage Council of Silverpeak',
          type: 'Magocracy (Rule by Mages)',
          description: 'Seven Archmages form the ruling council, each representing a school of magic. Decisions require majority vote. The High Mage breaks ties.',
          leaders: 'High Mage Aldric (Abjuration), Archmage Elara Moonwhisper (Divination), Councilor Theron (Evocation), plus four others',
          laws: 'Unauthorized magic is forbidden, all mages must register, depleting Aether Wells is a capital crime, non-mages have limited rights',
          conflicts: 'Growing resentment from non-magical citizens, debate over sharing magic with common folk, tension with druids over natural vs. structured magic'
        }
      ],
      technologies: [
        {
          id: 'tech-1',
          name: 'Crystal Resonance Communication',
          category: 'Communication',
          description: 'Paired magical crystals that vibrate in harmony, allowing instant voice communication across distances. Each pair is unique.',
          function: 'Speaking into one crystal transmits voice to its paired crystal anywhere in the realm',
          inventor: 'Archmage Lyra Starweaver, 200 years ago',
          impact: 'Revolutionized military coordination and trade negotiations. The Mage Council maintains a monopoly on crystal pairing.'
        },
        {
          id: 'tech-2',
          name: 'Aether Lamps',
          category: 'Infrastructure',
          description: 'Crystals that absorb and store magical energy from Aether Wells, then emit steady light for months. They line the streets of Silverpeak.',
          function: 'Provides clean, renewable lighting without fire risk',
          inventor: 'Unknown - ancient technology rediscovered after The Sundering',
          impact: 'Enabled city growth and night activities. Created demand for crystal mining, leading to environmental concerns.'
        }
      ],
      floraFauna: [
        {
          id: 'ff-1',
          name: 'Moonpetal Flower',
          type: 'Magical Plant',
          description: 'Luminescent white flowers that bloom only under moonlight. Petals glow with soft silver light and are key ingredients in healing potions.',
          habitat: 'Clearings in Whispering Woods, high mountain meadows near Silverpeak',
          uses: 'Healing potions, light source, ingredient in divination rituals',
          danger: 'Harmless - picking them is considered disrespectful to nature by druids'
        },
        {
          id: 'ff-2',
          name: 'Aether Wyrm',
          type: 'Magical Creature',
          description: 'Serpentine creatures made of pure magical energy, appearing as flowing ribbons of light. They nest near Aether Wells and are fiercely territorial.',
          habitat: 'Aether Wells, particularly in deep caves and ancient ruins',
          uses: 'Their shed scales are the most powerful magical catalysts known',
          danger: 'Extremely dangerous - their touch can drain life force. Only master mages can approach them safely.'
        },
        {
          id: 'ff-3',
          name: 'Whisperwood Tree',
          type: 'Sentient Plant',
          description: 'Ancient trees with silver bark that literally whisper warnings and wisdom. They are the oldest living things in the realm, predating The Sundering.',
          habitat: 'Whispering Woods (the forest is named for them)',
          uses: 'Source of prophecy and ancient knowledge, their wood is sacred and never harvested',
          danger: 'Harmless but protected - druids will defend them with lethal force'
        }
      ],
      creatures: [
        {
          id: 'cr-1',
          name: 'Silverpeak Griffin',
          type: 'Magical Beast',
          description: 'Majestic creatures with the body of a lion and wings and head of an eagle. Their feathers shimmer with silver light, especially under moonlight.',
          habitat: 'Mountain peaks around Silverpeak, nesting in high cliff faces',
          diet: 'Carnivore - hunts mountain goats, deer, and occasionally livestock',
          behavior: 'Highly territorial but noble. Will not attack unless provoked. Bonds with riders who earn their trust.',
          abilities: 'Flight, enhanced strength, can sense magical disturbances',
          danger: 'Dangerous if threatened, but generally avoids conflict with humans',
          population: 'Rare - estimated 50-100 individuals remain'
        },
        {
          id: 'cr-2',
          name: 'Shadow Wolf',
          type: 'Cursed Beast',
          description: 'Wolves corrupted by dark magic during The Sundering. They appear as living shadows with glowing red eyes and can phase through solid objects.',
          habitat: 'Dark forests, ruins, abandoned settlements - anywhere touched by The Sundering',
          diet: 'Carnivore - feeds on life force as well as flesh',
          behavior: 'Pack hunters, highly intelligent and malevolent. Hunt at night and avoid daylight.',
          abilities: 'Shadow form (intangibility), enhanced speed, life drain bite, night vision',
          danger: 'Extremely dangerous - responsible for numerous deaths. Hunted by professional monster slayers.',
          population: 'Unknown - packs spotted across the realm, numbers growing'
        }
      ],
      cuisines: [
        {
          id: 'cuis-1',
          name: 'Starlight Stew',
          culture: 'Silverpeak',
          description: 'A hearty stew made with mountain herbs, root vegetables, and small amounts of crushed luminescent crystals that make it glow faintly blue.',
          ingredients: 'Potatoes, carrots, mountain thyme, crystal dust (trace amounts), salted pork',
          preparation: 'Slow-cooked for hours, the crystal dust is added last and makes the stew shimmer',
          significance: 'Served at mage academy graduations and important ceremonies. The glow represents enlightenment.'
        },
        {
          id: 'cuis-2',
          name: 'Forest Honey Cakes',
          culture: 'Whispering Woods',
          description: 'Sweet cakes made from wild honey, acorn flour, and dried berries. Druids bake them in clay ovens for seasonal festivals.',
          ingredients: 'Wild honey, acorn flour, dried blackberries, mint, spring water',
          preparation: 'Mixed by hand and baked in communal ovens, each druid adds a blessing',
          significance: 'Shared during harvest festivals and given as gifts to travelers. Refusing one is considered deeply offensive.'
        }
      ],
      artifacts: [
        {
          id: 'art-1',
          name: 'The Codex of First Light',
          type: 'Ancient Tome',
          description: 'A massive book bound in silver and crystal, containing the original spells taught by the old gods. Its pages glow and turn themselves to relevant passages.',
          powers: 'Contains lost magic from before The Sundering, translates itself into any language, protects itself from damage',
          origin: 'Created by the old gods before they fell silent, discovered in Silverpeak\'s founding',
          location: 'Locked in the Crystal Sanctum, accessible only to the High Mage'
        },
        {
          id: 'art-2',
          name: 'The Thornblade',
          type: 'Legendary Weapon',
          description: 'A sword grown from a single piece of living wood by the first druids. It never dulls, can cut through magic, and returns to its wielder when thrown.',
          powers: 'Cuts through magical barriers, commands plants to grow or wither, grants wielder immunity to poison',
          origin: 'Forged by the Druidic Circle in response to The Sundering, passed down through generations',
          location: 'Currently wielded by the Elder Druid of Whispering Woods'
        },
        {
          id: 'art-3',
          name: 'Aether Heart Crystal',
          type: 'Power Source',
          description: 'A fist-sized perfect crystal that pulses with inner light. It\'s the largest remaining fragment of the original Aether Well and could restore magic to the entire realm or destroy it.',
          powers: 'Unlimited magical power, can create new Aether Wells, or drain all magic if shattered',
          origin: 'Fragment of the First Aether Well, hidden after The Sundering to prevent misuse',
          location: 'Unknown - its location was lost when the last keeper died. Elara\'s visions suggest it\'s awakening.'
        }
      ]
    };
  }
};

// ========================================
// STATE MANAGEMENT
// ========================================
const AppState = {
  worlds: [],
  currentWorld: null,
  currentView: 'library',
  currentModule: null,
  undoStack: [],
  redoStack: [],
  
  init() {
    this.loadFromStorage();
    
    // Check if this is after a reset
    const resetFlag = localStorage.getItem('worldforge_reset_flag');
    
    if (resetFlag) {
      // Clear the flag and don't create sample data
      localStorage.removeItem('worldforge_reset_flag');
      console.log('Reset detected - starting with empty state');
    } else if (this.worlds.length === 0) {
      // Only add sample world for brand new users (not after reset)
      console.log('New user detected - creating sample world');
      this.worlds.push(SampleData.getFantasyWorld());
      this.save();
    }
    
    this.setupAutoSave();
    this.setupKeyboardShortcuts();
  },
  
  loadFromStorage() {
    const stored = localStorage.getItem('worldforge_mono_data');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        this.worlds = data.worlds || [];
      } catch (e) {
        console.error('Error loading data:', e);
        this.worlds = [];
      }
    }
  },
  
  save() {
    const data = {
      worlds: this.worlds,
      lastSaved: new Date().toISOString()
    };
    
    try {
      const jsonData = JSON.stringify(data);
      const sizeInMB = (new Blob([jsonData]).size / 1024 / 1024).toFixed(2);
      
      // Warn if approaching localStorage limit (typically 5-10MB)
      if (sizeInMB > 4) {
        console.warn(`⚠️ Data size: ${sizeInMB}MB - Approaching localStorage limit`);
      }
      
      if (sizeInMB > 8) {
        alert(`❌ Data too large (${sizeInMB}MB)! localStorage limit is ~5-10MB.\n\nPlease reduce the number of placed assets with embedded images.\n\nTip: Use the built-in asset library instead of uploading custom images.`);
        return false;
      }
      
      localStorage.setItem('worldforge_mono_data', jsonData);
      console.log(`✅ Saved successfully (${sizeInMB}MB)`);
      this.showSaveIndicator();
      return true;
    } catch (e) {
      console.error('Save failed:', e);
      
      if (e.name === 'QuotaExceededError' || e.code === 22) {
        const jsonData = JSON.stringify(data);
        const sizeInMB = (new Blob([jsonData]).size / 1024 / 1024).toFixed(2);
        alert(`❌ Storage quota exceeded!\n\nData size: ${sizeInMB}MB\nlocalStorage limit: ~5-10MB\n\n⚠️ YOUR WORK WAS NOT SAVED!\n\nPlease:\n1. Export your map as PNG (backup)\n2. Remove some placed assets\n3. Try saving again\n\nTip: Use built-in assets instead of uploading custom images.`);
      } else {
        alert(`❌ Save failed: ${e.message}`);
      }
      
      return false;
    }
  },
  
  setupAutoSave() {
    this.autoSaveInterval = setInterval(() => this.save(), 30000);
  },
  
  stopAutoSave() {
    if (this.autoSaveInterval) {
      clearInterval(this.autoSaveInterval);
      this.autoSaveInterval = null;
    }
  },
  
  getStorageInfo() {
    try {
      const data = {
        worlds: this.worlds,
        lastSaved: new Date().toISOString()
      };
      const jsonData = JSON.stringify(data);
      const dataSize = new Blob([jsonData]).size;
      const dataSizeMB = (dataSize / (1024 * 1024)).toFixed(2);
      const dataSizeKB = (dataSize / 1024).toFixed(2);
      const percentUsed = ((dataSize / (5 * 1024 * 1024)) * 100).toFixed(1);
      
      return {
        sizeBytes: dataSize,
        sizeMB: dataSizeMB,
        sizeKB: dataSizeKB,
        percentUsed: percentUsed,
        isNearLimit: dataSize > 4 * 1024 * 1024
      };
    } catch (e) {
      console.error('Error getting storage info:', e);
      return null;
    }
  },
  
  setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        this.save();
      }
      if (e.key === 'Escape') {
        Modal.close();
      }
    });
  },
  
  showSaveIndicator() {
    const indicator = document.getElementById('saveIndicator');
    const text = document.getElementById('saveText');
    
    if (!indicator || !text) return;
    
    indicator.classList.add('saving');
    text.textContent = 'Saving...';
    
    setTimeout(() => {
      indicator.classList.remove('saving');
      indicator.classList.add('saved');
      text.textContent = 'All changes saved';
      
      setTimeout(() => {
        indicator.classList.remove('saved');
      }, 2000);
    }, 500);
  },
  
  createWorld(worldData) {
    const world = {
      id: 'world-' + Date.now(),
      ...worldData,
      locations: [],
      characters: [],
      factions: [],
      timeline: [],
      rules: [],
      themes: [],
      religions: [],
      fashions: [],
      magicSystems: [],
      languages: [],
      economies: [],
      politics: [],
      technologies: [],
      floraFauna: [],
      creatures: [],
      cuisines: [],
      artifacts: [],
      socialInteractions: [],
      hierarchies: [],
      etiquette: [],
      customModules: [],
      customModuleData: {},
      dashboardModules: [...DEFAULT_DASHBOARD_MODULES],
      lastEdited: new Date().toISOString()
    };
    this.worlds.push(world);
    this.save();
    return world;
  },
  
  openWorld(worldId) {
    this.currentWorld = this.worlds.find(w => w.id === worldId);
    if (this.currentWorld) {
      // Migration: Add creatures array if it doesn't exist
      if (!this.currentWorld.creatures) {
        this.currentWorld.creatures = [];
      }
      
      // Migration: Add dashboardModules if it doesn't exist
      if (!this.currentWorld.dashboardModules) {
        this.currentWorld.dashboardModules = [...DEFAULT_DASHBOARD_MODULES];
      }

      // Migration: Add customModules if it doesn't exist
      if (!this.currentWorld.customModules) {
        this.currentWorld.customModules = [];
        this.currentWorld.customModuleData = {};
      }
      
      this.save();
      Router.navigate('dashboard');
    }
  },
  
  deleteWorld(worldId) {
    this.worlds = this.worlds.filter(w => w.id !== worldId);
    this.save();
  },
  
  updateWorld(updates) {
    if (!this.currentWorld) return;
    Object.assign(this.currentWorld, updates);
    this.currentWorld.lastEdited = new Date().toISOString();
    this.save();
  },
  
  exportJSON() {
    const dataStr = JSON.stringify(this.worlds, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `worldforge-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }
};

// ========================================
// ROUTER
// ========================================
const Router = {
  navigate(view, module = null) {
    AppState.currentView = view;
    AppState.currentModule = module;
    
    // Update sidebar
    Sidebar.render();
    
    // Update breadcrumbs
    const breadcrumbs = document.getElementById('breadcrumbs');
    if (breadcrumbs) {
      if (view === 'library') {
        breadcrumbs.innerHTML = '<span>Home</span>';
      } else if (view === 'dashboard') {
        breadcrumbs.innerHTML = `<span>Home</span> / <span>${AppState.currentWorld?.name || 'World'}</span>`;
      } else if (view === 'module') {
        const moduleName = module.charAt(0).toUpperCase() + module.slice(1);
        breadcrumbs.innerHTML = `<span>Home</span> / <span>${AppState.currentWorld?.name || 'World'}</span> / <span>${moduleName}</span>`;
      }
    }
    
    // Render view
    if (view === 'library') {
      Views.renderLibrary();
    } else if (view === 'dashboard') {
      Views.renderDashboard();
    } else if (view === 'module') {
      Views.renderModule(module);
    }
  }
};

// ========================================
// SIDEBAR NAVIGATION
// ========================================
const Sidebar = {
  render() {
    const nav = document.getElementById('sidebarNav');
    const world = AppState.currentWorld;
    
    if (!world) {
      nav.innerHTML = `
        <div class="nav-section">
          <div class="nav-item ${AppState.currentView === 'library' ? 'active' : ''}" onclick="Router.navigate('library')">
            <span class="nav-icon">🏠</span>
            <span>Home</span>
          </div>
        </div>
      `;
      return;
    }
    
    nav.innerHTML = `
      <div class="nav-section">
        <div class="nav-item" onclick="Router.navigate('library')">
          <span class="nav-icon">🏠</span>
          <span>Home</span>
        </div>
        <div class="nav-item ${AppState.currentView === 'dashboard' ? 'active' : ''}" onclick="Router.navigate('dashboard')">
          <span class="nav-icon">📊</span>
          <span>Dashboard</span>
        </div>
      </div>
      
      <div class="nav-section">
        <div class="nav-section-title">Modules</div>
        <div class="nav-item ${AppState.currentModule === 'locations' ? 'active' : ''}" onclick="Router.navigate('module', 'locations')">
          <span class="nav-icon">📍</span>
          <span>Locations</span>
          <span class="nav-count">${world.locations.length}</span>
        </div>
        <div class="nav-item ${AppState.currentModule === 'characters' ? 'active' : ''}" onclick="Router.navigate('module', 'characters')">
          <span class="nav-icon">👤</span>
          <span>Characters</span>
          <span class="nav-count">${world.characters.length}</span>
        </div>
        <div class="nav-item ${AppState.currentModule === 'factions' ? 'active' : ''}" onclick="Router.navigate('module', 'factions')">
          <span class="nav-icon">⚔️</span>
          <span>Factions</span>
          <span class="nav-count">${world.factions.length}</span>
        </div>
        <div class="nav-item ${AppState.currentModule === 'timeline' ? 'active' : ''}" onclick="Router.navigate('module', 'timeline')">
          <span class="nav-icon">⏳</span>
          <span>Timeline</span>
          <span class="nav-count">${world.timeline.length}</span>
        </div>
        <div class="nav-item ${AppState.currentModule === 'rules' ? 'active' : ''}" onclick="Router.navigate('module', 'rules')">
          <span class="nav-icon">✨</span>
          <span>Rules</span>
          <span class="nav-count">${world.rules.length}</span>
        </div>
        <div class="nav-item ${AppState.currentModule === 'themes' ? 'active' : ''}" onclick="Router.navigate('module', 'themes')">
          <span class="nav-icon">🎭</span>
          <span>Themes</span>
          <span class="nav-count">${world.themes.length}</span>
        </div>
        <div class="nav-item ${AppState.currentModule === 'religions' ? 'active' : ''}" onclick="Router.navigate('module', 'religions')">
          <span class="nav-icon">🕊️</span>
          <span>Religion</span>
          <span class="nav-count">${world.religions.length}</span>
        </div>
        <div class="nav-item ${AppState.currentModule === 'fashions' ? 'active' : ''}" onclick="Router.navigate('module', 'fashions')">
          <span class="nav-icon">👗</span>
          <span>Fashion</span>
          <span class="nav-count">${world.fashions.length}</span>
        </div>
        <div class="nav-item ${AppState.currentModule === 'magicSystems' ? 'active' : ''}" onclick="Router.navigate('module', 'magicSystems')">
          <span class="nav-icon">✨</span>
          <span>Magic</span>
          <span class="nav-count">${world.magicSystems.length}</span>
        </div>
        <div class="nav-item ${AppState.currentModule === 'languages' ? 'active' : ''}" onclick="Router.navigate('module', 'languages')">
          <span class="nav-icon">📜</span>
          <span>Languages</span>
          <span class="nav-count">${world.languages.length}</span>
        </div>
        <div class="nav-item ${AppState.currentModule === 'economies' ? 'active' : ''}" onclick="Router.navigate('module', 'economies')">
          <span class="nav-icon">💰</span>
          <span>Economy</span>
          <span class="nav-count">${world.economies.length}</span>
        </div>
        <div class="nav-item ${AppState.currentModule === 'politics' ? 'active' : ''}" onclick="Router.navigate('module', 'politics')">
          <span class="nav-icon">⚖️</span>
          <span>Politics</span>
          <span class="nav-count">${world.politics.length}</span>
        </div>
        <div class="nav-item ${AppState.currentModule === 'technologies' ? 'active' : ''}" onclick="Router.navigate('module', 'technologies')">
          <span class="nav-icon">🔬</span>
          <span>Technology</span>
          <span class="nav-count">${world.technologies.length}</span>
        </div>
        <div class="nav-item ${AppState.currentModule === 'floraFauna' ? 'active' : ''}" onclick="Router.navigate('module', 'floraFauna')">
          <span class="nav-icon">🌿</span>
          <span>Flora & Fauna</span>
          <span class="nav-count">${world.floraFauna.length}</span>
        </div>
        <div class="nav-item ${AppState.currentModule === 'creatures' ? 'active' : ''}" onclick="Router.navigate('module', 'creatures')">
          <span class="nav-icon">🐉</span>
          <span>Animals & Creatures</span>
          <span class="nav-count">${world.creatures ? world.creatures.length : 0}</span>
        </div>
        <div class="nav-item ${AppState.currentModule === 'cuisines' ? 'active' : ''}" onclick="Router.navigate('module', 'cuisines')">
          <span class="nav-icon">🍽️</span>
          <span>Cuisine</span>
          <span class="nav-count">${world.cuisines.length}</span>
        </div>
        <div class="nav-item ${AppState.currentModule === 'artifacts' ? 'active' : ''}" onclick="Router.navigate('module', 'artifacts')">
          <span class="nav-icon">🗡️</span>
          <span>Artifacts</span>
          <span class="nav-count">${world.artifacts.length}</span>
        </div>
        <div class="nav-item ${AppState.currentModule === 'socialInteractions' ? 'active' : ''}" onclick="Router.navigate('module', 'socialInteractions')">
          <span class="nav-icon">🤝</span>
          <span>Social Interactions</span>
          <span class="nav-count">${world.socialInteractions ? world.socialInteractions.length : 0}</span>
        </div>
        <div class="nav-item ${AppState.currentModule === 'hierarchies' ? 'active' : ''}" onclick="Router.navigate('module', 'hierarchies')">
          <span class="nav-icon">👑</span>
          <span>Hierarchy</span>
          <span class="nav-count">${world.hierarchies ? world.hierarchies.length : 0}</span>
        </div>
        <div class="nav-item ${AppState.currentModule === 'etiquette' ? 'active' : ''}" onclick="Router.navigate('module', 'etiquette')">
          <span class="nav-icon">🎩</span>
          <span>Etiquette</span>
          <span class="nav-count">${world.etiquette ? world.etiquette.length : 0}</span>
        </div>
        ${world.customModules && world.customModules.length > 0 ? world.customModules.map(customMod => `
          <div class="nav-item ${AppState.currentModule === customMod.id ? 'active' : ''}" onclick="Router.navigate('module', '${customMod.id}')">
            <span class="nav-icon">${customMod.icon}</span>
            <span>${customMod.name}</span>
            <span class="nav-count">${world.customModuleData[customMod.id] ? world.customModuleData[customMod.id].length : 0}</span>
          </div>
        `).join('') : ''}
        <div class="nav-item ${AppState.currentModule === 'quickReference' ? 'active' : ''}" onclick="Router.navigate('module', 'quickReference')">
          <span class="nav-icon">📋</span>
          <span>Quick Reference</span>
        </div>
      </div>
    `;
  }
};


// ========================================
// DASHBOARD MANAGER
// ========================================
const DashboardManager = {
  renderStatCards() {
    const world = AppState.currentWorld;
    if (!world || !world.dashboardModules) return '';
    
    // Get modules that have dataKey (excludes quickReference and map)
    const modulesWithData = world.dashboardModules
      .map(moduleId => ALL_MODULES.find(m => m.id === moduleId))
      .filter(m => m && m.dataKey && m.id !== 'map');
    
    // Limit to first 5 for display, but render all for scrolling
    const statCards = modulesWithData.map(moduleDef => {
      const count = world[moduleDef.dataKey]?.length || 0;
      const label = moduleDef.title.toUpperCase();
      
      return `
        <div class="stat-card">
          <div class="stat-value">${count}</div>
          <div class="stat-label">${label}</div>
        </div>
      `;
    }).join('');
    
    return statCards;
  },
  
  renderModuleCards() {
    const world = AppState.currentWorld;
    if (!world || !world.dashboardModules) return '';
    
    return world.dashboardModules.map((moduleId, index) => {
      let moduleDef = ALL_MODULES.find(m => m.id === moduleId);
      let isCustom = false;
      
      // Check if it's a custom module
      if (!moduleDef && moduleId.startsWith('custom-')) {
        const customModule = world.customModules.find(m => m.id === moduleId);
        if (customModule) {
          moduleDef = {
            id: customModule.id,
            icon: customModule.icon,
            title: customModule.name,
            description: `Custom module with ${customModule.fields.length} fields`,
            dataKey: null
          };
          isCustom = true;
        }
      }
      
      if (!moduleDef) return '';
      
      const count = isCustom ? (world.customModuleData[moduleId]?.length || 0) : (moduleDef.dataKey ? (world[moduleDef.dataKey]?.length || 0) : 0);
      const countLabel = isCustom ? `${count} ${count === 1 ? 'entry' : 'entries'}` : this.getCountLabel(moduleDef.dataKey, count);
      
      return `
        <div class="module-card" 
             draggable="true" 
             data-module-id="${moduleId}"
             data-index="${index}"
             ondragstart="DashboardManager.handleDragStart(event)"
             ondragover="DashboardManager.handleDragOver(event)"
             ondrop="DashboardManager.handleDrop(event)"
             ondragend="DashboardManager.handleDragEnd(event)"
             onmouseenter="this.querySelector('.module-delete-btn').style.opacity='1'; this.querySelector('.module-delete-btn').style.background='#dc2626';"
             onmouseleave="this.querySelector('.module-delete-btn').style.opacity='0'; this.querySelector('.module-delete-btn').style.background='#dc2626';"
             style="cursor: move; position: relative;">
          <button class="module-delete-btn" 
                  onclick="event.stopPropagation(); DashboardManager.removeModule('${moduleId}')" 
                  title="Remove from dashboard"
                  onmouseover="this.style.transform='scale(1.1)'"
                  onmouseout="this.style.transform='scale(1)'"
                  aria-label="Remove ${moduleDef.title} from dashboard"
                  style="position: absolute; top: 0.5rem; right: 0.5rem; background: #dc2626; color: white; border: none; border-radius: 50%; width: 24px; height: 24px; font-size: 0.875rem; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10; transition: all 0.2s; font-weight: bold; opacity: 0;">
            ×
          </button>
          <div onclick="Router.navigate('module', '${moduleId}')" style="padding: 1rem;">
            <div class="module-icon">${moduleDef.icon}</div>
            <h3 class="module-title">${moduleDef.title}</h3>
            <p class="module-description">${moduleDef.description}</p>
            ${countLabel ? `<div class="module-count">${countLabel}</div>` : ''}
          </div>
        </div>
      `;
    }).join('');
  },
  
  getCountLabel(dataKey, count) {
    if (!dataKey) return '';
    
    const labels = {
      locations: 'locations',
      characters: 'characters',
      factions: 'factions',
      timeline: 'events',
      rules: 'rules',
      themes: 'themes',
      religions: 'religions',
      fashions: 'styles',
      magicSystems: 'systems',
      languages: 'languages',
      economies: 'economies',
      politics: 'systems',
      technologies: 'technologies',
      floraFauna: 'species',
      creatures: 'creatures',
      cuisines: 'dishes',
      artifacts: 'artifacts',
      socialInteractions: 'interactions',
      hierarchies: 'hierarchies',
      etiquette: 'rules'
    };
    
    return `${count} ${labels[dataKey] || 'items'}`;
  },
  
  removeModule(moduleId) {
    const world = AppState.currentWorld;
    if (!world) return;
    
    world.dashboardModules = world.dashboardModules.filter(id => id !== moduleId);
    AppState.save();
    Views.renderDashboard();
  },
    showAddModuleDialog() {
    const world = AppState.currentWorld;
    if (!world) return;
    
    const availableModules = ALL_MODULES.filter(m => !world.dashboardModules.includes(m.id));
    const availableCustomModules = (world.customModules || []).filter(m => !world.dashboardModules.includes(m.id));
    
    const modalContent = `
      <h2 style="margin-bottom: 1.5rem; font-size: 1.5rem;">Add Module to Dashboard</h2>
      
      <div style="margin-bottom: 1.5rem;">
        <button class="btn btn-primary" onclick="Modal.close(); CustomModuleManager.showCreateCustomModule();" style="width: 100%;">
          ✨ Create Custom Module
        </button>
      </div>
      
      ${availableCustomModules.length > 0 ? `
        <h3 style="margin-bottom: 1rem; font-size: 1.125rem; color: var(--gray-700);">Your Custom Modules</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem; max-height: 30vh; overflow-y: auto; margin-bottom: 1.5rem;">
          ${availableCustomModules.map(module => `
            <div class="module-card" 
                 onclick="DashboardManager.addModule('${module.id}')"
                 style="cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;"
                 onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 16px rgba(0,0,0,0.2)';"
                 onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='';">
              <div class="module-icon">${module.icon}</div>
              <h3 class="module-title">${module.name}</h3>
              <p class="module-description" style="font-size: 0.875rem;">Custom module with ${module.fields.length} fields</p>
            </div>
          `).join('')}
        </div>
      ` : ''}
      
      ${availableModules.length > 0 ? `
        <h3 style="margin-bottom: 1rem; font-size: 1.125rem; color: var(--gray-700);">Built-in Modules</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem; max-height: 30vh; overflow-y: auto;">
          ${availableModules.map(module => `
            <div class="module-card" 
                 onclick="DashboardManager.addModule('${module.id}')"
                 style="cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;"
                 onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 16px rgba(0,0,0,0.2)';"
                 onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='';">
              <div class="module-icon">${module.icon}</div>
              <h3 class="module-title">${module.title}</h3>
              <p class="module-description" style="font-size: 0.875rem;">${module.description}</p>
            </div>
          `).join('')}
        </div>
      ` : `<p style="text-align: center; color: var(--gray-600);">All built-in modules are already on your dashboard!</p>`}
    `;
    
    Modal.show(modalContent);
  },
  
  addModule(moduleId) {
    const world = AppState.currentWorld;
    if (!world) return;
    
    if (!world.dashboardModules.includes(moduleId)) {
      world.dashboardModules.push(moduleId);
      AppState.save();
      Views.renderDashboard();
    }
    
    Modal.close();
  },
  
  // Drag and Drop handlers
  draggedElement: null,
  draggedIndex: null,
  
  handleDragStart(e) {
    this.draggedElement = e.currentTarget;
    this.draggedIndex = parseInt(e.currentTarget.dataset.index);
    e.currentTarget.style.opacity = '0.5';
    e.dataTransfer.effectAllowed = 'move';
  },
  
  handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    const target = e.currentTarget;
    if (target !== this.draggedElement && target.classList.contains('module-card')) {
      const rect = target.getBoundingClientRect();
      const midpoint = rect.left + rect.width / 2;
      
      if (e.clientX < midpoint) {
        target.style.borderLeft = '3px solid var(--primary-color)';
        target.style.borderRight = '';
      } else {
        target.style.borderRight = '3px solid var(--primary-color)';
        target.style.borderLeft = '';
      }
    }
  },
  
  handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const target = e.currentTarget;
    target.style.borderLeft = '';
    target.style.borderRight = '';
    
    if (target === this.draggedElement) return;
    
    const targetIndex = parseInt(target.dataset.index);
    const world = AppState.currentWorld;
    
    if (!world || this.draggedIndex === null) return;
    
    // Reorder the modules array
    const modules = [...world.dashboardModules];
    const [movedModule] = modules.splice(this.draggedIndex, 1);
    
    const rect = target.getBoundingClientRect();
    const midpoint = rect.left + rect.width / 2;
    const insertIndex = e.clientX < midpoint ? targetIndex : targetIndex + 1;
    
    modules.splice(insertIndex, 0, movedModule);
    world.dashboardModules = modules;
    
    AppState.save();
    Views.renderDashboard();
  },
  
  handleDragEnd(e) {
    e.currentTarget.style.opacity = '1';
    
    // Clean up any border indicators
    document.querySelectorAll('.module-card').forEach(card => {
      card.style.borderLeft = '';
      card.style.borderRight = '';
    });
    
    this.draggedElement = null;
    this.draggedIndex = null;
  }
};
// ========================================
// CUSTOM MODULE MANAGER
// ========================================
const CustomModuleManager = {
  currentFields: [],
  
  showCreateCustomModule() {
    this.currentFields = [
      { id: 'field-' + Date.now(), label: 'Name', type: 'text', required: true }
    ];
    
    Modal.show(
      'Create Custom Module',
      `
        <div class="form-group">
          <label class="form-label">Module Name</label>
          <input type="text" class="form-input" id="customModuleName" placeholder="e.g., Artifacts, Spells, Vehicles">
        </div>
        
        <div class="form-group">
          <label class="form-label">Module Icon (Emoji)</label>
          <input type="text" class="form-input" id="customModuleIcon" placeholder="e.g., ⚔️, 🔮, 🚗" maxlength="2">
        </div>
        
        <div class="form-group">
          <label class="form-label">Fields</label>
          <div id="customFieldsList" style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1rem;">
            ${this.renderFieldsList()}
          </div>
          <button type="button" class="btn btn-secondary" onclick="CustomModuleManager.addField()" style="width: 100%;">
            + Add Field
          </button>
        </div>
      `,
      `
        <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
        <button class="btn btn-primary" onclick="CustomModuleManager.saveCustomModule()">Create Module</button>
      `
    );
  },
  
  renderFieldsList() {
    return this.currentFields.map((field, index) => `
      <div class="custom-field-row" data-field-id="${field.id}" style="display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem; background: var(--gray-100); border-radius: 0.5rem;">
        <span style="cursor: move; font-size: 1.25rem; color: var(--gray-600);" title="Drag to reorder">⋮⋮</span>
        <input type="text" 
               value="${field.label}" 
               onchange="CustomModuleManager.updateFieldLabel('${field.id}', this.value)"
               placeholder="Field label"
               style="flex: 1; padding: 0.5rem; border: 1px solid var(--gray-300); border-radius: 0.375rem; background: white; color: var(--text-color);">
        <select onchange="CustomModuleManager.updateFieldType('${field.id}', this.value)"
                style="padding: 0.5rem; border: 1px solid var(--gray-300); border-radius: 0.375rem; background: white; color: var(--text-color);">
          <option value="text" ${field.type === 'text' ? 'selected' : ''}>Text</option>
          <option value="textarea" ${field.type === 'textarea' ? 'selected' : ''}>Textarea</option>
          <option value="number" ${field.type === 'number' ? 'selected' : ''}>Number</option>
        </select>
        ${index > 0 ? `
          <button type="button" 
                  onclick="CustomModuleManager.removeField('${field.id}')"
                  style="background: #dc2626; color: white; border: none; border-radius: 50%; width: 28px; height: 28px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.125rem; font-weight: bold;"
                  title="Remove field">×</button>
        ` : ''}
      </div>
    `).join('');
  },
  
  addField() {
    this.currentFields.push({
      id: 'field-' + Date.now(),
      label: 'New Field',
      type: 'text',
      required: false
    });
    document.getElementById('customFieldsList').innerHTML = this.renderFieldsList();
    this.initFieldDragDrop();
  },
  
  removeField(fieldId) {
    this.currentFields = this.currentFields.filter(f => f.id !== fieldId);
    document.getElementById('customFieldsList').innerHTML = this.renderFieldsList();
    this.initFieldDragDrop();
  },
  
  updateFieldLabel(fieldId, label) {
    const field = this.currentFields.find(f => f.id === fieldId);
    if (field) field.label = label;
  },
  
  updateFieldType(fieldId, type) {
    const field = this.currentFields.find(f => f.id === fieldId);
    if (field) field.type = type;
  },
  
  initFieldDragDrop() {
    const fieldRows = document.querySelectorAll('.custom-field-row');
    fieldRows.forEach((row, index) => {
      row.setAttribute('draggable', 'true');
      row.dataset.index = index;
      
      row.addEventListener('dragstart', (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', row.innerHTML);
        row.style.opacity = '0.5';
        this.draggedFieldIndex = index;
      });
      
      row.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const targetIndex = parseInt(row.dataset.index);
        if (targetIndex !== this.draggedFieldIndex) {
          row.style.borderTop = '2px solid var(--primary-500)';
        }
      });
      
      row.addEventListener('dragleave', () => {
        row.style.borderTop = '';
      });
      
      row.addEventListener('drop', (e) => {
        e.preventDefault();
        row.style.borderTop = '';
        const targetIndex = parseInt(row.dataset.index);
        
        if (this.draggedFieldIndex !== targetIndex) {
          const draggedField = this.currentFields[this.draggedFieldIndex];
          this.currentFields.splice(this.draggedFieldIndex, 1);
          this.currentFields.splice(targetIndex, 0, draggedField);
          document.getElementById('customFieldsList').innerHTML = this.renderFieldsList();
          this.initFieldDragDrop();
        }
      });
      
      row.addEventListener('dragend', () => {
        row.style.opacity = '1';
        row.style.borderTop = '';
      });
    });
  },
  
  saveCustomModule() {
    const name = document.getElementById('customModuleName').value.trim();
    const icon = document.getElementById('customModuleIcon').value.trim();
    
    if (!name) {
      alert('Please enter a module name');
      return;
    }
    
    if (!icon) {
      alert('Please enter an icon emoji');
      return;
    }
    
    const customModule = {
      id: 'custom-' + Date.now(),
      name: name,
      icon: icon,
      type: 'custom',
      fields: this.currentFields.map(f => ({...f}))
    };
    
    const world = AppState.currentWorld;
    world.customModules.push(customModule);
    world.customModuleData[customModule.id] = [];
    
    // Add to dashboard
    if (!world.dashboardModules.includes(customModule.id)) {
      world.dashboardModules.push(customModule.id);
    }
    
    AppState.save();
    
    Modal.close();
    alert(`✅ Custom module "${name}" created successfully!`);
    
    // Refresh dashboard
    Views.renderDashboard();
  },
  
  getCustomModules() {
    const world = AppState.currentWorld;
    if (!world || !world.customModules) return [];
    return world.customModules;
  },
  
  renderCustomModuleView(moduleId) {
    const world = AppState.currentWorld;
    const customModule = world.customModules.find(m => m.id === moduleId);
    if (!customModule) return;
    
    const entries = world.customModuleData[moduleId] || [];
    
    const content = document.getElementById('mainContent');
    content.innerHTML = `
      <div class="module-header">
        <div>
          <h1 class="module-title">${customModule.icon} ${customModule.name}</h1>
          <p style="color: var(--gray-600);">Custom module with ${customModule.fields.length} fields</p>
        </div>
        <div style="display: flex; gap: 0.5rem;">
          <button class="btn btn-secondary" onclick="CustomModuleManager.deleteCustomModule('${moduleId}')" title="Delete Module">🗑️ Delete Module</button>
          <button class="btn btn-primary" onclick="CustomModuleManager.showAddEntry('${moduleId}')">+ Add ${customModule.name}</button>
        </div>
      </div>
      
      <div class="module-grid" style="margin-top: 2rem;">
        ${entries.map(entry => `
          <div class="card">
            <div class="card-header">
              ${entry.thumbnail ? `<img src="${entry.thumbnail}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 0.5rem 0.5rem 0 0; margin: -1rem -1rem 0.5rem -1rem;">` : ''}
              <h3 class="card-title">${entry.data[customModule.fields[0].id] || 'Untitled'}</h3>
            </div>
            <div class="card-body">
              ${customModule.fields.slice(1).map(field => `
                <p><strong>${field.label}:</strong> ${entry.data[field.id] || 'N/A'}</p>
              `).join('')}
              ${entry.images && entry.images.length > 0 ? `
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem;">
                  ${entry.images.slice(0, 3).map(img => `
                    <img src="${img}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 0.375rem; cursor: pointer;" onclick="openImageLightbox('${img}')">
                  `).join('')}
                  ${entry.images.length > 3 ? `<div style="width: 60px; height: 60px; background: var(--gray-200); border-radius: 0.375rem; display: flex; align-items: center; justify-content: center; font-size: 0.875rem; color: var(--gray-600);">+${entry.images.length - 3}</div>` : ''}
                </div>
              ` : ''}
            </div>
            <div class="card-actions">
              <button class="btn-icon" onclick="CustomModuleManager.showEditEntry('${moduleId}', '${entry.id}')" title="Edit">✏️</button>
              <button class="btn-icon" onclick="if(confirm('Delete this entry?')) CustomModuleManager.deleteEntry('${moduleId}', '${entry.id}')" title="Delete">🗑️</button>
            </div>
          </div>
        `).join('')}
        ${entries.length === 0 ? `
          <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--gray-600);">
            <p style="font-size: 1.125rem; margin-bottom: 0.5rem;">No entries yet</p>
            <p>Click "+ Add ${customModule.name}" to create your first entry</p>
          </div>
        ` : ''}
      </div>
    `;
  },
  
  showAddEntry(moduleId) {
    const world = AppState.currentWorld;
    const customModule = world.customModules.find(m => m.id === moduleId);
    if (!customModule) return;
    
    Modal.currentImages = [];
    Modal.show(
      `Add ${customModule.name}`,
      `
        ${customModule.fields.map(field => `
          <div class="form-group">
            <label class="form-label">${field.label}${field.required ? ' *' : ''}</label>
            ${field.type === 'textarea' ? `
              <textarea class="form-textarea" id="field-${field.id}" placeholder="Enter ${field.label.toLowerCase()}..."></textarea>
            ` : field.type === 'number' ? `
              <input type="number" class="form-input" id="field-${field.id}" placeholder="Enter ${field.label.toLowerCase()}">
            ` : `
              <input type="text" class="form-input" id="field-${field.id}" placeholder="Enter ${field.label.toLowerCase()}">
            `}
          </div>
        `).join('')}
        
        <div class="form-group">
          <label class="form-label">Thumbnail Image (Optional)</label>
          <div id="customModuleThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'customModuleThumbnail')" onclick="document.getElementById('customModuleThumbnailInput').click()">
            <div id="customModuleThumbnailPreview" style="display: none; margin-bottom: 1rem; position: relative;">
              <img id="customModuleThumbnailPreviewImg" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
              <button type="button" onclick="Modal.deleteThumbnail('customModule')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
            </div>
            <div id="customModuleThumbnailPlaceholder">
              <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
              <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
              <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
            </div>
          </div>
          <input type="file" id="customModuleThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'customModuleThumbnail')">
          <input type="hidden" id="customModuleThumbnail">
        </div>
      `,
      `
        <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
        <button class="btn btn-primary" onclick="CustomModuleManager.saveEntry('${moduleId}')">Add ${customModule.name}</button>
      `
    );
  },
  
  saveEntry(moduleId) {
    const world = AppState.currentWorld;
    const customModule = world.customModules.find(m => m.id === moduleId);
    if (!customModule) return;
    
    const data = {};
    for (const field of customModule.fields) {
      const value = document.getElementById(`field-${field.id}`).value;
      if (field.required && !value.trim()) {
        alert(`Please fill in the ${field.label} field`);
        return;
      }
      data[field.id] = value;
    }
    
    const entry = {
      id: 'entry-' + Date.now(),
      moduleId: moduleId,
      data: data,
      thumbnail: document.getElementById('customModuleThumbnail').value || ''
    };
    
    if (!world.customModuleData[moduleId]) {
      world.customModuleData[moduleId] = [];
    }
    world.customModuleData[moduleId].push(entry);
    AppState.save();
    Modal.close();
    this.renderCustomModuleView(moduleId);
  },
  
  showEditEntry(moduleId, entryId) {
    const world = AppState.currentWorld;
    const customModule = world.customModules.find(m => m.id === moduleId);
    const entry = world.customModuleData[moduleId].find(e => e.id === entryId);
    if (!customModule || !entry) return;
    
    Modal.currentImages = entry.images || [];
    Modal.show(
      `Edit ${customModule.name}`,
      `
        ${customModule.fields.map(field => `
          <div class="form-group">
            <label class="form-label">${field.label}${field.required ? ' *' : ''}</label>
            ${field.type === 'textarea' ? `
              <textarea class="form-textarea" id="field-${field.id}">${entry.data[field.id] || ''}</textarea>
            ` : field.type === 'number' ? `
              <input type="number" class="form-input" id="field-${field.id}" value="${entry.data[field.id] || ''}">
            ` : `
              <input type="text" class="form-input" id="field-${field.id}" value="${entry.data[field.id] || ''}">
            `}
          </div>
        `).join('')}
        
        <div class="form-group">
          <label class="form-label">Thumbnail Image (Optional)</label>
          <div id="customModuleThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'customModuleThumbnail')" onclick="document.getElementById('customModuleThumbnailInput').click()">
            <div id="customModuleThumbnailPreview" style="display: none; margin-bottom: 1rem; position: relative;">
              <img id="customModuleThumbnailPreviewImg" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
              <button type="button" onclick="Modal.deleteThumbnail('customModule')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
            </div>
            <div id="customModuleThumbnailPlaceholder">
              <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
              <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
              <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
            </div>
          </div>
          <input type="file" id="customModuleThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'customModuleThumbnail')">
          <input type="hidden" id="customModuleThumbnail">
        </div>
      `,
      `
        <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
        <button class="btn btn-primary" onclick="CustomModuleManager.updateEntry('${moduleId}', '${entryId}')">Save Changes</button>
      `
    );
  },
  
  updateEntry(moduleId, entryId) {
    const world = AppState.currentWorld;
    const customModule = world.customModules.find(m => m.id === moduleId);
    const entry = world.customModuleData[moduleId].find(e => e.id === entryId);
    if (!customModule || !entry) return;
    
    const data = {};
    for (const field of customModule.fields) {
      const value = document.getElementById(`field-${field.id}`).value;
      if (field.required && !value.trim()) {
        alert(`Please fill in the ${field.label} field`);
        return;
      }
      data[field.id] = value;
    }
    
    entry.data = data;
    entry.thumbnail = document.getElementById('customModuleThumbnail').value || '';
    AppState.save();
    Modal.close();
    this.renderCustomModuleView(moduleId);
  },
  
  deleteEntry(moduleId, entryId) {
    const world = AppState.currentWorld;
    world.customModuleData[moduleId] = world.customModuleData[moduleId].filter(e => e.id !== entryId);
    AppState.save();
    this.renderCustomModuleView(moduleId);
  },
  
  deleteCustomModule(moduleId) {
    if (!confirm('Are you sure you want to delete this custom module? All entries will be permanently removed.')) {
      return;
    }
    
    const world = AppState.currentWorld;
    
    // Remove from customModules array
    world.customModules = world.customModules.filter(m => m.id !== moduleId);
    
    // Remove data
    delete world.customModuleData[moduleId];
    
    // Remove from dashboard
    world.dashboardModules = world.dashboardModules.filter(id => id !== moduleId);
    
    AppState.save();
    
    // Navigate back to dashboard
    Router.navigate('dashboard');
  }
};

// ========================================
// VIEWS
// ========================================
const Views = {
  renderLibrary() {
    const content = document.getElementById('mainContent');
    
    content.innerHTML = `
      <div class="library-header">
        <h1 class="library-title">Your Worlds</h1>
        <p class="library-subtitle">Create and explore rich, interconnected fictional universes</p>
      </div>
      
      <button class="create-world-card" onclick="Modal.showCreateWorld()">
        <span style="font-size: 1.25rem;">+</span>
        <span>Create New World</span>
      </button>
      
      <div class="worlds-grid">
        
        ${AppState.worlds.map(world => `
          <div class="world-card" onclick="AppState.openWorld('${world.id}')">
            <div class="world-card-banner">
              ${world.banner ? `<img src="${world.banner}" alt="${world.name}">` : '🌍'}
            </div>
            <div class="world-card-content">
              <h3 class="world-card-title">${world.name}</h3>
              <div class="world-card-genres">
                ${world.genres.map(genre => `<span class="genre-badge">${genre}</span>`).join('')}
              </div>
              <p class="world-card-logline" title="${world.logline || 'No description yet'}">${world.logline || 'No description yet'}</p>
              <div class="world-card-meta">
                <span>Last edited: ${new Date(world.lastEdited).toLocaleDateString()}</span>
              </div>
              <button class="btn-primary" onclick="(function(e){e.stopPropagation(); AppState.openWorld('${world.id}');})(event)" style="margin-top: 1rem; width: 100%; padding: 0.75rem; font-weight: 600;">Open World →</button>
            </div>
            <div class="world-card-actions">
              <button class="btn-icon" onclick="event.stopPropagation(); WorldEditor.editWorldFromLibrary('${world.id}')" title="Edit world">✏️</button>
              <button class="btn-icon" onclick="event.stopPropagation(); if(confirm('Delete this world?')) { AppState.deleteWorld('${world.id}'); Views.renderLibrary(); }" title="Delete">🗑️</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },
  
  renderDashboard() {
    const world = AppState.currentWorld;
    if (!world) return;
    
    const content = document.getElementById('mainContent');
    
    content.innerHTML = `
      ${world.banner ? `
        <div class="world-banner" style="width: 100%; height: 200px; margin-bottom: 2rem; border-radius: 1rem; overflow: hidden; border: 2px solid var(--border-color);">
          <img src="${world.banner}" alt="${world.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
      ` : ''}
      <div class="dashboard-header">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem;">
          <h1 class="dashboard-world-title" style="margin: 0;">${world.name}</h1>
          <button class="btn-icon" onclick="WorldEditor.editWorldName()" title="Edit world name" style="width: 36px; height: 36px; font-size: 1rem;">✏️</button>
        </div>
        <p style="color: var(--gray-700); font-size: 1.125rem;">${world.logline || 'A world waiting to be discovered'}</p>
      </div>
      
      <div class="dashboard-stats">
        ${DashboardManager.renderStatCards()}
      </div>
      
      <div class="dashboard-modules" id="dashboardModules">
        ${DashboardManager.renderModuleCards()}
      </div>
      
      <div style="margin-top: 2rem;">
        <button onclick="DashboardManager.showAddModuleDialog()" 
                style="padding: 1rem 2rem; font-size: 1.125rem; font-weight: 600; background: var(--primary-color); color: var(--text-color); border: 2px solid var(--black); border-radius: 50px; cursor: pointer; transition: all 0.2s; box-shadow: 4px 4px 0 var(--black); display: inline-flex; align-items: center; gap: 0.5rem;"
                onmouseover="this.style.transform='translate(-2px, -2px)'; this.style.boxShadow='6px 6px 0 var(--black)'"
                onmouseout="this.style.transform='translate(0, 0)'; this.style.boxShadow='4px 4px 0 var(--black)'"
                aria-label="Add module to dashboard">
          <span style="font-size: 1.25rem;">➕</span>
          <span>Add Module</span>
        </button>
      </div>
    `;
  },
  
  renderModule(module) {
    const world = AppState.currentWorld;
    if (!world) return;
    
    const content = document.getElementById('mainContent');
    
    if (module === 'locations') {
      this.renderLocations();
    } else if (module === 'characters') {
      this.renderCharacters();
    } else if (module === 'factions') {
      this.renderFactions();
    } else if (module === 'timeline') {
      this.renderTimeline();
    } else if (module === 'rules') {
      this.renderRules();
    } else if (module === 'themes') {
      this.renderThemes();
    } else if (module === 'religions') {
      this.renderReligions();
    } else if (module === 'fashions') {
      this.renderFashions();
    } else if (module === 'magicSystems') {
      this.renderMagicSystems();
    } else if (module === 'languages') {
      this.renderLanguages();
    } else if (module === 'economies') {
      this.renderEconomies();
    } else if (module === 'politics') {
      this.renderPolitics();
    } else if (module === 'technologies') {
      this.renderTechnologies();
    } else if (module === 'floraFauna') {
      this.renderFloraFauna();
    } else if (module === 'creatures') {
      this.renderCreatures();
    } else if (module === 'cuisines') {
      this.renderCuisines();
    } else if (module === 'artifacts') {
      this.renderArtifacts();
    } else if (module === 'socialInteractions') {
      this.renderSocialInteractions();
    } else if (module === 'hierarchies') {
      this.renderHierarchies();
    } else if (module === 'etiquette') {
      this.renderEtiquette();
    } else if (module === 'quickReference') {
      this.renderQuickReference();
    } else if (module.startsWith('custom-')) {
      CustomModuleManager.renderCustomModuleView(module);
    }
  },
  
  
  renderLocations() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    
    content.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Locations 📍</h2>
          <p style="color: var(--gray-600);">Places, cultures, and resources in your world</p>
        </div>
        <button class="btn btn-primary" onclick="Modal.showAddLocation()">+ Add Location</button>
      </div>
      
      <div class="cards-grid">
        ${world.locations.map(loc => `
          <div class="card">
            ${loc.thumbnail ? `
              <div style="width: 100%; height: 200px; overflow: hidden; border-radius: 0.5rem 0.5rem 0 0; margin-bottom: 1rem;">
                <img src="${loc.thumbnail}" alt="${loc.name}" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            ` : ''}
            <div class="card-header">
              <div>
                <h3 class="card-title">${loc.name}</h3>
                <div style="font-size: 0.875rem; color: var(--gray-600); margin-top: 0.25rem;">${loc.type}</div>
              </div>
              <div class="card-actions">
                <button class="btn-icon" onclick="Modal.showEditLocation('${loc.id}')" title="Edit">✏️</button>
                <button class="btn-icon" onclick="Modal.duplicateLocation('${loc.id}')" title="Duplicate">📋</button>
                <button class="btn-icon" onclick="if(confirm('Delete?')) { AppState.currentWorld.locations = AppState.currentWorld.locations.filter(l => l.id !== '${loc.id}'); AppState.save(); Views.renderModule('locations'); }" title="Delete">🗑️</button>
              </div>
            </div>
            <div class="card-body">
              <p style="margin-bottom: 1rem;">${loc.description}</p>
              <div style="font-size: 0.875rem;">
                <div style="margin-bottom: 0.5rem;"><strong>Culture:</strong> ${loc.culture}</div>
                <div style="margin-bottom: 0.5rem;"><strong>Resources:</strong> ${loc.resources}</div>
                <div><strong>Population:</strong> ${loc.population}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },
  
  renderCharacters() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    
    content.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Characters 👤</h2>
          <p style="color: var(--gray-600);">People who shape your world</p>
        </div>
        <button class="btn btn-primary" onclick="Modal.showAddCharacter()">+ Add Character</button>
      </div>
      
      <div class="cards-grid">
        ${world.characters.map(char => `
          <div class="card">
            ${char.thumbnail ? `
              <div style="width: 100%; height: 200px; overflow: hidden; border-radius: 0.5rem 0.5rem 0 0; margin-bottom: 1rem;">
                <img src="${char.thumbnail}" alt="${char.name}" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            ` : ''}
            <div class="card-header">
              <div>
                <h3 class="card-title">${char.name}</h3>
                <div style="font-size: 0.875rem; color: var(--gray-600); margin-top: 0.25rem;">${char.role}</div>
              </div>
              <div class="card-actions">
                <button class="btn-icon" onclick="Modal.showEditCharacter('${char.id}')" title="Edit">✏️</button>
                <button class="btn-icon" onclick="Modal.duplicateCharacter('${char.id}')" title="Duplicate">📋</button>
                <button class="btn-icon" onclick="if(confirm('Delete?')) { AppState.currentWorld.characters = AppState.currentWorld.characters.filter(c => c.id !== '${char.id}'); AppState.save(); Views.renderModule('characters'); }" title="Delete">🗑️</button>
              </div>
            </div>
            <div class="card-body">
              <p style="margin-bottom: 1rem;">${char.description}</p>
              <div style="font-size: 0.875rem;">
                <div style="margin-bottom: 0.5rem;"><strong>Background:</strong> ${char.background}</div>
                <div style="margin-bottom: 0.5rem;"><strong>Personality:</strong> ${char.personality}</div>
                <div><strong>Relationships:</strong> ${char.relationships}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },
  
  renderFactions() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    
    content.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Factions ⚔️</h2>
          <p style="color: var(--gray-600);">Organizations and power structures</p>
        </div>
        <button class="btn btn-primary" onclick="Modal.showAddFaction()">+ Add Faction</button>
      </div>
      
      <div class="cards-grid">
        ${world.factions.map(fac => `
          <div class="card">
            ${fac.thumbnail ? `
              <div style="width: 100%; height: 200px; overflow: hidden; border-radius: 0.5rem 0.5rem 0 0; margin-bottom: 1rem;">
                <img src="${fac.thumbnail}" alt="${fac.name}" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            ` : ''}
            <div class="card-header">
              <div>
                <h3 class="card-title">${fac.name}</h3>
                <div style="font-size: 0.875rem; color: var(--gray-600); margin-top: 0.25rem;">${fac.type}</div>
              </div>
              <div class="card-actions">
                <button class="btn-icon" onclick="Modal.showEditFaction('${fac.id}')" title="Edit">✏️</button>
                <button class="btn-icon" onclick="Modal.duplicateFaction('${fac.id}')" title="Duplicate">📋</button>
                <button class="btn-icon" onclick="if(confirm('Delete?')) { AppState.currentWorld.factions = AppState.currentWorld.factions.filter(f => f.id !== '${fac.id}'); AppState.save(); Views.renderModule('factions'); }" title="Delete">🗑️</button>
              </div>
            </div>
            <div class="card-body">
              <p style="margin-bottom: 1rem;">${fac.description}</p>
              <div style="font-size: 0.875rem;">
                <div style="margin-bottom: 0.5rem;"><strong>Goals:</strong> ${fac.goals}</div>
                <div style="margin-bottom: 0.5rem;"><strong>Resources:</strong> ${fac.resources}</div>
                <div style="margin-bottom: 0.5rem;"><strong>Allies:</strong> ${fac.allies}</div>
                <div><strong>Enemies:</strong> ${fac.enemies}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },
  
  renderTimeline() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    
    content.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Timeline ⏳</h2>
          <p style="color: var(--gray-600);">Chronicle the history of your world</p>
        </div>
        <button class="btn btn-primary" onclick="Modal.showAddEvent()">+ Add Event</button>
      </div>
      
      <div class="cards-grid">
        ${world.timeline.map(event => `
          <div class="card">
            <div class="card-header">
              <div>
                <h3 class="card-title">${event.name}</h3>
                <div style="font-size: 0.875rem; color: var(--gray-600); margin-top: 0.25rem;">${event.date}</div>
              </div>
              <div class="card-actions">
                <button class="btn-icon" onclick="Modal.showEditEvent('${event.id}')" title="Edit">✏️</button>
                <button class="btn-icon" onclick="Modal.duplicateEvent('${event.id}')" title="Duplicate">📋</button>
                <button class="btn-icon" onclick="if(confirm('Delete?')) { AppState.currentWorld.events = AppState.currentWorld.events.filter(e => e.id !== '${event.id}'); AppState.save(); Views.renderModule('events'); }" title="Delete">🗑️</button>
              </div>
            </div>
            <div class="card-body">
              <p style="margin-bottom: 1rem;">${event.description}</p>
              <div style="font-size: 0.875rem;">
                <div><strong>Impact:</strong> ${event.impact}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },
  
  renderRules() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    
    content.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Rules ✨</h2>
          <p style="color: var(--gray-600);">Magic, technology, and natural laws</p>
        </div>
        <button class="btn btn-primary" onclick="Modal.showAddRule()">+ Add Rule</button>
      </div>
      
      <div class="cards-grid">
        ${world.rules.map(rule => `
          <div class="card">
            <div class="card-header">
              <div>
                <h3 class="card-title">${rule.name}</h3>
                <div style="font-size: 0.875rem; color: var(--gray-600); margin-top: 0.25rem;">${rule.category}</div>
              </div>
              <div class="card-actions">
                <button class="btn-icon" onclick="Modal.showEditRule('${rule.id}')" title="Edit">✏️</button>
                <button class="btn-icon" onclick="Modal.duplicateRule('${rule.id}')" title="Duplicate">📋</button>
                <button class="btn-icon" onclick="if(confirm('Delete?')) { AppState.currentWorld.rules = AppState.currentWorld.rules.filter(r => r.id !== '${rule.id}'); AppState.save(); Views.renderModule('rules'); }" title="Delete">🗑️</button>
              </div>
            </div>
            <div class="card-body">
              <p>${rule.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },
  
  renderThemes() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    
    content.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Themes 🎭</h2>
          <p style="color: var(--gray-600);">Central themes and narrative tensions</p>
        </div>
        <button class="btn btn-primary" onclick="Modal.showAddTheme()">+ Add Theme</button>
      </div>
      
      <div class="cards-grid">
        ${world.themes.map(theme => `
          <div class="card">
            ${theme.image ? `<div style="width: 100%; height: 200px; overflow: hidden; border-radius: 8px 8px 0 0;"><img src="${theme.image}" alt="${theme.name}" style="width: 100%; height: 100%; object-fit: cover;"></div>` : ''}
            <div class="card-header">
              <div>
                <h3 class="card-title">${theme.name}</h3>
              </div>
              <div class="card-actions">
                <button class="btn-icon" onclick="Modal.showEditTheme('${theme.id}')" title="Edit">✏️</button>
                <button class="btn-icon" onclick="Modal.duplicateTheme('${theme.id}')" title="Duplicate">📋</button>
                <button class="btn-icon" onclick="if(confirm('Delete?')) { AppState.currentWorld.themes = AppState.currentWorld.themes.filter(t => t.id !== '${theme.id}'); AppState.save(); Views.renderModule('themes'); }" title="Delete">🗑️</button>
              </div>
            </div>
            <div class="card-body">
              <p>${theme.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },
  
  renderReligions() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    content.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Religion & Belief 🕊️</h2>
          <p style="color: var(--gray-600);">Gods, faiths, and spiritual systems</p>
        </div>
        <button class="btn btn-primary" onclick="Modal.showAddReligion()">+ Add Religion</button>
      </div>
      <div class="cards-grid">
        ${world.religions.map(rel => `
          <div class="card">
            <div class="card-header">
              <div>
                <h3 class="card-title">${rel.name}</h3>
                <div style="font-size: 0.875rem; color: var(--gray-600); margin-top: 0.25rem;">${rel.domain}</div>
              </div>
              <div class="card-actions">
                <button class="btn-icon" onclick="Modal.showEditReligion('${rel.id}')" title="Edit">✏️</button>
                <button class="btn-icon" onclick="Modal.duplicateReligion('${rel.id}')" title="Duplicate">📋</button>
                <button class="btn-icon" onclick="if(confirm('Delete?')) { AppState.currentWorld.religions = AppState.currentWorld.religions.filter(r => r.id !== '${rel.id}'); AppState.save(); Views.renderModule('religions'); }" title="Delete">🗑️</button>
              </div>
            </div>
            <div class="card-body">
              <p style="margin-bottom: 1rem;">${rel.description}</p>
              <div style="font-size: 0.875rem;">
                <div style="margin-bottom: 0.5rem;"><strong>Practices:</strong> ${rel.practices}</div>
                <div style="margin-bottom: 0.5rem;"><strong>Followers:</strong> ${rel.followers}</div>
                <div><strong>Sacred Sites:</strong> ${rel.sites}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderFashions() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    content.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Fashion & Style 👗</h2>
          <p style="color: var(--gray-600);">Clothing, accessories, and cultural aesthetics</p>
        </div>
        <button class="btn btn-primary" onclick="Modal.showAddFashion()">+ Add Fashion</button>
      </div>
      <div class="cards-grid">
        ${world.fashions.map(fash => `
          <div class="card">
            ${fash.thumbnail ? `
              <div style="width: 100%; height: 200px; overflow: hidden; border-radius: 0.5rem 0.5rem 0 0; margin-bottom: 1rem;">
                <img src="${fash.thumbnail}" alt="${fash.name}" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            ` : ''}
            <div class="card-header">
              <div>
                <h3 class="card-title">${fash.name}</h3>
                <div style="font-size: 0.875rem; color: var(--gray-600); margin-top: 0.25rem;">${fash.culture}</div>
              </div>
              <div class="card-actions">
                <button class="btn-icon" onclick="Modal.showEditFashion('${fash.id}')" title="Edit">✏️</button>
                <button class="btn-icon" onclick="Modal.duplicateFashion('${fash.id}')" title="Duplicate">📋</button>
                <button class="btn-icon" onclick="if(confirm('Delete?')) { AppState.currentWorld.fashion = AppState.currentWorld.fashion.filter(f => f.id !== '${fash.id}'); AppState.save(); Views.renderModule('fashion'); }" title="Delete">🗑️</button>
              </div>
            </div>
            <div class="card-body">
              ${fash.images && fash.images.length > 0 ? `
                <div class="card-images">
                  ${fash.images.map((img, index) => `
                    <div class="card-image">
                      <img src="${img}" alt="${fash.name}" onclick="openImageLightbox(this.src)">
                      <button class="delete-card-image" onclick="deleteFashionImage('${fash.id}', ${index})" title="Delete image">×</button>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
              <p style="margin-bottom: 1rem;">${fash.description}</p>
              <div style="font-size: 0.875rem;">
                <div style="margin-bottom: 0.5rem;"><strong>Materials:</strong> ${fash.materials}</div>
                <div style="margin-bottom: 0.5rem;"><strong>Colors:</strong> ${fash.colors}</div>
                <div><strong>Significance:</strong> ${fash.significance}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderMagicSystems() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    content.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Magic Systems ✨</h2>
          <p style="color: var(--gray-600);">Rules, limitations, and powers of magic</p>
        </div>
        <button class="btn btn-primary" onclick="Modal.showAddMagicSystem()">+ Add Magic System</button>
      </div>
      <div class="cards-grid">
        ${world.magicSystems.map(mag => `
          <div class="card">
            ${mag.thumbnail ? `
              <div style="width: 100%; height: 200px; overflow: hidden; border-radius: 0.5rem 0.5rem 0 0; margin-bottom: 1rem;">
                <img src="${mag.thumbnail}" alt="${mag.name}" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            ` : ''}
            <div class="card-header">
              <div>
                <h3 class="card-title">${mag.name}</h3>
                <div style="font-size: 0.875rem; color: var(--gray-600); margin-top: 0.25rem;">${mag.type}</div>
              </div>
              <div class="card-actions">
                <button class="btn-icon" onclick="Modal.showEditMagicSystem('${mag.id}')" title="Edit">✏️</button>
                <button class="btn-icon" onclick="Modal.duplicateMagicSystem('${mag.id}')" title="Duplicate">📋</button>
                <button class="btn-icon" onclick="if(confirm('Delete?')) { AppState.currentWorld.magicSystems = AppState.currentWorld.magicSystems.filter(m => m.id !== '${mag.id}'); AppState.save(); Views.renderModule('magicSystems'); }" title="Delete">🗑️</button>
              </div>
            </div>
            <div class="card-body">
              <p style="margin-bottom: 1rem;">${mag.description}</p>
              <div style="font-size: 0.875rem;">
                <div style="margin-bottom: 0.5rem;"><strong>Source:</strong> ${mag.source}</div>
                <div style="margin-bottom: 0.5rem;"><strong>Limitations:</strong> ${mag.limitations}</div>
                <div><strong>Cost:</strong> ${mag.cost}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderLanguages() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    content.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Languages 📜</h2>
          <p style="color: var(--gray-600);">Tongues, dialects, and writing systems</p>
        </div>
        <button class="btn btn-primary" onclick="Modal.showAddLanguage()">+ Add Language</button>
      </div>
      <div class="cards-grid">
        ${world.languages.map(lang => `
          <div class="card">
            <div class="card-header">
              <div>
                <h3 class="card-title">${lang.name}</h3>
                <div style="font-size: 0.875rem; color: var(--gray-600); margin-top: 0.25rem;">${lang.speakers}</div>
              </div>
              <div class="card-actions">
                <button class="btn-icon" onclick="Modal.showEditLanguage('${lang.id}')" title="Edit">✏️</button>
                <button class="btn-icon" onclick="Modal.duplicateLanguage('${lang.id}')" title="Duplicate">📋</button>
                <button class="btn-icon" onclick="if(confirm('Delete?')) { AppState.currentWorld.languages = AppState.currentWorld.languages.filter(l => l.id !== '${lang.id}'); AppState.save(); Views.renderModule('languages'); }" title="Delete">🗑️</button>
              </div>
            </div>
            <div class="card-body">
              <p style="margin-bottom: 1rem;">${lang.description}</p>
              <div style="font-size: 0.875rem;">
                <div style="margin-bottom: 0.5rem;"><strong>Writing System:</strong> ${lang.writing}</div>
                <div style="margin-bottom: 0.5rem;"><strong>Key Phrases:</strong> ${lang.phrases}</div>
                <div><strong>Related Languages:</strong> ${lang.related}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderEconomies() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    content.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Economy & Trade 💰</h2>
          <p style="color: var(--gray-600);">Currency, commerce, and resources</p>
        </div>
        <button class="btn btn-primary" onclick="Modal.showAddEconomy()">+ Add Economy</button>
      </div>
      <div class="cards-grid">
        ${world.economies.map(econ => `
          <div class="card">
            <div class="card-header">
              <div>
                <h3 class="card-title">${econ.name}</h3>
                <div style="font-size: 0.875rem; color: var(--gray-600); margin-top: 0.25rem;">${econ.type}</div>
              </div>
              <div class="card-actions">
                <button class="btn-icon" onclick="Modal.showEditEconomy('${econ.id}')" title="Edit">✏️</button>
                <button class="btn-icon" onclick="Modal.duplicateEconomy('${econ.id}')" title="Duplicate">📋</button>
                <button class="btn-icon" onclick="if(confirm('Delete?')) { AppState.currentWorld.economies = AppState.currentWorld.economies.filter(e => e.id !== '${econ.id}'); AppState.save(); Views.renderModule('economies'); }" title="Delete">🗑️</button>
              </div>
            </div>
            <div class="card-body">
              <p style="margin-bottom: 1rem;">${econ.description}</p>
              <div style="font-size: 0.875rem;">
                <div style="margin-bottom: 0.5rem;"><strong>Currency:</strong> ${econ.currency}</div>
                <div style="margin-bottom: 0.5rem;"><strong>Major Exports:</strong> ${econ.exports}</div>
                <div><strong>Trade Routes:</strong> ${econ.routes}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderPolitics() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    content.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Politics & Government ⚖️</h2>
          <p style="color: var(--gray-600);">Power structures, laws, and governance</p>
        </div>
        <button class="btn btn-primary" onclick="Modal.showAddPolitics()">+ Add Political System</button>
      </div>
      <div class="cards-grid">
        ${world.politics.map(pol => `
          <div class="card">
            ${pol.image ? `<div style="width: 100%; height: 200px; overflow: hidden; border-radius: 8px 8px 0 0;"><img src="${pol.image}" alt="${pol.name}" style="width: 100%; height: 100%; object-fit: cover;"></div>` : ''}
            <div class="card-header">
              <div>
                <h3 class="card-title">${pol.name}</h3>
                <div style="font-size: 0.875rem; color: var(--gray-600); margin-top: 0.25rem;">${pol.type}</div>
              </div>
              <div class="card-actions">
                <button class="btn-icon" onclick="Modal.showEditPolitics('${pol.id}')" title="Edit">✏️</button>
                <button class="btn-icon" onclick="Modal.duplicatePolitics('${pol.id}')" title="Duplicate">📋</button>
                <button class="btn-icon" onclick="if(confirm('Delete?')) { AppState.currentWorld.politics = AppState.currentWorld.politics.filter(p => p.id !== '${pol.id}'); AppState.save(); Views.renderModule('politics'); }" title="Delete">🗑️</button>
              </div>
            </div>
            <div class="card-body">
              <p style="margin-bottom: 1rem;">${pol.description}</p>
              <div style="font-size: 0.875rem;">
                <div style="margin-bottom: 0.5rem;"><strong>Leaders:</strong> ${pol.leaders}</div>
                <div style="margin-bottom: 0.5rem;"><strong>Key Laws:</strong> ${pol.laws}</div>
                <div><strong>Current Conflicts:</strong> ${pol.conflicts}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderTechnologies() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    content.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Technology & Science 🔬</h2>
          <p style="color: var(--gray-600);">Inventions, discoveries, and scientific understanding</p>
        </div>
        <button class="btn btn-primary" onclick="Modal.showAddTechnology()">+ Add Technology</button>
      </div>
      <div class="cards-grid">
        ${world.technologies.map(tech => `
          <div class="card">
            ${tech.thumbnail ? `
              <div style="width: 100%; height: 200px; overflow: hidden; border-radius: 0.5rem 0.5rem 0 0; margin-bottom: 1rem;">
                <img src="${tech.thumbnail}" alt="${tech.name}" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            ` : ''}
            <div class="card-header">
              <div>
                <h3 class="card-title">${tech.name}</h3>
                <div style="font-size: 0.875rem; color: var(--gray-600); margin-top: 0.25rem;">${tech.category}</div>
              </div>
              <div class="card-actions">
                <button class="btn-icon" onclick="Modal.showEditTechnology('${tech.id}')" title="Edit">✏️</button>
                <button class="btn-icon" onclick="Modal.duplicateTechnology('${tech.id}')" title="Duplicate">📋</button>
                <button class="btn-icon" onclick="if(confirm('Delete?')) { AppState.currentWorld.technologies = AppState.currentWorld.technologies.filter(t => t.id !== '${tech.id}'); AppState.save(); Views.renderModule('technologies'); }" title="Delete">🗑️</button>
              </div>
            </div>
            <div class="card-body">
              ${tech.images && tech.images.length > 0 ? `
                <div class="card-images">
                  ${tech.images.map((img, index) => `
                    <div class="card-image">
                      <img src="${img}" alt="${tech.name}" onclick="openImageLightbox(this.src)">
                      <button class="delete-card-image" onclick="deleteTechnologyImage('${tech.id}', ${index})" title="Delete image">×</button>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
              <p style="margin-bottom: 1rem;">${tech.description}</p>
              <div style="font-size: 0.875rem;">
                <div style="margin-bottom: 0.5rem;"><strong>Function:</strong> ${tech.function}</div>
                <div style="margin-bottom: 0.5rem;"><strong>Inventor:</strong> ${tech.inventor}</div>
                <div><strong>Impact:</strong> ${tech.impact}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderFloraFauna() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    content.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Flora & Fauna 🌿</h2>
          <p style="color: var(--gray-600);">Plants, animals, and creatures</p>
        </div>
        <button class="btn btn-primary" onclick="Modal.showAddFloraFauna()">+ Add Species</button>
      </div>
      <div class="cards-grid">
        ${world.floraFauna.map(species => `
          <div class="card">
            ${species.thumbnail ? `
              <div style="width: 100%; height: 200px; overflow: hidden; border-radius: 0.5rem 0.5rem 0 0; margin-bottom: 1rem;">
                <img src="${species.thumbnail}" alt="${species.name}" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            ` : ''}
            <div class="card-header">
              <div>
                <h3 class="card-title">${species.name}</h3>
                <div style="font-size: 0.875rem; color: var(--gray-600); margin-top: 0.25rem;">${species.type}</div>
              </div>
              <div class="card-actions">
                <button class="btn-icon" onclick="Modal.showEditFloraFauna('${species.id}')" title="Edit">✏️</button>
                <button class="btn-icon" onclick="Modal.duplicateFloraFauna('${species.id}')" title="Duplicate">📋</button>
                <button class="btn-icon" onclick="if(confirm('Delete?')) { AppState.currentWorld.floraFauna = AppState.currentWorld.floraFauna.filter(f => f.id !== '${species.id}'); AppState.save(); Views.renderModule('floraFauna'); }" title="Delete">🗑️</button>
              </div>
            </div>
            <div class="card-body">
              ${species.images && species.images.length > 0 ? `
                <div class="card-images">
                  ${species.images.map((img, index) => `
                    <div class="card-image">
                      <img src="${img}" alt="${species.name}" onclick="openImageLightbox(this.src)">
                      <button class="delete-card-image" onclick="deleteFloraFaunaImage('${species.id}', ${index})" title="Delete image">×</button>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
              <p style="margin-bottom: 1rem;">${species.description}</p>
              <div style="font-size: 0.875rem;">
                <div style="margin-bottom: 0.5rem;"><strong>Habitat:</strong> ${species.habitat}</div>
                <div style="margin-bottom: 0.5rem;"><strong>Uses:</strong> ${species.uses}</div>
                <div><strong>Danger Level:</strong> ${species.danger}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },
  
  renderCreatures() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    content.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Animals & Creatures 🐉</h2>
          <p style="color: var(--gray-600);">Document the fauna and beasts of your world</p>
        </div>
        <button class="btn btn-primary" onclick="Modal.showAddCreature()">+ Add Creature</button>
      </div>
      <div class="cards-grid">
        ${world.creatures.map(creature => `
          <div class="card">
            ${creature.thumbnail ? `
              <div style="width: 100%; height: 200px; overflow: hidden; border-radius: 0.5rem 0.5rem 0 0; margin-bottom: 1rem;">
                <img src="${creature.thumbnail}" alt="${creature.name}" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            ` : ''}
            <div class="card-header">
              <div>
                <h3 class="card-title">${creature.name}</h3>
                <div style="font-size: 0.875rem; color: var(--gray-600); margin-top: 0.25rem;">${creature.type}</div>
              </div>
              <div class="card-actions">
                <button class="btn-icon" onclick="Modal.showEditCreature('${creature.id}')" title="Edit">✏️</button>
                <button class="btn-icon" onclick="Modal.duplicateCreature('${creature.id}')" title="Duplicate">📋</button>
                <button class="btn-icon" onclick="if(confirm('Delete this creature?')) { AppState.currentWorld.creatures = AppState.currentWorld.creatures.filter(c => c.id !== '${creature.id}'); AppState.save(); Views.renderModule('creatures'); }" title="Delete">🗑️</button>
              </div>
            </div>
            <div class="card-body">
              ${creature.images && creature.images.length > 0 ? `
                <div class="card-images">
                  ${creature.images.map((img, index) => `
                    <div class="card-image">
                      <img src="${img}" alt="${creature.name}" onclick="openImageLightbox(this.src)">
                      <button class="delete-card-image" onclick="deleteCreatureImage('${creature.id}', ${index})" title="Delete image">×</button>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
              <p style="margin-bottom: 1rem;">${creature.description}</p>
              <div style="font-size: 0.875rem;">
                <div style="margin-bottom: 0.5rem;"><strong>Habitat:</strong> ${creature.habitat}</div>
                <div style="margin-bottom: 0.5rem;"><strong>Diet:</strong> ${creature.diet}</div>
                <div style="margin-bottom: 0.5rem;"><strong>Behavior:</strong> ${creature.behavior}</div>
                <div style="margin-bottom: 0.5rem;"><strong>Special Abilities:</strong> ${creature.abilities}</div>
                <div style="margin-bottom: 0.5rem;"><strong>Danger Level:</strong> ${creature.danger}</div>
                <div><strong>Population:</strong> ${creature.population}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },
  
  renderCuisines() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    content.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Cuisine & Food 🍽️</h2>
          <p style="color: var(--gray-600);">Dishes, ingredients, and culinary traditions</p>
        </div>
        <button class="btn btn-primary" onclick="Modal.showAddCuisine()">+ Add Cuisine</button>
      </div>
      <div class="cards-grid">
        ${world.cuisines.map(cuisine => `
          <div class="card">
            ${cuisine.thumbnail ? `
              <div style="width: 100%; height: 200px; overflow: hidden; border-radius: 0.5rem 0.5rem 0 0; margin-bottom: 1rem;">
                <img src="${cuisine.thumbnail}" alt="${cuisine.name}" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            ` : ''}
            <div class="card-header">
              <div>
                <h3 class="card-title">${cuisine.name}</h3>
                <div style="font-size: 0.875rem; color: var(--gray-600); margin-top: 0.25rem;">${cuisine.culture}</div>
              </div>
              <div class="card-actions">
                <button class="btn-icon" onclick="Modal.showEditCuisine('${cuisine.id}')" title="Edit">✏️</button>
                <button class="btn-icon" onclick="Modal.duplicateCuisine('${cuisine.id}')" title="Duplicate">📋</button>
                <button class="btn-icon" onclick="if(confirm('Delete?')) { AppState.currentWorld.cuisines = AppState.currentWorld.cuisines.filter(c => c.id !== '${cuisine.id}'); AppState.save(); Views.renderModule('cuisines'); }" title="Delete">🗑️</button>
              </div>
            </div>
            <div class="card-body">
              ${cuisine.images && cuisine.images.length > 0 ? `
                <div class="card-images">
                  ${cuisine.images.map((img, index) => `
                    <div class="card-image">
                      <img src="${img}" alt="${cuisine.name}" onclick="openImageLightbox(this.src)">
                      <button class="delete-card-image" onclick="deleteCuisineImage('${cuisine.id}', ${index})" title="Delete image">×</button>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
              <p style="margin-bottom: 1rem;">${cuisine.description}</p>
              <div style="font-size: 0.875rem;">
                <div style="margin-bottom: 0.5rem;"><strong>Ingredients:</strong> ${cuisine.ingredients}</div>
                <div style="margin-bottom: 0.5rem;"><strong>Preparation:</strong> ${cuisine.preparation}</div>
                <div><strong>Significance:</strong> ${cuisine.significance}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderArtifacts() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    content.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Artifacts & Items 🗡️</h2>
          <p style="color: var(--gray-600);">Legendary objects, weapons, and treasures</p>
        </div>
        <button class="btn btn-primary" onclick="Modal.showAddArtifact()">+ Add Artifact</button>
      </div>
      <div class="cards-grid">
        ${world.artifacts.map(art => `
          <div class="card">
            ${art.thumbnail ? `
              <div style="width: 100%; height: 200px; overflow: hidden; border-radius: 0.5rem 0.5rem 0 0; margin-bottom: 1rem;">
                <img src="${art.thumbnail}" alt="${art.name}" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            ` : ''}
            <div class="card-header">
              <div>
                <h3 class="card-title">${art.name}</h3>
                <div style="font-size: 0.875rem; color: var(--gray-600); margin-top: 0.25rem;">${art.type}</div>
              </div>
              <div class="card-actions">
                <button class="btn-icon" onclick="Modal.showEditArtifact('${art.id}')" title="Edit">✏️</button>
                <button class="btn-icon" onclick="Modal.duplicateArtifact('${art.id}')" title="Duplicate">📋</button>
                <button class="btn-icon" onclick="if(confirm('Delete?')) { AppState.currentWorld.artifacts = AppState.currentWorld.artifacts.filter(a => a.id !== '${art.id}'); AppState.save(); Views.renderModule('artifacts'); }" title="Delete">🗑️</button>
              </div>
            </div>
            <div class="card-body">
              ${art.images && art.images.length > 0 ? `
                <div class="card-images">
                  ${art.images.map((img, index) => `
                    <div class="card-image">
                      <img src="${img}" alt="${art.name}" onclick="openImageLightbox(this.src)">
                      <button class="delete-card-image" onclick="deleteArtifactImage('${art.id}', ${index})" title="Delete image">×</button>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
              <p style="margin-bottom: 1rem;">${art.description}</p>
              <div style="font-size: 0.875rem;">
                <div style="margin-bottom: 0.5rem;"><strong>Powers:</strong> ${art.powers}</div>
                <div style="margin-bottom: 0.5rem;"><strong>Origin:</strong> ${art.origin}</div>
                <div><strong>Location:</strong> ${art.location}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },
  
  renderSocialInteractions() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    
    // Ensure array exists
    if (!world.socialInteractions) {
      world.socialInteractions = [];
      AppState.save();
    }
    
    content.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Social Interactions 🤝</h2>
          <p style="color: var(--gray-600);">Define how groups, cultures, and individuals interact</p>
        </div>
        <button class="btn btn-primary" onclick="Modal.showAddSocialInteraction()">+ Add Interaction</button>
      </div>
      <div class="cards-grid">
        ${world.socialInteractions.map(si => `
          <div class="card">
            ${si.image ? `<div style="width: 100%; height: 200px; overflow: hidden; border-radius: 8px 8px 0 0;"><img src="${si.image}" alt="${si.name}" style="width: 100%; height: 100%; object-fit: cover;"></div>` : ''}
            <div class="card-header">
              <div>
                <h3 class="card-title">${si.name}</h3>
                <div style="font-size: 0.875rem; color: var(--gray-600); margin-top: 0.25rem;">${si.type} • ${si.nature}</div>
              </div>
              <div class="card-actions">
                <button class="btn-icon" onclick="Modal.showEditSocialInteraction('${si.id}')" title="Edit">✏️</button>
                <button class="btn-icon" onclick="Modal.duplicateSocialInteraction('${si.id}')" title="Duplicate">📋</button>
                <button class="btn-icon" onclick="if(confirm('Delete?')) { AppState.currentWorld.socialInteractions = AppState.currentWorld.socialInteractions.filter(s => s.id !== '${si.id}'); AppState.save(); Views.renderModule('socialInteractions'); }" title="Delete">🗑️</button>
              </div>
            </div>
            <div class="card-body">
              <p style="margin-bottom: 1rem;">${si.description}</p>
              <div style="font-size: 0.875rem;">
                <div style="margin-bottom: 0.5rem;"><strong>Participants:</strong> ${si.participants}</div>
                <div style="margin-bottom: 0.5rem;"><strong>Rules:</strong> ${si.rules}</div>
                ${si.consequences ? `<div style="margin-bottom: 0.5rem;"><strong>Consequences:</strong> ${si.consequences}</div>` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },
  
  renderHierarchies() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    
    // Ensure array exists
    if (!world.hierarchies) {
      world.hierarchies = [];
      AppState.save();
    }
    
    content.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Hierarchy Systems 👑</h2>
          <p style="color: var(--gray-600);">Power structures, ranks, and chains of command</p>
        </div>
        <button class="btn btn-primary" onclick="Modal.showAddHierarchy()">+ Add Hierarchy</button>
      </div>
      <div class="cards-grid">
        ${world.hierarchies.map(hier => `
          <div class="card">
            <div class="card-header">
              <div>
                <h3 class="card-title">${hier.name}</h3>
                <div style="font-size: 0.875rem; col              <div class="card-actions">
                <button class="btn-icon" onclick="HierarchyTree.showTree('${hier.id}')" title="View Tree">🌳</button>
                <button class="btn-icon" onclick="Modal.showEditHierarchy('${hier.id}')" title="Edit">✏️</button>
                <button class="btn-icon" onclick="Modal.duplicateHierarchy('${hier.id}')" title="Duplicate">📋</button>
                <button class="btn-icon" onclick="if(confirm('Delete?')) { AppState.currentWorld.hierarchies = AppState.currentWorld.hierarchies.filter(h => h.id !== '${hier.id}'); AppState.save(); Views.renderModule('hierarchies'); }" title="Delete">🗑️</button>
              </div></div>
            <div class="card-body">
              <p style="margin-bottom: 1rem;">${hier.description}</p>
              <div style="font-size: 0.875rem;">
                <div style="margin-bottom: 0.5rem;"><strong>Levels:</strong> ${hier.levels || 'Not specified'}</div>
                <div style="margin-bottom: 0.5rem;"><strong>Mobility:</strong> ${hier.mobility || 'Not specified'}</div>
                ${hier.symbols ? `<div style="margin-bottom: 0.5rem;"><strong>Rank Symbols:</strong> ${hier.symbols}</div>` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },
  
  renderEtiquette() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    
    // Ensure array exists
    if (!world.etiquette) {
      world.etiquette = [];
      AppState.save();
    }
    
    content.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Etiquette & Customs 🎩</h2>
          <p style="color: var(--gray-600);">Cultural norms, manners, and social protocols</p>
        </div>
        <button class="btn btn-primary" onclick="Modal.showAddEtiquette()">+ Add Etiquette</button>
      </div>
      <div class="cards-grid">
        ${world.etiquette.map(etiq => `
          <div class="card">
            ${etiq.image ? `<div style="width: 100%; height: 200px; overflow: hidden; border-radius: 8px 8px 0 0;"><img src="${etiq.image}" alt="${etiq.name}" style="width: 100%; height: 100%; object-fit: cover;"></div>` : ''}
            <div class="card-header">
              <div>
                <h3 class="card-title">${etiq.name}</h3>
                <div style="font-size: 0.875rem; color: var(--gray-600); margin-top: 0.25rem;">${etiq.context} • ${etiq.culture}</div>
              </div>
              <div class="card-actions">
                <button class="btn-icon" onclick="Modal.showEditEtiquette('${etiq.id}')" title="Edit">✏️</button>
                <button class="btn-icon" onclick="Modal.duplicateEtiquette('${etiq.id}')" title="Duplicate">📋</button>
                <button class="btn-icon" onclick="if(confirm('Delete?')) { AppState.currentWorld.etiquette = AppState.currentWorld.etiquette.filter(e => e.id !== '${etiq.id}'); AppState.save(); Views.renderModule('etiquette'); }" title="Delete">🗑️</button>
              </div>
            </div>
            <div class="card-body">
              <p style="margin-bottom: 1rem;">${etiq.description}</p>
              <div style="font-size: 0.875rem;">
                <div style="margin-bottom: 0.5rem;"><strong>Key Rules:</strong> ${etiq.rules || 'Not specified'}</div>
                ${etiq.gestures ? `<div style="margin-bottom: 0.5rem;"><strong>Gestures:</strong> ${etiq.gestures}</div>` : ''}
                ${etiq.violations ? `<div style="margin-bottom: 0.5rem;"><strong>Violations:</strong> ${etiq.violations}</div>` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },
  
  renderQuickReference() {
    const world = AppState.currentWorld;
    const content = document.getElementById('mainContent');
    
    // Aggregate all data from all modules
    const allData = [];
    
    // Add locations
    if (world.locations) {
      world.locations.forEach(item => {
        allData.push({
          category: 'Location',
          icon: '📍',
          name: item.name,
          type: item.type || 'N/A',
          description: item.description || '',
          module: 'locations',
          id: item.id
        });
      });
    }
    
    // Add characters
    if (world.characters) {
      world.characters.forEach(item => {
        allData.push({
          category: 'Character',
          icon: '👤',
          name: item.name,
          type: item.role || 'N/A',
          description: item.description || '',
          module: 'characters',
          id: item.id
        });
      });
    }
    
    // Add factions
    if (world.factions) {
      world.factions.forEach(item => {
        allData.push({
          category: 'Faction',
          icon: '⚔️',
          name: item.name,
          type: item.type || 'N/A',
          description: item.description || '',
          module: 'factions',
          id: item.id
        });
      });
    }
    
    // Add timeline events
    if (world.timeline) {
      world.timeline.forEach(item => {
        allData.push({
          category: 'Event',
          icon: '⏳',
          name: item.name,
          type: item.date || 'N/A',
          description: item.description || '',
          module: 'timeline',
          id: item.id
        });
      });
    }
    
    // Add rules
    if (world.rules) {
      world.rules.forEach(item => {
        allData.push({
          category: 'Rule',
          icon: '✨',
          name: item.name,
          type: item.category || 'N/A',
          description: item.description || '',
          module: 'rules',
          id: item.id
        });
      });
    }
    
    // Add themes
    if (world.themes) {
      world.themes.forEach(item => {
        allData.push({
          category: 'Theme',
          icon: '🎭',
          name: item.name,
          type: 'Theme',
          description: item.description || '',
          module: 'themes',
          id: item.id
        });
      });
    }
    
    // Add religions
    if (world.religions) {
      world.religions.forEach(item => {
        allData.push({
          category: 'Religion',
          icon: '🕊️',
          name: item.name,
          type: item.domain || 'N/A',
          description: item.description || '',
          module: 'religions',
          id: item.id
        });
      });
    }
    
    // Add fashions
    if (world.fashions) {
      world.fashions.forEach(item => {
        allData.push({
          category: 'Fashion',
          icon: '👗',
          name: item.name,
          type: item.culture || 'N/A',
          description: item.description || '',
          module: 'fashions',
          id: item.id
        });
      });
    }
    
    // Add magic systems
    if (world.magicSystems) {
      world.magicSystems.forEach(item => {
        allData.push({
          category: 'Magic',
          icon: '✨',
          name: item.name,
          type: item.type || 'N/A',
          description: item.description || '',
          module: 'magicSystems',
          id: item.id
        });
      });
    }
    
    // Add languages
    if (world.languages) {
      world.languages.forEach(item => {
        allData.push({
          category: 'Language',
          icon: '📜',
          name: item.name,
          type: item.speakers || 'N/A',
          description: item.description || '',
          module: 'languages',
          id: item.id
        });
      });
    }
    
    // Add economies
    if (world.economies) {
      world.economies.forEach(item => {
        allData.push({
          category: 'Economy',
          icon: '💰',
          name: item.name,
          type: item.type || 'N/A',
          description: item.description || '',
          module: 'economies',
          id: item.id
        });
      });
    }
    
    // Add politics
    if (world.politics) {
      world.politics.forEach(item => {
        allData.push({
          category: 'Politics',
          icon: '⚖️',
          name: item.name,
          type: item.type || 'N/A',
          description: item.description || '',
          module: 'politics',
          id: item.id
        });
      });
    }
    
    // Add technologies
    if (world.technologies) {
      world.technologies.forEach(item => {
        allData.push({
          category: 'Technology',
          icon: '🔬',
          name: item.name,
          type: item.category || 'N/A',
          description: item.description || '',
          module: 'technologies',
          id: item.id
        });
      });
    }
    
    // Add flora & fauna
    if (world.floraFauna) {
      world.floraFauna.forEach(item => {
        allData.push({
          category: 'Flora/Fauna',
          icon: '🌿',
          name: item.name,
          type: item.type || 'N/A',
          description: item.description || '',
          module: 'floraFauna',
          id: item.id
        });
      });
    }
    
    // Add creatures
    if (world.creatures) {
      world.creatures.forEach(item => {
        allData.push({
          category: 'Creature',
          icon: '🐉',
          name: item.name,
          type: item.type || 'N/A',
          description: item.description || '',
          module: 'creatures',
          id: item.id
        });
      });
    }
    
    // Add cuisines
    if (world.cuisines) {
      world.cuisines.forEach(item => {
        allData.push({
          category: 'Cuisine',
          icon: '🍽️',
          name: item.name,
          type: item.culture || 'N/A',
          description: item.description || '',
          module: 'cuisines',
          id: item.id
        });
      });
    }
    
    // Add artifacts
    if (world.artifacts) {
      world.artifacts.forEach(item => {
        allData.push({
          category: 'Artifact',
          icon: '🗡️',
          name: item.name,
          type: item.type || 'N/A',
          description: item.description || '',
          module: 'artifacts',
          id: item.id
        });
      });
    }
    
    // Add social interactions
    if (world.socialInteractions) {
      world.socialInteractions.forEach(item => {
        allData.push({
          category: 'Social Interaction',
          icon: '🤝',
          name: item.name,
          type: item.type || 'N/A',
          description: item.description || '',
          module: 'socialInteractions',
          id: item.id
        });
      });
    }
    
    // Add hierarchies
    if (world.hierarchies) {
      world.hierarchies.forEach(item => {
        allData.push({
          category: 'Hierarchy',
          icon: '👑',
          name: item.name,
          type: item.type || 'N/A',
          description: item.description || '',
          module: 'hierarchies',
          id: item.id
        });
      });
    }
    
    // Add etiquette
    if (world.etiquette) {
      world.etiquette.forEach(item => {
        allData.push({
          category: 'Etiquette',
          icon: '🎩',
          name: item.name,
          type: item.context || 'N/A',
          description: item.description || '',
          module: 'etiquette',
          id: item.id
        });
      });
    }
    
    // Calculate statistics
    const stats = {};
    allData.forEach(item => {
      stats[item.category] = (stats[item.category] || 0) + 1;
    });
    
    const totalItems = allData.length;
    
    // Get unique categories for filtering
    const categories = [...new Set(allData.map(item => item.category))].sort();
    
    content.innerHTML = `
      <div style="margin-bottom: 2rem;">
        <div>
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">Quick Reference Table 📋</h2>
          <p style="color: var(--gray-600);">Comprehensive overview of all world elements</p>
        </div>
      </div>
      
      <div style="background: var(--card-bg); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); color: var(--text-primary);">
        <div style="display: flex; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap;">
          <input type="text" id="qrSearch" placeholder="Search all items..." style="flex: 1; min-width: 250px; padding: 0.5rem 1rem; border: 1px solid var(--input-border); border-radius: 8px; font-size: 0.875rem; background: var(--input-bg); color: var(--text-primary);" oninput="Views.filterQuickReference()">
          <select id="qrCategoryFilter" style="padding: 0.5rem 1rem; border: 1px solid var(--input-border); border-radius: 8px; font-size: 0.875rem; background: var(--input-bg); color: var(--text-primary);" onchange="Views.filterQuickReference()">
            <option value="">All Categories</option>
            ${categories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
          </select>
        </div>
        
        <div style="display: flex; gap: 2rem; flex-wrap: wrap; padding: 1rem; background: var(--bg-secondary); border-radius: 8px; color: var(--text-primary);">
          <div style="font-size: 0.875rem;"><strong>Total Items:</strong> ${totalItems}</div>
          ${Object.entries(stats).map(([cat, count]) => `<div style="font-size: 0.875rem;"><strong>${cat}:</strong> ${count}</div>`).join('')}
        </div>
      </div>
      
      <div style="background: var(--card-bg); border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <table id="qrTable" style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background: var(--bg-secondary); border-bottom: 2px solid var(--border-color);">
              <th style="padding: 1rem; text-align: left; font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">Category</th>
              <th style="padding: 1rem; text-align: left; font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">Name</th>
              <th style="padding: 1rem; text-align: left; font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">Type</th>
              <th style="padding: 1rem; text-align: left; font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">Description</th>
              <th style="padding: 1rem; text-align: left; font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${allData.map(item => `
              <tr class="qr-row" data-category="${item.category}" data-name="${item.name.toLowerCase()}" data-type="${item.type.toLowerCase()}" data-description="${item.description.toLowerCase()}" style="border-bottom: 1px solid var(--border-color); color: var(--text-primary);">
                <td style="padding: 1rem; font-size: 0.875rem;">
                  <span style="display: inline-flex; align-items: center; gap: 0.5rem;">
                    <span>${item.icon}</span>
                    <span style="font-weight: 500;">${item.category}</span>
                  </span>
                </td>
                <td style="padding: 1rem; font-size: 0.875rem; font-weight: 500; color: var(--text-primary);">${item.name}</td>
                <td style="padding: 1rem; font-size: 0.875rem; color: var(--text-secondary);">${item.type}</td>
                <td style="padding: 1rem; font-size: 0.875rem; color: var(--text-secondary); max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.description.substring(0, 100)}${item.description.length > 100 ? '...' : ''}</td>
                <td style="padding: 1rem; font-size: 0.875rem;">
                  <button class="btn-icon" onclick="Router.navigate('module', '${item.module}')" title="View Module" style="padding: 0.25rem 0.5rem; background: var(--card-bg); color: var(--text-primary); border: 1px solid var(--border-color); border-radius: 4px; cursor: pointer; font-size: 0.75rem;">➡️ View</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      
      ${allData.length === 0 ? `
        <div style="text-align: center; padding: 4rem; color: var(--gray-500);">
          <p style="font-size: 1.25rem; margin-bottom: 0.5rem;">📝 No data yet</p>
          <p>Start adding content to your world to see it here!</p>
        </div>
      ` : ''}
    `;
  },
  
  filterQuickReference() {
    const searchTerm = document.getElementById('qrSearch').value.toLowerCase();
    const categoryFilter = document.getElementById('qrCategoryFilter').value;
    const rows = document.querySelectorAll('.qr-row');
    
    rows.forEach(row => {
      const category = row.dataset.category;
      const name = row.dataset.name;
      const type = row.dataset.type;
      const description = row.dataset.description;
      
      const matchesSearch = !searchTerm || name.includes(searchTerm) || type.includes(searchTerm) || description.includes(searchTerm) || category.toLowerCase().includes(searchTerm);
      const matchesCategory = !categoryFilter || category === categoryFilter;
      
      if (matchesSearch && matchesCategory) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }
};



// ========================================
// HIERARCHY TREE VISUALIZATION
// ========================================
const HierarchyTree = {
  currentHierarchyId: null,
  nodes: [],
  draggedNode: null,
  dragOffsetX: 0,
  dragOffsetY: 0,
  
  showTree(hierarchyId) {
    this.currentHierarchyId = hierarchyId;
    const hierarchy = AppState.currentWorld.hierarchies.find(h => h.id === hierarchyId);
    if (!hierarchy) return;
    
    // Initialize tree structure if not exists
    if (!hierarchy.treeNodes) {
      hierarchy.treeNodes = [];
      AppState.save();
    }
    
    this.nodes = hierarchy.treeNodes;
    
    // Check if modal already exists
    let modal = document.getElementById('hierarchyTreeModal');
    if (modal) {
      // If it exists, just update the content and render
      this.render();
      return;
    }
    
    // Create modal
    modal = document.createElement('div');
    modal.id = 'hierarchyTreeModal';
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
    `;
    
    modal.innerHTML = `
      <div style="background: var(--card-bg); border-radius: 12px; width: 90%; max-width: 1200px; height: 80%; display: flex; flex-direction: column; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
        <div style="padding: 1.5rem; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
          <div>
            <h2 style="font-family: 'Playfair Display', serif; font-size: 1.75rem; font-weight: 900; margin: 0; color: var(--text-primary);">${hierarchy.name} - Hierarchy Tree</h2>
            <p style="color: var(--text-secondary); font-size: 0.875rem; margin-top: 0.25rem;">${hierarchy.type} • ${hierarchy.organization}</p>
          </div>
          <button onclick="HierarchyTree.close()" style="background: transparent; border: none; font-size: 1.5rem; cursor: pointer; color: var(--text-primary); padding: 0.5rem;">×</button>
        </div>
        
        <div style="padding: 1rem; border-bottom: 1px solid var(--border-color); display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button onclick="HierarchyTree.addRootNode()" style="padding: 0.5rem 1rem; background: var(--card-bg); color: var(--text-primary); border: 1px solid var(--border-color); border-radius: 6px; cursor: pointer; font-size: 0.875rem;">🌳 Add Root Node</button>
          <button onclick="HierarchyTree.resetLayout()" style="padding: 0.5rem 1rem; background: var(--card-bg); color: var(--text-primary); border: 1px solid var(--border-color); border-radius: 6px; cursor: pointer; font-size: 0.875rem;">🔄 Reset Layout</button>
        </div>
        
        <div id="hierarchyTreeCanvas" style="flex: 1; position: relative; overflow: auto; background: var(--bg-secondary);">
          ${this.nodes.length === 0 ? `
            <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--text-secondary); text-align: center; font-size: 0.875rem;">
              <div>
                <p style="font-size: 1.25rem; margin-bottom: 0.5rem;">🌳 No nodes yet</p>
                <p>Click "Add Root Node" to start building your hierarchy tree</p>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    if (this.nodes.length > 0) {
      this.render();
    }
  },
  
  close() {
    const modal = document.getElementById('hierarchyTreeModal');
    if (modal) modal.remove();
    this.currentHierarchyId = null;
  },
  
  addRootNode() {
    const title = prompt('Enter position title (e.g., King, CEO, General):');
    if (!title) return;
    
    const node = {
      id: 'node_' + Date.now(),
      title: title,
      description: '',
      level: 0,
      parentId: null,
      children: [],
      x: 100 + (this.nodes.filter(n => n.level === 0).length * 200),
      y: 50,
      color: this.getLevelColor(0)
    };
    
    this.nodes.push(node);
    this.save();
    this.render();
  },
  
  addChildNode(parentId) {
    const title = prompt('Enter position title:');
    if (!title) return;
    
    const parent = this.nodes.find(n => n.id === parentId);
    if (!parent) return;
    
    const node = {
      id: 'node_' + Date.now(),
      title: title,
      description: '',
      level: parent.level + 1,
      parentId: parentId,
      children: [],
      x: parent.x + (parent.children.length * 150) - 75,
      y: parent.y + 120,
      color: this.getLevelColor(parent.level + 1)
    };
    
    parent.children.push(node.id);
    this.nodes.push(node);
    this.save();
    this.render();
  },
  
  editNode(nodeId) {
    const node = this.nodes.find(n => n.id === nodeId);
    if (!node) return;
    
    // Create modal for editing node
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10001;';
    
    const colors = ['#4c51bf', '#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#6366f1'];
    
    modal.innerHTML = `
      <div style="background: var(--card-bg); border-radius: 12px; padding: 2rem; width: 90%; max-width: 500px; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
        <h3 style="font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 900; margin-bottom: 1.5rem; color: var(--text-primary);">Edit Node</h3>
        
        <div style="margin-bottom: 1rem;">
          <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-primary);">Position Title</label>
          <input type="text" id="nodeTitle" value="${node.title}" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-size: 1rem; background: var(--input-bg); color: var(--text-primary);">
        </div>
        
        <div style="margin-bottom: 1rem;">
          <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-primary);">Emoji (Optional)</label>
          <input type="text" id="nodeEmoji" value="${node.emoji || ''}" placeholder="Click and use emoji picker" maxlength="2" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-size: 1.5rem; background: var(--input-bg); color: var(--text-primary); text-align: center;">
          <p style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.25rem; text-align: center;">Windows: Win+. | Mac: Cmd+Ctrl+Space | Linux: Ctrl+.</p>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
          <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-primary);">Node Color</label>
          <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 0.5rem;">
            ${colors.map(color => `
              <button onclick="document.querySelectorAll('.color-option').forEach(b => b.style.border = '2px solid var(--border-color)'); this.style.border = '3px solid var(--text-primary)'; document.getElementById('selectedColor').value = '${color}';" 
                      class="color-option"
                      style="width: 100%; aspect-ratio: 1; background: ${color}; border: ${node.color === color ? '3px solid var(--text-primary)' : '2px solid var(--border-color)'}; border-radius: 6px; cursor: pointer; transition: all 0.2s;"
                      onmouseover="this.style.transform='scale(1.1)'"
                      onmouseout="this.style.transform='scale(1)'"></button>
            `).join('')}
          </div>
          <input type="hidden" id="selectedColor" value="${node.color}">
        </div>
        
        <div style="display: flex; gap: 0.75rem; justify-content: flex-end;">
          <button id="cancelNodeEdit" style="padding: 0.75rem 1.5rem; background: var(--bg-secondary); color: var(--text-primary); border: 2px solid var(--border-color); border-radius: 6px; cursor: pointer; font-weight: 600;">Cancel</button>
          <button id="saveNodeEdit" style="padding: 0.75rem 1.5rem; background: var(--text-primary); color: var(--bg-primary); border: 2px solid var(--border-color); border-radius: 6px; cursor: pointer; font-weight: 600;">Save Changes</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners after modal is added to DOM
    document.getElementById('cancelNodeEdit').addEventListener('click', () => {
      modal.remove();
    });
    
    document.getElementById('saveNodeEdit').addEventListener('click', () => {
      this.saveNodeEdit(nodeId);
    });
  },
  
  saveNodeEdit(nodeId) {
    const node = this.nodes.find(n => n.id === nodeId);
    if (!node) return;
    
    const title = document.getElementById('nodeTitle').value;
    const emoji = document.getElementById('nodeEmoji').value;
    const color = document.getElementById('selectedColor').value;
    
    if (title) {
      node.title = title;
      node.emoji = emoji;
      node.color = color;
      this.save();
    }
    
    // Close edit modal - find the one with the higher z-index or specific content
    const modals = document.querySelectorAll('div[style*="position: fixed"]');
    modals.forEach(m => {
      if (m.innerText.includes('Edit Node')) {
        m.remove();
      }
    });
    
    // Refresh the existing hierarchy tree modal instead of reopening it
    this.render();
  },
  
  deleteNode(nodeId) {
    if (!confirm('Delete this node and all its children?')) return;
    
    const deleteRecursive = (id) => {
      const node = this.nodes.find(n => n.id === id);
      if (!node) return;
      
      // Delete children first
      node.children.forEach(childId => deleteRecursive(childId));
      
      // Remove from parent's children array
      if (node.parentId) {
        const parent = this.nodes.find(n => n.id === node.parentId);
        if (parent) {
          parent.children = parent.children.filter(cid => cid !== id);
        }
      }
      
      // Remove node
      this.nodes = this.nodes.filter(n => n.id !== id);
    };
    
    deleteRecursive(nodeId);
    this.save();
    this.render();
  },
  
  getLevelColor(level) {
    const colors = ['#4c51bf', '#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd'];
    return colors[Math.min(level, colors.length - 1)];
  },
  
  render() {
    const canvas = document.getElementById('hierarchyTreeCanvas');
    if (!canvas) return;
    
    if (this.nodes.length === 0) {
      canvas.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--text-secondary); text-align: center; font-size: 0.875rem;">
          <div>
            <p style="font-size: 1.25rem; margin-bottom: 0.5rem;">🌳 No nodes yet</p>
            <p>Click "Add Root Node" to start building your hierarchy tree</p>
          </div>
        </div>
      `;
      return;
    }
    
    canvas.innerHTML = '';
    
    // Draw connection lines first
    this.nodes.forEach(node => {
      if (node.parentId) {
        const parent = this.nodes.find(n => n.id === node.parentId);
        if (parent) {
          const line = this.createConnectionLine(parent, node);
          canvas.appendChild(line);
        }
      }
    });
    
    // Draw nodes
    this.nodes.forEach(node => {
      const nodeEl = this.createNodeElement(node);
      canvas.appendChild(nodeEl);
    });
  },
  
  createConnectionLine(parent, child) {
    const line = document.createElement('div');
    line.style.cssText = `
      position: absolute;
      left: ${parent.x + 60}px;
      top: ${parent.y + 40}px;
      width: 2px;
      height: ${child.y - parent.y - 40}px;
      background: var(--border-color);
      pointer-events: none;
    `;
    
    const horizontal = document.createElement('div');
    horizontal.style.cssText = `
      position: absolute;
      left: ${Math.min(parent.x + 60, child.x + 60)}px;
      top: ${child.y}px;
      width: ${Math.abs(child.x - parent.x)}px;
      height: 2px;
      background: var(--border-color);
      pointer-events: none;
    `;
    
    const container = document.createElement('div');
    container.appendChild(line);
    container.appendChild(horizontal);
    
    return container;
  },
  
  createNodeElement(node) {
    const nodeEl = document.createElement('div');
    nodeEl.id = node.id;
    nodeEl.className = 'hierarchy-tree-node';
    nodeEl.style.cssText = `
      position: absolute;
      left: ${node.x}px;
      top: ${node.y}px;
      min-width: 120px;
      padding: 12px 16px;
      background: ${node.color};
      color: white;
      border: 2px solid var(--border-color);
      border-radius: 8px;
      cursor: move;
      font-size: 0.875rem;
      font-weight: 600;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      transition: transform 0.2s, box-shadow 0.2s;
      user-select: none;
    `;
    
    nodeEl.innerHTML = `
      <div style="margin-bottom: 0.5rem;">${node.emoji ? node.emoji + ' ' : ''}${node.title}</div>
      <div style="display: flex; gap: 0.25rem; justify-content: center;">
        <button onclick="event.stopPropagation(); HierarchyTree.addChildNode('${node.id}')" style="padding: 0.25rem 0.5rem; background: rgba(255,255,255,0.2); border: none; border-radius: 4px; cursor: pointer; font-size: 0.75rem; color: white;" title="Add Child">+</button>
        <button onclick="event.stopPropagation(); HierarchyTree.editNode('${node.id}')" style="padding: 0.25rem 0.5rem; background: rgba(255,255,255,0.2); border: none; border-radius: 4px; cursor: pointer; font-size: 0.75rem; color: white;" title="Edit">✏️</button>
        <button onclick="event.stopPropagation(); HierarchyTree.deleteNode('${node.id}')" style="padding: 0.25rem 0.5rem; background: rgba(255,255,255,0.2); border: none; border-radius: 4px; cursor: pointer; font-size: 0.75rem; color: white;" title="Delete">×</button>
      </div>
    `;
    
    nodeEl.addEventListener('mousedown', (e) => this.startDrag(e, node));
    nodeEl.addEventListener('mouseenter', () => {
      nodeEl.style.transform = 'scale(1.05)';
      nodeEl.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
    });
    nodeEl.addEventListener('mouseleave', () => {
      nodeEl.style.transform = 'scale(1)';
      nodeEl.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
    });
    
    return nodeEl;
  },
  
  startDrag(e, node) {
    e.preventDefault();
    this.draggedNode = node;
    const nodeEl = document.getElementById(node.id);
    const rect = nodeEl.getBoundingClientRect();
    const canvas = document.getElementById('hierarchyTreeCanvas');
    const canvasRect = canvas.getBoundingClientRect();
    
    this.dragOffsetX = e.clientX - rect.left;
    this.dragOffsetY = e.clientY - rect.top;
    
    const onMouseMove = (e) => {
      if (!this.draggedNode) return;
      
      const newX = e.clientX - canvasRect.left - this.dragOffsetX + canvas.scrollLeft;
      const newY = e.clientY - canvasRect.top - this.dragOffsetY + canvas.scrollTop;
      
      this.draggedNode.x = Math.max(0, newX);
      this.draggedNode.y = Math.max(0, newY);
      
      this.render();
    };
    
    const onMouseUp = () => {
      if (this.draggedNode) {
        this.save();
        this.draggedNode = null;
      }
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  },
  
  resetLayout() {
    if (!confirm('Reset all node positions to automatic layout?')) return;
    
    // Group nodes by level
    const levels = {};
    this.nodes.forEach(node => {
      if (!levels[node.level]) levels[node.level] = [];
      levels[node.level].push(node);
    });
    
    // Position nodes
    Object.keys(levels).forEach(level => {
      const nodesAtLevel = levels[level];
      const spacing = 200;
      const startX = 100;
      
      nodesAtLevel.forEach((node, index) => {
        node.x = startX + (index * spacing);
        node.y = 50 + (parseInt(level) * 120);
      });
    });
    
    this.save();
    this.render();
  },
  
  exportAsImage() {
    alert('Export as image feature coming soon! For now, use your browser\'s screenshot tool.');
  },
  
  save() {
    const hierarchy = AppState.currentWorld.hierarchies.find(h => h.id === this.currentHierarchyId);
    if (hierarchy) {
      hierarchy.treeNodes = this.nodes;
      AppState.save();
    }
  }
};

// ========================================
// MODAL SYSTEM
// ========================================
const Modal = {
  customFields: [],
  currentImageData: '',
  
  // Multi-image upload system
  currentImages: [],
  
  initImageUpload(existingImages = []) {
    this.currentImages = Array.isArray(existingImages) ? [...existingImages] : [];
    const input = document.getElementById('imageUploadInput');
    if (input) {
      input.addEventListener('change', (e) => this.handleImageSelect(e));
    }
    this.renderImagePreviews();
  },
  
  handleImageSelect(event) {
    const files = Array.from(event.target.files);
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.currentImages.push(e.target.result);
          this.renderImagePreviews();
        };
        reader.readAsDataURL(file);
      }
    });
    event.target.value = ''; // Reset input
  },
  
  removeImage(index) {
    this.currentImages.splice(index, 1);
    this.renderImagePreviews();
  },
  
  viewImageFullscreen(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.id = 'imageLightbox';
    lightbox.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); display: flex; align-items: center; justify-content: center; z-index: 10000; cursor: pointer;';
    
    lightbox.innerHTML = `
      <button onclick="document.getElementById('imageLightbox').remove()" 
              style="position: absolute; top: 1rem; right: 1rem; background: white; color: black; border: none; border-radius: 50%; width: 40px; height: 40px; font-size: 1.5rem; cursor: pointer; display: flex; align-items: center; justify-content: center; font-weight: bold; z-index: 10001; box-shadow: 0 2px 8px rgba(0,0,0,0.3);" 
              title="Close"
              aria-label="Close image viewer">×</button>
      <img src="${imageSrc}" style="max-width: 90%; max-height: 90%; object-fit: contain; border-radius: 8px;" onclick="event.stopPropagation()">
    `;
    
    lightbox.onclick = () => lightbox.remove();
    document.body.appendChild(lightbox);
  },
  
  renderImagePreviews() {
    const container = document.getElementById('imagePreviews');
    if (!container) return;
    
    if (this.currentImages.length === 0) {
      container.innerHTML = '';
      return;
    }
    
    container.innerHTML = this.currentImages.map((img, index) => `
      <div style="position: relative; display: inline-block; margin: 0.5rem; border: 2px solid var(--gray-300); border-radius: 8px; overflow: hidden;">
        <img src="${img}" 
             alt="Preview ${index + 1}" 
             onclick="Modal.viewImageFullscreen('${img.replace(/'/g, "\\'")}')"
             style="width: 100px; height: 100px; object-fit: cover; cursor: pointer; display: block;">
        <button onclick="Modal.removeImage(${index})" 
                title="Remove image"
                aria-label="Remove image ${index + 1}"
                style="position: absolute; top: 0.25rem; right: 0.25rem; background: #dc2626; color: white; border: none; border-radius: 50%; width: 24px; height: 24px; font-size: 0.875rem; cursor: pointer; display: flex; align-items: center; justify-content: center; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">×</button>
      </div>
    `).join('');
  },
  
  getImageUploadHTML() {
    return `
      <div class="form-group">
        <label class="form-label">Image (Optional)</label>
        <div style="border: 2px solid var(--gray-300); border-radius: 8px; padding: 1rem; background: var(--gray-50);">
          <div id="imagePreviews" style="min-height: 40px; margin-bottom: 0.5rem;"></div>
          <input type="file" id="imageUploadInput" accept="image/*" multiple style="display: none;">
          <label for="imageUploadInput" class="form-input" style="display: inline-block; cursor: pointer; padding: 0.5rem 1rem; background: white; border: 2px solid var(--gray-300); border-radius: 4px; text-align: center; width: auto; color: #000;">Choose File</label>
          <span style="margin-left: 0.5rem; color: var(--text-secondary); font-size: 0.875rem;">No file chosen</span>
        </div>
      </div>
    `;
  },
  
  show(title, body, footer) {
    this.currentImageData = ''; // Reset image data for new modal
    const container = document.getElementById('modalContainer');
    container.innerHTML = `
      <div class="modal-overlay">
        <div class="modal">
          <div class="modal-header">
            <button class="modal-close" onclick="Modal.close()" title="Close">✕</button>
            <h2 class="modal-title">${title}</h2>
          </div>
          <div class="modal-body">
            ${body}
          </div>
          ${footer ? `<div class="modal-footer">
            ${footer}
          </div>` : ''}
        </div>
      </div>
    `;
  },
  
  close() {
    document.getElementById('modalContainer').innerHTML = '';
    window.currentUploadedImages = [];
  },
  
  compressImageForThumbnail(imageData, callback, maxWidth = 800, quality = 0.85) {
    // Create an image element to load the data
    const img = new Image();
    img.onload = () => {
      // Create a canvas to resize and compress
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Calculate new dimensions (max 800px on longest side for thumbnails)
      let width = img.width;
      let height = img.height;
      
      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxWidth) {
          width = Math.round((width * maxWidth) / height);
          height = maxWidth;
        }
      }
      
      // Set canvas size
      canvas.width = width;
      canvas.height = height;
      
      // Draw resized image
      ctx.drawImage(img, 0, 0, width, height);
      
      // Convert to compressed JPEG (quality 0.85 = 85%)
      const compressedData = canvas.toDataURL('image/jpeg', quality);
      
      // Call callback with compressed data
      callback(compressedData);
    };
    img.src = imageData;
  },
  
  handleThumbnailFile(input, targetId) {
    const file = input.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target.result;
      
      // Compress the image before storing
      this.compressImageForThumbnail(base64, (compressedData) => {
        document.getElementById(targetId).value = compressedData;
        
        // Update preview
        const preview = document.getElementById(targetId + 'Preview');
        const previewImg = document.getElementById(targetId + 'PreviewImg');
        const placeholder = document.getElementById(targetId + 'Placeholder');
        
        if (preview && previewImg && placeholder) {
          previewImg.src = compressedData;
          preview.style.display = 'block';
          placeholder.style.display = 'none';
        }
      });
    };
    reader.readAsDataURL(file);
  },
  
  handleThumbnailDrop(event, targetId) {
    event.preventDefault();
    event.stopPropagation();
    
    // Reset drop zone styling
    const dropZone = event.currentTarget;
    dropZone.style.borderColor = 'var(--gray-400)';
    dropZone.style.background = 'var(--gray-100)';
    
    const file = event.dataTransfer.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
      alert('Please drop an image file');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target.result;
      
      // Compress the image before storing
      this.compressImageForThumbnail(base64, (compressedData) => {
        document.getElementById(targetId).value = compressedData;
        
        // Update preview
        const preview = document.getElementById(targetId + 'Preview');
        const previewImg = document.getElementById(targetId + 'PreviewImg');
        const placeholder = document.getElementById(targetId + 'Placeholder');
        
        if (preview && previewImg && placeholder) {
          previewImg.src = compressedData;
          preview.style.display = 'block';
          placeholder.style.display = 'none';
        }
      });
    };
    reader.readAsDataURL(file);
  },
  
  deleteCharacterThumbnail() {
    // Clear the hidden input value
    document.getElementById('charThumbnail').value = '';
    
    // Hide preview and show placeholder
    const preview = document.getElementById('charThumbnailPreview');
    const previewImg = document.getElementById('charThumbnailPreviewImg');
    const placeholder = document.getElementById('charThumbnailPlaceholder');
    
    if (preview && placeholder) {
      preview.style.display = 'none';
      placeholder.style.display = 'block';
    }
    
    if (previewImg) {
      previewImg.src = '';
    }
    
    // Clear the file input
    const fileInput = document.getElementById('charThumbnailInput');
    if (fileInput) {
      fileInput.value = '';
    }
  },

  deleteThumbnail(moduleType) {
    const inputId = moduleType + 'Thumbnail';
    const previewId = moduleType + 'ThumbnailPreview';
    const previewImgId = moduleType + 'ThumbnailPreviewImg';
    const placeholderId = moduleType + 'ThumbnailPlaceholder';
    
    document.getElementById(inputId).value = '';
    const preview = document.getElementById(previewId);
    const previewImg = document.getElementById(previewImgId);
    const placeholder = document.getElementById(placeholderId);
    
    if (preview && placeholder) {
      preview.style.display = 'none';
      placeholder.style.display = 'block';
    }
    if (previewImg) {
      previewImg.src = '';
    }
  },
  
  addCustomField() {
    const container = document.getElementById('customFieldsContainer');
    if (!container) return;
    
    const fieldId = 'custom-' + Date.now();
    const fieldDiv = document.createElement('div');
    fieldDiv.className = 'form-group';
    fieldDiv.style.display = 'flex';
    fieldDiv.style.gap = '0.5rem';
    fieldDiv.innerHTML = `
      <input type="text" class="form-input" placeholder="Field name" style="flex: 1;" id="${fieldId}-name">
      <input type="text" class="form-input" placeholder="Field value" style="flex: 2;" data-custom-field="${fieldId}">
      <button type="button" class="btn btn-secondary" onclick="this.parentElement.remove()" style="padding: 0.5rem 1rem;">Remove</button>
    `;
    container.appendChild(fieldDiv);
  },
  
  showCreateWorld() {
    this.show(
      'Create New World',
      `
        <div class="form-group">
          <label class="form-label">World Name</label>
          <input type="text" class="form-input" id="worldName" placeholder="Enter world name">
        </div>
        <div class="form-group">
          <label class="form-label">Genres</label>
          <div class="checkbox-group">
            <label class="checkbox-label">
              <input type="checkbox" value="Fantasy"> <span>Fantasy</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Sci-Fi"> <span>Sci-Fi</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Horror"> <span>Horror</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Thriller"> <span>Thriller</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Adventure"> <span>Adventure</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Historical"> <span>Historical</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Mystery"> <span>Mystery</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Romance"> <span>Romance</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Western"> <span>Western</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Cyberpunk"> <span>Cyberpunk</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Steampunk"> <span>Steampunk</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Post-Apocalyptic"> <span>Post-Apocalyptic</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Dystopian"> <span>Dystopian</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Urban Fantasy"> <span>Urban Fantasy</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Dark Fantasy"> <span>Dark Fantasy</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Space Opera"> <span>Space Opera</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Military"> <span>Military</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Supernatural"> <span>Supernatural</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Noir"> <span>Noir</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Comedy"> <span>Comedy</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Drama"> <span>Drama</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Mythology"> <span>Mythology</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Fairy Tale"> <span>Fairy Tale</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Gothic"> <span>Gothic</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Survival"> <span>Survival</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Alternate History"> <span>Alternate History</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Time Travel"> <span>Time Travel</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Cosmic Horror"> <span>Cosmic Horror</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Sword & Sorcery"> <span>Sword & Sorcery</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Superhero"> <span>Superhero</span>
            </label>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Logline / World Thesis</label>
          <textarea class="form-textarea" id="worldLogline" placeholder="A brief description of your world..."></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Banner Image (Optional)</label>
          <div id="worldBannerDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'worldBanner')" onclick="document.getElementById('worldBannerInput').click()">
            <div id="worldBannerPreview" style="display: none; margin-bottom: 1rem; position: relative;">
              <img id="worldBannerPreviewImg" style="max-width: 100%; max-height: 150px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
              <button type="button" onclick="Modal.deleteThumbnail('worldBanner')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove banner">×</button>
            </div>
            <div id="worldBannerPlaceholder">
              <div style="font-size: 3rem; margin-bottom: 0.5rem;">🖼️</div>
              <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop a banner image here</div>
              <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
            </div>
          </div>
          <input type="file" id="worldBannerInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'worldBanner')">
          <input type="hidden" id="worldBanner">
        </div>
      `,
      `
        <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
        <button class="btn btn-primary" onclick="Modal.createWorld()">Create World</button>
      `
    );
  },
  
  createWorld() {
    const name = document.getElementById('worldName').value;
    const logline = document.getElementById('worldLogline').value;
    const genres = Array.from(document.querySelectorAll('.checkbox-label input:checked')).map(cb => cb.value);
    const banner = document.getElementById('worldBanner').value || null;
    
    if (!name) {
      alert('Please enter a world name');
      return;
    }
    
    if (genres.length === 0) {
      alert('Please select at least one genre');
      return;
    }
    
    const world = AppState.createWorld({ name, genres, logline, banner });
    this.close();
    AppState.openWorld(world.id);
  },
  
  showAddLocation() {
    Modal.customFields = [];
    this.show(
      'Add Location',
      `
        <div class="form-group">
          <label class="form-label">Name</label>
          <input type="text" class="form-input" id="locName" placeholder="Location name">
        </div>
        <div class="form-group">
          <label class="form-label">Type</label>
          <input type="text" class="form-input" id="locType" placeholder="City, Forest, Mountain, etc.">
        </div>
        <div class="form-group">
          <label class="form-label">Thumbnail Image (Optional)</label>
          <div id="locationThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'locationThumbnail')" onclick="document.getElementById('locationThumbnailInput').click()">
            <div id="locationThumbnailPreview" style="display: none; margin-bottom: 1rem; position: relative;">
              <img id="locationThumbnailPreviewImg" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
              <button type="button" onclick="Modal.deleteThumbnail('location')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
            </div>
            <div id="locationThumbnailPlaceholder">
              <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
              <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
              <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
            </div>
          </div>
          <input type="file" id="locationThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'locationThumbnail')">
          <input type="hidden" id="locationThumbnail">
        </div>
        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea class="form-textarea" id="locDescription" placeholder="Describe this location..."></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Culture</label>
          <textarea class="form-textarea" id="locCulture" placeholder="Cultural characteristics..."></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Resources</label>
          <input type="text" class="form-input" id="locResources" placeholder="Natural resources, trade goods, etc.">
        </div>
        <div class="form-group">
          <label class="form-label">Population</label>
          <input type="text" class="form-input" id="locPopulation" placeholder="Population size">
        </div>
        <div class="form-group">
          <label class="form-label">Government</label>
          <input type="text" class="form-input" id="locGovernment" placeholder="Type of governance">
        </div>
        
        <div class="custom-fields-section">
          <div class="custom-fields-header">
            <h3 class="custom-fields-title">Custom Fields</h3>
            <button class="add-custom-field-btn" onclick="Modal.addCustomField()">+ Add Field</button>
          </div>
          <div id="customFieldsContainer"></div>
        </div>
      `,
      `
        <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
        <button class="btn btn-primary" onclick="Modal.saveLocation()">Add Location</button>
      `
    );
  },
  
  saveLocation() {
    const location = {
      id: 'loc-' + Date.now(),
      name: document.getElementById('locName').value,
      type: document.getElementById('locType').value,
      thumbnail: document.getElementById('locationThumbnail').value || '',
      description: document.getElementById('locDescription').value,
      culture: document.getElementById('locCulture').value,
      resources: document.getElementById('locResources').value,
      population: document.getElementById('locPopulation').value,
      government: document.getElementById('locGovernment').value
    };
    
    AppState.currentWorld.locations.push(location);
    AppState.save();
    this.close();
    Views.renderModule('locations');
  },
  
  showAddCharacter() {
    this.show(
      'Add Character',
      `
        <div class="form-group">
          <label class="form-label">Name</label>
          <input type="text" class="form-input" id="charName" placeholder="Character name">
        </div>
        <div class="form-group">
          <label class="form-label">Role</label>
          <input type="text" class="form-input" id="charRole" placeholder="Protagonist, Antagonist, etc.">
        </div>
        <div class="form-group">
          <label class="form-label">Thumbnail Image (Optional)</label>
          <div id="charThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'charThumbnail')" onclick="document.getElementById('charThumbnailInput').click()">
            <div id="charThumbnailPreview" style="display: none; margin-bottom: 1rem; position: relative;">
              <img id="charThumbnailPreviewImg" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
              <button type="button" onclick="Modal.deleteCharacterThumbnail()" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
            </div>
            <div id="charThumbnailPlaceholder">
              <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
              <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
              <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
            </div>
          </div>
          <input type="file" id="charThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'charThumbnail')">
          <input type="hidden" id="charThumbnail">
        </div>
        <div class="form-group">
          <label class="form-label">Age</label>
          <input type="text" class="form-input" id="charAge" placeholder="Character age">
        </div>
        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea class="form-textarea" id="charDescription" placeholder="Physical description and key traits..."></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Background</label>
          <textarea class="form-textarea" id="charBackground" placeholder="Character history..."></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Personality</label>
          <textarea class="form-textarea" id="charPersonality" placeholder="Personality traits..."></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Relationships</label>
          <textarea class="form-textarea" id="charRelationships" placeholder="Key relationships..."></textarea>
        </div>
        
        <div class="form-group">
          <label class="form-label">Custom Fields</label>
          <div id="customFieldsContainer" style="margin-bottom: 0.5rem;"></div>
          <button type="button" class="btn btn-secondary" onclick="Modal.addCustomField()" style="width: 100%;">
            + Add Custom Field
          </button>
        </div>
      `,
      `
        <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
        <button class="btn btn-primary" onclick="Modal.saveCharacter()">Add Character</button>
      `
    );
  },
  
  saveCharacter() {
    // Collect custom fields
    const customFields = {};
    const customFieldElements = document.querySelectorAll('[data-custom-field]');
    customFieldElements.forEach(el => {
      const fieldId = el.dataset.customField;
      const nameInput = document.getElementById(`${fieldId}-name`);
      if (nameInput && nameInput.value.trim()) {
        customFields[nameInput.value.trim()] = el.value;
      }
    });
    
    const character = {
      id: 'char-' + Date.now(),
      name: document.getElementById('charName').value,
      role: document.getElementById('charRole').value,
      thumbnail: document.getElementById('charThumbnail').value || '',
      age: document.getElementById('charAge').value || '',
      description: document.getElementById('charDescription').value,
      background: document.getElementById('charBackground').value,
      personality: document.getElementById('charPersonality').value,
      goals: '',
      relationships: document.getElementById('charRelationships').value,
      customFields: customFields
    };
    
    AppState.currentWorld.characters.push(character);
    AppState.save();
    this.close();
    Views.renderModule('characters');
  },
  
  showAddFaction() {
    this.show(
      'Add Faction',
      `
        <div class="form-group">
          <label class="form-label">Name</label>
          <input type="text" class="form-input" id="facName" placeholder="Faction name">
        </div>
        <div class="form-group">
          <label class="form-label">Type</label>
          <input type="text" class="form-input" id="facType" placeholder="Government, Guild, Cult, etc.">
        </div>
        <div class="form-group">
          <label class="form-label">Thumbnail Image (Optional)</label>
          <div id="facThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'facThumbnail')" onclick="document.getElementById('facThumbnailInput').click()">
            <div id="facThumbnailPreview" style="display: none; margin-bottom: 1rem; position: relative;">
              <img id="facThumbnailPreviewImg" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
              <button type="button" onclick="Modal.deleteThumbnail('fac')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
            </div>
            <div id="facThumbnailPlaceholder">
              <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
              <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
              <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
            </div>
          </div>
          <input type="file" id="facThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'facThumbnail')">
          <input type="hidden" id="facThumbnail">
        </div>
        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea class="form-textarea" id="facDescription" placeholder="Describe this faction..."></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Goals</label>
          <textarea class="form-textarea" id="facGoals" placeholder="What does this faction want?"></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Resources</label>
          <input type="text" class="form-input" id="facResources" placeholder="Assets, wealth, influence">
        </div>
        <div class="form-group">
          <label class="form-label">Allies</label>
          <input type="text" class="form-input" id="facAllies" placeholder="Allied factions">
        </div>
        <div class="form-group">
          <label class="form-label">Enemies</label>
          <input type="text" class="form-input" id="facEnemies" placeholder="Enemy factions">
        </div>
      `,
      `
        <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
        <button class="btn btn-primary" onclick="Modal.saveFaction()">Add Faction</button>
      `
    );
  },
  
  saveFaction() {
    const faction = {
      id: 'fac-' + Date.now(),
      name: document.getElementById('facName').value,
      type: document.getElementById('facType').value,
      thumbnail: document.getElementById('facThumbnail').value || '',
      description: document.getElementById('facDescription').value,
      goals: document.getElementById('facGoals').value,
      resources: document.getElementById('facResources').value,
      allies: document.getElementById('facAllies').value,
      enemies: document.getElementById('facEnemies').value
    };
    
    AppState.currentWorld.factions.push(faction);
    AppState.save();
    this.close();
    Views.renderModule('factions');
  },
  
  showAddEvent() {
    this.show(
      'Add Timeline Event',
      `
        <div class="form-group">
          <label class="form-label">Event Name</label>
          <input type="text" class="form-input" id="eventName" placeholder="Event name">
        </div>
        <div class="form-group">
          <label class="form-label">Date</label>
          <input type="text" class="form-input" id="eventDate" placeholder="Year 500, Age of Magic, etc.">
        </div>
        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea class="form-textarea" id="eventDescription" placeholder="What happened?"></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Impact</label>
          <textarea class="form-textarea" id="eventImpact" placeholder="How did this change the world?"></textarea>
        </div>
      `,
      `
        <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
        <button class="btn btn-primary" onclick="Modal.saveEvent()">Add Event</button>
      `
    );
  },
  
  saveEvent() {
    const event = {
      id: 'event-' + Date.now(),
      name: document.getElementById('eventName').value,
      date: document.getElementById('eventDate').value,
      description: document.getElementById('eventDescription').value,
      impact: document.getElementById('eventImpact').value,
      images: [...this.currentImages]
    };
    
    AppState.currentWorld.timeline.push(event);
    AppState.save();
    this.close();
    Views.renderModule('timeline');
  },
  
  showAddRule() {
    this.show(
      'Add Rule',
      `
        <div class="form-group">
          <label class="form-label">Category</label>
          <select class="form-select" id="ruleCategory">
            <option value="Magic">Magic</option>
            <option value="Technology">Technology</option>
            <option value="Politics">Politics</option>
            <option value="Natural Laws">Natural Laws</option>
            <option value="Social">Social</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Rule Name</label>
          <input type="text" class="form-input" id="ruleName" placeholder="Name of this rule">
        </div>
        <div class="form-group">
          <label class="form-label">Relationships</label>
          <textarea class="form-textarea" id="charRelationships" placeholder="Key relationships..."></textarea>
        </div>
      `,
      `
        <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
        <button class="btn btn-primary" onclick="Modal.saveCharacter()">Add Character</button>
      `
    );
  },
  
  saveRule() {
    const rule = {
      id: 'rule-' + Date.now(),
      category: document.getElementById('ruleCategory').value,
      name: document.getElementById('ruleName').value,
      description: document.getElementById('ruleDescription').value
    };
    
    AppState.currentWorld.rules.push(rule);
    AppState.save();
    this.close();
    Views.renderModule('rules');
  },
  
  showAddTheme() {
    this.show(
      'Add Theme',
      `
        <div class="form-group">
          <label class="form-label">Theme Name</label>
          <input type="text" class="form-input" id="themeName" placeholder="e.g., Power and Corruption">
        </div>
        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea class="form-textarea" id="themeDescription" placeholder="How does this theme manifest in your world?"></textarea>
        </div>
      `,
      `
        <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
        <button class="btn btn-primary" onclick="Modal.saveTheme()">Add Theme</button>
      `
    );
  },
  
  saveTheme() {
    const theme = {
      id: 'theme-' + Date.now(),
      name: document.getElementById('themeName').value,
      description: document.getElementById('themeDescription').value
    };
    
    AppState.currentWorld.themes.push(theme);
    AppState.save();
    this.close();
    Views.renderModule('themes');
  },
  
  // Custom Fields
  addCustomField() {
    const fieldId = 'field-' + Date.now();
    this.customFields.push({ id: fieldId, label: '', value: '' });
    this.renderCustomFields();
  },
  
  removeCustomField(fieldId) {
    this.customFields = this.customFields.filter(f => f.id !== fieldId);
    this.renderCustomFields();
  },
  
  renderCustomFields() {
    const container = document.getElementById('customFieldsContainer');
    if (!container) return;
    
    container.innerHTML = this.customFields.map(field => `
      <div class="custom-field" data-field-id="${field.id}">
        <input 
          type="text" 
          class="custom-field-label-input" 
          placeholder="Field name" 
          value="${field.label}"
          onchange="Modal.updateCustomField('${field.id}', 'label', this.value)"
        />
        <input 
          type="text" 
          class="custom-field-value-input" 
          placeholder="Value" 
          value="${field.value}"
          onchange="Modal.updateCustomField('${field.id}', 'value', this.value)"
        />
        <button class="remove-custom-field-btn" onclick="Modal.removeCustomField('${field.id}')" title="Remove field">✕</button>
      </div>
    `).join('');
  },
  
  updateCustomField(fieldId, key, value) {
    const field = this.customFields.find(f => f.id === fieldId);
    if (field) {
      field[key] = value;
    }
  },
  
  getCustomFieldsData() {
    return this.customFields.reduce((acc, field) => {
      if (field.label && field.value) {
        acc[field.label] = field.value;
      }
      return acc;
    }, {});
  },
  
  // Edit functions
  showEditLocation(id) {
    const location = AppState.currentWorld.locations.find(l => l.id === id);
    if (!location) return;
    
    Modal.customFields = [];
    this.show(
      'Edit Location',
      `
        <div class="form-group">
          <label class="form-label">Name</label>
          <input type="text" class="form-input" id="locName" value="${location.name}">
        </div>
        <div class="form-group">
          <label class="form-label">Type</label>
          <input type="text" class="form-input" id="locType" value="${location.type}">
        </div>
        <div class="form-group">
          <label class="form-label">Thumbnail Image (Optional)</label>
          <div id="locationThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'locationThumbnail')" onclick="document.getElementById('locationThumbnailInput').click()">
            <div id="locationThumbnailPreview" style="${location.thumbnail ? '' : 'display: none;'} margin-bottom: 1rem; position: relative;">
              <img id="locationThumbnailPreviewImg" src="${location.thumbnail || ''}" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
              <button type="button" onclick="Modal.deleteThumbnail('location')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
            </div>
            <div id="locationThumbnailPlaceholder" style="${location.thumbnail ? 'display: none;' : ''}">
              <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
              <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
              <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
            </div>
          </div>
          <input type="file" id="locationThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'locationThumbnail')">
          <input type="hidden" id="locationThumbnail" value="${location.thumbnail || ''}">
        </div>
        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea class="form-textarea" id="locDescription">${location.description}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Culture</label>
          <textarea class="form-textarea" id="locCulture">${location.culture}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Resources</label>
          <input type="text" class="form-input" id="locResources" value="${location.resources}">
        </div>
        <div class="form-group">
          <label class="form-label">Population</label>
          <input type="text" class="form-input" id="locPopulation" value="${location.population}">
        </div>
        <div class="form-group">
          <label class="form-label">Government</label>
          <input type="text" class="form-input" id="locGovernment" value="${location.government}">
        </div>
      `,
      `
        <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
        <button class="btn btn-primary" onclick="Modal.updateLocation('${id}')">Save Changes</button>
      `
    );
  },
  
  updateLocation(id) {
    const location = AppState.currentWorld.locations.find(l => l.id === id);
    if (!location) return;
    
    location.name = document.getElementById('locName').value;
    location.type = document.getElementById('locType').value;
    location.thumbnail = document.getElementById('locationThumbnail').value || '';
    location.description = document.getElementById('locDescription').value;
    location.culture = document.getElementById('locCulture').value;
    location.resources = document.getElementById('locResources').value;
    location.population = document.getElementById('locPopulation').value;
    location.government = document.getElementById('locGovernment').value;
    
    AppState.save();
    this.close();
    Views.renderModule('locations');
  },
  
  duplicateLocation(id) {
    const location = AppState.currentWorld.locations.find(l => l.id === id);
    if (!location) return;
    
    const duplicatedLocation = {
      id: 'loc-' + Date.now(),
      name: location.name + ' (Copy)',
      type: location.type,
      thumbnail: location.thumbnail || '',
      description: location.description,
      culture: location.culture,
      resources: location.resources,
      population: location.population,
      government: location.government
    };
    
    AppState.currentWorld.locations.push(duplicatedLocation);
    AppState.save();
    this.close();
    Views.renderModule('locations');
  },
  
  showEditCharacter(id) {
    const character = AppState.currentWorld.characters.find(c => c.id === id);
    if (!character) return;
    
    this.show(
      'Edit Character',
      `
        <div class="form-group">
          <label class="form-label">Name</label>
          <input type="text" class="form-input" id="charName" value="${character.name}">
        </div>
        <div class="form-group">
          <label class="form-label">Role</label>
          <input type="text" class="form-input" id="charRole" value="${character.role}">
        </div>
        <div class="form-group">
          <label class="form-label">Thumbnail Image (Optional)</label>
          <div id="charThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'charThumbnail')" onclick="document.getElementById('charThumbnailInput').click()">
            <div id="charThumbnailPreview" style="${character.thumbnail ? '' : 'display: none;'} margin-bottom: 1rem; position: relative;">
              <img id="charThumbnailPreviewImg" src="${character.thumbnail || ''}" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
              <button type="button" onclick="Modal.deleteCharacterThumbnail()" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
            </div>
            <div id="charThumbnailPlaceholder" style="${character.thumbnail ? 'display: none;' : ''}">
              <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
              <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
              <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
            </div>
          </div>
          <input type="file" id="charThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'charThumbnail')">
          <input type="hidden" id="charThumbnail" value="${character.thumbnail || ''}">
        </div>
        <div class="form-group">
          <label class="form-label">Age</label>
          <input type="text" class="form-input" id="charAge" value="${character.age || ''}">
        </div>
        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea class="form-textarea" id="charDescription">${character.description}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Personality</label>
          <textarea class="form-textarea" id="charPersonality">${character.personality}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Goals</label>
          <textarea class="form-textarea" id="charGoals">${character.goals || ''}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Background</label>
          <textarea class="form-textarea" id="charBackground">${character.background}</textarea>
        </div>
      `,
      `
        <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
        <button class="btn btn-primary" onclick="Modal.updateCharacter('${id}')">Save Changes</button>
      `
    );
  },
  
  updateCharacter(id) {
    const character = AppState.currentWorld.characters.find(c => c.id === id);
    if (!character) return;
    
    character.name = document.getElementById('charName').value;
    character.role = document.getElementById('charRole').value;
    character.thumbnail = document.getElementById('charThumbnail').value || '';
    character.age = document.getElementById('charAge').value;
    character.description = document.getElementById('charDescription').value;
    character.personality = document.getElementById('charPersonality').value;
    character.goals = document.getElementById('charGoals').value;
    character.background = document.getElementById('charBackground').value;
    
    AppState.save();
    this.close();
    Views.renderModule('characters');
  },
  
  duplicateCharacter(id) {
    const character = AppState.currentWorld.characters.find(c => c.id === id);
    if (!character) return;
    
    const duplicatedCharacter = {
      id: 'char-' + Date.now(),
      name: character.name + ' (Copy)',
      role: character.role,
      thumbnail: character.thumbnail || '',
      age: character.age || '',
      description: character.description,
      background: character.background,
      personality: character.personality,
      goals: character.goals || '',
      relationships: character.relationships || '',
      customFields: character.customFields ? JSON.parse(JSON.stringify(character.customFields)) : {}
    };
    
    AppState.currentWorld.characters.push(duplicatedCharacter);
    AppState.save();
    this.close();
    Views.renderModule('characters');
  },
  
  showEditFaction(id) {
    const faction = AppState.currentWorld.factions.find(f => f.id === id);
    if (!faction) return;
    
    this.show(
      'Edit Faction',
      `
        <div class="form-group">
          <label class="form-label">Name</label>
          <input type="text" class="form-input" id="facName" value="${faction.name}">
        </div>
        <div class="form-group">
          <label class="form-label">Type</label>
          <input type="text" class="form-input" id="facType" value="${faction.type}">
        </div>
        <div class="form-group">
          <label class="form-label">Thumbnail Image (Optional)</label>
          <div id="facThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'facThumbnail')" onclick="document.getElementById('facThumbnailInput').click()">
            <div id="facThumbnailPreview" style="${faction.thumbnail ? '' : 'display: none;'} margin-bottom: 1rem; position: relative;">
              <img id="facThumbnailPreviewImg" src="${faction.thumbnail || ''}" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
              <button type="button" onclick="Modal.deleteThumbnail('fac')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
            </div>
            <div id="facThumbnailPlaceholder" style="${faction.thumbnail ? 'display: none;' : ''}">
              <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
              <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
              <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
            </div>
          </div>
          <input type="file" id="facThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'facThumbnail')">
          <input type="hidden" id="facThumbnail" value="${faction.thumbnail || ''}">
        </div>
        <div class="form-group">
          <label class="form-label">Leader</label>
          <input type="text" class="form-input" id="facLeader" value="${faction.leader || ''}">
        </div>
        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea class="form-textarea" id="facDescription">${faction.description}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Goals</label>
          <textarea class="form-textarea" id="facGoals">${faction.goals}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Members</label>
          <input type="text" class="form-input" id="facMembers" value="${faction.members || ''}">
        </div>
        <div class="form-group">
          <label class="form-label">Resources</label>
          <input type="text" class="form-input" id="facResources" value="${faction.resources}">
        </div>
      `,
      `
        <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
        <button class="btn btn-primary" onclick="Modal.updateFaction('${id}')">Save Changes</button>
      `
    );
  },
  
  updateFaction(id) {
    const faction = AppState.currentWorld.factions.find(f => f.id === id);
    if (!faction) return;
    
    faction.name = document.getElementById('facName').value;
    faction.type = document.getElementById('facType').value;
    faction.thumbnail = document.getElementById('facThumbnail').value || '';
    faction.leader = document.getElementById('facLeader').value;
    faction.description = document.getElementById('facDescription').value;
    faction.goals = document.getElementById('facGoals').value;
    faction.members = document.getElementById('facMembers').value;
    faction.resources = document.getElementById('facResources').value;
    
    AppState.save();
    this.close();
    Views.renderModule('factions');
  },
  
  duplicateFaction(id) {
    const faction = AppState.currentWorld.factions.find(f => f.id === id);
    if (!faction) return;
    
    const duplicatedFaction = {
      id: 'fac-' + Date.now(),
      name: faction.name + ' (Copy)',
      type: faction.type,
      thumbnail: faction.thumbnail || '',
      leader: faction.leader || '',
      description: faction.description,
      goals: faction.goals,
      members: faction.members || '',
      resources: faction.resources
    };
    
    AppState.currentWorld.factions.push(duplicatedFaction);
    AppState.save();
    this.close();
    Views.renderModule('factions');
  },
  
  showEditEvent(id) {
    const event = AppState.currentWorld.timeline.find(e => e.id === id);
    if (!event) return;
    
    this.show(
      'Edit Timeline Event',
      `
        <div class="form-group">
          <label class="form-label">Year/Date</label>
          <input type="text" class="form-input" id="eventYear" value="${event.year}">
        </div>
        <div class="form-group">
          <label class="form-label">Event Name</label>
          <input type="text" class="form-input" id="eventName" value="${event.name}">
        </div>
        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea class="form-textarea" id="eventDescription">${event.description}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Impact</label>
          <textarea class="form-textarea" id="eventImpact">${event.impact}</textarea>
        </div>
      `,
      `
        <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
        <button class="btn btn-primary" onclick="Modal.updateEvent('${id}')">Save Changes</button>
      `
    );
  },
  
  updateEvent(id) {
    const event = AppState.currentWorld.timeline.find(e => e.id === id);
    if (!event) return;
    
    event.year = document.getElementById('eventYear').value;
    event.name = document.getElementById('eventName').value;
    event.description = document.getElementById('eventDescription').value;
    event.impact = document.getElementById('eventImpact').value;
    
    AppState.save();
    this.close();
    Views.renderModule('timeline');
  },
  
  duplicateEvent(id) {
    const event = AppState.currentWorld.timeline.find(e => e.id === id);
    if (!event) return;
    
    const duplicatedEvent = {
      id: 'event-' + Date.now(),
      year: event.year,
      name: event.name + ' (Copy)',
      description: event.description,
      impact: event.impact,
      date: event.date || ''
    };
    
    AppState.currentWorld.timeline.push(duplicatedEvent);
    AppState.save();
    this.close();
    Views.renderModule('timeline');
  },
  
  showEditRule(id) {
    const rule = AppState.currentWorld.rules.find(r => r.id === id);
    if (!rule) return;
    
    this.show(
      'Edit Rule',
      `
        <div class="form-group">
          <label class="form-label">Rule Name</label>
          <input type="text" class="form-input" id="ruleName" value="${rule.name}">
        </div>
        <div class="form-group">
          <label class="form-label">Category</label>
          <input type="text" class="form-input" id="ruleCategory" value="${rule.category}">
        </div>
        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea class="form-textarea" id="ruleDescription">${rule.description}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Examples</label>
          <textarea class="form-textarea" id="ruleExamples">${rule.examples}</textarea>
        </div>
      `,
      `
        <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
        <button class="btn btn-primary" onclick="Modal.updateRule('${id}')">Save Changes</button>
      `
    );
  },
  
  updateRule(id) {
    const rule = AppState.currentWorld.rules.find(r => r.id === id);
    if (!rule) return;
    
    rule.name = document.getElementById('ruleName').value;
    rule.category = document.getElementById('ruleCategory').value;
    rule.description = document.getElementById('ruleDescription').value;
    rule.examples = document.getElementById('ruleExamples').value;
    
    AppState.save();
    this.close();
    Views.renderModule('rules');
  },
  
  duplicateRule(id) {
    const rule = AppState.currentWorld.rules.find(r => r.id === id);
    if (!rule) return;
    
    const duplicatedRule = {
      id: 'rule-' + Date.now(),
      name: rule.name + ' (Copy)',
      category: rule.category,
      description: rule.description,
      examples: rule.examples
    };
    
    AppState.currentWorld.rules.push(duplicatedRule);
    AppState.save();
    this.close();
    Views.renderModule('rules');
  },
  
  showEditTheme(id) {
    const theme = AppState.currentWorld.themes.find(t => t.id === id);
    if (!theme) return;
    
    this.show(
      'Edit Theme',
      `
        <div class="form-group">
          <label class="form-label">Theme Name</label>
          <input type="text" class="form-input" id="themeName" value="${theme.name}">
        </div>
        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea class="form-textarea" id="themeDescription">${theme.description}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">How It Manifests</label>
          <textarea class="form-textarea" id="themeManifests">${theme.manifests}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Examples in Story</label>
          <textarea class="form-textarea" id="themeExamples">${theme.examples}</textarea>
        </div>
      `,
      `
        <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
        <button class="btn btn-primary" onclick="Modal.updateTheme('${id}')">Save Changes</button>
      `
    );
  },
  
  updateTheme(id) {
    const theme = AppState.currentWorld.themes.find(t => t.id === id);
    if (!theme) return;
    
    theme.name = document.getElementById('themeName').value;
    theme.description = document.getElementById('themeDescription').value;
    theme.manifests = document.getElementById('themeManifests').value;
    theme.examples = document.getElementById('themeExamples').value;
    
    AppState.save();
    this.close();
    Views.renderModule('themes');
  },
  
  duplicateTheme(id) {
    const theme = AppState.currentWorld.themes.find(t => t.id === id);
    if (!theme) return;
    
    const duplicatedTheme = {
      id: 'theme-' + Date.now(),
      name: theme.name + ' (Copy)',
      description: theme.description,
      manifests: theme.manifests,
      examples: theme.examples,
      image: theme.image || ''
    };
    
    AppState.currentWorld.themes.push(duplicatedTheme);
    AppState.save();
    this.close();
    Views.renderModule('themes');
  },

  // COMPACT MODAL FUNCTIONS FOR NEW MODULES
  // Religion functions
  showAddReligion() {
    this.show('Add Religion', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="relName" placeholder="Deity or faith name"></div>
      <div class="form-group"><label class="form-label">Domain</label><input type="text" class="form-input" id="relDomain" placeholder="e.g., War, Wisdom, Nature"></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="relDescription" placeholder="Core beliefs and teachings..."></textarea></div>
      <div class="form-group"><label class="form-label">Practices</label><textarea class="form-textarea" id="relPractices" placeholder="Rituals, ceremonies, worship practices..."></textarea></div>
      <div class="form-group"><label class="form-label">Followers</label><input type="text" class="form-input" id="relFollowers" placeholder="Who follows this faith?"></div>
      <div class="form-group"><label class="form-label">Sacred Sites</label><input type="text" class="form-input" id="relSites" placeholder="Temples, shrines, holy places..."></div>
    \`, \`<div style="display: flex; justify-content: flex-end; gap: 0.75rem;"><button class="btn btn-secondary" onclick="Modal.close()">Cancel</button><button class="btn btn-primary" onclick="Modal.saveReligion()">Add Religion</button></div>`);
  },
  saveReligion() {
    AppState.currentWorld.religions.push({id:'rel-'+Date.now(),name:document.getElementById('relName').value,domain:document.getElementById('relDomain').value,description:document.getElementById('relDescription').value,practices:document.getElementById('relPractices').value,followers:document.getElementById('relFollowers').value,sites:document.getElementById('relSites').value});
    AppState.save();this.close();Views.renderModule('religions');
  },
  showEditReligion(id) {
    const r=AppState.currentWorld.religions.find(x=>x.id===id);if(!r)return;
    this.show('Edit Religion', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="relName" value="${r.name}"></div>
      <div class="form-group"><label class="form-label">Domain</label><input type="text" class="form-input" id="relDomain" value="${r.domain}"></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="relDescription">${r.description}</textarea></div>
      <div class="form-group"><label class="form-label">Practices</label><textarea class="form-textarea" id="relPractices">${r.practices}</textarea></div>
      <div class="form-group"><label class="form-label">Followers</label><input type="text" class="form-input" id="relFollowers" value="${r.followers}"></div>
      <div class="form-group"><label class="form-label">Sacred Sites</label><input type="text" class="form-input" id="relSites" value="${r.sites}"></div>
    `, `<button class="btn btn-secondary" onclick="Modal.close()">Cancel</button><button class="btn btn-primary" onclick="Modal.updateReligion('${id}')">Save Changes</button></div>`);
  },
  updateReligion(id) {
    const r=AppState.currentWorld.religions.find(x=>x.id===id);if(!r)return;
    r.name=document.getElementById('relName').value;r.domain=document.getElementById('relDomain').value;r.description=document.getElementById('relDescription').value;r.practices=document.getElementById('relPractices').value;r.followers=document.getElementById('relFollowers').value;r.sites=document.getElementById('relSites').value;
    AppState.save();this.close();Views.renderModule('religions');
  },
  duplicateReligion(id) {
    const r=AppState.currentWorld.religions.find(x=>x.id===id);if(!r)return;
    AppState.currentWorld.religions.push({id:'rel-'+Date.now(),name:r.name+' (Copy)',domain:r.domain,description:r.description,practices:r.practices,followers:r.followers,sites:r.sites});
    AppState.save();this.close();Views.renderModule('religions');
  },

  // Fashion functions
  showAddFashion() {
    this.show('Add Fashion', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="fashName" placeholder="Style or garment name"></div>
      <div class="form-group"><label class="form-label">Culture/Class</label><input type="text" class="form-input" id="fashCulture" placeholder="Who wears this?"></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="fashDescription" placeholder="Describe the style..."></textarea></div>
      <div class="form-group"><label class="form-label">Materials</label><input type="text" class="form-input" id="fashMaterials" placeholder="Fabrics, materials used"></div>
      <div class="form-group"><label class="form-label">Colors</label><input type="text" class="form-input" id="fashColors" placeholder="Typical colors and patterns"></div>
      <div class="form-group"><label class="form-label">Significance</label><input type="text" class="form-input" id="fashSignificance" placeholder="Cultural meaning or symbolism"></div>
      <div class="form-group">
        <label class="form-label">Thumbnail Image (Optional)</label>
        <div id="fashThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'fashThumbnail')" onclick="document.getElementById('fashThumbnailInput').click()">
          <div id="fashThumbnailPreview" style="display: none; margin-bottom: 1rem; position: relative;">
            <img id="fashThumbnailPreviewImg" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
            <button type="button" onclick="Modal.deleteThumbnail('fash')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
          </div>
          <div id="fashThumbnailPlaceholder">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
            <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
            <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
          </div>
        </div>
        <input type="file" id="fashThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'fashThumbnail')">
        <input type="hidden" id="fashThumbnail">
      </div>
    `, `<div style="display: flex; justify-content: flex-end; gap: 0.75rem;"><button class="btn btn-secondary" onclick="Modal.close()">Cancel</button><button class="btn btn-primary" onclick="Modal.saveFashion()">Add Fashion</button></div>`);
  },
  saveFashion() {
    AppState.currentWorld.fashions.push({id:'fash-'+Date.now(),name:document.getElementById('fashName').value,culture:document.getElementById('fashCulture').value,thumbnail:document.getElementById('fashThumbnail').value||'',description:document.getElementById('fashDescription').value,materials:document.getElementById('fashMaterials').value,colors:document.getElementById('fashColors').value,significance:document.getElementById('fashSignificance').value});
    AppState.save();this.close();Views.renderModule('fashions');
  },
  showEditFashion(id) {
    const f=AppState.currentWorld.fashions.find(x=>x.id===id);if(!f)return;
    this.show('Edit Fashion', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="fashName" value="${f.name}"></div>
      <div class="form-group"><label class="form-label">Culture/Class</label><input type="text" class="form-input" id="fashCulture" value="${f.culture}"></div>
      <div class="form-group">
        <label class="form-label">Thumbnail Image (Optional)</label>
        <div id="fashThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'fashThumbnail')" onclick="document.getElementById('fashThumbnailInput').click()">
          <div id="fashThumbnailPreview" style="${f.thumbnail ? '' : 'display: none;'} margin-bottom: 1rem; position: relative;">
            <img id="fashThumbnailPreviewImg" src="${f.thumbnail || ''}" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
            <button type="button" onclick="Modal.deleteThumbnail('fash')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
          </div>
          <div id="fashThumbnailPlaceholder" style="${f.thumbnail ? 'display: none;' : ''}">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
            <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
            <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
          </div>
        </div>
        <input type="file" id="fashThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'fashThumbnail')">
        <input type="hidden" id="fashThumbnail" value="${f.thumbnail || ''}">
      </div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="fashDescription">${f.description}</textarea></div>
      <div class="form-group"><label class="form-label">Materials</label><input type="text" class="form-input" id="fashMaterials" value="${f.materials}"></div>
      <div class="form-group"><label class="form-label">Colors</label><input type="text" class="form-input" id="fashColors" value="${f.colors}"></div>
      <div class="form-group"><label class="form-label">Significance</label><input type="text" class="form-input" id="fashSignificance" value="${f.significance}"></div>
    `, `<button class="btn btn-secondary" onclick="Modal.close()">Cancel</button><button class="btn btn-primary" onclick="Modal.updateFashion('${id}')">Save Changes</button></div>`);
  },
  updateFashion(id) {
    const f=AppState.currentWorld.fashions.find(x=>x.id===id);if(!f)return;
    f.name=document.getElementById('fashName').value;f.culture=document.getElementById('fashCulture').value;f.thumbnail=document.getElementById('fashThumbnail').value||'';f.description=document.getElementById('fashDescription').value;f.materials=document.getElementById('fashMaterials').value;f.colors=document.getElementById('fashColors').value;f.significance=document.getElementById('fashSignificance').value;
    AppState.save();this.close();Views.renderModule('fashions');
  },
  duplicateFashion(id) {
    const f=AppState.currentWorld.fashions.find(x=>x.id===id);if(!f)return;
    AppState.currentWorld.fashions.push({id:'fash-'+Date.now(),name:f.name+' (Copy)',culture:f.culture,thumbnail:f.thumbnail||'',description:f.description,materials:f.materials,colors:f.colors,significance:f.significance});
    AppState.save();this.close();Views.renderModule('fashions');
  },

  // Magic System functions
  showAddMagicSystem() {
    this.show('Add Magic System', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="magName" placeholder="Magic system name"></div>
      <div class="form-group"><label class="form-label">Type</label><input type="text" class="form-input" id="magType" placeholder="Hard/Soft, Elemental, etc."></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="magDescription" placeholder="How does this magic work?"></textarea></div>
      <div class="form-group"><label class="form-label">Source</label><input type="text" class="form-input" id="magSource" placeholder="Where does the power come from?"></div>
      <div class="form-group"><label class="form-label">Limitations</label><textarea class="form-textarea" id="magLimitations" placeholder="Rules, restrictions, weaknesses..."></textarea></div>
      <div class="form-group"><label class="form-label">Cost</label><input type="text" class="form-input" id="magCost" placeholder="What does using magic cost?"></div>
      <div class="form-group">
        <label class="form-label">Thumbnail Image (Optional)</label>
        <div id="magThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'magThumbnail')" onclick="document.getElementById('magThumbnailInput').click()">
          <div id="magThumbnailPreview" style="display: none; margin-bottom: 1rem; position: relative;">
            <img id="magThumbnailPreviewImg" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
            <button type="button" onclick="Modal.deleteThumbnail('mag')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
          </div>
          <div id="magThumbnailPlaceholder">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
            <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
            <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
          </div>
        </div>
        <input type="file" id="magThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'magThumbnail')">
        <input type="hidden" id="magThumbnail">
      </div>
    `, `<div style="display: flex; justify-content: flex-end; gap: 0.75rem;"><button class="btn btn-secondary" onclick="Modal.close()">Cancel</button><button class="btn btn-primary" onclick="Modal.saveMagicSystem()">Add Magic System</button></div>`);
  },
  saveMagicSystem() {
    AppState.currentWorld.magicSystems.push({id:'mag-'+Date.now(),name:document.getElementById('magName').value,type:document.getElementById('magType').value,thumbnail:document.getElementById('magThumbnail').value||'',description:document.getElementById('magDescription').value,source:document.getElementById('magSource').value,limitations:document.getElementById('magLimitations').value,cost:document.getElementById('magCost').value});
    AppState.save();this.close();Views.renderModule('magicSystems');
  },
  showEditMagicSystem(id) {
    const m=AppState.currentWorld.magicSystems.find(x=>x.id===id);if(!m)return;
    this.show('Edit Magic System', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="magName" value="${m.name}"></div>
      <div class="form-group"><label class="form-label">Type</label><input type="text" class="form-input" id="magType" value="${m.type}"></div>
      <div class="form-group">
        <label class="form-label">Thumbnail Image (Optional)</label>
        <div id="magThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'magThumbnail')" onclick="document.getElementById('magThumbnailInput').click()">
          <div id="magThumbnailPreview" style="${m.thumbnail ? '' : 'display: none;'} margin-bottom: 1rem; position: relative;">
            <img id="magThumbnailPreviewImg" src="${m.thumbnail || ''}" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
            <button type="button" onclick="Modal.deleteThumbnail('mag')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
          </div>
          <div id="magThumbnailPlaceholder" style="${m.thumbnail ? 'display: none;' : ''}">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
            <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
            <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
          </div>
        </div>
        <input type="file" id="magThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'magThumbnail')">
        <input type="hidden" id="magThumbnail" value="${m.thumbnail || ''}">
      </div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="magDescription">${m.description}</textarea></div>
      <div class="form-group"><label class="form-label">Source</label><input type="text" class="form-input" id="magSource" value="${m.source}"></div>
      <div class="form-group"><label class="form-label">Limitations</label><textarea class="form-textarea" id="magLimitations">${m.limitations}</textarea></div>
      <div class="form-group"><label class="form-label">Cost</label><input type="text" class="form-input" id="magCost" value="${m.cost}"></div>
    `, `<button class="btn btn-secondary" onclick="Modal.close()">Cancel</button><button class="btn btn-primary" onclick="Modal.updateMagicSystem('${id}')">Save Changes</button></div>`);
  },
  updateMagicSystem(id) {
    const m=AppState.currentWorld.magicSystems.find(x=>x.id===id);if(!m)return;
    m.name=document.getElementById('magName').value;m.type=document.getElementById('magType').value;m.thumbnail=document.getElementById('magThumbnail').value||'';m.description=document.getElementById('magDescription').value;m.source=document.getElementById('magSource').value;m.limitations=document.getElementById('magLimitations').value;m.cost=document.getElementById('magCost').value;
    AppState.save();this.close();Views.renderModule('magicSystems');
  },
  duplicateMagicSystem(id) {
    const m=AppState.currentWorld.magicSystems.find(x=>x.id===id);if(!m)return;
    AppState.currentWorld.magicSystems.push({id:'mag-'+Date.now(),name:m.name+' (Copy)',type:m.type,thumbnail:m.thumbnail||'',description:m.description,source:m.source,limitations:m.limitations,cost:m.cost});
    AppState.save();this.close();Views.renderModule('magicSystems');
  },

  // Language functions
  showAddLanguage() {
    this.show('Add Language', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="langName" placeholder="Language name"></div>
      <div class="form-group"><label class="form-label">Speakers</label><input type="text" class="form-input" id="langSpeakers" placeholder="Who speaks this language?"></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="langDescription" placeholder="Characteristics of the language..."></textarea></div>
      <div class="form-group"><label class="form-label">Writing System</label><input type="text" class="form-input" id="langWriting" placeholder="Alphabet, runes, ideograms, etc."></div>
      <div class="form-group"><label class="form-label">Key Phrases</label><textarea class="form-textarea" id="langPhrases" placeholder="Important words or phrases..."></textarea></div>
      <div class="form-group"><label class="form-label">Related Languages</label><input type="text" class="form-input" id="langRelated" placeholder="Language family or related tongues"></div>
    \`, \`<button class="btn btn-secondary" onclick="Modal.close()">Cancel</button><button class="btn btn-primary" onclick="Modal.saveLanguage()">Add Language</button></div>`);
  },
  saveLanguage() {
    AppState.currentWorld.languages.push({id:'lang-'+Date.now(),name:document.getElementById('langName').value,speakers:document.getElementById('langSpeakers').value,description:document.getElementById('langDescription').value,writing:document.getElementById('langWriting').value,phrases:document.getElementById('langPhrases').value,related:document.getElementById('langRelated').value});
    AppState.save();this.close();Views.renderModule('languages');
  },
  showEditLanguage(id) {
    const l=AppState.currentWorld.languages.find(x=>x.id===id);if(!l)return;
    this.show('Edit Language', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="langName" value="${l.name}"></div>
      <div class="form-group"><label class="form-label">Speakers</label><input type="text" class="form-input" id="langSpeakers" value="${l.speakers}"></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="langDescription">${l.description}</textarea></div>
      <div class="form-group"><label class="form-label">Writing System</label><input type="text" class="form-input" id="langWriting" value="${l.writing}"></div>
      <div class="form-group"><label class="form-label">Key Phrases</label><textarea class="form-textarea" id="langPhrases">${l.phrases}</textarea></div>
      <div class="form-group"><label class="form-label">Related Languages</label><input type="text" class="form-input" id="langRelated" value="${l.related}"></div>
    `, `
      <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
      <button class="btn btn-primary" onclick="Modal.updateLanguage('${id}')">Save Changes</button>
    `);
  },
  updateLanguage(id) {
    const l=AppState.currentWorld.languages.find(x=>x.id===id);if(!l)return;
    l.name=document.getElementById('langName').value;l.speakers=document.getElementById('langSpeakers').value;l.description=document.getElementById('langDescription').value;l.writing=document.getElementById('langWriting').value;l.phrases=document.getElementById('langPhrases').value;l.related=document.getElementById('langRelated').value;
    AppState.save();this.close();Views.renderModule('languages');
  },
  duplicateLanguage(id) {
    const l=AppState.currentWorld.languages.find(x=>x.id===id);if(!l)return;
    AppState.currentWorld.languages.push({id:'lang-'+Date.now(),name:l.name+' (Copy)',speakers:l.speakers,description:l.description,writing:l.writing,phrases:l.phrases,related:l.related});
    AppState.save();this.close();Views.renderModule('languages');
  },

  // Economy functions
  showAddEconomy() {
    this.show('Add Economy', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="econName" placeholder="Economic system name"></div>
      <div class="form-group"><label class="form-label">Type</label><input type="text" class="form-input" id="econType" placeholder="Capitalist, feudal, barter, etc."></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="econDescription" placeholder="How does the economy work?"></textarea></div>
      <div class="form-group"><label class="form-label">Currency</label><input type="text" class="form-input" id="econCurrency" placeholder="Money, coins, trade goods"></div>
      <div class="form-group"><label class="form-label">Major Exports</label><input type="text" class="form-input" id="econExports" placeholder="What does this economy produce?"></div>
      <div class="form-group"><label class="form-label">Trade Routes</label><input type="text" class="form-input" id="econRoutes" placeholder="Key trading partners and routes"></div>
    `, `<div style="display: flex; justify-content: flex-end; gap: 0.75rem;"><button class="btn btn-secondary" onclick="Modal.close()">Cancel</button><button class="btn btn-primary" onclick="Modal.saveEconomy()">Add Economy</button></div>`);
  },
  saveEconomy() {
    AppState.currentWorld.economies.push({id:'econ-'+Date.now(),name:document.getElementById('econName').value,type:document.getElementById('econType').value,description:document.getElementById('econDescription').value,currency:document.getElementById('econCurrency').value,exports:document.getElementById('econExports').value,routes:document.getElementById('econRoutes').value});
    AppState.save();this.close();Views.renderModule('economies');
  },
  showEditEconomy(id) {
    const e=AppState.currentWorld.economies.find(x=>x.id===id);if(!e)return;
    this.show('Edit Economy', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="econName" value="${e.name}"></div>
      <div class="form-group"><label class="form-label">Type</label><input type="text" class="form-input" id="econType" value="${e.type}"></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="econDescription">${e.description}</textarea></div>
      <div class="form-group"><label class="form-label">Currency</label><input type="text" class="form-input" id="econCurrency" value="${e.currency}"></div>
      <div class="form-group"><label class="form-label">Major Exports</label><input type="text" class="form-input" id="econExports" value="${e.exports}"></div>
      <div class="form-group"><label class="form-label">Trade Routes</label><input type="text" class="form-input" id="econRoutes" value="${e.routes}"></div>
    `, `
      <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
      <button class="btn btn-primary" onclick="Modal.updateEconomy('${id}')">Save Changes</button>
    `);
  },
  updateEconomy(id) {
    const e=AppState.currentWorld.economies.find(x=>x.id===id);if(!e)return;
    e.name=document.getElementById('econName').value;e.type=document.getElementById('econType').value;e.description=document.getElementById('econDescription').value;e.currency=document.getElementById('econCurrency').value;e.exports=document.getElementById('econExports').value;e.routes=document.getElementById('econRoutes').value;
    AppState.save();this.close();Views.renderModule('economies');
  },
  duplicateEconomy(id) {
    const e=AppState.currentWorld.economies.find(x=>x.id===id);if(!e)return;
    AppState.currentWorld.economies.push({id:'econ-'+Date.now(),name:e.name+' (Copy)',type:e.type,description:e.description,currency:e.currency,exports:e.exports,routes:e.routes});
    AppState.save();this.close();Views.renderModule('economies');
  },

  // Politics functions
  showAddPolitics() {
    this.show('Add Political System', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="polName" placeholder="Government or political system name"></div>
      <div class="form-group"><label class="form-label">Type</label><input type="text" class="form-input" id="polType" placeholder="Democracy, monarchy, etc."></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="polDescription" placeholder="How does this system work?"></textarea></div>
      <div class="form-group"><label class="form-label">Leaders</label><input type="text" class="form-input" id="polLeaders" placeholder="Key political figures"></div>
      <div class="form-group"><label class="form-label">Key Laws</label><textarea class="form-textarea" id="polLaws" placeholder="Important laws and policies..."></textarea></div>
      <div class="form-group"><label class="form-label">Current Conflicts</label><input type="text" class="form-input" id="polConflicts" placeholder="Political tensions or issues"></div>
    \`, \`<button class="btn btn-secondary" onclick="Modal.close()">Cancel</button><button class="btn btn-primary" onclick="Modal.savePolitics()">Add Political System</button></div>`);
  },
  savePolitics() {
    AppState.currentWorld.politics.push({id:'pol-'+Date.now(),name:document.getElementById('polName').value,type:document.getElementById('polType').value,description:document.getElementById('polDescription').value,leaders:document.getElementById('polLeaders').value,laws:document.getElementById('polLaws').value,conflicts:document.getElementById('polConflicts').value});
    AppState.save();this.close();Views.renderModule('politics');
  },
  showEditPolitics(id) {
    const p=AppState.currentWorld.politics.find(x=>x.id===id);if(!p)return;
    this.show('Edit Political System', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="polName" value="${p.name}"></div>
      <div class="form-group"><label class="form-label">Type</label><input type="text" class="form-input" id="polType" value="${p.type}"></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="polDescription">${p.description}</textarea></div>
      <div class="form-group"><label class="form-label">Leaders</label><input type="text" class="form-input" id="polLeaders" value="${p.leaders}"></div>
      <div class="form-group"><label class="form-label">Key Laws</label><textarea class="form-textarea" id="polLaws">${p.laws}</textarea></div>
      <div class="form-group"><label class="form-label">Current Conflicts</label><input type="text" class="form-input" id="polConflicts" value="${p.conflicts}"></div>
    `, `
      <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
      <button class="btn btn-primary" onclick="Modal.updatePolitics('${id}')">Save Changes</button>
    `);
  },
  updatePolitics(id) {
    const p=AppState.currentWorld.politics.find(x=>x.id===id);if(!p)return;
    p.name=document.getElementById('polName').value;p.type=document.getElementById('polType').value;p.description=document.getElementById('polDescription').value;p.leaders=document.getElementById('polLeaders').value;p.laws=document.getElementById('polLaws').value;p.conflicts=document.getElementById('polConflicts').value;
    
    AppState.save();this.close();Views.renderModule('politics');
  },
  duplicatePolitics(id) {
    const p=AppState.currentWorld.politics.find(x=>x.id===id);if(!p)return;
    AppState.currentWorld.politics.push({id:'pol-'+Date.now(),name:p.name+' (Copy)',type:p.type,image:p.image||'',description:p.description,leaders:p.leaders,laws:p.laws,conflicts:p.conflicts});
    AppState.save();this.close();Views.renderModule('politics');
  },

  // Technology functions
  showAddTechnology() {
    this.show('Add Technology', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="techName" placeholder="Technology or invention name"></div>
      <div class="form-group"><label class="form-label">Category</label><input type="text" class="form-input" id="techCategory" placeholder="Transportation, communication, etc."></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="techDescription" placeholder="What is this technology?"></textarea></div>
      <div class="form-group"><label class="form-label">Function</label><input type="text" class="form-input" id="techFunction" placeholder="What does it do?"></div>
      <div class="form-group"><label class="form-label">Inventor</label><input type="text" class="form-input" id="techInventor" placeholder="Who created it?"></div>
      <div class="form-group"><label class="form-label">Impact</label><textarea class="form-textarea" id="techImpact" placeholder="How has it changed society?"></textarea></div>
      <div class="form-group">
        <label class="form-label">Thumbnail Image (Optional)</label>
        <div id="techThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'techThumbnail')" onclick="document.getElementById('techThumbnailInput').click()">
          <div id="techThumbnailPreview" style="display: none; margin-bottom: 1rem; position: relative;">
            <img id="techThumbnailPreviewImg" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
            <button type="button" onclick="Modal.deleteThumbnail('tech')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
          </div>
          <div id="techThumbnailPlaceholder">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
            <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
            <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
          </div>
        </div>
        <input type="file" id="techThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'techThumbnail')">
        <input type="hidden" id="techThumbnail">
      </div>
    `, `<div style="display: flex; justify-content: flex-end; gap: 0.75rem;"><button class="btn btn-secondary" onclick="Modal.close()">Cancel</button><button class="btn btn-primary" onclick="Modal.saveTechnology()">Add Technology</button></div>`);
  },
  saveTechnology() {
    AppState.currentWorld.technologies.push({id:'tech-'+Date.now(),name:document.getElementById('techName').value,category:document.getElementById('techCategory').value,thumbnail:document.getElementById('techThumbnail').value||'',description:document.getElementById('techDescription').value,function:document.getElementById('techFunction').value,inventor:document.getElementById('techInventor').value,impact:document.getElementById('techImpact').value});
    AppState.save();this.close();Views.renderModule('technologies');
  },
  showEditTechnology(id) {
    const t=AppState.currentWorld.technologies.find(x=>x.id===id);if(!t)return;
    this.show('Edit Technology', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="techName" value="${t.name}"></div>
      <div class="form-group"><label class="form-label">Category</label><input type="text" class="form-input" id="techCategory" value="${t.category}"></div>
      <div class="form-group">
        <label class="form-label">Thumbnail Image (Optional)</label>
        <div id="techThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'techThumbnail')" onclick="document.getElementById('techThumbnailInput').click()">
          <div id="techThumbnailPreview" style="${t.thumbnail ? '' : 'display: none;'} margin-bottom: 1rem; position: relative;">
            <img id="techThumbnailPreviewImg" src="${t.thumbnail || ''}" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
            <button type="button" onclick="Modal.deleteThumbnail('tech')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
          </div>
          <div id="techThumbnailPlaceholder" style="${t.thumbnail ? 'display: none;' : ''}">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
            <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
            <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
          </div>
        </div>
        <input type="file" id="techThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'techThumbnail')">
        <input type="hidden" id="techThumbnail" value="${t.thumbnail || ''}">
      </div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="techDescription">${t.description}</textarea></div>
      <div class="form-group"><label class="form-label">Function</label><input type="text" class="form-input" id="techFunction" value="${t.function}"></div>
      <div class="form-group"><label class="form-label">Inventor</label><input type="text" class="form-input" id="techInventor" value="${t.inventor}"></div>
      <div class="form-group"><label class="form-label">Impact</label><textarea class="form-textarea" id="techImpact">${t.impact}</textarea></div>
    `, `
      <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
      <button class="btn btn-primary" onclick="Modal.updateTechnology('${id}')">Save Changes</button>
    `);
  },
  updateTechnology(id) {
    const t=AppState.currentWorld.technologies.find(x=>x.id===id);if(!t)return;
    t.name=document.getElementById('techName').value;t.category=document.getElementById('techCategory').value;t.thumbnail=document.getElementById('techThumbnail').value||'';t.description=document.getElementById('techDescription').value;t.function=document.getElementById('techFunction').value;t.inventor=document.getElementById('techInventor').value;t.impact=document.getElementById('techImpact').value;
    AppState.save();this.close();Views.renderModule('technologies');
  },
  duplicateTechnology(id) {
    const t=AppState.currentWorld.technologies.find(x=>x.id===id);if(!t)return;
    AppState.currentWorld.technologies.push({id:'tech-'+Date.now(),name:t.name+' (Copy)',category:t.category,thumbnail:t.thumbnail||'',description:t.description,function:t.function,inventor:t.inventor,impact:t.impact});
    AppState.save();this.close();Views.renderModule('technologies');
  },

  // Flora & Fauna functions
  showAddFloraFauna() {
    this.show('Add Species', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="ffName" placeholder="Species name"></div>
      <div class="form-group"><label class="form-label">Type</label><input type="text" class="form-input" id="ffType" placeholder="Plant, animal, creature, etc."></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="ffDescription" placeholder="Appearance and characteristics..."></textarea></div>
      <div class="form-group"><label class="form-label">Habitat</label><input type="text" class="form-input" id="ffHabitat" placeholder="Where does it live?"></div>
      <div class="form-group"><label class="form-label">Uses</label><input type="text" class="form-input" id="ffUses" placeholder="Medicinal, food, materials, etc."></div>
      <div class="form-group"><label class="form-label">Danger Level</label><input type="text" class="form-input" id="ffDanger" placeholder="Harmless, dangerous, deadly, etc."></div>
      <div class="form-group">
        <label class="form-label">Thumbnail Image (Optional)</label>
        <div id="ffThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'ffThumbnail')" onclick="document.getElementById('ffThumbnailInput').click()">
          <div id="ffThumbnailPreview" style="display: none; margin-bottom: 1rem; position: relative;">
            <img id="ffThumbnailPreviewImg" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
            <button type="button" onclick="Modal.deleteThumbnail('ff')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
          </div>
          <div id="ffThumbnailPlaceholder">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
            <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
            <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
          </div>
        </div>
        <input type="file" id="ffThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'ffThumbnail')">
        <input type="hidden" id="ffThumbnail">
      </div>
    `, `<div style="display: flex; justify-content: flex-end; gap: 0.75rem;"><button class="btn btn-secondary" onclick="Modal.close()">Cancel</button><button class="btn btn-primary" onclick="Modal.saveFloraFauna()">Add Species</button></div>`);
  },
  saveFloraFauna() {
    AppState.currentWorld.floraFauna.push({id:'ff-'+Date.now(),name:document.getElementById('ffName').value,type:document.getElementById('ffType').value,thumbnail:document.getElementById('ffThumbnail').value||'',description:document.getElementById('ffDescription').value,habitat:document.getElementById('ffHabitat').value,uses:document.getElementById('ffUses').value,danger:document.getElementById('ffDanger').value});
    AppState.save();this.close();Views.renderModule('floraFauna');
  },
  showEditFloraFauna(id) {
    const f=AppState.currentWorld.floraFauna.find(x=>x.id===id);if(!f)return;
    this.show('Edit Species', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="ffName" value="${f.name}"></div>
      <div class="form-group"><label class="form-label">Type</label><input type="text" class="form-input" id="ffType" value="${f.type}"></div>
      <div class="form-group">
        <label class="form-label">Thumbnail Image (Optional)</label>
        <div id="ffThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'ffThumbnail')" onclick="document.getElementById('ffThumbnailInput').click()">
          <div id="ffThumbnailPreview" style="${f.thumbnail ? '' : 'display: none;'} margin-bottom: 1rem; position: relative;">
            <img id="ffThumbnailPreviewImg" src="${f.thumbnail || ''}" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
            <button type="button" onclick="Modal.deleteThumbnail('ff')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
          </div>
          <div id="ffThumbnailPlaceholder" style="${f.thumbnail ? 'display: none;' : ''}">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
            <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
            <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
          </div>
        </div>
        <input type="file" id="ffThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'ffThumbnail')">
        <input type="hidden" id="ffThumbnail" value="${f.thumbnail || ''}">
      </div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="ffDescription">${f.description}</textarea></div>
      <div class="form-group"><label class="form-label">Habitat</label><input type="text" class="form-input" id="ffHabitat" value="${f.habitat}"></div>
      <div class="form-group"><label class="form-label">Uses</label><input type="text" class="form-input" id="ffUses" value="${f.uses}"></div>
      <div class="form-group"><label class="form-label">Danger Level</label><input type="text" class="form-input" id="ffDanger" value="${f.danger}"></div>
    `, `
      <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
      <button class="btn btn-primary" onclick="Modal.updateFloraFauna('${id}')">Save Changes</button>
    `);
  },
  updateFloraFauna(id) {
    const f=AppState.currentWorld.floraFauna.find(x=>x.id===id);if(!f)return;
    f.name=document.getElementById('ffName').value;f.type=document.getElementById('ffType').value;f.thumbnail=document.getElementById('ffThumbnail').value||'';f.description=document.getElementById('ffDescription').value;f.habitat=document.getElementById('ffHabitat').value;f.uses=document.getElementById('ffUses').value;f.danger=document.getElementById('ffDanger').value;
    AppState.save();this.close();Views.renderModule('floraFauna');
  },
  duplicateFloraFauna(id) {
    const f=AppState.currentWorld.floraFauna.find(x=>x.id===id);if(!f)return;
    AppState.currentWorld.floraFauna.push({id:'ff-'+Date.now(),name:f.name+' (Copy)',type:f.type,thumbnail:f.thumbnail||'',description:f.description,habitat:f.habitat,uses:f.uses,danger:f.danger});
    AppState.save();this.close();Views.renderModule('floraFauna');
  },

  // Creatures functions
  showAddCreature() {
    this.show('Add Creature', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="crName" placeholder="Creature name"></div>
      <div class="form-group"><label class="form-label">Type</label><input type="text" class="form-input" id="crType" placeholder="Mammal, reptile, mythical beast, etc."></div>
      <div class="form-group">
        <label class="form-label">Thumbnail Image (Optional)</label>
        <div id="crThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'crThumbnail')" onclick="document.getElementById('crThumbnailInput').click()">
          <div id="crThumbnailPreview" style="display: none; margin-bottom: 1rem; position: relative;">
            <img id="crThumbnailPreviewImg" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
            <button type="button" onclick="Modal.deleteThumbnail('cr')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
          </div>
          <div id="crThumbnailPlaceholder">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
            <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
            <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
          </div>
        </div>
        <input type="file" id="crThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'crThumbnail')">
        <input type="hidden" id="crThumbnail">
      </div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="crDescription" placeholder="Physical appearance and characteristics..."></textarea></div>
      <div class="form-group"><label class="form-label">Habitat</label><input type="text" class="form-input" id="crHabitat" placeholder="Where does it live?"></div>
      <div class="form-group"><label class="form-label">Diet</label><input type="text" class="form-input" id="crDiet" placeholder="Carnivore, herbivore, omnivore, etc."></div>
      <div class="form-group"><label class="form-label">Behavior</label><input type="text" class="form-input" id="crBehavior" placeholder="Aggressive, docile, territorial, etc."></div>
      <div class="form-group"><label class="form-label">Special Abilities</label><input type="text" class="form-input" id="crAbilities" placeholder="Flight, magic, venom, etc."></div>
      <div class="form-group"><label class="form-label">Danger Level</label><input type="text" class="form-input" id="crDanger" placeholder="Harmless, dangerous, deadly, etc."></div>
      <div class="form-group"><label class="form-label">Population</label><input type="text" class="form-input" id="crPopulation" placeholder="Common, rare, endangered, etc."></div>
    `, `<div style="display: flex; justify-content: flex-end; gap: 0.75rem;"><button class="btn btn-secondary" onclick="Modal.close()">Cancel</button><button class="btn btn-primary" onclick="Modal.saveCreature()">Add Creature</button></div>`);
  },
  saveCreature() {
    AppState.currentWorld.creatures.push({
      id: 'cr-' + Date.now(),
      name: document.getElementById('crName').value,
      type: document.getElementById('crType').value,
      thumbnail: document.getElementById('crThumbnail').value || '',
      description: document.getElementById('crDescription').value,
      habitat: document.getElementById('crHabitat').value,
      diet: document.getElementById('crDiet').value,
      behavior: document.getElementById('crBehavior').value,
      abilities: document.getElementById('crAbilities').value,
      danger: document.getElementById('crDanger').value,
      population: document.getElementById('crPopulation').value
    });
    AppState.save();
    this.close();
    Views.renderModule('creatures');
  },
  showEditCreature(id) {
    const c = AppState.currentWorld.creatures.find(x => x.id === id);
    if (!c) return;
    this.show('Edit Creature', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="crName" value="${c.name}"></div>
      <div class="form-group"><label class="form-label">Type</label><input type="text" class="form-input" id="crType" value="${c.type}"></div>
      <div class="form-group">
        <label class="form-label">Thumbnail Image (Optional)</label>
        <div id="crThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'crThumbnail')" onclick="document.getElementById('crThumbnailInput').click()">
          <div id="crThumbnailPreview" style="${c.thumbnail ? '' : 'display: none;'} margin-bottom: 1rem; position: relative;">
            <img id="crThumbnailPreviewImg" src="${c.thumbnail || ''}" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
            <button type="button" onclick="Modal.deleteThumbnail('cr')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
          </div>
          <div id="crThumbnailPlaceholder" style="${c.thumbnail ? 'display: none;' : ''}">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
            <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
            <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
          </div>
        </div>
        <input type="file" id="crThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'crThumbnail')">
        <input type="hidden" id="crThumbnail" value="${c.thumbnail || ''}">
      </div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="crDescription">${c.description}</textarea></div>
      <div class="form-group"><label class="form-label">Habitat</label><input type="text" class="form-input" id="crHabitat" value="${c.habitat}"></div>
      <div class="form-group"><label class="form-label">Diet</label><input type="text" class="form-input" id="crDiet" value="${c.diet}"></div>
      <div class="form-group"><label class="form-label">Behavior</label><input type="text" class="form-input" id="crBehavior" value="${c.behavior}"></div>
      <div class="form-group"><label class="form-label">Special Abilities</label><input type="text" class="form-input" id="crAbilities" value="${c.abilities}"></div>
      <div class="form-group"><label class="form-label">Danger Level</label><input type="text" class="form-input" id="crDanger" value="${c.danger}"></div>
      <div class="form-group"><label class="form-label">Population</label><input type="text" class="form-input" id="crPopulation" value="${c.population}"></div>
    `, `
      <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
      <button class="btn btn-primary" onclick="Modal.updateCreature('${id}')">Save Changes</button>
    `);
  },
  updateCreature(id) {
    const c = AppState.currentWorld.creatures.find(x => x.id === id);
    if (!c) return;
    c.name = document.getElementById('crName').value;
    c.type = document.getElementById('crType').value;
    c.thumbnail = document.getElementById('crThumbnail').value || '';
    c.description = document.getElementById('crDescription').value;
    c.habitat = document.getElementById('crHabitat').value;
    c.diet = document.getElementById('crDiet').value;
    c.behavior = document.getElementById('crBehavior').value;
    c.abilities = document.getElementById('crAbilities').value;
    c.danger = document.getElementById('crDanger').value;
    c.population = document.getElementById('crPopulation').value;
    AppState.save();
    this.close();
    Views.renderModule('creatures');
  },
  duplicateCreature(id) {
    const c=AppState.currentWorld.creatures.find(x=>x.id===id);if(!c)return;
    AppState.currentWorld.creatures.push({id:'cr-'+Date.now(),name:c.name+' (Copy)',type:c.type,thumbnail:c.thumbnail||'',description:c.description,habitat:c.habitat,behavior:c.behavior,abilities:c.abilities,weaknesses:c.weaknesses,threat:c.threat});
    AppState.save();this.close();Views.renderModule('creatures');
  },

  // Cuisine functions
  showAddCuisine() {
    this.show('Add Cuisine', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="cuisName" placeholder="Dish or cuisine name"></div>
      <div class="form-group"><label class="form-label">Culture</label><input type="text" class="form-input" id="cuisCulture" placeholder="Cultural origin"></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="cuisDescription" placeholder="What is this dish?"></textarea></div>
      <div class="form-group"><label class="form-label">Ingredients</label><textarea class="form-textarea" id="cuisIngredients" placeholder="Key ingredients..."></textarea></div>
      <div class="form-group"><label class="form-label">Preparation</label><input type="text" class="form-input" id="cuisPreparation" placeholder="How is it made?"></div>
      <div class="form-group"><label class="form-label">Significance</label><input type="text" class="form-input" id="cuisSignificance" placeholder="Cultural meaning or occasions"></div>
      <div class="form-group">
        <label class="form-label">Thumbnail Image (Optional)</label>
        <div id="cuisThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'cuisThumbnail')" onclick="document.getElementById('cuisThumbnailInput').click()">
          <div id="cuisThumbnailPreview" style="display: none; margin-bottom: 1rem; position: relative;">
            <img id="cuisThumbnailPreviewImg" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
            <button type="button" onclick="Modal.deleteThumbnail('cuis')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
          </div>
          <div id="cuisThumbnailPlaceholder">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
            <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
            <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
          </div>
        </div>
        <input type="file" id="cuisThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'cuisThumbnail')">
        <input type="hidden" id="cuisThumbnail">
      </div>
    `, `<div style="display: flex; justify-content: flex-end; gap: 0.75rem;"><button class="btn btn-secondary" onclick="Modal.close()">Cancel</button><button class="btn btn-primary" onclick="Modal.saveCuisine()">Add Cuisine</button></div>`);
  },
  saveCuisine() {
    AppState.currentWorld.cuisines.push({id:'cuis-'+Date.now(),name:document.getElementById('cuisName').value,culture:document.getElementById('cuisCulture').value,thumbnail:document.getElementById('cuisThumbnail').value||'',description:document.getElementById('cuisDescription').value,ingredients:document.getElementById('cuisIngredients').value,preparation:document.getElementById('cuisPreparation').value,significance:document.getElementById('cuisSignificance').value});
    AppState.save();this.close();Views.renderModule('cuisines');
  },
  showEditCuisine(id) {
    const c=AppState.currentWorld.cuisines.find(x=>x.id===id);if(!c)return;
    this.show('Edit Cuisine', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="cuisName" value="${c.name}"></div>
      <div class="form-group"><label class="form-label">Culture</label><input type="text" class="form-input" id="cuisCulture" value="${c.culture}"></div>
      <div class="form-group">
        <label class="form-label">Thumbnail Image (Optional)</label>
        <div id="cuisThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'cuisThumbnail')" onclick="document.getElementById('cuisThumbnailInput').click()">
          <div id="cuisThumbnailPreview" style="${c.thumbnail ? '' : 'display: none;'} margin-bottom: 1rem; position: relative;">
            <img id="cuisThumbnailPreviewImg" src="${c.thumbnail || ''}" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
            <button type="button" onclick="Modal.deleteThumbnail('cuis')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
          </div>
          <div id="cuisThumbnailPlaceholder" style="${c.thumbnail ? 'display: none;' : ''}">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
            <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
            <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
          </div>
        </div>
        <input type="file" id="cuisThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'cuisThumbnail')">
        <input type="hidden" id="cuisThumbnail" value="${c.thumbnail || ''}">
      </div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="cuisDescription">${c.description}</textarea></div>
      <div class="form-group"><label class="form-label">Ingredients</label><textarea class="form-textarea" id="cuisIngredients">${c.ingredients}</textarea></div>
      <div class="form-group"><label class="form-label">Preparation</label><input type="text" class="form-input" id="cuisPreparation" value="${c.preparation}"></div>
      <div class="form-group"><label class="form-label">Significance</label><input type="text" class="form-input" id="cuisSignificance" value="${c.significance}"></div>
    `, `
      <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
      <button class="btn btn-primary" onclick="Modal.updateCuisine('${id}')">Save Changes</button>
    `);
  },
  updateCuisine(id) {
    const c=AppState.currentWorld.cuisines.find(x=>x.id===id);if(!c)return;
    c.name=document.getElementById('cuisName').value;c.culture=document.getElementById('cuisCulture').value;c.thumbnail=document.getElementById('cuisThumbnail').value||'';c.description=document.getElementById('cuisDescription').value;c.ingredients=document.getElementById('cuisIngredients').value;c.preparation=document.getElementById('cuisPreparation').value;c.significance=document.getElementById('cuisSignificance').value;
    AppState.save();this.close();Views.renderModule('cuisines');
  },
  duplicateCuisine(id) {
    const c=AppState.currentWorld.cuisines.find(x=>x.id===id);if(!c)return;
    AppState.currentWorld.cuisines.push({id:'cuis-'+Date.now(),name:c.name+' (Copy)',culture:c.culture,thumbnail:c.thumbnail||'',description:c.description,ingredients:c.ingredients,preparation:c.preparation,significance:c.significance});
    AppState.save();this.close();Views.renderModule('cuisines');
  },

  // Artifact functions
  showAddArtifact() {
    this.show('Add Artifact', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="artName" placeholder="Artifact or item name"></div>
      <div class="form-group"><label class="form-label">Type</label><input type="text" class="form-input" id="artType" placeholder="Weapon, tool, relic, etc."></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="artDescription" placeholder="Appearance and details..."></textarea></div>
      <div class="form-group"><label class="form-label">Powers</label><textarea class="form-textarea" id="artPowers" placeholder="Abilities or special properties..."></textarea></div>
      <div class="form-group"><label class="form-label">Origin</label><input type="text" class="form-input" id="artOrigin" placeholder="History and creation"></div>
      <div class="form-group"><label class="form-label">Location</label><input type="text" class="form-input" id="artLocation" placeholder="Current whereabouts"></div>
      <div class="form-group">
        <label class="form-label">Thumbnail Image (Optional)</label>
        <div id="artThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'artThumbnail')" onclick="document.getElementById('artThumbnailInput').click()">
          <div id="artThumbnailPreview" style="display: none; margin-bottom: 1rem; position: relative;">
            <img id="artThumbnailPreviewImg" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
            <button type="button" onclick="Modal.deleteThumbnail('art')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
          </div>
          <div id="artThumbnailPlaceholder">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
            <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
            <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
          </div>
        </div>
        <input type="file" id="artThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'artThumbnail')">
        <input type="hidden" id="artThumbnail">
      </div>
    `, `<div style="display: flex; justify-content: flex-end; gap: 0.75rem;"><button class="btn btn-secondary" onclick="Modal.close()">Cancel</button><button class="btn btn-primary" onclick="Modal.saveArtifact()">Add Artifact</button></div>`);
  },
  saveArtifact() {
    AppState.currentWorld.artifacts.push({id:'art-'+Date.now(),name:document.getElementById('artName').value,type:document.getElementById('artType').value,thumbnail:document.getElementById('artThumbnail').value||'',description:document.getElementById('artDescription').value,powers:document.getElementById('artPowers').value,origin:document.getElementById('artOrigin').value,location:document.getElementById('artLocation').value});
    AppState.save();this.close();Views.renderModule('artifacts');
  },
  showEditArtifact(id) {
    const a=AppState.currentWorld.artifacts.find(x=>x.id===id);if(!a)return;
    this.show('Edit Artifact', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="artName" value="${a.name}"></div>
      <div class="form-group"><label class="form-label">Type</label><input type="text" class="form-input" id="artType" value="${a.type}"></div>
      <div class="form-group">
        <label class="form-label">Thumbnail Image (Optional)</label>
        <div id="artThumbnailDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'artThumbnail')" onclick="document.getElementById('artThumbnailInput').click()">
          <div id="artThumbnailPreview" style="${a.thumbnail ? '' : 'display: none;'} margin-bottom: 1rem; position: relative;">
            <img id="artThumbnailPreviewImg" src="${a.thumbnail || ''}" style="max-width: 100%; max-height: 200px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
            <button type="button" onclick="Modal.deleteThumbnail('art')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove thumbnail">×</button>
          </div>
          <div id="artThumbnailPlaceholder" style="${a.thumbnail ? 'display: none;' : ''}">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📷</div>
            <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop an image here</div>
            <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
          </div>
        </div>
        <input type="file" id="artThumbnailInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'artThumbnail')">
        <input type="hidden" id="artThumbnail" value="${a.thumbnail || ''}">
      </div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="artDescription">${a.description}</textarea></div>
      <div class="form-group"><label class="form-label">Powers</label><textarea class="form-textarea" id="artPowers">${a.powers}</textarea></div>
      <div class="form-group"><label class="form-label">Origin</label><input type="text" class="form-input" id="artOrigin" value="${a.origin}"></div>
      <div class="form-group"><label class="form-label">Location</label><input type="text" class="form-input" id="artLocation" value="${a.location}"></div>
    `, `
      <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
      <button class="btn btn-primary" onclick="Modal.updateArtifact('${id}')">Save Changes</button>
    `);
  },
  updateArtifact(id) {
    const a=AppState.currentWorld.artifacts.find(x=>x.id===id);if(!a)return;
    a.name=document.getElementById('artName').value;a.type=document.getElementById('artType').value;a.thumbnail=document.getElementById('artThumbnail').value||'';a.description=document.getElementById('artDescription').value;a.powers=document.getElementById('artPowers').value;a.origin=document.getElementById('artOrigin').value;a.location=document.getElementById('artLocation').value;
    AppState.save();this.close();Views.renderModule('artifacts');
  },
  duplicateArtifact(id) {
    const a=AppState.currentWorld.artifacts.find(x=>x.id===id);if(!a)return;
    AppState.currentWorld.artifacts.push({id:'art-'+Date.now(),name:a.name+' (Copy)',type:a.type,thumbnail:a.thumbnail||'',description:a.description,powers:a.powers,origin:a.origin,location:a.location});
    AppState.save();this.close();Views.renderModule('artifacts');
  },
  
  // Social Interactions functions
  showAddSocialInteraction() {
    this.show('Add Social Interaction', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="siName" placeholder="e.g., Trade Relations Between Kingdoms"></div>
      <div class="form-group"><label class="form-label">Type</label><select class="form-input" id="siType"><option value="Economic">Economic</option><option value="Political">Political</option><option value="Cultural">Cultural</option><option value="Religious">Religious</option><option value="Military">Military</option><option value="Personal">Personal</option></select></div>
      <div class="form-group"><label class="form-label">Participants</label><input type="text" class="form-input" id="siParticipants" placeholder="Who is involved?"></div>
      <div class="form-group"><label class="form-label">Nature</label><select class="form-input" id="siNature"><option value="Cooperative">Cooperative</option><option value="Hostile">Hostile</option><option value="Neutral">Neutral</option><option value="Complex">Complex</option></select></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="siDescription" placeholder="Describe how this interaction works..."></textarea></div>
      <div class="form-group"><label class="form-label">Rules</label><textarea class="form-textarea" id="siRules" placeholder="Formal or informal rules governing this interaction..."></textarea></div>
      <div class="form-group"><label class="form-label">Consequences</label><textarea class="form-textarea" id="siConsequences" placeholder="What happens when rules are broken?"></textarea></div>
    `, `
      <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
      <button class="btn btn-primary" onclick="Modal.saveSocialInteraction()">Save Changes</button>
    `);
  },
  saveSocialInteraction() {
    AppState.currentWorld.socialInteractions.push({id:'si-'+Date.now(),name:document.getElementById('siName').value,type:document.getElementById('siType').value,participants:document.getElementById('siParticipants').value,nature:document.getElementById('siNature').value,description:document.getElementById('siDescription').value,rules:document.getElementById('siRules').value,consequences:document.getElementById('siConsequences').value});
    AppState.save();this.close();Views.renderModule('socialInteractions');
  },
  showEditSocialInteraction(id) {
    const si=AppState.currentWorld.socialInteractions.find(x=>x.id===id);if(!si)return;
    this.show('Edit Social Interaction', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="siName" value="${si.name}"></div>
      <div class="form-group"><label class="form-label">Type</label><select class="form-input" id="siType"><option value="Economic" ${si.type==='Economic'?'selected':''}>Economic</option><option value="Political" ${si.type==='Political'?'selected':''}>Political</option><option value="Cultural" ${si.type==='Cultural'?'selected':''}>Cultural</option><option value="Religious" ${si.type==='Religious'?'selected':''}>Religious</option><option value="Military" ${si.type==='Military'?'selected':''}>Military</option><option value="Personal" ${si.type==='Personal'?'selected':''}>Personal</option></select></div>
      <div class="form-group"><label class="form-label">Participants</label><input type="text" class="form-input" id="siParticipants" value="${si.participants}"></div>
      <div class="form-group"><label class="form-label">Nature</label><select class="form-input" id="siNature"><option value="Cooperative" ${si.nature==='Cooperative'?'selected':''}>Cooperative</option><option value="Hostile" ${si.nature==='Hostile'?'selected':''}>Hostile</option><option value="Neutral" ${si.nature==='Neutral'?'selected':''}>Neutral</option><option value="Complex" ${si.nature==='Complex'?'selected':''}>Complex</option></select></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="siDescription">${si.description}</textarea></div>
      <div class="form-group"><label class="form-label">Rules</label><textarea class="form-textarea" id="siRules">${si.rules}</textarea></div>
      <div class="form-group"><label class="form-label">Consequences</label><textarea class="form-textarea" id="siConsequences">${si.consequences||''}</textarea></div>
    `, `
      <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
      <button class="btn btn-primary" onclick="Modal.updateSocialInteraction('${id}')">Save Changes</button>
    `);
  },
  updateSocialInteraction(id) {
    const si=AppState.currentWorld.socialInteractions.find(x=>x.id===id);if(!si)return;
    si.name=document.getElementById('siName').value;si.type=document.getElementById('siType').value;si.participants=document.getElementById('siParticipants').value;si.nature=document.getElementById('siNature').value;si.description=document.getElementById('siDescription').value;si.rules=document.getElementById('siRules').value;si.consequences=document.getElementById('siConsequences').value;
    
    AppState.save();this.close();Views.renderModule('socialInteractions');
  },
  duplicateSocialInteraction(id) {
    const si=AppState.currentWorld.socialInteractions.find(x=>x.id===id);if(!si)return;
    AppState.currentWorld.socialInteractions.push({id:'si-'+Date.now(),name:si.name+' (Copy)',type:si.type,participants:si.participants,nature:si.nature,description:si.description,rules:si.rules,consequences:si.consequences});
    AppState.save();this.close();Views.renderModule('socialInteractions');
  },
  
  // Hierarchy functions
  showAddHierarchy() {
    this.show('Add Hierarchy System', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="hierName" placeholder="e.g., Royal Court Structure"></div>
      <div class="form-group"><label class="form-label">Type</label><select class="form-input" id="hierType"><option value="Political">Political</option><option value="Military">Military</option><option value="Religious">Religious</option><option value="Social">Social</option><option value="Economic">Economic</option><option value="Academic">Academic</option></select></div>
      <div class="form-group"><label class="form-label">Organization</label><input type="text" class="form-input" id="hierOrganization" placeholder="Kingdom, Guild, Church, etc."></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="hierDescription" placeholder="Overview of this hierarchy..."></textarea></div>
      <div class="form-group"><label class="form-label">Levels</label><textarea class="form-textarea" id="hierLevels" placeholder="Describe the ranks from highest to lowest..."></textarea></div>
      <div class="form-group"><label class="form-label">Social Mobility</label><textarea class="form-textarea" id="hierMobility" placeholder="Can people move between ranks? How?"></textarea></div>
      <div class="form-group"><label class="form-label">Rank Symbols</label><input type="text" class="form-input" id="hierSymbols" placeholder="Visual indicators of rank"></div>
    `, `<div style="display: flex; justify-content: flex-end; gap: 0.75rem;"><button class="btn btn-secondary" onclick="Modal.close()">Cancel</button><button class="btn btn-primary" onclick="Modal.saveHierarchy()">Add Hierarchy</button></div>`);
  },
  saveHierarchy() {
    AppState.currentWorld.hierarchies.push({id:'hier-'+Date.now(),name:document.getElementById('hierName').value,type:document.getElementById('hierType').value,organization:document.getElementById('hierOrganization').value,description:document.getElementById('hierDescription').value,levels:document.getElementById('hierLevels').value,mobility:document.getElementById('hierMobility').value,symbols:document.getElementById('hierSymbols').value});
    AppState.save();this.close();Views.renderModule('hierarchies');
  },
  showEditHierarchy(id) {
    const hier=AppState.currentWorld.hierarchies.find(x=>x.id===id);if(!hier)return;
    this.show('Edit Hierarchy System', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="hierName" value="${hier.name}"></div>
      <div class="form-group"><label class="form-label">Type</label><select class="form-input" id="hierType"><option value="Political" ${hier.type==='Political'?'selected':''}>Political</option><option value="Military" ${hier.type==='Military'?'selected':''}>Military</option><option value="Religious" ${hier.type==='Religious'?'selected':''}>Religious</option><option value="Social" ${hier.type==='Social'?'selected':''}>Social</option><option value="Economic" ${hier.type==='Economic'?'selected':''}>Economic</option><option value="Academic" ${hier.type==='Academic'?'selected':''}>Academic</option></select></div>
      <div class="form-group"><label class="form-label">Organization</label><input type="text" class="form-input" id="hierOrganization" value="${hier.organization}"></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="hierDescription">${hier.description}</textarea></div>
      <div class="form-group"><label class="form-label">Levels</label><textarea class="form-textarea" id="hierLevels">${hier.levels||''}</textarea></div>
      <div class="form-group"><label class="form-label">Social Mobility</label><textarea class="form-textarea" id="hierMobility">${hier.mobility||''}</textarea></div>
      <div class="form-group"><label class="form-label">Rank Symbols</label><input type="text" class="form-input" id="hierSymbols" value="${hier.symbols||''}"></div>
    `, `
      <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
      <button class="btn btn-primary" onclick="Modal.updateHierarchy('${id}')">Save Changes</button>
    `);
  },
  updateHierarchy(id) {
    const hier=AppState.currentWorld.hierarchies.find(x=>x.id===id);if(!hier)return;
    hier.name=document.getElementById('hierName').value;hier.type=document.getElementById('hierType').value;hier.organization=document.getElementById('hierOrganization').value;hier.description=document.getElementById('hierDescription').value;hier.levels=document.getElementById('hierLevels').value;hier.mobility=document.getElementById('hierMobility').value;hier.symbols=document.getElementById('hierSymbols').value;
    AppState.save();this.close();Views.renderModule('hierarchies');
  },
  duplicateHierarchy(id) {
    const hier=AppState.currentWorld.hierarchies.find(x=>x.id===id);if(!hier)return;
    AppState.currentWorld.hierarchies.push({id:'hier-'+Date.now(),name:hier.name+' (Copy)',type:hier.type,organization:hier.organization,description:hier.description,levels:hier.levels,mobility:hier.mobility,symbols:hier.symbols});
    AppState.save();this.close();Views.renderModule('hierarchies');
  },
  
  // Etiquette functions
  showAddEtiquette() {
    this.show('Add Etiquette System', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="etiqName" placeholder="e.g., Formal Dining Protocol"></div>
      <div class="form-group"><label class="form-label">Culture/Group</label><input type="text" class="form-input" id="etiqCulture" placeholder="Which culture follows this?"></div>
      <div class="form-group"><label class="form-label">Context</label><select class="form-input" id="etiqContext"><option value="Formal Dining">Formal Dining</option><option value="Greetings">Greetings</option><option value="Business">Business</option><option value="Religious">Religious</option><option value="Court">Court</option><option value="Daily Life">Daily Life</option></select></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="etiqDescription" placeholder="Overview of this etiquette system..."></textarea></div>
      <div class="form-group"><label class="form-label">Key Rules</label><textarea class="form-textarea" id="etiqRules" placeholder="List the main rules and protocols..."></textarea></div>
      <div class="form-group"><label class="form-label">Gestures</label><input type="text" class="form-input" id="etiqGestures" placeholder="Physical actions involved"></div>
      <div class="form-group"><label class="form-label">Violations</label><textarea class="form-textarea" id="etiqViolations" placeholder="What happens when rules are broken?"></textarea></div>
     `, `<div style="display: flex; justify-content: flex-end; gap: 0.75rem;"><button class="btn btn-secondary" onclick="Modal.close()">Cancel</button><button class="btn btn-primary" onclick="Modal.saveEtiquette()">Add Etiquette</button></div>`);
  },
  saveEtiquette() {
    AppState.currentWorld.etiquette.push({id:'etiq-'+Date.now(),name:document.getElementById('etiqName').value,culture:document.getElementById('etiqCulture').value,context:document.getElementById('etiqContext').value,description:document.getElementById('etiqDescription').value,rules:document.getElementById('etiqRules').value,gestures:document.getElementById('etiqGestures').value,violations:document.getElementById('etiqViolations').value});
    AppState.save();this.close();Views.renderModule('etiquette');
  },
  showEditEtiquette(id) {
    const etiq=AppState.currentWorld.etiquette.find(x=>x.id===id);if(!etiq)return;
    this.show('Edit Etiquette System', `
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="etiqName" value="${etiq.name}"></div>
      <div class="form-group"><label class="form-label">Culture/Group</label><input type="text" class="form-input" id="etiqCulture" value="${etiq.culture}"></div>
      <div class="form-group"><label class="form-label">Context</label><select class="form-input" id="etiqContext"><option value="Formal Dining" ${etiq.context==='Formal Dining'?'selected':''}>Formal Dining</option><option value="Greetings" ${etiq.context==='Greetings'?'selected':''}>Greetings</option><option value="Business" ${etiq.context==='Business'?'selected':''}>Business</option><option value="Religious" ${etiq.context==='Religious'?'selected':''}>Religious</option><option value="Court" ${etiq.context==='Court'?'selected':''}>Court</option><option value="Daily Life" ${etiq.context==='Daily Life'?'selected':''}>Daily Life</option></select></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="etiqDescription">${etiq.description}</textarea></div>
      <div class="form-group"><label class="form-label">Key Rules</label><textarea class="form-textarea" id="etiqRules">${etiq.rules||''}</textarea></div>
      <div class="form-group"><label class="form-label">Gestures</label><input type="text" class="form-input" id="etiqGestures" value="${etiq.gestures||''}"></div>
      <div class="form-group"><label class="form-label">Violations</label><textarea class="form-textarea" id="etiqViolations">${etiq.violations||''}</textarea></div>
     `, `
      <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
      <button class="btn btn-primary" onclick="Modal.updateEtiquette('${id}')">Save Changes</button>
    `);
  },
  updateEtiquette(id) {
    const etiq=AppState.currentWorld.etiquette.find(x=>x.id===id);if(!etiq)return;
    etiq.name=document.getElementById('etiqName').value;etiq.culture=document.getElementById('etiqCulture').value;etiq.context=document.getElementById('etiqContext').value;etiq.description=document.getElementById('etiqDescription').value;etiq.rules=document.getElementById('etiqRules').value;etiq.gestures=document.getElementById('etiqGestures').value;etiq.violations=document.getElementById('etiqViolations').value;
    
    AppState.save();this.close();Views.renderModule('etiquette');
  },
  duplicateEtiquette(id) {
    const etiq=AppState.currentWorld.etiquette.find(x=>x.id===id);if(!etiq)return;
    AppState.currentWorld.etiquette.push({id:'etiq-'+Date.now(),name:etiq.name+' (Copy)',culture:etiq.culture,context:etiq.context,description:etiq.description,rules:etiq.rules,gestures:etiq.gestures,violations:etiq.violations});
    AppState.save();this.close();Views.renderModule('etiquette');
  }
};

// ========================================
// PDF EXPORT
// ========================================
const PDFExport = {
  async generatePDF() {
    const world = AppState.currentWorld;
    if (!world) {
      alert('Please open a world first');
      return;
    }
    
    // Create printable HTML
    const printWindow = window.open('', '_blank');
    printWindow.document.write(this.generatePrintHTML(world));
    printWindow.document.close();
    
    // Trigger print dialog
    setTimeout(() => {
      printWindow.print();
    }, 500);
  },
  
  generatePrintHTML(world) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${world.name} - WorldForge Export</title>
        <style>
          @page {
            size: A4;
            margin: 2cm;
          }
          
          body {
            font-family: 'Georgia', serif;
            font-size: 11pt;
            line-height: 1.6;
            color: #000;
            max-width: 100%;
          }
          
          h1 {
            font-size: 28pt;
            font-weight: bold;
            margin-bottom: 0.5cm;
            page-break-after: avoid;
          }
          
          h2 {
            font-size: 20pt;
            font-weight: bold;
            margin-top: 1cm;
            margin-bottom: 0.5cm;
            page-break-after: avoid;
            border-bottom: 2px solid #000;
            padding-bottom: 0.2cm;
          }
          
          h3 {
            font-size: 14pt;
            font-weight: bold;
            margin-top: 0.5cm;
            margin-bottom: 0.3cm;
            page-break-after: avoid;
          }
          
          p {
            margin-bottom: 0.4cm;
            text-align: justify;
          }
          
          .section {
            page-break-inside: avoid;
            margin-bottom: 1cm;
          }
          
          .metadata {
            font-size: 10pt;
            color: #666;
            margin-bottom: 1cm;
          }
          
          .card {
            border: 1px solid #000;
            padding: 0.5cm;
            margin-bottom: 0.5cm;
            page-break-inside: avoid;
          }
          
          .label {
            font-weight: bold;
            margin-right: 0.3cm;
          }
          
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 0.5cm;
          }
          
          th, td {
            border: 1px solid #000;
            padding: 0.3cm;
            text-align: left;
          }
          
          th {
            background: #f0f0f0;
            font-weight: bold;
          }
          
          .page-break {
            page-break-before: always;
          }
        </style>
      </head>
      <body>
        <h1>${world.name}</h1>
        <div class="metadata">
          <p><strong>Genres:</strong> ${world.genres.join(', ')}</p>
          <p><strong>Exported:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
        
        <div class="section">
          <h2>World Overview</h2>
          <p>${world.logline || 'No description provided.'}</p>
        </div>
        
        <div class="page-break"></div>
        
        <h2>Locations</h2>
        ${world.locations.map(loc => `
          <div class="card">
            <h3>${loc.name}</h3>
            <p><span class="label">Type:</span>${loc.type}</p>
            <p>${loc.description}</p>
            <p><span class="label">Culture:</span>${loc.culture}</p>
            <p><span class="label">Resources:</span>${loc.resources}</p>
            <p><span class="label">Population:</span>${loc.population}</p>
            <p><span class="label">Government:</span>${loc.government}</p>
          </div>
        `).join('')}
        
        <div class="page-break"></div>
        
        <h2>Characters</h2>
        ${world.characters.map(char => `
          <div class="card">
            <h3>${char.name}</h3>
            <p><span class="label">Role:</span>${char.role}</p>
            <p>${char.description}</p>
            <p><span class="label">Background:</span>${char.background}</p>
            <p><span class="label">Personality:</span>${char.personality}</p>
            <p><span class="label">Relationships:</span>${char.relationships}</p>
          </div>
        `).join('')}
        
        <div class="page-break"></div>
        
        <h2>Factions</h2>
        ${world.factions.map(fac => `
          <div class="card">
            <h3>${fac.name}</h3>
            <p><span class="label">Type:</span>${fac.type}</p>
            <p>${fac.description}</p>
            <p><span class="label">Goals:</span>${fac.goals}</p>
            <p><span class="label">Resources:</span>${fac.resources}</p>
            <p><span class="label">Allies:</span>${fac.allies}</p>
            <p><span class="label">Enemies:</span>${fac.enemies}</p>
          </div>
        `).join('')}
        
        <div class="page-break"></div>
        
        <h2>Timeline</h2>
        ${world.timeline.map(event => `
          <div class="card">
            <h3>${event.name}</h3>
            <p><span class="label">Date:</span>${event.date}</p>
            <p>${event.description}</p>
            <p><span class="label">Impact:</span>${event.impact}</p>
          </div>
        `).join('')}
        
        <div class="page-break"></div>
        
        <h2>Rules of the World</h2>
        ${world.rules.map(rule => `
          <div class="card">
            <h3>${rule.name}</h3>
            <p><span class="label">Category:</span>${rule.category}</p>
            <p>${rule.description}</p>
          </div>
        `).join('')}
        
        <div class="page-break"></div>
        
        <h2>Themes</h2>
        ${world.themes.map(theme => `
          <div class="card">
            <h3>${theme.name}</h3>
            <p>${theme.description}</p>
          </div>
        `).join('')}
      </body>
      </html>
    `;
  }
};

// ========================================
// WORLD EDITOR
// ========================================
const WorldEditor = {
  editWorldName() {
    const world = AppState.currentWorld;
    if (!world) return;
    
    Modal.show(
      'Edit World Name',
      `
        <div class="form-group">
          <label class="form-label">World Name</label>
          <input type="text" class="form-input" id="editWorldName" value="${world.name}" placeholder="Enter world name">
        </div>
        <div class="form-group">
          <label class="form-label">Logline / Description</label>
          <textarea class="form-textarea" id="editWorldLogline" placeholder="A brief description of your world...">${world.logline || ''}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Banner Image (Optional)</label>
          <div id="editWorldBannerDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'editWorldBanner')" onclick="document.getElementById('editWorldBannerInput').click()">
            <div id="editWorldBannerPreview" style="${world.banner ? '' : 'display: none;'} margin-bottom: 1rem; position: relative;">
              <img id="editWorldBannerPreviewImg" src="${world.banner || ''}" style="max-width: 100%; max-height: 150px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
              <button type="button" onclick="Modal.deleteThumbnail('editWorldBanner')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove banner">×</button>
            </div>
            <div id="editWorldBannerPlaceholder" style="${world.banner ? 'display: none;' : ''}">
              <div style="font-size: 3rem; margin-bottom: 0.5rem;">🖼️</div>
              <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop a banner image here</div>
              <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
            </div>
          </div>
          <input type="file" id="editWorldBannerInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'editWorldBanner')">
          <input type="hidden" id="editWorldBanner" value="${world.banner || ''}">
        </div>
      `,
      `
        <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
        <button class="btn btn-primary" onclick="WorldEditor.saveWorldName()">Save Changes</button>
      `
    );
  },
  
  saveWorldName() {
    const world = AppState.currentWorld;
    const name = document.getElementById('editWorldName').value;
    const logline = document.getElementById('editWorldLogline').value;
    const banner = document.getElementById('editWorldBanner').value;
    
    if (!name) {
      alert('Please enter a world name');
      return;
    }
    
    world.name = name;
    world.logline = logline;
    world.banner = banner || null;
    world.lastEdited = Date.now();
    
    AppState.save();
    Modal.close();
    Views.renderDashboard();
    Sidebar.render();
  },
  
  editWorldFromLibrary(worldId) {
    const world = AppState.worlds.find(w => w.id === worldId);
    if (!world) return;
    
    Modal.show(
      'Edit World',
      `
        <div class="form-group">
          <label class="form-label">World Name</label>
          <input type="text" class="form-input" id="editWorldName" value="${world.name}" placeholder="Enter world name">
        </div>
        <div class="form-group">
          <label class="form-label">Logline / Description</label>
          <textarea class="form-textarea" id="editWorldLogline" placeholder="A brief description of your world...">${world.logline || ''}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Banner Image (Optional)</label>
          <div id="editWorldBannerDropZone" style="border: 2px dashed var(--gray-400); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--gray-100);" ondragover="event.preventDefault(); this.style.borderColor='var(--primary-500)'; this.style.background='var(--primary-50)';" ondragleave="this.style.borderColor='var(--gray-400)'; this.style.background='var(--gray-100)';" ondrop="Modal.handleThumbnailDrop(event, 'editWorldBanner')" onclick="document.getElementById('editWorldBannerInput').click()">
            <div id="editWorldBannerPreview" style="${world.banner ? '' : 'display: none;'} margin-bottom: 1rem; position: relative;">
              <img id="editWorldBannerPreviewImg" src="${world.banner || ''}" style="max-width: 100%; max-height: 150px; border-radius: 0.5rem; cursor: pointer;" onclick="openImageLightbox(this.src)" />
              <button type="button" onclick="Modal.deleteThumbnail('editWorldBanner')" style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(220, 38, 38, 0.9); color: white; border: none; border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; font-size: 1.25rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(220, 38, 38, 1)';" onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(220, 38, 38, 0.9)';" title="Remove banner">×</button>
            </div>
            <div id="editWorldBannerPlaceholder" style="${world.banner ? 'display: none;' : ''}">
              <div style="font-size: 3rem; margin-bottom: 0.5rem;">🖼️</div>
              <div style="font-weight: 600; margin-bottom: 0.25rem;">Drag & drop a banner image here</div>
              <div style="font-size: 0.875rem; color: var(--gray-600);">or click to browse</div>
            </div>
          </div>
          <input type="file" id="editWorldBannerInput" accept="image/*" style="display: none;" onchange="Modal.handleThumbnailFile(this, 'editWorldBanner')">
          <input type="hidden" id="editWorldBanner" value="${world.banner || ''}">
        </div>
      `,
      `
        <button class="btn btn-secondary" onclick="Modal.close()">Cancel</button>
        <button class="btn btn-primary" onclick="WorldEditor.saveWorldFromLibrary('${worldId}')">Save Changes</button>
      `
    );
  },
  
  saveWorldFromLibrary(worldId) {
    const world = AppState.worlds.find(w => w.id === worldId);
    if (!world) return;
    
    const name = document.getElementById('editWorldName').value;
    const logline = document.getElementById('editWorldLogline').value;
    const banner = document.getElementById('editWorldBanner').value;
    
    if (!name) {
      alert('Please enter a world name');
      return;
    }
    
    world.name = name;
    world.logline = logline;
    world.banner = banner || null;
    world.lastEdited = Date.now();
    
    AppState.save();
    Modal.close();
    Views.renderLibrary();
  }
};

// ========================================
// THEME MANAGER
// ========================================
const ThemeManager = {
  init() {
    const savedTheme = localStorage.getItem('worldforge-theme') || 'day';
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateToggleLabel();
    
    // Add click handler to theme toggle
    document.getElementById('themeToggle')?.addEventListener('click', () => {
      this.toggle();
    });
  },
  
  toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'night' ? 'day' : 'night';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('worldforge-theme', newTheme);
    this.updateToggleLabel();
  },
  
  updateToggleLabel() {
    const label = document.getElementById('themeLabel');
    if (label) {
      const current = document.documentElement.getAttribute('data-theme');
      label.textContent = current === 'night' ? '☀️ Day Mode' : '🌙 Night Mode';
    }
  }
};

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  AppState.init();
  Sidebar.render();
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  
  // Create mobile overlay
  const mobileOverlay = document.createElement('div');
  mobileOverlay.className = 'mobile-overlay';
  document.body.appendChild(mobileOverlay);
  
  menuToggle?.addEventListener('click', () => {
    sidebar.classList.toggle('mobile-open');
    mobileOverlay.classList.toggle('active');
  });
  
  // Close sidebar when clicking overlay
  mobileOverlay.addEventListener('click', () => {
    sidebar.classList.remove('mobile-open');
    mobileOverlay.classList.remove('active');
  });
  
  // Close sidebar when navigating
  const originalNavigate = Router.navigate;
  Router.navigate = function(...args) {
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('mobile-open');
      mobileOverlay.classList.remove('active');
    }
    return originalNavigate.apply(this, args);
  };
  
  // Settings dropdown
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsDropdown = document.getElementById('settingsDropdown');
  const settingsMenu = document.getElementById('settingsMenu');
  
  settingsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    settingsDropdown.classList.toggle('open');
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!settingsDropdown.contains(e.target)) {
      settingsDropdown.classList.remove('open');
    }
  });
  
  // Export PDF
  document.getElementById('exportPdfBtn').addEventListener('click', () => {
    PDFExport.generatePDF();
    settingsDropdown.classList.remove('open');
  });
  
  // Export JSON
  document.getElementById('exportJsonBtn').addEventListener('click', () => {
    AppState.exportJSON();
    settingsDropdown.classList.remove('open');
  });
  
  // Reset App - Clear All Data
  document.getElementById('clearDataBtn').addEventListener('click', async () => {
    const confirmed = confirm(
      '⚠️ WARNING: This will reset the entire app!\n\n' +
      'This will permanently delete:\n' +
      '- ALL worlds and their data\n' +
      '- All locations, characters, factions\n' +
      '- All timeline events, rules, themes\n' +
      '- All map nodes, drawings, and assets\n' +
      '- All custom modules and settings\n\n' +
      'This action CANNOT be undone!\n\n' +
      'Are you sure you want to reset the app?'
    );
    
    if (confirmed) {
      try {
        console.log('Starting app reset...');
        
        // Save current theme before clearing
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        // Clear all worlds data
        AppState.worlds = [];
        AppState.currentWorld = null;
        AppState.currentView = 'library';
        
        // Clear localStorage completely
        localStorage.clear();
        
        // Restore theme preference immediately
        if (currentTheme) {
          localStorage.setItem('worldforge-theme', currentTheme);
        }
        
        // Set flag to prevent sample data creation
        localStorage.setItem('worldforge_reset_flag', 'true');
        
        // Clear IndexedDB databases
        if (window.indexedDB) {
          // Clear asset database
          try {
            await new Promise((resolve, reject) => {
              const deleteRequest = indexedDB.deleteDatabase('WorldForgeAssets');
              deleteRequest.onsuccess = () => {
                console.log('WorldForgeAssets database deleted');
                resolve();
              };
              deleteRequest.onerror = () => reject(deleteRequest.error);
              deleteRequest.onblocked = () => {
                console.warn('Database deletion blocked');
                resolve();
              };
            });
          } catch (e) {
            console.warn('Could not delete WorldForgeAssets database:', e);
          }
          
          // Clear placed assets database
          try {
            await new Promise((resolve, reject) => {
              const deleteRequest = indexedDB.deleteDatabase('WorldForgePlacedAssets');
              deleteRequest.onsuccess = () => {
                console.log('WorldForgePlacedAssets database deleted');
                resolve();
              };
              deleteRequest.onerror = () => reject(deleteRequest.error);
              deleteRequest.onblocked = () => {
                console.warn('Database deletion blocked');
                resolve();
              };
            });
          } catch (e) {
            console.warn('Could not delete WorldForgePlacedAssets database:', e);
          }
        }
        
        console.log('Reset complete, reloading...');
        
        // Show success message and reload
        alert('✅ App reset successfully!\n\nThe page will now reload.');
        
        // Reload the page
        window.location.reload();
      } catch (error) {
        console.error('Error resetting app:', error);
        alert('❌ Error resetting app: ' + error.message);
      }
    }
    
    settingsDropdown.classList.remove('open');
  });
  
  // Global image deletion functions
  window.deleteArtifactImage = function(artifactId, imageIndex) {
    if (!confirm('Delete this image? This cannot be undone.')) return;
    const artifact = AppState.currentWorld.artifacts.find(a => a.id === artifactId);
    if (!artifact || !artifact.images) return;
    artifact.images.splice(imageIndex, 1);
    AppState.save();
    Views.renderModule('artifacts');
  };

  window.deleteFashionImage = function(fashionId, imageIndex) {
    if (!confirm('Delete this image? This cannot be undone.')) return;
    const fashion = AppState.currentWorld.fashions.find(f => f.id === fashionId);
    if (!fashion || !fashion.images) return;
    fashion.images.splice(imageIndex, 1);
    AppState.save();
    Views.renderModule('fashions');
  };

  window.deleteTechnologyImage = function(technologyId, imageIndex) {
    if (!confirm('Delete this image? This cannot be undone.')) return;
    const technology = AppState.currentWorld.technologies.find(t => t.id === technologyId);
    if (!technology || !technology.images) return;
    technology.images.splice(imageIndex, 1);
    AppState.save();
    Views.renderModule('technologies');
  };

  window.deleteFloraFaunaImage = function(speciesId, imageIndex) {
    if (!confirm('Delete this image? This cannot be undone.')) return;
    const species = AppState.currentWorld.floraFauna.find(f => f.id === speciesId);
    if (!species || !species.images) return;
    species.images.splice(imageIndex, 1);
    AppState.save();
    Views.renderModule('floraFauna');
  };

  window.deleteCreatureImage = function(creatureId, imageIndex) {
    if (!confirm('Delete this image? This cannot be undone.')) return;
    const creature = AppState.currentWorld.creatures.find(c => c.id === creatureId);
    if (!creature || !creature.images) return;
    creature.images.splice(imageIndex, 1);
    AppState.save();
    Views.renderModule('creatures');
  };

  window.deleteCuisineImage = function(cuisineId, imageIndex) {
    if (!confirm('Delete this image? This cannot be undone.')) return;
    const cuisine = AppState.currentWorld.cuisines.find(c => c.id === cuisineId);
    if (!cuisine || !cuisine.images) return;
    cuisine.images.splice(imageIndex, 1);
    AppState.save();
    Views.renderModule('cuisines');
  };

  // Initial render
  Router.navigate('library');
  
  console.log('WorldForge - Monochrome Edition initialized');
});

// ========================================
// IMAGE LIGHTBOX
// ========================================

const ImageLightbox = {
  lightbox: null,
  lightboxImage: null,
  lightboxClose: null,
  lightboxOverlay: null,
  
  init() {
    this.lightbox = document.getElementById('imageLightbox');
    this.lightboxImage = document.getElementById('lightboxImage');
    this.lightboxClose = document.getElementById('lightboxClose');
    this.lightboxOverlay = document.getElementById('lightboxOverlay');
    
    // Close button click
    this.lightboxClose.addEventListener('click', () => this.close());
    
    // Overlay click
    this.lightboxOverlay.addEventListener('click', () => this.close());
    
    // ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.lightbox.style.display !== 'none') {
        this.close();
      }
    });
    
    // Prevent image click from closing lightbox
    this.lightboxImage.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  },
  
  open(imageSrc) {
    this.lightboxImage.src = imageSrc;
    this.lightbox.style.display = 'flex';
    this.lightbox.classList.remove('closing');
    document.body.style.overflow = 'hidden';
  },
  
  close() {
    this.lightbox.classList.add('closing');
    setTimeout(() => {
      this.lightbox.style.display = 'none';
      this.lightbox.classList.remove('closing');
      this.lightboxImage.src = '';
      document.body.style.overflow = '';
    }, 200);
  }
};

// Initialize lightbox
ImageLightbox.init();

// Global function to open lightbox (accessible from onclick attributes)
window.openImageLightbox = function(imageSrc) {
  ImageLightbox.open(imageSrc);
};

window.addEventListener('beforeunload', () => {
  AppState.save();
});
