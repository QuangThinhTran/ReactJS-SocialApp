import style from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { SubmitHandler, useForm } from "react-hook-form";
import styled from 'styled-components';

interface IForm {
    content: string
}

const Ticket = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IForm>();

    const handleModal = () => {
        setShowModal(!showModal)
    }

    const onSubmit: SubmitHandler<IForm> = data => {
        console.log(data)
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
            <Modal show={showModal} onHide={handleModal}>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" {...register('content', { required: true })} rows={3} placeholder='Description...' />
                        </Form.Group>
                        {errors?.content?.type == 'required' && <p style={{ marginTop: '10px', color: 'red' }}>This field is required</p>}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleModal} style={{ background: '#fff' }}>
                        Close
                    </Button>
                    <Button onClick={handleModal} style={{ background: '#a2a2f5', color: '#fff' }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

const Button = styled.button`
    font-family: "Neucha", sans-serif;
    &:hover {
        transform: translate(-0.25rem, -0.25rem);
        box-shadow: 3px 3px #000;
    }
`

export default Ticket
