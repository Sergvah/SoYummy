import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";

export const IngedientsItem = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 35px 19px 24px 0;
  border-bottom: 1px solid ${({ theme }) => `${theme.colors.underline}`};
  @media (min-width: 768px) {
    padding: 50px 45px 105px 0px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: flex-start; ;
`;

export const IngedientsImgThumb = styled.div`
  width: 60px;
  height: 60px;
  padding: 6px;
  margin-right: 10px;
  background-color: ${({ theme }) => `${theme.colors.backgroundAccent}`};
  border-radius: 6px;
  @media (min-width: 768px) {
    width: 93px;
    height: 97px;
    padding: 8px;
    margin-right: 16px;
  }
`;

export const Img = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const IngedientsTitle = styled.p`
  font-family: "Poppins";
  font-weight: ${({ theme }) => `${theme.fontWeights.medium}`};
  font-size: 10px;
  line-height: 1.2;
  color: ${({ theme }) => `${theme.colors.textSubTitle}`};
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const IngedientsMeasure = styled.span`
  margin-right: 46px;
  border-radius: 4px;
  padding: 4px;
  background-color: ${({ theme }) => `${theme.colors.accent}`};
  font-family: "Poppins";
  font-weight: ${({ theme }) => `${theme.fontWeights.semiBold}`};
  font-size: 10px;
  line-height: 1.5;
  color: ${({ theme }) => `${theme.colors.textWhite}`};
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
    padding: 4px 8px;
    margin-right: 110px;
  }
  @media (min-width: 1440px) {
    margin-right: 151px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 4;
  margin: 0;
`;

export const CloseIcon = styled(GrFormClose)`
  width: 18px;
  height: 18px;
  color: ${({ theme }) => `${theme.colors.textSubTitle}`};

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const ImgEmptyPageThumb = styled.div`
  width: 208px;
  height: 133px;
  margin: 0 auto;
  margin-bottom: 24px;
    @media (min-width: 768px) {
  width: 350px;
  height: 225px;
  margin-bottom: 44px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-family: "Poppins";
  font-weight: ${({ theme }) => `${theme.fontWeights.medium}`};
  font-size: 10px;
  line-height: 1.2;
  color: ${({ theme }) => `${theme.colors.textSubTitle}`};
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
  }
`;
