import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'

import './App.css'

function App() {
  const configuration = new Configuration({
    apiKey:import.meta.env.VITE_Open_AI_Key ,
  });

  const openai = new OpenAIApi(configuration); //init openai api
  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: "Say this is a test",
      n: 1,
      size: '1024x1024',

    });
    console.log(res.data.data[0].url);
  }
  


  return (
    <div className="App">
      <button onClick={generateImage}>Generate Image</button>
    </div>
  )
}

export default App
