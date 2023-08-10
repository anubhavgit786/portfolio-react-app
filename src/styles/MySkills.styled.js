import styled from 'styled-components';

export const SkillsCardContainer = styled.div`

padding: 0 5%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap: 40px

`
export const SkillsCard = styled.div`
width: 120px;
height: 120px;
padding: 1.5rem 0;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${({theme}) => theme.colors.primaryLight };
background-image: linear-gradient(315deg, ${({theme}) => theme.colors.primaryLight } 0%, #30336b 74%);
cursor: pointer;
box-shadow: ${({ theme })=> theme.boxShadow.hOffset } ${({ theme })=> theme.boxShadow.vOffset } ${({ theme })=> theme.boxShadow.blur } ${({ theme })=> theme.boxShadow.spread } ${({ theme })=> theme.colors.shadow };
`