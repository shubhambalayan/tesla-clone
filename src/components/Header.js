import React, { useState } from 'react'
import styled from 'styled-components'

const logo = <svg class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z" fill="var(--tds-icon--fill, #171a20)"></path></svg>

const closeIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>

function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <div>
                <a href="/">
                    <Logo>{logo}</Logo>
                </a>
            </div>
            <Menu>
                <p><a href="/">Model S</a></p>
                <p><a href="/">Model 3</a></p>
                <p><a href="/">Model X</a></p>
                <p><a href="/">Model Y</a></p>
                <p><a href="/">Solar Roof</a></p>
                <p><a href="/">Solar Panels</a></p>
            </Menu>
            <MenuRight>
                <p className="hide-on-mobile"><a href="/">Shop</a></p>
                <p className="hide-on-mobile"><a href="/">Account</a></p>
                <p onClick={()=> setBurgerStatus(true)}><span className="cursor-pointer">Menu</span></p>
            </MenuRight>
            <BurgerNavMenu show={burgerStatus}>
                <span className="closeIcon" onClick={()=> setBurgerStatus(false)}>{closeIcon}</span>
                <li><a href="/">Existing Inventory</a></li>
                <li><a href="/">Used Inventory</a></li>
                <li><a href="/">Trade-In</a></li>
                <li><a href="/">Test Drive</a></li>
                <li><a href="/">Cybertruck</a></li>
                <li><a href="/">Roadster</a></li>
                <li><a href="/">Semi</a></li>
                <li><a href="/">Charging</a></li>
                <li><a href="/">Powerwall</a></li>
                <li><a href="/">Commercial Energy</a></li>
                <li><a href="/">Utilities</a></li>
                <li><a href="/">Find Us</a></li>
                <li><a href="/">Support</a></li>
                <li><a href="/">Investor Relations</a></li>
            </BurgerNavMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    position: fixed;
    top: 0;
    min-height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
    z-index: 1
`

const Logo = styled.svg`
    width: 120px;
    height: 50px
`

const Menu = styled.div`
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        padding: 0 10px;
    }

    @media(max-width: 1080px) {
        display: none
    }
`

const MenuRight = styled.div`
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        padding: 0 10px;
    }

    .hide-on-mobile {
        @media(max-width: 768px) {
            display: none
        }
    }

`

const BurgerNavMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    padding: 20px 30px;
    width: 300px;
    z-index: 100;

    li {
        list-style: none;
        font-size: 15px;
        font-weight: 600;
        padding: 12px 10px 12px 20px;
        border-radius: 50px;
    }

    li:hover {
        transition: background-color 0.5s;
        background-color: rgba(0,0,0,0.05);
    }

    .closeIcon {
        width: 100%;
        display: flex;
        justify-content: end;
        margin-bottom: 40px;
        margin-top: 20px;
        cursor: pointer;
    }

    transform: ${props => props.show ? `translateX(0)`: `translateX(100%)`};
    transition: transform 0.3s;

`