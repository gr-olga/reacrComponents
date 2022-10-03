import {useEffect, useState} from "react";

export function InoutNumb(props) {
    const [inputValue, setInputValue] = useState('')
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleAdd = () => {
        setInputValue("$" + inputValue);
    }

    return (
        <div>
            <h2>{props.text}</h2>
            {/*<form onSubmit={handleSubmit}>*/}
            <input value={inputValue} onChange={handleChange} onBlur={handleAdd}
            />
            {/*</form>*/}
        </div>
    )
}