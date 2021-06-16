const express = require('express')
const app = express()
const path = require('path')
let port = 3000


console.log(__dirname);
app.use(express.static(path.join(__dirname, "..", "Public")));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})