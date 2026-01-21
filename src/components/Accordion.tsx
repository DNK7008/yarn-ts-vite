export function Accordion() {
  return (
    <>
      <AccordionTitle title={"ACCORDION - 1"} />
      <AccordionBody />
      <AccordionTitle title={"ACCORDION - 2"} />
      <AccordionBody />
    </>
  );
}
type AccordionTitlePropsType = {
  title: string;
};
function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <>
      <p>{props.title}</p>
    </>
  );
}
function AccordionBody() {
  return (
    <>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </>
  );
}
