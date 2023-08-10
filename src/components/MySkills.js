import React from 'react'
import { motion } from 'framer-motion';
import { PaddingContainer, FlexContainer, Heading, ParaText, BlueText, IconContainer, SectionHeading } from '../styles/Global.styled'
import { SkillsCardContainer, SkillsCard } from '../styles/MySkills.styled'
import { Skills } from '../utlis/Data'

import { fadeInLeftVariant, fadeInDownVariant } from '../utlis/Variants';


const MySkills = () => {
  return (
    <PaddingContainer id="Skills" top="10%" bottom="10%" responsiveLeft="1rem" responsiveRight="1rem" responsiveTop="20%">
        <SectionHeading as={motion.div} variants={fadeInDownVariant} initial="hidden" whileInView="visible">
            <Heading as="h1" size="h1"><BlueText>My</BlueText> Skills</Heading>
            <Heading as="h2" size="h2" top="0.5rem">What <BlueText>I can do</BlueText></Heading>
            <ParaText top="2rem" bottom="1.5rem">
                As a developer, I have wide range of experience in full-stack developemnet. My strong experience in building in responsive and dynamic user interfaces has allowed me to create engagging and interactive web applications.
            </ParaText>
        </SectionHeading>
        <FlexContainer  fullWidthChild responsiveFlex responsiveDirection="column">
            <SkillsCardContainer as={motion.div} variants={fadeInLeftVariant} initial="hidden" whileInView="visible">
                { Skills.map((skill)=>(
               <div className="flip-box" key={skill.id}>
               <div className="flip-box-inner">
                 <div className="flip-box-front">
                   <SkillsCard>
                     <IconContainer size="2rem" color='blue'>{skill.icon}</IconContainer>
                     <Heading as="h4" size="h4" align="center">{skill.tech}</Heading>
                 </SkillsCard>
                 </div>
                 <div className="flip-box-back">
                   <SkillsCard>
                     <IconContainer size="2rem" color='blue'>{skill.icon}</IconContainer>
                     <Heading as="h4" size="h4" align="center">{skill.tech}</Heading>
                 </SkillsCard>
                 </div>
               </div>
             </div>) )}
            </SkillsCardContainer>
        </FlexContainer>
    </PaddingContainer>
  )
}

export default MySkills
