const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    adress: { type: String, required: true },
    meter: { type: Number, required: true },
    livingroom: { type: String, required: true },
    bathroom: { type: String, required: true },
    discription: { type: String, required: true },
    price: { type: String, required: false },
    Cardphoto:{type:String , required:true},
    virtualtour:{type:String , required:true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Projects",projectSchema);
