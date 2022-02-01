import s from './FormsControls.module.css';

type formControlType = {
    meta: {
        touched: boolean,
        error: string
    }
    children: React.ReactNode
}

export const FormControl: React.FC<formControlType> = ({ meta: { touched, error }, children }) => {
    debugger
    const hasError = error && touched;

    return (
        <div className={s.formControl + " " + (hasError ? s.error + ' ' + s.activeError : "")}>
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<any> = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    )
}

export const Input: React.FC<any> = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    )
}
