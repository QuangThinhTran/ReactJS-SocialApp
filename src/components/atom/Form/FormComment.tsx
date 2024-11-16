import { useForm } from 'react-hook-form'
import Button from '../Button'
import style from './index.module.scss'
import { useAuth } from '../../../common/hooks/useAuth'
import axios from 'axios'
import { HTTP_STATUS } from '../../../common/constants'

interface IForm {
    rows: number,
    id: number
}

const FormComment= (props: IForm) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { token } = useAuth()

    const onSubmit = async (data: any) => {
        try {
            const formData = new FormData();
            formData.append('comment', data.comment);
            formData.append('blog_id', props.id.toString());

            const response = await axios.post('http://localhost:3000/blog/comment', data, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              }
            });

            const values = response.data;   
            if (response.status === HTTP_STATUS.CREATED) {
                alert(values.message);
            } else {
                alert(values.message);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('An error occurred during registration. Please try again.');
          }
    }

    return (
        <form onSubmit={undefined}>
            <textarea rows={props.rows} defaultValue={""} {...register('comment', {required: 'Comment is required'})}/>
            <div className={style['form-container']}>
                <Button color='#ff90e8' text='Share' />
            </div>
        </form>
    )
}

export default FormComment
