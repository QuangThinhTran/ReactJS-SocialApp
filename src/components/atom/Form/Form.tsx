import style from './index.module.scss'

interface IForm {
  rows: number
}

const Form = (props: IForm) => {
  return (
    <form action="" method="post" onSubmit={undefined}>
      <textarea rows={props.rows} defaultValue={""} />
      <div className={style['form-container']}>
        <label htmlFor="file-upload" className={style['custom-file-upload']}>
          Select files
          <input id="file-upload" type="file" multiple />
        </label>
        <button type='submit' className={style['btn-submit']}>Share</button>
      </div>

    </form>

  )
}

export default Form
