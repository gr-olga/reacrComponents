import {useEffect, useState} from "react";

export function InoutNumb(props) {
    const [inputValue, setInputValue] = useState('')
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    const [validation, setValidation] = useState("")

    const handleAdd = () => {
        setInputValue("$" + inputValue);
    }

    const checkValidation = () => {
        let errors = validation;
        if (!inputValue.trim()) {
            errors = "sum is required";
        } else {
            errors = "";
        }
        // const cont = "/.?[0-9]+/"
        const cont = new RegExp(/.?[0-9]+/)
        if (!cont.test(inputValue)) {
            console.log(233232);
            errors = " invalid characters"
        }
        setValidation(errors);
    }
    useEffect(() => {
        checkValidation();
    }, [inputValue]);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <h2>{props.text}</h2>
            <form onSubmit={handleSubmit}>
                <input

                    value={inputValue}
                    onChange={handleChange}
                    onBlur={handleAdd}
                />
                {validation && <p>{validation}</p>}
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}