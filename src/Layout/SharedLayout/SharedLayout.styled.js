import styled from "styled-components";
import bgLeftSideM from "images/bg-common/bg-left-mob.png";
import bgRightSideM from "images/bg-common/bg-right-mob.png";
import bgLeftSideT from "images/bg-common/bg-left-tab.png";
import bgRightSideT from "images/bg-common/bg-right-tab.png";
import bgLeftSideD from "images/bg-common/bg-left-desk.png";
import bgRightSideD from "images/bg-common/bg-right-desk.png";

export const LayoutStyled = styled.div`
  background-image: url(${bgLeftSideM}), url(${bgRightSideM});
  background-repeat: no-repeat, no-repeat;
  background-position: left bottom 250px, bottom right;
  @media (min-width: 768px) {
    background-image: url(${bgLeftSideT}), url(${bgRightSideT});
    background-position: left bottom 150px, bottom right;
  }
  @media (min-width: 1440px) {
    background-image: url(${bgLeftSideD}), url(${bgRightSideD});
    background-position: left bottom 30px, bottom right;
  }
`;
