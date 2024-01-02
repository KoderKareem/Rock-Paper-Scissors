let a_kareem = new Person("A_kareem");
let fatimah = new Person("Fatimah");
let thisYear = new Year(2023);

class Person {
  constructor(name, isSingle = true) {
    this.name = name;
    this.isSingle = isSingle;
  }

  DM(person) {
    return {
      now: () => {
        console.log(`${this.name} sent a direct message to ${person.name}!`);
      },
    };
  }
}

class Year {
  constructor(year) {
    this.year = year;
  }
  isEnding() {
    return true;
  }
}

while (thisYear.isEnding() && a_kareem.isSingle && fatimah.isSingle) {
  a_kareem.DM(fatimah).now();
}
