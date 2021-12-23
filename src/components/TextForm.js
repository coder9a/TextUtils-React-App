import React, { useState } from 'react'

export default function TextForm(props) {
    const convertToUpper = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase",'success')
    }
    const convertToLower = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase",'success')
    }
    const removeExtraSpaces = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
        props.showAlert("Extra spaces removed",'success')
    }
    const copyText = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text copied to clipboard!",'success')
    }
    const clearText = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared!",'success')
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("")
    return (
        <>
            <div style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className="mb-3" >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                        color: props.mode === 'dark' ? 'white' : '#042743'
                    }} rows="8" id="myBox" ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={convertToUpper}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={convertToLower}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
