const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if ((2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
console.log(is2p2()); // undefined
console.log(is2p2.name); // checkThatTwoPlusTwoEqualsFourAMillionTimes
