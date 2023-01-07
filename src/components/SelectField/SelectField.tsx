import * as SelectFieldStyle from './SelectField.css';

interface SelectFieldProps {
    name: string,
    price: number,
    icon?: string,
    check?: boolean,
    plus?: string,
    currency?: string[],
    interval?: string,
    moreInfo?: string,
    selected: boolean
    handler: any
}

const SelectField = (props:SelectFieldProps):JSX.Element => {

    return (
        <label htmlFor={props.name.toLowerCase()} className={props.selected ? SelectFieldStyle.container.selected : SelectFieldStyle.container.base} onClick={props.handler}>
            <input 
                type={props.check ? 'checkbox' : 'hidden'}
                name="plan"
                value={props.name.toLowerCase()}
                id={props.name.toLowerCase()}
            />
            { props.icon && <img src={props.icon} alt={props.name} /> }
            <div className={SelectFieldStyle.text}>
                <p className={SelectFieldStyle.name}>{props.name}</p>
                <p className={SelectFieldStyle.price}>
                    { props.currency && <span>{ props.currency[0] }</span> } 
                    { props.price }
                        / 
                    { props.interval && <span>{ props.interval }</span> }
                </p>
                { props.moreInfo && <p className={SelectFieldStyle.moreInfo}>{ props.moreInfo }</p> }
            </div>
            { props.plus && <span className={SelectFieldStyle.moreInfo}>{ props.plus }</span>}
        </label>
    )
}

export default SelectField