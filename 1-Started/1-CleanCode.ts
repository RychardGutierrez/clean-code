// Bad validator

function createValidator(mode: 'Max' | 'Min', number: number) {
  if (mode === 'Max') {
    return (value: number) => value < number;
  } else if (mode === 'Min') {
    return (value: number) => value > number;
  }
}

const isBelowMax = createValidator('Max', 32);

console.log(isBelowMax(12));
console.log(isBelowMax(54));
