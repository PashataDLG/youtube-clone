import styled from "styled-components";

export const StyledVideoShorts = styled.div`
    width: 100%;
    margin-top: 2rem;
`;

export const VideoShortsHeading = styled.div`
    display: flex;
    align-items: center;

    p{
        font-size: 22px;
        margin-left: .5rem;
        font-weight: bold;
    }
`;

export const MoreLessContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-top: 1px solid ${({ theme }) => theme.divider};
    margin-top: 2.5rem;
    margin-bottom: .5rem;
`;

export const MoreLessButton = styled.button`
    border: 1px solid ${({ theme }) => theme.divider};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    padding: .5rem 0rem;
    width: 23.5rem;
    background-color: ${({ theme }) => theme.background};
    border-radius: 100rem;
    transform: translateY(-50%);

    &:hover{
        background-color: ${({ theme }) => theme.grey2};
        cursor: pointer;
    };

    .icon{
        color: ${({ theme }) => theme.text};
    }
`;

export const ShortVideosContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
    margin-top: 1.5rem;
`;