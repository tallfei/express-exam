const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  const title = "首頁"
  res.render('index', { btnlist: title })
})

app.get('/:button', (req, res) => {
  const title = req.params['button'][0].toUpperCase() + req.params['button'].slice(1)
  res.render('index', { btnlist: title })
})


app.listen(port, () => {
  console.log(`the express is running on http://localhost:${port}`)
})




