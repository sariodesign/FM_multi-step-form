import { useState } from "react";
import * as formStep from "../components/FormSteps/FormStep.css"
import * as data from "../data/mock";
import SelectField from "../components/SelectField/SelectField";

const Plan = ():JSX.Element => {
    const [planSelected, setPlanSelected] = useState(data.planList)
    //const [planInterval, setPlanInterval] = useState(false)

    const planSelectHandler = (e:any, i:any) => {
        let newPlans = planSelected.map(plan => {
            if(plan.id === i){
                return {...plan, selected: true}
            } else {
                return {...plan, selected: false}
            }
        });
        setPlanSelected([...newPlans])
    }

    const planIntervalHandler = (e:any) => {
        let newPlans = planSelected.map((plan, index) => {
            if(e.target.checked) {
                return {...plan, price: data.planList[index].price  * 10, interval: 'yr', moreInfo: '2 months free'}
            } else {
                return {...plan, interval: 'mo', moreInfo: ''}
            }
        })
        setPlanSelected([...newPlans])
    }

    return (
        <div className={formStep.container}>
            <h2 className={formStep.legend}>Select your plan</h2>
            <p className={formStep.subLegend}>You have the option of monthly or yearly billing.</p>
            { planSelected.map((item, index) => {
                return (
                    <SelectField 
                        key={index}
                        name={item.name}
                        price={item.price}
                        icon={item.icon}
                        interval={item.interval}
                        selected={item.selected}
                        currency={item.currency}
                        moreInfo={item.moreInfo}
                        handler={(event:any) => planSelectHandler(event, index)}
                    />
                )
            })}
            <div className={formStep.toggleContainer}>
                <label htmlFor="interval" >
                    <span>Monthly</span>
                    <input className={formStep.toggle} type="checkbox" name="interval" id="interval" onChange={planIntervalHandler} />
                    <span>Yearly</span>
                </label>
            </div>
        </div>
    )
}

export default Plan