import styled from 'styled-components';

export const ShowcaseParticleContainer = styled.div`
position: relative;
@media (max-width: ${({ theme })=> theme.breakpoints.mobile}) {
    display:none;
}
`

export const ShowcaseImageCard = styled.div`
width: max-content;
padding-top: 2rem;
border-radius: 1rem;
position: relative;
overflow: hidden;
`

export const ShowcaseImage = styled.img`
width:317px; 
height:338px; 
object-fit:contain;
`

export const Particle = styled.img`
position: absolute;
top: ${({top}) => top };
bottom: ${({bottom}) => bottom };
left: ${({left}) => left };
right: ${({right}) => right };
transform:rotate(${({rotate}) => rotate });
`

