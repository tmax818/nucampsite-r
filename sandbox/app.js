const person = {
  name: "Tyler",
  age: 39,
  address: {
    street: "123 Main St.",
    city: "Seattle",
    state: "WA",
  },
};

// const name = person.name;
// const age = person.age;
// const address = person.address;

const { name, age, address } = person;

console.log(name, age, address);
