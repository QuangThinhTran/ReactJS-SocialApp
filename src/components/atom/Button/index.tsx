import styled from "styled-components"

interface IButton {
    text: string,
    color: string
}

const Button = (props: IButton) => {
    return (
        <Container style={{ background: props.color }}>
            {props.text}
        </Container>
    )
}

const Container = styled.button`
    margin-top: 15px;
    color: #333333;
    &:hover {
        transform: translate(-0.25rem, -0.25rem);
        box-shadow: 3px 3px #000;
    }
`

export default Button
