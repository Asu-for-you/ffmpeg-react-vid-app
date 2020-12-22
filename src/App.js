import logo from './logo.svg';
import {useState, useEffect} from "react"
import './App.css';
import {createFFmpeg, fetchFile} from "@ffmpeg/ffmpeg"
const ffmpeg = createFFmpeg({log: true})

function App() {
  const [ready, setready] = useState(false)
  const load = async () => {
    await ffmpeg.load()
    setready(true)
  }
  return (
    
  );
}

export default App;
