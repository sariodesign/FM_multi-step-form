import * as inputBlock from "./InputField.css";

interface Input {
    label: string,
    type: string,
    placeholder: string,
    required: boolean
}

const InputField = (props:Input):JSX.Element => {
    return (
        <div className={inputBlock.field}>
            <label className={inputBlock.label}>{props.label}</label>
            <input className={inputBlock.input} type={props.type} placeholder={props.placeholder} required={props.required} />
        </div>
    )
}

export default InputField