import React from 'react'
import styled from 'styled-components'



const Section = () => {
    return (
        <Wrapper>
            <LeftImage src="./images/desktop/image-interactive.jpg"/>
            <Box>
            <h2>The Leader in<br/> interactive VR</h2>
            <p className="box_p">        
                Founded in 2011, Loopstudios has been producing world-class virtual reality 
                projects for some of the best companies around the globe. Our award-winning 
                creations have transformed businesses through digital experiences that bind 
                to their brand.    
            </p>

            </Box>

        </Wrapper>
    )
}

export default Section

const Wrapper=styled.div`
    height:70vh;
    left:0;
    right:0;
    padding:70px 100px;
    background-color: #fff;
    display:flex;
    @media (max-width:600px)
    {
        flex-direction:column;
        padding:50px 30px;
    }


`
const LeftImage=styled.img`
    width:600px;
    height:450px;
    flex:0.6;
    @media (max-width:600px)
    {
        width:100%;
        height:400px;
    }

`
const Box= styled.div`
    flex:0.4;
    border:none;
    width:600px;
    height:300px;
    margin-left: -150px;
    margin-top: 150px;
    padding:50px;
    padding-bottom:0px;
    background-color: #fff;
    h2{
        font-size:50px;
        font-family: 'Josefin Sans', sans-serif;
        text-transform:uppercase;
        letter-spacing:2px;
        color:hsl(0, 0%, 41%);
        margin-bottom:10px;
        font-weight:600;
        margin-top:10px;
    }
    p{
        font-size:15px;
        font-weight:400;
        color:#000;
        text-overflow:wrap;
    }
    @media  (max-width:768px)
    {
        margin-left:0px;
        margin-top:0px;
        width:100%;
        padding:10px;
        h2{
            font-size:30px;
            margin-top: 20px;
            text-align: center;
        }
        p{
            text-align:center;
            padding-left:10px;
            padding-right:10px;
        }
    }

`
