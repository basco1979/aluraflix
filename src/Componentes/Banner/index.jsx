import { styled } from "styled-components";

const Banner = styled.div`
    background-image: url(${props => props.$background});
    background-image: linear-gradient(0deg, #191919 0%, rgba(0,0,0,0) 100%),
    url(${props => props.$background});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

export default Banner;