import React from 'react'
import { motion } from 'framer-motion';
import { PaddingContainer, FlexContainer } from '../../styles/Global.styled'
import { NavMenuContainer, MenuIcon, MenuItem } from '../../styles/Navbar.styled';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLinks } from '../../utlis/Data';
import { slideInLeftVariant } from '../../utlis/Variants';

const NavMenu = ({setOpenMenu}) => 
{
    const handleOpenMenu = ()=> setOpenMenu(false);
  return (
    <NavMenuContainer  as={motion.div} variants={slideInLeftVariant} initial="hidden" animate="visible" exit="exit">
        <PaddingContainer left="5%" right="5%" top="2rem">
            <FlexContainer justify="flex-end" responsiveFlex>
                <MenuIcon as={motion.a} whileHover={{scale: 1.5}}>
                    <AiOutlineClose onClick={handleOpenMenu}/>
                </MenuIcon>
            </FlexContainer>
        </PaddingContainer>
        <PaddingContainer top="8%">
            <FlexContainer direction="column" align="center" responsiveFlex>
                { NavLinks.map((link)=> (<MenuItem  as={motion.a} whileHover={{scale: 1.5}} key={link.id} href={link.href} onClick={handleOpenMenu}>{link.name}</MenuItem>))}
            </FlexContainer>
        </PaddingContainer>
    </NavMenuContainer>
  )
}

export default NavMenu
