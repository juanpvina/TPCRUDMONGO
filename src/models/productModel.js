import mongoose from "mongoose";

const statusEnum = ["AVAILABLE", "NOT AVAILABLE", "DISCONTINUED"];


const taxPrice = 1.21;

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Necesita un nombre"],
    minLength: 3,
    unique: true,
    lowercase: true,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Necesita un precio"],
    min: [0, "El precio debe ser un numero"],
    get: function (value) {
      return value * taxPrice;
    },
  },
  description: String,
  stock: Number,
  status: {
    type: String,
    validate: {
      validator: function (v) {
        return statusEnum.includes(v);
      },
      message: props => `${props.value} no es valido`,
    },
  },

  category: {type: mongoose.Schema.Types.ObjectId, 
    ref: "category", 
    required: [true, "Codigo de categoria no valido"],
},
  createdAt: {
      type: Date,
      default: Date.now(),
    },
    featured : Boolean,
});

export default mongoose.model("product", productSchema);