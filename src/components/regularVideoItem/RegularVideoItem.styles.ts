import styled, { css } from "styled-components";

export const StyledRegularVideoItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .7rem;

    &:hover {
        cursor: pointer; 
    }
`;

export const RegularVideoThumnail = styled.div<{ $isMenuSmall?: boolean }>`
    width: 100%;
    height: 12.2rem;
    border-radius: .8rem;
    position: relative;
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
        border-radius: inherit;
        object-fit: cover;
    }

    ${({ $isMenuSmall }) => $isMenuSmall && css`
        height: 13.7rem;
    `}
`;

export const Time = styled.div`
    background-color: ${({ theme }) => theme.background};
    width: max-content;
    padding: .15rem .25rem;
    border-radius: .3rem;
    position: absolute;
    bottom: .3rem;
    right: .3rem;

    p{
        font-size: 13px;
    }
`;

export const RegularVideoContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 2.3rem 1fr;
    gap: .7rem;
`;

export const RegularVideoPic = styled.div`
    width: 2.3rem;
    height: 2.3rem;
    border-radius: 1000rem;
    
    img{
        width: 100%;
        height: 100%;
        border-radius: inherit;
        object-fit: cover;
    } 
`;


export const RegularVideoTitleSubtitle = styled.div`
     margin-top: .2rem;

     .videoItemTitle{
        font-size: 16px;
        font-weight: 600;
     };
`;