import styled from "styled-components";

export const CardSectionStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 40px;
  background-color: #ffffff;
  padding: 25px;
  min-height: 100vh;
`;

export const CardBox = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 22px 10px;
  border-radius: 15px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const CardImage = styled.img`
margin-bottom: 20px;
  width: 280px;
  height: 170px;
  border-radius: 10px;
`;
export const Text = styled.div`
  width: 260px;
`;
export const TextTitle = styled.h2`
margin-bottom: 20px;
  font-weight: 700;
  font-size: 16px;
`;

export const TextAbout = styled.p`
margin-bottom: 19px;
  font-weight: 500;
  font-size: 12px;
  line-height: 167%;
  color: #abb3ba;
`;

export const CardButton = styled.button`
  margin-right: 12px;
  background-color: #4e71fe;
  border-radius: 5px;
  width: 86px;
  height: 30px;
  font-weight: 700;
  font-size: 10px;
  line-height: 200%;
  color: #fff;
`;
