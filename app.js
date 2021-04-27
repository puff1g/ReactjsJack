const express = require("express");
const logger = require("morgan");
const app = express();
const port = process.env.PORT || 3000;

app.use(
logger("dev", {
    // hvis ALLE requests skal ses i loggen, kan næste linje udkommenteres
})
);
app.get("/", (req, res) => {
res.send("Hello World!");
});

app.listen(port, () => {
console.log(`Server running http://localhost:${port}`);
});
