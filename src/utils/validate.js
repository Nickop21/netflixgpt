export const checkValidate=(email,password)=>{
    

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const isPasswordValid= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    if (!isEmailValid && !isPasswordValid) return "Email Id or Password is not correct"

    if (!isEmailValid) return "Email Id is not valid"
    if (!isPasswordValid) return "Password is incorrect"
    return null
}