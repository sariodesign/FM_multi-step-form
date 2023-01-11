import { MouseEventHandler } from 'react';
import { useNavigate } from "react-router-dom";
import * as stepNavigation from "./StepNavigation.css";

interface btnNavigation {
    label: string,
    backLink: boolean,
    back: string;
    next: string,
}

const StepNavigation = (props:btnNavigation) => {
    const navigate = useNavigate()
    
    const navigateHandler = (linkTo:string) => {
        navigate(linkTo)
        
    }

    return (
        <div className={!props.backLink ? stepNavigation.container.alignRight : stepNavigation.container.base}>
            { props.backLink && <button className={stepNavigation.btnLink} onClick={() => navigateHandler(props.back)}>Go back</button> }
            { props.next ? <button className={stepNavigation.btnPrimary} onClick={() => navigateHandler(props.next)}>{props.label}</button> : <button className={stepNavigation.btnPrimary}>{props.label}</button> } 
        </div>
    )
}

export default StepNavigation