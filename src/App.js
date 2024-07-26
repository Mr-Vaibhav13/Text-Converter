import React , {useState}from 'react'
import Navbar1 from './component/Navbar1'
import Area from "./component/Area"
import Alert from './component/Alert';

export default function App() {
  
  const [mode,setMode] = useState('light');
  const [style,setStyle] = useState({
    color:'black'
  })

  const [alert , setAlert] = useState(null);
  

  const toogleMode = () =>{

    if(mode==='light'){
      setMode('dark');
      setStyle({color:'white'});
      document.body.style.background = "grey";
      showAlert("Dark mode on" , "success");
      document.title = 'TextUtils-Dark  mode';
    }

    else{
      setMode('light');
      setStyle({color:'black'});
      document.body.style.background = "aqua";
      showAlert("Light mode on" , "success");
      document.title = 'TextUtils-Light mode';
    }

  }


  const showAlert = (message , type) =>{
        setAlert({
        mssg : message,
        type : type
      })
      setTimeout(()=>{
          setAlert(null);
      },1000)
  }
  
  return (
    <div>
      <Navbar1 title="TextConverter" mode = {mode} toogleMode = {toogleMode} style = {style}/>
      <Alert alert={alert}/>
      <Area style = {style} mode= {mode} showAlert = {showAlert}/>    

    </div>
  )
}
