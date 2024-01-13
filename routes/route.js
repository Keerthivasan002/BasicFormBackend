import express from "express"
import { create } from "../control/control.js"

const route = express.Router()

route.post("/create", create)


export default route