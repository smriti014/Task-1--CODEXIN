
import React from 'react';
import {useState} from 'react';
import axios from 'axios';

function App() {
  const [text,setText]=useState(null);
  const [summary,setSummary]=useState(null);

  const handleinput=(e)=>{
    setText(e.target.value)
  }
  const Summarize=async()=>{
    const options = {
      method: 'GET',
      url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
      params: {
        url: text,
        lang: 'en',
        engine: '2'
      },
      headers: {
        'x-rapidapi-key': '016c808f0fmsh3a137f4d5d34c29p1d971ajsnd4e36078df26',
        'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
      }
    };
    const response = await axios.request(options)
    setSummary(response.data.summary)
  }
  
  return (
   <>
    <div className="text-blue-600 text-xl">
      <div className="h-screen w-screen bg-slate-300 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">Article Summarizer</h1>
        <div className="flex items-center justify-center gap-2 mb-4">
          <input type="text" placeholder="Enter URL" className="outline-none border border-gray-300 rounded-lg p-1" onChange={handleinput}/>
          <button className="bg-black text-white p-1 rounded-lg w-20" onClick={Summarize}>Click</button>
        </div>
        <div className="w-96 h-64 bg-gray-400 overflow-y-scroll">
          { summary }
        </div>
      </div>
    </div>
   </>
  )
}

export default App
