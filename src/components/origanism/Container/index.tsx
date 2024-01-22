import React from 'react'
import styled from 'styled-components'

interface MyComponentProps {
    children: React.ReactNode;
}

const Container: React.FC<MyComponentProps> = ({ children }) => {
    return (
        <Content>{children}</Content>
    )
}

const Content = styled.div`
    width: 45%;
    position: relative;
    top: 75px;
    @media (max-width: 767.99px) {
        width: 85%;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
        width: 85%;
    }
`

export default Container
