const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

  const dragonDamage = () => {
    const dragonStrength = dragon.strength;
    let damage = Math.floor(Math.random() * (dragonStrength - 15 + 1)) + 15;
    return damage;
  }

  const warriorDamage = () => {
    const dmgmax = warrior.strength * warrior.weaponDmg;
    const dmgmin = warrior.strength;
    let damage = Math.floor(Math.random() * (dmgmax - dmgmin + 1)) + dmgmin;
    return damage;
  }

  const mageSkills = () => {
    const dmgmax = mage.intelligence * 2;
    const dmgmin = mage.intelligence;
    const skills = {
      damage: Math.floor(Math.random() * (dmgmax - dmgmin + 1)) + dmgmin,
      mana: 15,
    }
      if (skills.mana < 15) {
      return 'Não possui mana suficiente'
      }
      return skills.damage
  }
