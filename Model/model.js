// Default model structure
const defaultModel = {
    app: {},
    inputs: {
      upgrades: {
        cost: '',
      },
    },
    data: {
      clickCount: 0,
      multiplier: 1,
      upgrades: [
        {
          id: 1,
          name: 'Miner',
          cost: 20,
          interval: 2000,
          multiplier: 1,
          level: 0,
          image: 'img/miner.png.png'
        },
        {
          id: 2,
          name: 'Driller',
          cost: 53,
          interval: 1500,
          multiplier: 2,
          level: 0,
          image: 'img/driller.png'
        },
        {
          id: 3,
          name: 'Spaceminer',
          cost: 96,
          interval: 1250,
          multiplier: 3,
          level: 0,
          image: 'img/spaceminer.png'
        },
        {
          id: 4,
          name: 'SpaceLocation',
          cost: 500,
          maxLevel: 4,
          level: 0
        },
        {
          id: 5,
          name: 'SpaceFarm',
          cost: 2000,
          interval: 1,
          multiplier: 3,
          level: 0,
          image: 'img/spacefarm.png',
          unlockTargetId: 'spaceFarm',
          locked: true
        },
        {
          id: 6,
          name: 'SpaceBar',
          cost: 750,
          interval: 750,
          multiplier: 3,
          level: 0,
          image: 'img/spacebar.png',
          unlockTargetId: 'spaceBar',
          locked: true,
          requires: [4]
        },
        {
          id: 7,
          name: 'SpaceFactory',
          cost: 1250,
          interval: 500,
          multiplier: 3,
          level: 0,
          image: 'img/spacefactory.png',
          unlockTargetId: 'spaceFactory',
          locked: true
        },
        {
          id: 8,
          name: 'SpaceSchool',
          cost: 1500,
          interval: 500,
          multiplier: 3,
          level: 0,
          image: 'img/spaceschool.png',
          unlockTargetId: 'spaceSchool',
          locked: true
        }
      ]
    }
  };
  
  // Try to load from localStorage
  const savedModel = localStorage.getItem('clickerGameSave');
  const model = savedModel ? JSON.parse(savedModel) : defaultModel;
  