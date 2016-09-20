const express = require('express')
const app = express()

const router = express.Router()

router.get('/name', function (req, res) {
  res.send('Danny')
})

app.use('/person', router)

router.get('/age', function (req, res) {
  res.send('27')
})
module.exports = router
app.listen(3000)
