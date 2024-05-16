import mongoose from "mongoose";

const statusEnum = ["AVAILABLE", "NOT AVAILABLE", "DISCONTINUED"];


const taxPrice = 1.21;

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
    minLength: 3,
    unique: true,
    lowercase: true,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price field is required"],
    min: [0, "Price field has to be a number"],
    //Al consultar precio multiplica el valor guardado en price
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
      message: props => `${props.value} is not valid`,
    },
  },
  //se referencia el id de categoría
  category: {type: mongoose.Schema.Types.ObjectId, 
    ref: "category", 
    required: [true, "Category code is not valid"],
},
  createdAt: {
      type: Date,
      default: Date.now(),
    },
    featured : Boolean,
});

export default mongoose.model("product", productSchema);