const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  const maxValue = Math.max(...values);
  const keys = Object.keys(employees);
  let message = '';
  for (let key of keys) {
    if (maxValue === employees[key]) {
      message = key;
    }
  }
  return message;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

const people = {};
console.log(findBestEmployee(people));
// ''
