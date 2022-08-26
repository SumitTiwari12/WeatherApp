const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

//All Path 
console.log()
const viewsPath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/Partials")
const staticPath = path.join(__dirname,"../public")


app.use(express.static(staticPath))

app.set('view engine', 'hbs');
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)  

app.get('/', (req, res) => { 
  res.render("Home",{
    name:"Shivanshu" 
  })
})
app.get('/about', (req, res) => {
  res.render("About")
})  
app.get('/weather', (req, res) => {
  res.render("Weather")
})


app.get('*', (req, res) => {
  res.render("errorpage")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})