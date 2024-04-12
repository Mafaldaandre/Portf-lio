import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Background = styled.div`
  position: relative;
  z-index: 1;
  padding: 50px 100px;
`;

export const Title = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 3.5rem;
  color: #d4b9d9;
  letter-spacing: 2px;
`;

export const SubTitle = styled.h2`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 3rem;
  color: #d4b9d9;
  letter-spacing: 2px;
  line-height: 2;
  text-align: center;
`;

export const Name = styled.span`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-style: italic;
  font-size: 3rem;
  color: #ffa6a7;
  letter-spacing: 2px;
`;

export const TitleProjects = styled.h2`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 3rem;
  color: #d4b9d9;
  letter-spacing: 2px;
  text-align: center;
`;

export const Image = styled.img`
  margin: 20px;
  border-radius: 35px;
  border-top: 2px solid #d4b9d9;
  border-right: 2px solid #ffa6a7;
  border-bottom: 2px solid #ffa6a7;
  border-left: 2px solid #d4b9d9;
  box-shadow: 5px 5px 11px 0px rgba(147, 17, 105, 0.34);
`;
