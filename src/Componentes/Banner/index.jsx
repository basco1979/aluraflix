import { styled } from "styled-components";

const Banner = styled.div`
    background-image: url(${props => props.$background});
    background-size: 100%;
    min-height: 100vh;
    margin-bottom: 2em;
`

export default Banner;