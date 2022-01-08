import express from 'express'
import cors from 'cors'
import products from './products.js'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('online shopping backend')
})

app.get('/products', (req, res) => {
    res.send(products)
})

app.listen(5000, console.log('server running on port 5000'))