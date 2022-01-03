const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    level: { type: String },
    ingredients: { type: [String] },
    cuisine: { type: String },
    dishType: { type: String },
    image: {
      type: String,
      default: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*",
    },
    duration: { type: Number },
    creator: { type: String },
  },
  {
    timestamp: true,
  }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
