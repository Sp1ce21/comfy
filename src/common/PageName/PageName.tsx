import s from './PageName.module.css'

type Props = {
    name: string
}

const PageName: React.FC<Props> = ({ name }) => {
    return (
        <div className={s.pageName}>
            <div className={s.container}>
                Home / {name}
            </div>
        </div>
    )
}

export default PageName;