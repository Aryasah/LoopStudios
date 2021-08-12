import React from 'react'
import styled from 'styled-components'

const Hero = () => {
    return (
        <Wrap className="hero">
            <Box>
                IMMERSIVE <br/>
                EXPERIENCES <br/>
                THAT DELIVER
            </Box>
        </Wrap>
    )
}

export default Hero

const Box = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:200px;
    width:450px;
    padding:20px;
    border:2px solid #fff;
    font-weight:400;
    letter-spacing:2px;
    color:#ffff;
    font-size:60px;
    font-family: 'Josefin Sans', sans-serif;
    line-height:1.1;
    @media (max-width:600px)
    {
        width:300px;
        font-size:40px;
        padding:10px;
        line-height:1.0;
    }
`

const Wrap =styled.div`
    left:0;
    right:0;
    top:0;
    height:70vh;
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    padding:60px 100px;
    z-index:10;
    padding-bottom:0px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    @media (max-width:450px)
    {
        justify-content:center;
        padding-left:10px;
        padding-right:10px;
        height:100vh;
    }
`