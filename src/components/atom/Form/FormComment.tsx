import Button from '../Button'
import style from './index.module.scss'

interface IForm {
    rows: number
}

const FormComment = (props: IForm) => {
    return (
        <form action="" method="post" onSubmit={undefined}>
            <textarea rows={props.rows} defaultValue={""} />
            <div className={style['form-container']}>
                <Button color='#ff90e8' text='Share' />
            </div>
        </form>
    )
}

export default FormComment
