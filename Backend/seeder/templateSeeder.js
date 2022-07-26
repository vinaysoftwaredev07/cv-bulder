const Template = require("../models/templateModel");
const mongoose = require("mongoose");
require("dotenv").config();
//create your array. i inserted only 1 object here

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/myapp";
console.log(MONGODB_URL);

const templates = [   
  new Template({
    template_name: "Minimal",
    template_type: "minimalist"
  }),
  new Template({
    template_name: "Two Column",
    template_type: "two-column"
  })
  ]
//connect mongoose
mongoose
  .connect(String(MONGODB_URL), { useNewUrlParser: true })
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db in development environment");
    Template.deleteMany({}, () => {
      console.log("Truncated");
    });
  });
//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
templates.map(async (p, index) => {
  p.save()
  .then((data) => {
    if (index === templates.length - 1) {
      console.log("DONE!");
      mongoose.disconnect();
    }
  })
  .catch((err) => {
    console.log("Error", err);
  });
});