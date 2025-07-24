// Predict and explain first...

// Here the aim is to print the house number from the address object.
// However, the code attempts to access the house number using an array index.
// This is incorrect because `address` is an object, not an array.

// but it isn't working...
// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);
