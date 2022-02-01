import PageName from '../../common/PageName/PageName';
import { LoginReduxForm } from './Form/Form';


export type formData = {
    email: string
    password: string
    rememberMe: boolean
}

const Login: React.FC = () => {

    const onSubmit = (formData: formData) => {
        // console.log(formData);
    }

    return (
        <main>
            <PageName name='Login' />
            <LoginReduxForm onSubmit={onSubmit} />
        </main>
    )
}

export default Login;