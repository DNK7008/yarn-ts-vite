import {
  CardBox,
  CardButton,
  CardImage,
  CardSectionStyles,
  Text,
  TextAbout,
  TextTitle,
} from "./CardSectionStyles";
import CardPicture1 from "../assets/card-picture-1.jpg";
import CardPicture2 from "../assets/react.svg";
import CardPicture3 from "../assets/js.jpg";
import CardPicture4 from "../assets/it.png";

export function Cards() {
  return (
    <>
      <CardSectionStyles>
        <Card cardPic={CardPicture1} />
        {/* <Card cardPic={CardPicture2} />
        <Card cardPic={CardPicture3} />
        <Card cardPic={CardPicture4} /> */}
      </CardSectionStyles>
    </>
  );
}

type CardPropsType = {
  title?: string;
  text?: string;
  cardPic?: string;
};
export function Card(props: CardPropsType) {
  return (
    <>
      <CardBox>
        <CardImage src={props.cardPic} alt="Picture" />
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
