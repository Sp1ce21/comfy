import { Field, reduxForm } from 'redux-form';
import { Input } from '../../../common/FormsControls/FormsControls'
import { required, maxLength, requiredA, number, isUpperCase, isLowerCase } from '../../../utils/validators/validators';
import s from './Form.module.css'

type Props = {

}

const maxLength30 = maxLength(30)

const Form: React.FC<any> = ({ handleSubmit }) => {


    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <Field validate={[
                required, maxLength30, requiredA
            ]} name={'email'} placeholder={'Enter email...'} component={Input} type={'email'} className={s.email} />
            <Field validate={[
                required, maxLength30, isUpperCase, isLowerCase, number
            ]} name={'password'} type={'password'} placeholder={'Enter password...'} component={Input} className={s.password} />
            <div className={s.checkboxContainer}>
                <Field name={'rememberMe'} type={'checkbox'} component={'input'} />
                <label> remember me </label>
            </div>
            <button className={s.button}>Login</button>
        </form>
    )
}


export const LoginReduxForm = reduxForm({ form: 'login' })(Form)

export default Form;