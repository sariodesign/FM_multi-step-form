import { MouseEventHandler } from 'react';
import { useNavigate } from "react-router-dom";
import * as stepNavigation from "./StepNavigation.css";

interface btnNavigation {
    label: string,
    backLink: boolean,
    back?: { [K in backLink]:string};
    next: string,
}

const StepNavigation = (props:btnNavigation) => {
    const navigate = useNavigate()
    
    const navigateHandler = (linkTo:string) => {
        navigate(linkTo)
    }

    return (
        <div className={stepNavigation.container}>
            { props.backLink && <button className={stepNavigation.btnLink} onClick={() => navigateHandler(props.back)}>Go back</button> }
            <button className={stepNavigation.btnPrimary} onClick={() => navigateHandler(props.next)}>{props.label}</button>
        </div>
    )
}

export default StepNavigation