const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./data/db.json')
const middlewares = jsonServer.defaults()
const data=require('./data/db.json')
const PORT = process.env.PORT||8000
server.use(middlewares)
server.use(jsonServer.bodyParser)

server.get('/alldata', (req, res) => {

    res.send({login:true,
    table:data.student,
    lineGraphData:data.LineGraph,
    cardData:data.cardData,
    pieChart:data.pieChart[0]
  })  
})

server.get('/lineGraph', (req, res) => {
  res.send({lineGraphData:data.LineGraph})
})
server.get('/cardData', (req, res) => {
  res.send({cardData:data.cardData})
})
server.get('/pieChart/:month', (req, res) => {
 let newdata= data.pieChart.find((data)=>{return data.month===req.params.month})
  res.send({pieChart:newdata})
})
server.get('/table', (req, res) => {
  res.send({ table:data.student})
})

function pieDataGenrater()
{
  let data=data.pieChart;

}


server.use(router)

// Use default router

server.listen(PORT, () => {
  console.log('JSON Server is running')
})