import React, { useState } from "react";
import CallbackTutorial from "./hooks/CallbackTutorial";
import ContextTutorial from "./hooks/ContextTutorial";
import EffectTutorial from "./hooks/EffectTutorial";
import ImperativeHandle from "./hooks/ImperativeHandle";
import LayoutEffectTutorial from "./hooks/LayoutEffect";
import MemoTutorial from "./hooks/MemoTutorial";

import ReducerTutorial from "./hooks/ReducerTutorial";
import RefTutorial from "./hooks/RefTutorial";
import StateTutorial from "./hooks/StateTutorial";

const tutorials = [
  { key: 0, tutorial: <StateTutorial /> },
  { key: 1, tutorial: <ReducerTutorial /> },
  { key: 2, tutorial: <EffectTutorial /> },
  { key: 3, tutorial: <RefTutorial /> },
  { key: 4, tutorial: <LayoutEffectTutorial /> },
  { key: 5, tutorial: <ImperativeHandle /> },
  { key: 6, tutorial: <ContextTutorial /> },
  { key: 7, tutorial: <MemoTutorial /> },
  { key: 8, tutorial: <CallbackTutorial /> }
];

function App() {
  const [selectedTutorial, setSelectedTutorial] = useState(() => tutorials[0]);

  return (
    <div className="App">
      <div className="tutorials-selector">
        <button onClick={() => setSelectedTutorial(tutorials[0])}>State</button>
        <button onClick={() => setSelectedTutorial(tutorials[1])}>Reducer</button>
        <button onClick={() => setSelectedTutorial(tutorials[2])}>Effect</button>
        <button onClick={() => setSelectedTutorial(tutorials[3])}>Ref</button>
        <button onClick={() => setSelectedTutorial(tutorials[4])}>LayoutEffect</button>
        <button onClick={() => setSelectedTutorial(tutorials[5])}>ImperativeHandle</button>
        <button onClick={() => setSelectedTutorial(tutorials[6])}>Context</button>
        <button onClick={() => setSelectedTutorial(tutorials[7])}>Memo</button>
        <button onClick={() => setSelectedTutorial(tutorials[8])}>Callback</button>
      </div>
      {selectedTutorial.tutorial}
    </div>
  );
}

export default App;
