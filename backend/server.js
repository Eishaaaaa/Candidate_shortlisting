const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const candidateRoutes = require("./routes/candidateRoutes");
const matchRoutes = require("./routes/matchRoutes");
const aiRoutes = require("./routes/aiRoutes");

app.use("/api/candidates", candidateRoutes);
app.use("/api/match", matchRoutes);
app.use("/api/ai", aiRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => {
        console.log("Server running on port 5000");
    });
})
.catch(err => console.log(err));