import styled from "styled-components";

export const StyledMenu = styled.div`
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        display: none;
    }
    
    scrollbar-width: none;
    -ms-overflow-style: none;

    .title{
        font-size: 16px;
        margin: 0 0 .5rem 1.7rem;
        font-weight: bold;
    }
`;

export const LargeMenuSection = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.divider};
    padding: .7rem 0;

    &.text{
        padding: 1.1rem 0 1.1rem 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;

export const MenuItem = styled.div<{ active: boolean }>`
    display: flex;
    color: ${({ theme }) => theme.text};
    border-radius: 0.5rem;
    background-color: ${({ active, theme }) => active ? theme.grey2 : null};

    &.small{
        font-size: 26px;
        flex-direction: column;
        align-items: center;
        gap: 0.3rem;
        padding: 1rem 0;

        p{
            font-size: 10px;
        }
    }

    &.large{
        padding-left: 0.8rem;
        height: 2.5rem;
        margin-left: 0.75rem;
        align-items: center;
        font-size: 23px;
        gap: 1.3rem;
    }

    &:hover{
        background-color: ${({ theme }) => theme.grey2};
        cursor: pointer;
    }
`;