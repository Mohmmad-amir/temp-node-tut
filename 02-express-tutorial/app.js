const express = require('express')
const app = express()
const people_Router = require('./routes/people')
const auth_Router = require('./routes/auth')



// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
//parse json
app.use(express.json())
app.use('/api/people', people_Router)
app.use('/login', auth_Router)






app.listen(5000, () => {
  console.log(`Server Listening on port 5000.....`);
})