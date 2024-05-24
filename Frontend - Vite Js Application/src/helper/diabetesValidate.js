import { toast } from "react-hot-toast";

//////////////// validate diabetes ///////////////////////////

export async function diabetesValidate(values) {
    const errors = diabetesValidation({}, values)
    return errors;
}

//////////////// Validate diabetes form /////////////////////////

function diabetesValidation(errors = {}, values) {
    if (!values.gender) {
        errors.gender = toast.error("Gender Required...!")
    } else if (!values.age) {
        errors.age = toast.error("Age Required...!")
    } else if (!values.bloodPressure) {
        errors.bloodPressure = toast.error(" Blood Pressure Required...!")
    } else if (values.bloodPressure.length <= 90 && values.bloodPressure.length >= 140) {
        errors.bloodPressure = toast.error("Please Enter Blood Pressure in Range...!")
    } else if (!values.skinThickness) {
        errors.skinThickness = toast.error(" Skin Thickness Required...!")
    } else if (values.skinThickness.length <= 7.5 && values.SkinThickness.length >= 23.6) {
        errors.skinThickness = toast.error(" Please Enter Skin Thickness in Range...!")
    } else if (!values.insulin) {
        errors.insulin = toast.error("Insulin Required...!")
    } else if (values.insulin.length <= 2 && values.insulin.length >= 25) {
        errors.insulin = toast.error(" Please Enter Insulin in Range...!")
    } else if (!values.glucose) {
        errors.glucose = toast.error("Glucose Required...!")
    } else if (values.glucose.length <= 0.078 && values.glucose.length >= 2.42) {
        errors.glucose = toast.error(" Please Enter Glucose Value in Range...!")
    }
    return errors
}