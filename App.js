import React from "react";
import ReactDOM from "react-dom/client"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";
import {useState} from "react";

const App=()=>{
  const [textToCopy,setTextToCopy]=useState();
  const startListening=()=>SpeechRecognition.startListening({ continuous: true ,language:'en-IN'})
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()

  const [isCopied, setCopied] = useClipboard(textToCopy);

  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return(
    <>
    
        <div className="container">
            <h2>Speech to Text Converter</h2>
        </div>
        
        
        <div className="main-content" onClick={() => setTextToCopy(transcript)}>
          {transcript}
          <div className="btn-style">

          <button onClick={setCopied}>
      {isCopied ? "Copied" : "Copy to clipboard"}
    </button>
            
            <button onClick={startListening}>Start listeneing</button>
            <button onClick={SpeechRecognition.stopListening}>Stop listeneing</button>
            
          </div>
        </div>


        
        </>
    )
}
const AppLayout = () => {
  return (
    <>
    <App/>
    </>
    
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
