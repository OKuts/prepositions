import './App.css';
import {data} from './data'
import {useState} from "react";
import {roundData} from "./helpers/roundData";

function App() {
  const [verbs, setVerbs]  = useState(roundData(data));
  const [preposition, setPreposition] = useState('');
  const [isNext, setIsNext] = useState(false);
  const [btn, setBtn] = useState('Next');
  const [check, setCheck] = useState(true);

  const changeInput = (e) => {
    const currentPreposition = e.target.value;
    setPreposition(currentPreposition);
    if (currentPreposition.trim() === verbs[0][2]) {
      setIsNext(true);
    }
  }

  const nextVerb = () => {
    if (verbs.length === 1) {
      setBtn('End');
    } else {
      setVerbs([...verbs.slice(1)]);
      setIsNext(false);
      setPreposition('');
    }
  }

  return (
    <div className="app">
      <div className="wrap">
        <div className="verb">
          {verbs[0][0]}
          <input
            value={preposition}
            onChange={changeInput}
            type="text"/>
          <div className="btn">
            {isNext && <button onClick={() => nextVerb()}>{btn}</button>}
          </div>
        </div>
        <div className='translate'>
          translate
          <input
            onChange={() => setCheck(!check)}
            type="checkbox"
            checked={check}/>
          {check && <p>{verbs[0][1]}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
