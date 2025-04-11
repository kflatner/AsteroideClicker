





const model = {
    app:{

    },
    inputs:{
     
upgrades: {
    cost:'',
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
    level:0,
    image: 'img/miner.png.png'
},
{
    id: 2,
    name: 'Driller',
    cost: 53,
    interval: 1500,
    multiplier: 2,
    level:0,
    image: 'img/driller.png'
},
{
    id:3,
    name: 'Spaceminer',
    cost:96,
    interval: 1250,
    multiplier: 3,
    level:0,
    image: 'img/spaceminer.png'
},
{
    id:4,
    name: 'SpaceLocation',
    cost:2,
    maxLevel: 4,
    level:0,
},
{
    id:5,
    name: 'SpaceFarm',
    cost:1000,
    interval: 1,
    multiplier: 3,
    level:0,
    image: 'img/spacefarm.png',
    unlockTargetId: 'spaceFarm',
    locked: true  
},
{
    id:6,
    name: 'SpaceBar',
    cost:2,
    interval: 750,
    multiplier: 3,
    level:0,
    image: 'img/Spacebar.png',
    unlockTargetId: 'spaceBar' ,
    locked: true ,
    requires: [4]
},
{
    id:7,
    name: 'SpaceFactory',
    cost:1500,
    interval: 500,
    multiplier: 3,
    level:0,
    image: 'img/Spacefactory.png',
    unlockTargetId: 'spacefactory' ,
    locked: true 
},
{
    id:8,
    name: 'SpaceSchool',
    cost:1500,
    interval: 500,
    multiplier: 3,
    level:0,
    image: 'img/Spaceschool.png',
    unlockTargetId: 'spaceschool' ,
    locked: true 
},
]
    },
}
