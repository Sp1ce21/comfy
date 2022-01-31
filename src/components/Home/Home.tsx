import HeaderContainer from '../Header/HeaderContainer';
import s from './Home.module.css'

type Props = {

}

const Home: React.FC<Props> = ({ }) => {
    return (
        <div className={s.wrapper}>
            <div className='container'>
                <div className={s.mainScrean}>
                    <HeaderContainer logoStyleColor='#fff' />
                    <div className={s.titles}>
                        <h1>Rest, Relax, Unwind</h1>
                        <h2>Embrace your choises - we do</h2>
                        <a href="">Show now</a>
                    </div>
                </div>
                <main className={s.main}>

                </main>
            </div>
        </div>
    )
}

export default Home;