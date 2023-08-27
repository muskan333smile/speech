import logo from './logo.svg';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from 'react-use-clipboard'
import {useState} from 'react'

function App() {

  const [textToCopy, setTextToCopy] = useState();

  const [isCopied, setCopied] = useClipboard(textToCopy);

  const startListening = ()=> SpeechRecognition.startListening({ continuous: true, language: 'en-IN'});

  const { transcript,browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <>
      <div className='container'>
        <h2>Speech to text Convertor</h2>
        <br/>
        <p>React hoook that converts speech from the microphone to text ans make it available to your React components</p>

        <div className='main-content' onClick={()=> setTextToCopy(transcript)} >
        {transcript}
        </div>

        <div className="btn-style">
        <button onClick={setCopied}> {isCopied ? "Copied" : "Copy to Clipboard"}
         </button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening} >Stop Listening</button>
        </div>
      </div>
    </>
  );
}

export default App;



