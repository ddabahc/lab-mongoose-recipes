const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost/recipe-app';

const oneRecipe = {
  title: "Pie",
  level: "Easy Peasy",
  ingredients: [
    "1/2 cup rice vinegar",
    "5 tablespoons honey",
    "1/3 cup soy sauce (such as Silver Swan®)",
    "1/4 cup Asian (toasted) sesame oil",
  ],
  cuisine: "American",
  dishType: "dessert",
  image: "https://images.media-allrecipes.com/images/75131.jpg",
  duration: 40,
  creator: "Chef Carlos",
};

const manyRecipes = [
  {
    title: "Pie 2",
    level: "Easy Peasy",
    ingredients: [
      "1/2 cup rice vinegar",
      "5 tablespoons honey",
      "1/3 cup soy sauce (such as Silver Swan®)",
      "1/4 cup Asian (toasted) sesame oil",
    ],
    cuisine: "American",
    dishType: "dessert",
    image: "https://images.media-allrecipes.com/images/75131.jpg",
    duration: 40,
    creator: "Chef Carlos",
  },
  {
    title: "Pie 3",
    level: "Easy Peasy",
    ingredients: [
      "1/2 cup rice vinegar",
      "5 tablespoons honey",
      "1/3 cup soy sauce (such as Silver Swan®)",
      "1/4 cup Asian (toasted) sesame oil",
    ],
    cuisine: "American",
    dishType: "dessert",
    image: "https://images.media-allrecipes.com/images/75131.jpg",
    duration: 40,
    creator: "Chef Carlos",
  },
  {
    title: "Pie 4",
    level: "Easy Peasy",
    ingredients: [
      "1/2 cup rice vinegar",
      "5 tablespoons honey",
      "1/3 cup soy sauce (such as Silver Swan®)",
      "1/4 cup Asian (toasted) sesame oil",
    ],
    cuisine: "American",
    dishType: "dessert",
    image: "https://images.media-allrecipes.com/images/75131.jpg",
    duration: 40,
    creator: "Chef Carlos",
  },
];

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
