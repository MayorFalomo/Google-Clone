import styled from "styled-components";

export const Nav = styled.div`
  nav {
    width: 95%;
  }
  nav ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;
    padding: 20px;
  }
  li {
    font-size: 23px;
  }
  a {
    color: black;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const ThumbImage = styled.div`
  background-color: #494f55;
  img {
    width: 50px;
    border-radius: 50%;
    background-color: #000;
  }
`;
