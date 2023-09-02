

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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'
});




import express from 'express';

const app = express()

app.use(express.static('public'))

app.listen(5000, ()=> {
    console.log("Server is active")
})


app.post('/chat', async (req, res)=> {   
  try {
    const resp = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
        messages: [
          { role: "user", content: req.body.question}
        ]  
    })           
        
    res.status(200).json({message: resp.data.choices[0].message.content})
  } catch(e) {
      res.status(400).json({message: e.message})
  }
})