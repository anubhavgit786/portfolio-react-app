import React from 'react'
import { motion } from 'framer-motion';
import { PaddingContainer, FlexContainer, Heading, ParaText, BlueText, IconContainer, ContentResponsive } from '../styles/Global.styled'
import { ShowcaseParticleContainer, ShowcaseImageCard, ShowcaseImage } from '../styles/Showcase.styled';
import { BsLinkedin, BsTwitter, BsYoutube, BsInstagram } from 'react-icons/bs';
import ShowCaseImg from '../assets/showcase-img.png';

import { fadeInLeftVariant, fadeInRightVariant } from '../utlis/Variants';

const Showcase = () => {
  return (
    <PaddingContainer id="Home" left="3%" right="10%" top="20%" bottom="10%" responsiveLeft="1rem" responsiveRight="1rem" responsiveTop="10rem">
        <FlexContainer  fullWidthChild>
            <ContentResponsive as={motion.div} variants={fadeInLeftVariant} initial="hidden" whileInView="visible">
                <Heading as="h4" size="h4">Hello!</Heading>
                <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">I'm <BlueText>Anubhav Gupta</BlueText></Heading>
                <Heading as="h3" size="h3">I'm a <BlueText>Fullstack Developer</BlueText></Heading>
                <ParaText as="p" top="2rem" bottom="4rem">
                    Hello, my name is Anubhav Gupta and I'm a frontend developer with 1 year of experience in creating user friendly web applications
                </ParaText>
                <FlexContainer gap="20px" responsiveFlex>
                    <IconContainer color='blue' size='1.5rem'><BsLinkedin/> </IconContainer>
                    <IconContainer color='blue' size='1.5rem'><BsTwitter/> </IconContainer>
                    <IconContainer color='blue' size='1.5rem'><BsYoutube/> </IconContainer>
                    <IconContainer color='blue' size='1.5rem'><BsInstagram/> </IconContainer>
                </FlexContainer>
            </ContentResponsive>
            <FlexContainer as={motion.div} justify="flex-end"  variants={fadeInRightVariant} initial="hidden" whileInView="visible">
                <ShowcaseParticleContainer>
                    <ShowcaseImageCard>
                        <ShowcaseImage src={ShowCaseImg} alt='showcase'/> 
                    </ShowcaseImageCard>
                </ShowcaseParticleContainer>
            </FlexContainer>
        </FlexContainer>
    </PaddingContainer>
  )
}

export default Showcase
