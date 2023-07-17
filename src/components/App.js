import React, { useReducer } from 'react';
import reducer, { initialState }from '../reducers';
import './App.css';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import { addOne, applyNumber, changeOperation, clearDisplay, setCurrentMemory, memoryRecall, clearMemory } from '../actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const applyNumberHandler = (number) => {
    dispatch(applyNumber(number))
  }
  const changeOperationHandler = (operation) => {
    dispatch(changeOperation(operation))
  }
  const cleraDisplayHandler = () => {
    dispatch(clearDisplay())
  }
  const setCurrentMemoryHandler = () => {
    dispatch(setCurrentMemory())
  }
  const memoryRecallHandler = () => {
    dispatch(memoryRecall())
  }
  const clearMemoryHandler = () => {
    dispatch(clearMemory())
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => setCurrentMemoryHandler()} value={"M+"}/>
              <CalcButton onClick={() => memoryRecallHandler()} value={"MR"}/>
              <CalcButton onClick={() => clearMemoryHandler()} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => applyNumberHandler(1)} value={1}/>
              <CalcButton onClick={() => applyNumberHandler(2)} value={2}/>
              <CalcButton onClick={() => applyNumberHandler(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => applyNumberHandler(4)} value={4}/>
              <CalcButton onClick={() => applyNumberHandler(5)} value={5}/>
              <CalcButton onClick={() => applyNumberHandler(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => applyNumberHandler(7)} value={7}/>
              <CalcButton onClick={() => applyNumberHandler(8)} value={8}/>
              <CalcButton onClick={() => applyNumberHandler(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => changeOperationHandler('+')} value={"+"}/>
              <CalcButton onClick={() => changeOperationHandler('*')} value={"*"}/>
              <CalcButton onClick={() => changeOperationHandler('-')} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => cleraDisplayHandler()} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
