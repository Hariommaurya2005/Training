const express = require('express')
const connectDB=require('./config/db')
const app = express()
const port = 3000
const productRoutes=require('./routes/productroutes')

connectDB();
app.use(express.json());
app.use('/api',productRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Product app listening on port ${port}`)
})