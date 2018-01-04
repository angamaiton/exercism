export default class Year {
  constructor(year) {
    this.year = year;
  }

  isLeap() {
    return ((this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0);
  }
}
// case this.year % 400 === 0:
//   return true;
// case (this.year % 4 === 0 && this.year % 100 !== 0):
//   return true;
// case this.year % 4 !== 0:
//   return false;
// case this.year % 100 === 0 && this.year % 400 !== 0:
//   return false;
