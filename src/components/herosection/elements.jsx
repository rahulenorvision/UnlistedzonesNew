
import styled from "styled-components";
import  {
    MdKeyboardArrowRight as Arrowright,
    MdArrowForward as Arrowforward
} from 'react-icons/md';

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    alignItems: "center"
   
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    align-items: center;
 padding-right: 150;
 alignItems: "center"
`;
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
export const ArrowForward = styled(Arrowforward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(Arrowright)`
    margin-left: 8px;
    font-size: 20px;
`;