import './App.css'
import { Accordion } from './components/Accordion';
import Rating, { Title } from './components/Rating';

function App() {

  return (
    <>
        <Title title={"RATING 1"} />
        <div><Rating value={2} /></div>
        <Title title={"RATING 2"} />
        <div><Rating value={5} /></div>
        <Title title={"RATING 1"} />
        <div><Rating value={2} /></div>
        <Title title={"RATING 2"} />
        <div><Rating value={1} /></div>
        <Title title={"RATING 1"} />
        <div><Rating value={2} /></div>
        <Title title={"RATING 2"} />
        <div><Rating value={3} /></div>
        <Title title={"RATING 1"} />
        <div><Rating value={1} /></div>
        <Title title={"RATING 2"} />
        <div><Rating value={4} /></div>
        <Accordion />
    </>
  );
}

export default App
