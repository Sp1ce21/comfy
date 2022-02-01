import PageName from '../../common/PageName/PageName';
import { LoginReduxForm } from './Form/Form';

const Login: React.FC = () => {

    const onSubmit = (formData: any) => {
        console.log(formData);
    }

    return (
        <main>
            <PageName name='Login' />
            <LoginReduxForm onSubmit={onSubmit} />
        </main>
    )
}

export default Login;