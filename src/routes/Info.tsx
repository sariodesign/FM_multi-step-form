import InputField from "../components/InputField/InputField"
import StepNavigation from "../components/StepNavigation/StepNavigation";
import * as formStep from "../components/FormSteps/FormStep.css"
import * as data from "../data/mock";

const Info = () => {

    const fields = data.infoFields.map((item, index) => {
        return <InputField label={item.label} type={item.type} placeholder={item.placeholder} required={item.required} key={index} />
    })

    return <>
        <div className={formStep.container}>
            <h2 className={formStep.legend}>Pesonal Info</h2>
            <p className={formStep.subLegend}>Please provide your name, email address, and phone number</p>
            {fields}
        </div>
        <StepNavigation label="Next Step" next="/select-plan" backLink={false} />
    </>
}

export default Info