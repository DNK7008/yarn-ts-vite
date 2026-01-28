import {CardBox, CardButton, CardImage, CardSectionStyles, Text, TextAbout, TextTitle } from "./CardSectionStyles";
import myImage from "../assets/card-picture.jpg";

export function Cards() {
  return (
    <>
      <CardSectionStyles>
        <Card />
      </CardSectionStyles>
    </>
  );
}

// type CardPropsType = {
//   title: string;
//   text: string;
// };
export function Card() {
  return (
    <>
      <CardBox>
        <CardImage src={myImage} alt="Описание" />
        <Text>
          <TextTitle>Headline</TextTitle>
          <TextAbout>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
          </TextAbout>
          <CardButton btnType={"primary"}>See more</CardButton>
          <CardButton btnType={"outlined"}>Save</CardButton>
        </Text>
      </CardBox>
    </>
  );
}
