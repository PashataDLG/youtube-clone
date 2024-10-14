import styled from "styled-components";

export const Text = styled.p`
color: ${({ theme }) => theme.text};
font-size: 14px;

&.logo{
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -1px;
    font-family: "Oswald", sans-serif;
} 
`;