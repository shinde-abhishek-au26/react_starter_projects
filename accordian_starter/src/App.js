import Accordian from './components/Accordian';
import './styles.css';
import faqs from './data';

function App() {
  return (
    <div className="App">
      <Accordian data={faqs} />
    </div>
  );
}

export default App;
