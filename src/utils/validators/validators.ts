export const required = (value: string) => {
    if (value) return undefined;
    return "You didn't enter the message"
}
export const requiredA = (value: string) => {
    if (value.includes('@')) return undefined;
    return `Please enter correct email, at least with '@'`
}
export const maxLength = (maxLength: number) => (value: string) => {
    if (value && value.length <= maxLength) return undefined;
    return `Max length is ${maxLength} symbols`
}
export const number = (value: string) => {
    if (/\d/.test(value)) return undefined
    return `Please enter at least one number`
}
export const isUpperCase = (value: string) => {
    let i = 0
    let count = 0
    while (i <= value.length) {
        let arr = Array.from(value);
        for(let elem of arr){
            if(elem === elem.toUpperCase()){
                return undefined
            }
            else {
                count++
            }
        }
        if(value.length === count){
            return 'Please enter at least one uppercase letter'
        }
    }
}
export const isLowerCase = (value: string) => {
    let i = 0
    let count = 0
    while (i <= value.length) {
        let arr = Array.from(value);
        for(let elem of arr){
            if(elem === elem.toLowerCase()){
                return undefined
            }
            else {
                count++
            }
        }
        if(value.length === count){
            return 'Please enter at least one uppercase letter'
        }
    }
}
