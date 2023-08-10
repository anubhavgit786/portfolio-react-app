import styled from 'styled-components';

export const MainBody = styled.div`background-color: ${(props)=> props.theme.colors.primary};`

export const Container = styled.div`
width: 90%;
max-width: 1280px;
margin: auto;
`

export const PaddingContainer = styled.div`
padding-top: ${({top}) => top };
padding-bottom: ${({bottom}) => bottom };
padding-left: ${({left}) => left };
padding-right: ${({right}) => right };

@media (max-width: ${({ theme })=> theme.breakpoints.mobile}) {
    padding-top: ${({ responsiveTop }) => responsiveTop };
    padding-bottom: ${({ responsiveBottom }) => responsiveBottom };
    padding-left: ${({ responsiveLeft }) => responsiveLeft };
    padding-right: ${({ responsiveRight }) => responsiveRight };
}
`

export const FlexContainer = styled.div`
display: flex;
justify-content : ${({justify}) => justify };
align-items : ${({align}) => align };
gap : ${({ gap}) => gap };
flex-direction : ${({direction}) => direction };

& > div {
    flex: ${({fullWidthChild}) => fullWidthChild && 1};
}

@media (max-width: ${({ theme })=> theme.breakpoints.mobile}) {

    display: ${({ responsiveFlex }) => responsiveFlex ? 'flex' : 'block' };
    flex-direction: ${({ responsiveDirection }) => responsiveDirection };
}

`

export const Heading = styled(PaddingContainer)`
color: ${(props)=> props.theme.colors.white};
text-align: ${({ align })=> align};
font-size: ${({size})=> {
    switch(size) {
        case 'h1':
            return '4.5rem';
        case 'h2':
            return '3rem';
        case 'h3':
            return '2rem';
        case 'h4':
            return '1.2rem';
        default:
            return;
    }
}};

@media (max-width: ${({ theme })=> theme.breakpoints.mobile}) {
    
    font-size: ${({size})=> {
        switch(size) {
            case 'h1':
                return '2.5rem';
            case 'h2':
                return '2rem';
            case 'h3':
                return '1.5rem';
            case 'h4':
                return '1rem';
            default:
                return;
        }
    }};
}

`

export const BlueText = styled.span`
color: ${(props)=> props.theme.colors.secondary};
`

export const ParaText = styled(PaddingContainer)`
color: ${(props)=> props.theme.colors.paraTextColor};
line-height: 2rem;
`

export const IconContainer = styled.div`
font-size: ${({size}) => size };
cursor: pointer;
color: ${({theme, color}) => { 
    switch(color)
    {
        case 'white':
            return theme.colors.white;
        
        case 'blue':
            return theme.colors.secondary;
        
        default:
            return;
    } 
}}
` 

export const SectionHeading = styled.div`
text-align: center;
margin-bottom:30px;
`
export const Button = styled.a`
display: inline-block;
width: max-content;
padding: 1rem 2rem;
color: ${(props)=> props.theme.colors.white};
background-color: ${(props)=> props.theme.colors.primaryLight};
border: 1px solid ${(props)=> props.theme.colors.gray};
border-radius: 5px;
cursor: pointer;
text-decoration: none;
transition: all 0.3s ease;

&:hover
{
    color: ${(props)=> props.theme.colors.primaryLight};
    background-color: ${(props)=> props.theme.colors.white};
}
`

export const ContentResponsive = styled.div`
@media (max-width: ${({ theme })=> theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`