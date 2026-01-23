import {
  CardBox,
  CardsContainer,
  CardSectionStyles,
} from "./CardSectionStyles";

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
    <CardsContainer>
      <CardBox />
    </CardsContainer>
  );
}
