import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '../images/icon-hamburger.svg'
import CloseIcon from '@material-ui/icons/Close'



const Header = () => {
    const [open,setOpen]= useState(false)

    return (
        <Container>
            <a className="title" href="#">
                loopstudios
            </a>
            <RightMenu>
                <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Supports</a></li>
                </ul>

                <CustomIcon src={MenuIcon} className="close" onClick={()=>{setOpen(true)}}/>
            </RightMenu>
            <BurgerNav show={open}>
                <TopBurger>
                <a className="title" href="#">
                loopstudios
                </a>
                <CloseWrapper>
                    <CustomClose onClick={()=>{setOpen(false)}} />
                </CloseWrapper>
                </TopBurger>
                <InsideBurger>
                <ul style={{flexDirection:'column' ,paddingLeft:'10px'}}>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Supports</a></li>
                </ul>
                </InsideBurger>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height:70px;
    padding:30px 100px;
    position:fixed;
    z-index:100;
    display:flex;
    top:0;
    left:0;
    right:0;
    align-items:center;
    justify-content:space-between;
    color:hsl(0,0,100%);
    z-index:1;
    @media (max-width:768px)
    {
        padding-left:15px;
        padding-right:15px;
    }
`
const TopBurger = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-right:20px;
    padding-left:20px;
    width:100%;
    box-sizing:border-box;
    max-width:100%;
    padding-top:30px;
`
const RightMenu= styled.div`
    display:flex;
    align-items:center;
    a{
    font-weight:300;
    font-size:15px;
    color:#ffff;
    margin-right:10px;
    padding:10px;
    @media (max-width:768px)
    {
        display:none;
    }
    }   

`
const CustomIcon= styled.img`
    cursor:pointer;
    @media (min-width:768px)
    {
        display:none;
    }
`

const InsideBurger =styled.div`
    width:100%;
    height:90%;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    padding-left:20px;
    flex-direction:column;
    li{
        padding:10px 0;
        font-size:24px;
        text-transform:uppercase;
    }
    a{
        font-weight:600;
        color:#fff;
    }
`
const BurgerNav =styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;
    background:#000;
    z-index:101;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
`
const CustomClose = styled(CloseIcon)`
    cursor:pointer;
    color:#fff !important;
`
const CloseWrapper= styled.div`
    display:flex;
    justify-content:flex-end;
`
