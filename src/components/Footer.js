import React from 'react'
import { motion } from 'framer-motion';
import { PaddingContainer, FlexContainer, Heading, BlueText, Button, SectionHeading } from '../styles/Global.styled'
import { ContactForm, FormLabel, FormInput } from '../styles/Footer.styled'
import { fadeInDownVariant, fadeInUpVariant } from '../utlis/Variants';

const Footer = () => {
  return (
    <PaddingContainer id="Contact" top="10%" bottom="10%">
        <SectionHeading as={motion.div} variants={fadeInDownVariant} initial="hidden" whileInView="visible">
            <Heading as="h1" size="h1" align="center"><BlueText>MY</BlueText> CONTACT</Heading>
            <Heading as="h2" size="h2" align="center" top="0.5rem">Contact <BlueText>Me Here</BlueText></Heading>
        </SectionHeading>
        <PaddingContainer top="3rem" as={motion.div} variants={fadeInUpVariant} initial="hidden" whileInView="visible">
            <FlexContainer justify="center">
                <ContactForm>
                    <PaddingContainer bottom="2rem">
                        <FormLabel>Name: </FormLabel>
                        <FormInput type="text" placeholder="Enter your name" />
                    </PaddingContainer>
                    <PaddingContainer bottom="2rem">
                        <FormLabel>Email: </FormLabel>
                        <FormInput type="text" placeholder="Enter your email" />
                    </PaddingContainer>
                    <PaddingContainer bottom="2rem">
                        <FormLabel>Message: </FormLabel>
                        <FormInput as="textarea" placeholder="Enter your message" />
                    </PaddingContainer>
                    <FlexContainer justify="center" responsiveFlex>
                        <Button>Send Message</Button>
                    </FlexContainer>
                </ContactForm>
            </FlexContainer>
        </PaddingContainer>
    </PaddingContainer>
  )
}

export default Footer;
