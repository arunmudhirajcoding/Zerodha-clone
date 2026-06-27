import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import HoldingsModel from "./model/HoldingsModel.js";
import PositionsModle from './model/PositionsSchema.js'
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3002;
const URI = process.env.MONGO_URI;
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connectDB = () => {
	mongoose
		.connect(URI)
		.then(() => {
			console.log("db connected");
		})
		.catch((err) => {
			console.log(err);
		});
};

app.get("/active", (req, res) => {
	res.json({ status: "active" });
});

app.get('/api/Holdings',async (req,res) => {
	let allHoldings = await HoldingsModel.find();
	res.json(allHoldings);
})

app.get('/api/positions',async (req,res) => {
	let allPositions = await positionsModel.find();
	res.json(allPositions);
})

app.post('/api/newOrder', async (req,res) => {
	let {name,qty,price,mode} = req.body
	let newOrder = new OrdersModel({
		name, qty, price, mode
	})

	newOrder.save()
	res.status(200).json({status:"success"})
})

app.listen(PORT, () => {
	console.log(`server listen at http://localhost:${PORT}`);
	connectDB();
});
