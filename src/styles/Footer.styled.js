import styled from 'styled-components';

export const ContactForm = styled.form`
width: 40%;
@media (max-width: ${({ theme })=> theme.breakpoints.mobile}) {
    width: 90%;
    margin:auto;
}
`
export const FormLabel = styled.p`
color : ${({theme}) => theme.colors.paraTextColor };
padding-bottom: 10px;
`
export const FormInput = styled.input`
width: 100%;
background-color: ${({theme}) => theme.colors.primaryLight };
border: 1px solid ${({theme}) => theme.colors.paraTextColor };
color : ${({theme}) => theme.colors.paraTextColor };
border-radius:5px;
padding: 15px;
outline: none;
&::placeholder
{
    color : ${({theme}) => theme.colors.paraTextColor };
}
`