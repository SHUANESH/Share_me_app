import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'



export const Nav = styled.nav`
    background:white;
    height:80px;
    display:flex;   
    justify-content:space-between;
    z-index: 10;
    border: 2px solid black;
 `

export const NavLink = styled(Link)`
    display: flex;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 15px;
    align-items: center;
    justify-content:space-around;


&.active{
    color: #256ce1;

}
`

export const Bars =  styled(FaBars)`
display: none;
color: #fff;

@media screen and (max-width:768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100 , 75%);
    font-size: 1.8rem;
    cursor: pointer;
}
`

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24;
justify-content: space-between;

    @media screen and (max-width:768px){
        display: none;        
    }
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
font-size: 18px;


@media screen and (max-width:768px){
    display: none;
}
`

export const NavBtnLink =styled(Link)`
border-radius: 4px;
background: #256ce1;
padding: 10px 22px;
color: #fff;
border:none ;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&.hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`




