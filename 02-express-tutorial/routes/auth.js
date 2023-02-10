const express = require('express')
const router = express.Router();


router.post('/', (req, res) => {
    const name = req.body.name
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    } else {
        res.status(401).send('please provide credentials')
    }

})


module.exports = router