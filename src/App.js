import './App.css';
import React,{useState} from 'react'
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState(`dark`)
  const [switchText, setSwitchText] = useState("Enable light")
  const [alert, setAlert] = useState(null)
  // type is basically type of alert message weathe its warning,success,danger or example
  const showAlert=(message,type)=>{
    setAlert(
      {
        msg:message,
        type:type
      }
    )
    setTimeout(() => {
      setAlert(null)
    }, 1500);
      
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      setSwitchText("Enable dark")
      document.body.style.backgroundColor='grey'
      showAlert("Dark mode is enabled","success")
    }
    else{
      setMode('light')
      setSwitchText("Enable light")
      document.body.style.backgroundColor='white'
      showAlert("Light mode is enabled","success")
    }
  }
   

  
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} switchText={switchText} toggleMode={toggleMode} ></Navbar>
    <Alert alert={alert}/>
    
    <div className='container my-3'>
     {/* <About/>  */}
     <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
      </Routes>
    

    </div>
    </Router>
    </>
  );
}


export default App;
