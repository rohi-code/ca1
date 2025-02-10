const express = require('express')
const port = 3000
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hello all')

})

app.post('/',(req,res)=>{
    try{
        const{username,Email,password,dateofbirth}=req.body
   if(!username)
    return require.status(400).json({message:'username cannot be empty'})
   if(!email)
    return require.status(400).json({message:'email cannot be empty'})

  const length = password.length()
  if(length<8 || length>16)
    return require.status(400).json({message:'password length should be greater than 8 or less than 16'})

if(dateofbirth)
    return require.status(200).json({message:'ok'})
    }
  
   
})