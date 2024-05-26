import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick=()=>{
        // console.log('Uppercase was clicked' + text);
        let newtext= text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoclick=()=>{
        // console.log('Uppercase was clicked' + text);
        let newtext= text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleClearclick=()=>{
        // console.log('Uppercase was clicked' + text);
        let newtext= '';
        setText(newtext);
        props.showAlert("Text Cleared!","success");
    }

    const handleExtraSpaces=()=>{
        // console.log('Uppercase was clicked' + text);
        let newtext= text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra Spaces removed!","success");
    }

    const handleCopy=()=>{
        console.log('I am copy');
        let newtext= document.getElementById('myBox');
        newtext.select();
        newtext.setSelectionRange(0 , 9999);
        navigator.clipboard.writeText(newtext.value);
        props.showAlert("Copy to clipboard!","success");
    }
    const handleOnChange=(event)=>{
        // console.log('On Change');
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='dark'?'white':'black'}} rows="8" value={text}></textarea>
            <button className="btn btn-primary mt-3 mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mt-3 mx-1" onClick={handleLoclick}>Convert to Lowercase</button>
            <button className="btn btn-primary mt-3 mx-1" onClick={handleClearclick}>Clear Text</button>
            <button className="btn btn-primary mt-3 mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mt-3 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in textbox above to preview it here"}</p>
    </div>
    </>
  )
}
