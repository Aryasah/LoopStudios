import React from 'react'
import styled from 'styled-components'
import earth from '../images/desktop/image-deep-earth.jpg'

const Grid = () => {
    return (
        <Wrapper>
            <Top>
                <Left>
                    <h2>OUR CREATIONS</h2>
                </Left>
                <Right>
                    <button className="btn">See All</button>
                </Right>
            </Top>
            <GridContainer>
                <GridItem>
                    <h2>
                        Deep Earth
                    </h2>
                </GridItem>
                <GridItem>
                    <h2>
                        Night Arcade
                    </h2>
                </GridItem>
                <GridItem>
                    <h2>
                        Soccer Team Vr
                    </h2>
                </GridItem>
                <GridItem>
                    <h2>
                        The Grid
                    </h2>
                </GridItem>
                <GridItem>
                    <h2>
                        From up above Vr
                    </h2>
                </GridItem>
                <GridItem>
                    <h2>
                        Pocket Borealis
                    </h2>
                </GridItem>
                <GridItem>
                    <h2>
                        The Curiosity 
                    </h2>
                </GridItem>
                <GridItem>
                    <h2>
                        Make it fisheye
                    </h2>
                </GridItem>
            </GridContainer>
            <ButtonRight>
                    <button className="btn">See All</button>
            </ButtonRight>
        </Wrapper>
    )
}

export default Grid

const Wrapper =styled.div`
    padding:30px 100px;
    left:0;
    right:0;
    @media (max-width: 768px) {
        padding:30px 30px;
    }
`
const Top = styled.div`
    padding:10px 0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    h2{
        font-size:50px;
        font-family: 'Josefin Sans', sans-serif;
        text-transform:uppercase;
        letter-spacing:2px;
        color:hsl(0, 0%, 41%);
        font-weight:600;
        margin:0;
    }
    @media (max-width: 768px) {
        justify-content:center;
        h2{font-size:30px;}
    }
`

const Left =styled.div`
    
`

const ButtonRight =styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    button{
        font-size:18px;
        border-radius:5px;
        border:1px solid hsl(0, 0%, 41%);
        background-color:#fff;
        padding:10px 20px;
        cursor:pointer;
    }
    display:none;
    
    @media (min-width:314px) and (max-width:768px)
    {
        display:block;
        text-align:center;
        margin-top:20px;
    }
    button:hover{
        background-color:#000;
        color:#fff;
        border-color:#whitesmoke;
        font-weight:400;
    }
`
const Right =styled.div`
    button{
        font-size:18px;
        border-radius:5px;
        border:1px solid hsl(0, 0%, 41%);
        background-color:#fff;
        padding:10px 20px;
        cursor:pointer;
    }
    
    @media  (max-width:768px)
    {
        display:none;
    }
    button:hover{
        background-color:#000;
        color:#fff;
        border-color:#whitesmoke;
        font-weight:400;
    }
`


const GridItem = styled.div`
    box-sizing: border-box;
    height:420px;
    display:flex;
    justify-content: flex-start;
    align-items: flex-end;
    cursor:pointer;
    h2{
        font-size:40px;
        font-family: 'Josefin Sans', sans-serif;
        text-transform:uppercase;
        letter-spacing:2px;
        color:lightgray;
        font-weight:600;
        margin-bottom:20px;
        margin-left:20px;
    }
    &:hover{
        background-color:lightgray;
        opacity:0.5;
        z-index:100;
        h2{
            color:#000;
            font-weight:700;
        }
    }
    @media (max-width:600px)
    {
        height:200px;
        margin:10px 0px;
        h2{
            font-size:20px;
        }
    }
`
const GridContainer = styled.div`
    margin-top:20px;
    display:grid;
    grid-template-columns:25% 25% 25% 25%;
    gap:30px;
    left:0;
    right:0;
    padding-right:100px;

    ${GridItem}:nth-child(1){
        background-image:url("../images/desktop/image-deep-earth.jpg");
        background-position:center;
        background-repeat:no-repeat;
        background-size:cover;
    }
    ${GridItem}:nth-child(2){
        background-image:url("../images/desktop/image-night-arcade.jpg");
        background-position:center;
        background-repeat:no-repeat;
        background-size:cover;
    }
    ${GridItem}:nth-child(3){
        background-image:url("../images/desktop/image-soccer-team.jpg");
        background-position:center;
        background-repeat:no-repeat;
        background-size:cover;
    }
    ${GridItem}:nth-child(4){
        background-image:url("../images/desktop/image-grid.jpg");
        background-position:center;
        background-repeat:no-repeat;
        background-size:cover;
    }
    ${GridItem}:nth-child(5){
        background-image:url("../images/desktop/image-from-above.jpg");
        background-position:center;
        background-repeat:no-repeat;
        background-size:cover;
    }
    ${GridItem}:nth-child(6){
        background-image:url("../images/desktop/image-pocket-borealis.jpg");
        background-position:center;
        background-repeat:no-repeat;
        background-size:cover;
    }
    ${GridItem}:nth-child(7){
        background-image:url("../images/desktop/image-curiosity.jpg");
        background-position:center;
        background-repeat:no-repeat;
        background-size:cover;
    }
    ${GridItem}:nth-child(8){
        background-image:url("../images/desktop/image-fisheye.jpg");
        background-position:center;
        background-repeat:no-repeat;
        background-size:cover;
    }

    @media (max-width:600px)
    {
        padding-right:0;
        grid-template-columns:100%;
        gap:10px;
    }
`