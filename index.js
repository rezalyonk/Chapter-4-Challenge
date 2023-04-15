// import atau panggil package2 yg kita mau pakai di aplikasi kita
const express = require('expresss')

// framework express = framework utk http server
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`App Running on localhost: ${PORT}`)
})