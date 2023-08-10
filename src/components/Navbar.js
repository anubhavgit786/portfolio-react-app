import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { PaddingContainer, FlexContainer, BlueText, Container } from '../styles/Global.styled'
import { NavbarContainer, Logo, MenuIcon } from '../styles/Navbar.styled';

import { GiHamburgerMenu }  from 'react-icons/gi'
import NavMenu from './layouts/NavMenu';

const Navbar = () => 
{
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = ()=> setOpenMenu(true);
  return (
    <NavbarContainer>
        <PaddingContainer top="1.2rem" bottom="1.2rem" responsiveLeft="1rem" responsiveRight="1rem">
            <Container>
                <FlexContainer justify="space-between" responsiveFlex>
                    <Logo><BlueText>Anubhav</BlueText> | Portfolio</Logo>
                    <MenuIcon onClick={handleOpenMenu} as={motion.a} whileHover={{scale: 1.5}}>
                        <GiHamburgerMenu/>
                    </MenuIcon>
                </FlexContainer>
            </Container>
            <AnimatePresence>
                { openMenu && <NavMenu setOpenMenu={setOpenMenu}/>}
            </AnimatePresence>
        </PaddingContainer>
    </NavbarContainer>
  )
}

export default Navbar;
