import express from "express"
import * as dotenv from "dotenv"

// Init dotenv
dotenv.config()

const port = 3000
const hostname = "localhost"

const app = express()
const router = express.Router()

app.use(express.json())
app.use("/", express.static("./dist/front"))

router.get("/", (req, res) => {
	res.json({ success: true, message: "WindSpot app is running !", data: null })
})

// Mount all back routes on /api path
app.use("/api", router)

// Start express app to serve front
app.listen(port, hostname, () => {
	console.log(`app is running on port ${port}`)
})
