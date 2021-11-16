import React from 'react'
import styled from 'styled-components'

function Section({ title, backgroundImage, description, darkButton, lightButton }) {
    return (
        <Wrap bgImage={backgroundImage}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <ButtonGroup>
                <DarkButton>
                    {darkButton}
                </DarkButton>
                {lightButton && 
                <LightButton>
                    {lightButton}
                </LightButton>
                }
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" />
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fff;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url('/images/${props.bgImage}')`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center
`

const ButtonGroup = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top: 55vh;
    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 45vh;
    }
`

const DarkButton = styled.div`
    width: 300px;
    text-align: center;
    background-color: rgba(23, 26, 32, 0.8);
    color: #fff;
    padding: 15px 0px;
    border-radius: 50px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    margin-right: 25px;
    cursor: pointer;
    @media (max-width: 768px) {
        margin-right: 0;
    }
`

const LightButton = styled.div`
    width: 300px;
    text-align: center;
    background-color: rgb(255, 255, 255);
    color: rgba(23, 26, 32, 0.8);
    padding: 15px 0px;
    border-radius: 50px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    opacity: 0.65;
    margin-left: 25px;
    cursor: pointer;
    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 20px;
    }
`

const DownArrow = styled.img`
    margin-bottom: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`