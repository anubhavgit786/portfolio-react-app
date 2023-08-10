import React from 'react'
import { motion } from 'framer-motion';
import { PaddingContainer, Heading, BlueText, SectionHeading } from '../styles/Global.styled'
import { Projects } from '../utlis/Data'
import Project from './layouts/Project'
import { fadeInDownVariant } from '../utlis/Variants';

const MyProjects = () => {
  return (
    <PaddingContainer id="Projects" top="10%" bottom="5%" responsiveLeft="1rem" responsiveRight="1rem" responsiveTop="20%">
      <SectionHeading as={motion.div} variants={fadeInDownVariant} initial="hidden" whileInView="visible">
        <Heading as="h1" size="h1"><BlueText>My Personal</BlueText> Projects</Heading>
        <Heading as="h2" size="h2">What <BlueText>I have built</BlueText></Heading>
      </SectionHeading>

      { Projects.map((project)=> (
      <PaddingContainer key={project.id} top="5rem" bottom="5rem">
        <Project project={project}/>
      </PaddingContainer>))}
    </PaddingContainer>
  )
}

export default MyProjects;
