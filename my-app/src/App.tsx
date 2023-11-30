import './App.css'
import {ReactElement, useState} from "react";
import Form from "./components/Form.tsx";

function App(): ReactElement {
    const [values, setValues] = useState({color: "#34495e", formText: ""});

    const colorChanger = (color: string, formText: [number, number, number] | string) => {
        if (formText === "Ошибка") {
            setValues({
                color: color,
                formText: "Ошибка!"
            })
        } else if (formText === "Пусто") {
            setValues({
                color: color,
                formText: ""
            })
        } else {
            setValues({
                color: color,
                formText: `rgb(${formText[0]}, ${formText[1]}, ${formText[2]})`
            })
        }
    }

    return (
        <div style={{backgroundColor: values.color}} className="form">
            <Form colorChanger={colorChanger}/>
            <div className="second-form">{values.formText}</div>
        </div>
    )
}

export default App
