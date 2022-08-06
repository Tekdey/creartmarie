require("dotenv").config();
const express = require("express");
const app = express();

const PORT = 5000;

app.use("/api/user", require("./routes/UserRouter"));
app.use("/api/product", require("./routes/ProductRouter"));
app.use("/api/category", require("./routes/CategoryRouter"));

app.listen(PORT, () => console.log("Server running"));
