import styled from "styled-components";

export const Section = styled.section`
    padding-top: ${(p) => p.theme.space[1] * 28.5}px;
    padding-bottom: ${(p) => p.theme.space[1] * 25}px;

    @media (min-width: 768px) {
        padding-top: ${(p) => p.theme.space[1] * 34}px;
        padding-bottom: ${(p) => p.theme.space[1] * 50}px;
    }

    @media (min-width: 1440px) {
        padding-top: ${(p) => p.theme.space[1] * 41}px;
    }
`;

export const WrapperTitle = styled.div`
    margin-bottom: ${(p) => p.theme.space[1] * 15}px;

    @media (min-width: 1440px) {
        margin-bottom: ${(p) => p.theme.space[1] * 27.5}px;
    }
`;

export const Error = styled.div`
    margin: 0 auto;
    text-align: center;
    font-weight: ${(p) => p.theme.fontWeights.medium};
    font-size: ${(p) => p.theme.fontSizes.l}px;
    line-height: ${(p) => p.theme.lineHeights.heading};
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.errorMsg};

    width: 206px;

    @media (min-width: 768px) {
        width: 428px;
    }
`;
