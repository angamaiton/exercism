/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  hey(message) {
    const regular = input => true;
    const isShouting = input => (input.toUpperCase() === input) && (/[A-Z]+/).test(input);
    const isQuestioning = input => input.slice(-1) === '?';
    const isSilent = input => input.trim().length < 1;

    const situations = [
      { adult: isSilent, response: 'Fine. Be that way!' },
      { adult: isShouting, response: 'Whoa, chill out!' },
      { adult: isQuestioning, response: 'Sure.' },
      { adult: regular, response: 'Whatever.' },
    ];

    return situations.find(when => when.adult(message)).response;
  }
}

export default Bob;
