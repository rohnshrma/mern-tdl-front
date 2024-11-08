// Declaring an object 'person' with properties 'name', 'age', and 'gender'.
const person = {
  name: "jmik",
  age: 27,
  gender: "Male",
};

// Logging the entire 'person' object to the console.
console.log(person);

// Logging individual properties of 'person' directly using dot notation.
console.log(person.name); // Logs the 'name' property of 'person'
console.log(person.age); // Logs the 'age' property of 'person'
console.log(person.gender); // Logs the 'gender' property of 'person'

// Using destructuring to extract 'name', 'age', and 'gender' from 'person' into variables.
const { name, age, gender } = person;

// Logging each destructured variable individually.
console.log(name); // Logs the 'name' value of 'person'
console.log(age); // Logs the 'age' value of 'person'
console.log(gender); // Logs the 'gender' value of 'person'

// Rendering an 'ItemCard' component with 'key', 'name', and 'link' props, using an object's properties directly.
<ItemCard key={item._id} name={item.name} link={item.link} />;

// Declaring a 'props' object containing 'name' and 'link' properties.
const props = {
  name: "jmik",
  link: "kfdkfnbkdfbd",
};

// Using destructuring to extract 'name' and 'link' from 'props' into variables.
const { name, link } = props;

// Declaring an 'item' object with properties 'name', 'link', and '_id'.
const item = {
  name: "jmik",
  link: "snjsvksvnsvs",
  _id: "101",
};

// Rendering 'ItemCard' and passing the entire 'item' object as a prop.
<ItemCard key={item._id} item={item} />;

// Declaring a 'props' object containing a nested 'item' object with 'name', 'link', and 'id'.
const props = {
  item: {
    name: "jmik",
    link: "kfdkfnbkdfbd",
    id: 101,
  },
};

// Using destructuring to extract 'item' (the nested object) from 'props'.
const { item } = props; // item is now { name: "jmik", link: "kfdkfnbkdfbd", id: 101 }

// Logging properties of the destructured 'item' object.
console.log(item.name); // Logs 'name' inside 'item'
console.log(item.link); // Logs 'link' inside 'item'

// Uncommenting the following lines would further destructure 'name' and 'link' from 'item'.
// const { name, link } = item;
// console.log(name);   // Logs 'name' from 'item' if above line is uncommented.
