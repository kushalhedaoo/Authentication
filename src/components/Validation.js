
const Validation = (values) => {

    // const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    const regex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

    let errors = {}
    console.log(errors);
    if (!values.name)
        errors.name = "Name Required"
    if (!values.email)
        errors.email = "Email id Required"
    else if (!values.email.includes("@"))
        errors.email = "Invalid email id"
    if (!values.password)
        errors.password = "password Required"
    else if (!regex.test(values.password))
    errors.password = "Password must contain at least 5 characters, 1 number, 1 upper and 1 lowercase!";
    //     else if (passwordValidator.test(values.password))
    //    errors.password=""
    return errors;
}
export default Validation;