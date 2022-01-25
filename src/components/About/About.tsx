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
                <div className={s.text}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum vero laudantium autem sit assumenda voluptate impedit, magnam, exercitationem quis, deserunt beatae non aliquid labore tenetur sed quod doloremque quidem nihil. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum vero laudantium autem sit assumenda voluptate impedit, magnam, exercitationem quis, deserunt beatae non aliquid labore tenetur sed quod doloremque quidem nihil.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum vero laudantium autem sit assumenda voluptate impedit, magnam, exercitationem quis, deserunt beatae non aliquid labore tenetur sed quod doloremque quidem nihil.
                </div>
            </div>
        </main>
    )
}

export default About;