import express from "express";
import cors from "cors";
import helmet from "helmet";

const zomato = express();
//application middleware
zomato.use(helmet());
zomato.use(cors());
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));

zomato.get("/", (req, res) => res.json({ message: "Setup Success" }));

zomato.listen(4000, () => console.log("server is running"));
