import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

function Hello() {
  const [restList, setRestList] = useState<any>();

  useEffect(() => {
    fetch('https://my-first-firestore-bc.web.app/restaurants')
      .then((resp) => resp.json())
      .then(setRestList)
      .catch(alert)
  }, []);

  return (
    <div>
      <div className="Hello">
        <h1>Electron Restaurant List</h1>
      </div>
      <div className="Hello">
        {! restList ? <h2>Loading</h2> :restList[0].name}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
