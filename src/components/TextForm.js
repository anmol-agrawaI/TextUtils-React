import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked!!" +text)
        let newText=text.toUpperCase();
        setText(newText)  
        props.showAlert("Converted to uppercase!","success")
    }
    const handleLowClick=()=>{
        //console.log("Uppercase was clicked!!" +text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success")
    
    }
    const handleClearClick=()=>{
        //console.log("Uppercase was clicked!!" +text)
        let newText="";
        setText(newText)
        props.showAlert("Text cleared!","success")
    
    }
    const handleCopyClick=()=>{
        //console.log("Uppercase was clicked!!" +text)
        let newText=document.getElementById("myBox")
        newText.select()
        navigator.clipboard.writeText(newText.value)
        props.showAlert("Text copied!","success")
        
    }
    const handleOnChange=(event)=>{
        //console.log("On Change")
        setText(event.target.value)
    }
    // text is a variable which can be changed using function setText
    const [text,setText]=useState("");
    // text="wrong way to change text"
    // setText("right way to change text");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="myBox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey' , color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
<button className='btn btn-primary mx-2 ' onClick={handleLowClick}>Convert to LowerCase</button>
<button className='btn btn-primary mx-2 ' onClick={handleClearClick}>Clear Text</button>
<button className='btn btn-primary mx-2 ' onClick={handleCopyClick}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{text.split(" ").length*0.008} minutes of reading</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something to preview it here"}</p>
    </div>
    </>
  )
}
