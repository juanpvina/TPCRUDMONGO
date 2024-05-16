import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true },
    featured: Boolean,
    createdAt: {type: Date, default: Date.now(),},
});

export default mongoose.model('category', categorySchema);