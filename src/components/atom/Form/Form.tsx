import { useForm } from 'react-hook-form'
import Button from '../Button'
import style from './index.module.scss'
import axios from 'axios'
import { HTTP_STATUS } from '../../../common/constants'
import { useAuth } from '../../../common/hooks/useAuth'

interface IForm {
  rows: number
}

const Form = (props: IForm) => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { token } = useAuth()

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append('content', data.content);
    for (let i = 0; i < data.files.length; i++) {
      formData.append('path', data.files[i]);
    }

    try {
      const response = await axios.post('http://localhost:3000/blog/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });

      const values = response.data;

      if (response.status === HTTP_STATUS.CREATED) {
          alert(values.message);
      } else {
        alert(values.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Please login to share your thoughts');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea rows={props.rows} defaultValue={""} {...register('content', { required: 'Content is required' })}/>
      <div className={style['form-container']}>
        <label htmlFor="file-upload" className={style['custom-file-upload']}>
          Select files
          <input id="file-upload" type="file" multiple {...register('files')} />
        </label>
        <Button color='#ff90e8' text='Share' />
      </div>
    </form>
  )
}

export default Form
