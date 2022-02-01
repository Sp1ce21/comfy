import PageName from '../../common/PageName/PageName';
import s from './Login.module.css'
import { LoginReduxForm } from './Form/Form';

type Props = {

}

const Login: React.FC<Props> = ({  }) => {

    const onSubmit = (formData: any) => {
        console.log(formData);
    }

    return (
        <main className={s.login}>
            <PageName name='Login' />
            <LoginReduxForm onSubmit={onSubmit}/>
        </main>
    )
}

export default Login;