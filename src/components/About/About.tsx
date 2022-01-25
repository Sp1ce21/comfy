import PageName from '../../common/PageName/PageName';
import s from './About.module.css'

const About: React.FC = () => {
    return (
        <main className={s.main}>
            <PageName name='About' />
            <div className={s.post}>
                <div className='row'>
                    <span className={s.slash}>/</span>
                    <h1 className={s.title}>Our History</h1>
                </div>
            </div>
        </main>
    )
}

export default About;