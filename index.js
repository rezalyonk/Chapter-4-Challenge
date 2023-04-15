// import atau panggil package2 yg kita mau pakai di aplikasi kita
const express = require('express');
const path = require('path');

// manggil index.html disini
// const { public } = require('./public/index.html');

// framework express = framework utk http server
const app = express();
const PORT = 3000;

// setting view engine index.html
app.set("index", __dirname + "/public");
app.set("view engine", "html")
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.render("index")
})

app.listen(PORT, () => {
    console.log(`App Running on localhost: ${PORT}`)
})