import {ChangeEvent, ReactElement} from "react";

interface FormProps {
    colorChanger: (color: string, formText: [number, number, number] | string) => void
}

const Form = (props: FormProps): ReactElement => {
    console.log(props)
    const getColor = (e: ChangeEvent<HTMLInputElement>) => {
        let result= /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.target.value);
        console.log(e.target.value.toString().length)

        if (e.target.value.toString().length >= 7) {
            if (result) {
                props.colorChanger(e.target.value, [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)])
            } else {
                props.colorChanger("#e94b35", "Ошибка")
            }
        } else {
            props.colorChanger("#34495e", "Пусто")
        }
    }

    return (
        <div>
            <input onChange={getColor} name="input"/>
        </div>
    );
};

export default Form;