import style from './index.module.scss'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from 'react';
import { Modal, Form } from 'antd';

interface IForm {
    content: string
}

const Ticket = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const { register, handleSubmit, reset } = useForm<IForm>();

    const handleModal = () => {
                setShowModal(!showModal)
    }

    const onSubmit: SubmitHandler<IForm> = data => {
        reset
    }

    return (
        <>
            <div className={style['ticket']}>
                <div className={style['ticket_container']}>
                    <div className={`${style.ticket_container_item} ${style.dotted}`} onClick={() => handleModal()}>
                        <FontAwesomeIcon icon={faFlag} />Report
                    </div>
                    <div className={style['ticket_container_item']}>
                        <FontAwesomeIcon icon={faBookBookmark} />Bookmark
                    </div>
                </div>
            </div>
            <Modal open={showModal} onCancel={handleModal} onOk={handleModal} footer={null}>
                <Form onFinish={handleSubmit(onSubmit)} className={style['custom-modal']}>
                    <Form.Item<IForm> name="content" label="Desciption" rules={[{ required: true, message: 'Please input your description!' }]}
                    >
                        <TextArea {...register('content')} rows={3} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{ marginBottom: 0 }}>
                        <Button onClick={handleModal} style={{ background: '#fff' }}>
                            Close
                        </Button>
                        <Button onClick={handleModal} style={{ background: '#a2a2f5', color: '#fff' }}>
                            Save Changes
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

const Button = styled.button`
    font-family: "Neucha", sans-serif;
    margin-bottom: 0;
    &:hover {
        transform: translate(-0.25rem, -0.25rem);
        box-shadow: 3px 3px #000;
    }
`
const TextArea = styled.textarea`
    border-radius: 55px 225px 15px 25px/25px 25px 35px 355px;
    font-family: "Neucha", sans-serif;
`

export default Ticket
