import styled from "styled-components";

export const StyledSettings = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.settingsBg};
    position: absolute;
    right: 85%;
    top: 100%;
    width: 17.3vw;
    padding: 0.5rem 0;
    border-radius: 0.5rem;
    box-shadow: 0px 10px 43px -3px ${({ theme }) => theme.settingsShadow};
    z-index: 1000000;
`;