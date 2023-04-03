import styled from "styled-components";

export const Ul = styled.ul`
    display: flex;
    width: 600px;

    & > li {
        list-style: none;
        width: 200px;
    }

    & > li > a {
        cursor: pointer;
        text-decoration: none;
        color: #dda0dd;
        font-size: 18px;
        font-weight: bold;
    }
`;

