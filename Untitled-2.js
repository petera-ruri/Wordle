// const users = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 24 },
//     { name: 'Charlie', age: 29 }
//   ];
  
//   users.forEach(user => {
//     user.isActive = true; // Adds an 'isActive' property to each user
//    users.sort((a, b) => a.name - b.name);
   
// });
//   console.log(users);
  

  const numbers = [2, 4, 6, 8];

numbers.forEach((number, index, arr) => {
  console.log(`Element at index ${index}: ${number}, Array:`, arr);
  // Perhaps modify the array based on the index or current element
});

const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Phone', price: 700 },
    { id: 3, name: 'Tablet', price: 500 }
  ];
  
  function logProductDetails(products) {
    products.forEach(product => {
      console.log(`Product ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`);
    });
  }
  
  logProductDetails(products);
  
  const users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 16 },
    { name: "Diana", age: 25 }
  ];
  
  users.forEach(user => {
    if (user.age < 18) {
      console.log(`${user.name} is under 18.`);
      // Assuming you have user elements in your HTML, you might add a class to highlight them
      // document.getElementById(user.name).classList.add('highlight');
    } else {
      console.log(`${user.name} is 18 or older.`);
    }
  });
  