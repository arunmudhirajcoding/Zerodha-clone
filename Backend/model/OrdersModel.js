import mongoose from "mongoose";


const OrdersSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String
})

export default mongoose.model('order', OrdersSchema)