const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: { type: String, required: false },
    adress: { type: String, required: false },
    meter: { type: Number, required: false },
    livingroom: { type: String, required: false },
    bathroom: { type: String, required: false },
    discription: { type: String, required: false },
    price: { type: String, required: false },
    Cardphoto:{type:String , required:false},
    virtualtour:{type:String , required:false}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Projects",projectSchema);
