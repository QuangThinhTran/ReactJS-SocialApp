import style from './index.module.scss'

interface IForm {
    rows: number
}

const FormComment = (props: IForm) => {
    return (
        <form action="" method="post" onSubmit={undefined}>
            <textarea rows={props.rows} defaultValue={""} />
            <div className={style['form-container']}>

                <button type='submit' className={style['btn-submit']}>Share</button>
            </div>

        </form>
    )
}

export default FormComment
