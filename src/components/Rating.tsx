import styled, { css } from "styled-components";
type RatingValuePropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5;
};
function Rating(props: RatingValuePropsType) {
  if (props.value === 1) {
    return (
      <RatingBox>
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
      </RatingBox>
    );
  } else if (props.value === 2) {
    return (
      <RatingBox>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
      </RatingBox>
    );
  } else if (props.value === 3) {
    return (
      <RatingBox>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
      </RatingBox>
    );
  } else if (props.value === 4) {
    return (
      <RatingBox>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
      </RatingBox>
    );
  } else if (props.value === 5) {
    return (
      <RatingBox>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
      </RatingBox>
    );
  } else
    return (
      <RatingBox>
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
      </RatingBox>
    );
}
type StarPropsTitle = {
  selected: boolean;
};
function Star(props: StarPropsTitle) {
  if (props.selected === true) {
    return (
      <>
        <Button primary color={"red"}>★</Button>
      </>
    );
  } else {
    return (
      <>
        <Button outlined color="purple"></Button>
      </>
    );
  }
}

export function Title(props: any) {
  return (
    <>
      <p>{props.title}</p>
    </>
  );
}
export default Rating;

type ButtonStyledPropsType = {
  color?: string;
  outlined?: boolean;
  primary?: boolean;
};

const Button = styled.button<ButtonStyledPropsType>`
  background-color: ${(props) => props.color};
  width: 200px;
  height: 50px;
  &:hover {
    background-color: yellow;
  }

  ${(props) =>
    props.outlined &&
    css<ButtonStyledPropsType>`
      border: 4px solid #5bf005;
    `};
  ${(props) =>
    props.primary &&
    css<ButtonStyledPropsType>`
      border: 4px solid #00fcfc;
    `};
`;

const RatingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;



