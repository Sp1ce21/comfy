import s from './Title.module.css'

type Props = {
    title: string
}

const Title: React.FC<Props> = ({title}) => {
    return (
                <div className='row'>
                    <span className={s.slash}>/</span>
                    <h1 className={s.title}>{title}</h1>
                </div>
    )
}

export default Title;