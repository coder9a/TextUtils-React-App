import React, { useState } from 'react'

export default function TextForm(props) {
    const convertToUpper = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const convertToLower = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const removeExtraSpaces = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
    }
    const copyText = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }
    const clearText = () => {
        let newText = "";
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("")
    return (
        <>
            <div style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                        color: props.mode === 'dark' ? 'white' : '#042743'
                    }} rows="8" id="myBox" ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={convertToUpper}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={convertToLower}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
