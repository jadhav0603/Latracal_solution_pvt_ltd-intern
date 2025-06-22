const express = require('express')
const router = express.Router()



router.post('/addbook',async(req,res)=>{
    const {formArray} = req.body
    console.log(formArray)
})



module.exports = router