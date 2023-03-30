import React, { useState } from 'react';
import './Calci.css';

const Calci = () => {
    const [value, setValue] = useState('')
    const [histResult, setHistResult] = useState('')

// Enter the button Values in Input
    let handleClick = (e) => {
        let butnValue = e.target.innerText

// Before Clicking the Equal button Show the output in resultInputDiv
        handleHistRes(butnValue);

// Button Handling
        if (butnValue === 'AC') {
            setValue('')
            setHistResult('')
        }
        else if (butnValue === 'C') {
            setValue(value.slice(0, -1))
            setHistResult(value.slice(0, -1))
        }
        else if (butnValue === '=') {
           
            try {
                setValue(eval(value).toString())
                setHistResult('')
            }
            catch (err) {
                setValue('Invalid')
                setHistResult('')
            }
        }
        else {
            setValue(value + butnValue)
        }
    }

// Entering the values in input box Function
    let handleInput = (e) => {
        let val = e.target.value
        setValue(val)
        try {
            const res = eval(val)
            if (val.length > 1) {
                setHistResult(res)
            }
        }
        catch (err) {
            setHistResult(val)
        }
    }

// Before Clicking the Equal button Show the output in resultInputDiv
    let handleHistRes = (vals) => {
        let val = value + vals
        setValue(val)
        try {
            const res = eval(val)
            if (val.length > 1) {
                setHistResult(res)
            }
        }
        catch (err) {
            setHistResult(val)
        }
    }
    return (
        <div className='calci'>
            <div className="calciContainer">
                <div className="evalDiv">
                    <div className="inputDiv">
                        <input onChange={handleInput} value={value} id='value' placeholder='0' type="text" />
                    </div>
                    <div className="resultInputDiv">{histResult}</div>
                </div>

                <div className="buttonDiv">
                    <button onClick={handleClick} className='symbols'>AC</button>
                    <button onClick={handleClick} className='symbols'>C</button>
                    <button onClick={handleClick} className='symbols'>%</button>
                    <button onClick={handleClick} className='symbols'>/</button>
                    <button onClick={handleClick}>7</button>
                    <button onClick={handleClick}>8</button>
                    <button onClick={handleClick}>9</button>
                    <button onClick={handleClick} className='symbols'>*</button>
                    <button onClick={handleClick}>4</button>
                    <button onClick={handleClick}>5</button>
                    <button onClick={handleClick}>6</button>
                    <button onClick={handleClick} className='symbols'>-</button>
                    <button onClick={handleClick}>1</button>
                    <button onClick={handleClick}>2</button>
                    <button onClick={handleClick}>3</button>
                    <button onClick={handleClick} className='symbols'>+</button>
                    <button onClick={handleClick}>.</button>
                    <button onClick={handleClick}>0</button>
                    <button onClick={handleClick} className='symbols' id='equalbutt'>=</button>
                </div>
            </div>
        </div>
    )
}
export default Calci;