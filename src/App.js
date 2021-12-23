import StateTutorial from "./comnponents/useState/StateTutorial";
import ReducerTutorial from "./comnponents/useReducer/ReducerTutorial";
import EffectTutorial from "./comnponents/useEffect/EffectTutorial";
import RefTutorial from "./comnponents/useRef/RefTutorial";
import LayoutEffectTutorial from "./comnponents/useLayout/LayoutEffectTutorial";
import ImperativeHandle from "./comnponents/UseImperetiveHandle/ImperativeHandle";
import ContextTutorial from "./comnponents/useContext/ContextTutorial";
import MemoTutorial from "./comnponents/useMemo/MemoTutorial";
import CallBackTutorial from "./comnponents/useCallback/CallBackTutorial";
import './App.css';

function App() {
  return (
    <div className="App">
      <StateTutorial />
      <hr />
      <ReducerTutorial />
      <hr />
      <EffectTutorial />
      <hr />
      <RefTutorial />
      <hr />
      <LayoutEffectTutorial />
      <hr />
      <ImperativeHandle />
      <hr />
      <ContextTutorial />
      <hr />
      <MemoTutorial />
      <hr />
      <CallBackTutorial />
      <hr />
    </div>
  );
}

export default App;
