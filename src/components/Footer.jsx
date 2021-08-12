import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper>
            <Top>
                <Heading className="title">
                    loopstudios
                </Heading>
            
            <Middle>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Supports</a></li>
                </ul>
            </Middle>
            <Right>
                <ul>
                <li><a href="#"><img src="./images/icon-facebook.svg" alt="icon" /></a></li>
                <li><a href="#"><img src="./images/icon-twitter.svg" alt="icon" /></a></li>
                <li><a href="#"><img src="./images/icon-pinterest.svg" alt="icon" /></a></li>
                <li><a href="#"><img src="./images/icon-instagram.svg" alt="icon" /></a></li>
                </ul>
            </Right>
            </Top>
            <Bottom>
                <MenuItem>
                    <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Supports</a></li>
                    </ul>
                </MenuItem>
                <p>
                    &copy; 2021 Loopstudios. All rights reserved.
                </p>
            </Bottom>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.div`
    left:0;
    bottom:0;
    background-color: #000;
    padding-top:30px;
    padding-bottom:30px;
    height:fit-content;
    padding-left:100px;
    padding-right:100px;
    @media (max-width:600px)
    {
        padding-left:15px;
        padding-right:15px;
    }

`
const Top= styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;    
    margin-bottom:10px;
    @media (max-width:768px)
    {
        justify-content:center;
        flex-direction:column;
    }
    
`
const Middle= styled.div`
    ul{
        padding-left:0px;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    li a{
        margin-right:24px;
        font-size:15px;
        color:whitesmoke;
        display:flex;
        justify-content:center;
        align-item:center;
    }
    display:none;
    @media  (min-width: 314px) and (max-width:768px)
    {
        display:block;
    }

`

const Heading =styled.h2`
    font-size:24px;
    margin-left:0;
    cursor:pointer;
    @media (max-width:768px)
    {
        text-align:center;
    }

`

const Right= styled.div`
    ul{
        display:flex;
        align-items:center;
        justify-content:space-around;

    }
    li{
        margin-left:20px;
        margin-bottom:5px;
    }
    @media  (max-width:768px)
    {
        ul{
            padding-left:0;
        }
        li:nth-child(1){
            margin-left:0;
        }
    }
   
`

const Bottom = styled.div`
    
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-top:10px;
    padding-bottom:20px;
    p{
        color:gray;
        font-size:15px;
        cursor:pointer;

    }
    @media  (max-width:768px)
    {
        justify-content:center;
    }
`

const MenuItem =styled.div`  
    ul{
        padding-left:0px;
    }
    li a{
        margin-right:24px;
        font-size:15px;
        color:whitesmoke;
    }
    @media  (max-width:768px)
    {
        display:none;
    } 
`