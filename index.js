const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/hello', (req,res) =>{
  res.send("helo")
})
app.get('/html',(req,res) =>{
  res.send("<h1>hello my name is html</h1>")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})