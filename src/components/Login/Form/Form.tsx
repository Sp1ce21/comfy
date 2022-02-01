import { Field, reduxForm } from 'redux-form';
import { Input } from '../../../common/FormsControls/FormsControls'
import { required, maxLength, requiredA, number, isUpperCase, isLowerCase } from '../../../utils/validators/validators';

type Props = {

}

const maxLength30 = maxLength(30)

const Form: React.FC<any> = ({ handleSubmit, error }) => {


    return (
        <form onSubmit={handleSubmit}>
            <Field validate={[
                required, maxLength30, requiredA
            ]} name={'email'} placeholder={'Enter email...'} component={Input} type={'email'} />
            <Field validate={[
                required, maxLength30, isUpperCase, isLowerCase, number
            ]} name={'password'} type={'password'} placeholder={'Enter password...'} component={Input} />
            <Field name={'rememberMe'} type={'checkbox'} component={'input'} /> remember me
            {error && <div>{error}</div>}
            <button>Login</button>
        </form>
    )
}


export const LoginReduxForm = reduxForm({ form: 'login' })(Form)

export default Form;