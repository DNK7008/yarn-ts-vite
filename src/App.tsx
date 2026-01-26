import './App.css'
import { Accordion } from './components/Accordion';
import { Cards } from './components/Cards';
import Rating, { Title } from './components/Rating';

function App() {

  return (
    <>
      <Cards />
      <Title title={"RATING 1"} />
      <div>
        <Rating value={2} />
      </div>
      <Title title={"RATING 2"} />
      <div>
        <Rating value={5} />
      </div>
      <Title title={"RATING 1"} />
      <div>
        <Rating value={2} />
      </div>
      <Title title={"RATING 2"} />
      <div>
        <Rating value={1} />
      </div>
      <Title title={"RATING 1"} />
      <div>
        <Rating value={2} />
      </div>
      <Title title={"RATING 2"} />
      <div>
        <Rating value={3} />
      </div>
      <Title title={"RATING 1"} />
      <div>
        <Rating value={1} />
      </div>
      <Title title={"RATING 2"} />
      <div>
        <Rating value={4} />
      </div>
      <Accordion />
    </>
  );
}

export default App
