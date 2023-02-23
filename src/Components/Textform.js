import React, { useState } from 'react'

export default function Textform(props) {
    const HandleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert(" Converted to Uppercase", "success");
    }
    const HandleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert(" Converted to Lowercase!", "success");
    }
    const HandleClClick = () => {
        let newText = "";
        setText(newText);
        props.showalert(" TextBox has benn Cleared", "success");
    }
    const HandleCopy = () => {
        var newText = document.getElementById("mybox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showalert(" Copied to Clipboard", "success");
    }
    const HandleExSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert(" extra spaces has been Removed", "success");
    }
    const HandleOnchange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='mt-1'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="mybox" style={{ backgroundColor: props.mode === 'dark' ? '#39373d' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} onChange={HandleOnchange} rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 mb-2" onClick={HandleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 mb-2" onClick={HandleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 mb-2" onClick={HandleClClick}>Clear Text Box</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 mb-2" onClick={HandleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 mb-2" onClick={HandleExSpace}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
                <p>{0.0011 * text.length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter your text for Preview'}</p>
            </div>
        </>
    )
}
