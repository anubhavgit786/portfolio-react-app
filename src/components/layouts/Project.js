import React from 'react'
import { motion } from 'framer-motion';
import { PaddingContainer, FlexContainer, Heading, ParaText, Button, IconContainer, ContentResponsive } from '../../styles/Global.styled';
import { TechStackCard, ProjectImageContainer, ProjectImage } from '../../styles/MyProject.styled';
import { ProjectIcon } from '../../utlis/Data';
import { fadeInLeftVariant, fadeInRightVariant } from '../../utlis/Variants';

const Project = ({ project }) => 
{
    const { name, desc, techStacks, img, url, reverse } = project;
  return (
    <FlexContainer fullWidthChild direction={ reverse ? 'row-reverse' : 'row' }>
        <ContentResponsive as={motion.div} variants={reverse ? fadeInRightVariant:  fadeInLeftVariant} initial="hidden" whileInView="visible">
            <FlexContainer align="center" gap="1rem">
                <Heading as="h3" size="h3" bottom="1rem">{name}</Heading>
                <IconContainer color='blue' size="2rem">
                    <img src={ProjectIcon} alt="project icon"/>
                </IconContainer>
            </FlexContainer>
            <PaddingContainer top="1rem">
                <FlexContainer gap="1rem">
                    { techStacks.map((tech, idx)=> (<TechStackCard key={idx}>{tech}</TechStackCard>)) }
                </FlexContainer>
            </PaddingContainer>
            <ParaText top="1.5rem" bottom="2rem">{desc}</ParaText>
            <Button href={url} target="_blank">Visit Website</Button>
        </ContentResponsive>
        <ProjectImageContainer  as={motion.div} variants={reverse ? fadeInLeftVariant:  fadeInRightVariant} initial="hidden" whileInView="visible" justify={ reverse ? 'flex-start' : 'flex-end' }>
            <ProjectImage src={img} alt={name} />
        </ProjectImageContainer>
      
    </FlexContainer>
  )
}

export default Project;
