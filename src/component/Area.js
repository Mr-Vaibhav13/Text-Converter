import React, {useState} from 'react';

export default function Area(props) {
    
    // uppercase
    const upClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    

    // lowercase
    const lowClick = () => {
        let newT = text.toLowerCase();
        setText(newT);
        props.showAlert("Converted to lowercase!", "success");
    }
   


    //handel Change
    const chg = (event)=>{
        setText(event.target.value);
    }
   


    //Use State
    const [text,setText] = useState("");
   

    return (
    <div>
      <h2 className="m-3" style ={props.style}>Enter Text Below</h2>
 <div className="ms-5 me-5">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={chg} id="exampleFormControlTextarea1" rows="8">
  
  </textarea>
    </div>
    <button type="button" className="btn btn-primary mx-2 my-3" onClick={upClick} style ={props.style}>UpperCase</button>
    
    <button type="button" className="btn btn-primary my-3" onClick={lowClick} style ={props.style}>LowerCase</button>

    <div  className='m-3'>
    <h2 style ={props.style}>Your Text Summary</h2>

    <p style ={props.style}>{(text.split(" ")).length} words and {text.length} characters</p>
    <p style ={props.style}>{(text.split(" ")).length * 0.008} read per minute</p>

    <h2 style ={props.style}>Preview</h2>
    <p>{text.length===0?"Enter the text the area and modify it using buttons":text}</p>

    </div>
    </div>
  )
}
