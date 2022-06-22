import './App.css';
import AppHeader from './components/AppHeader';
function App() {
  // typescript variables
  /*let firstValue: string = "Juan";
  let tupleSample: [number, number, number] = [50, 100, 200];
  enum EnumSample {first = "firstDefaultValue", second = 2};
  let functionSample = ():void=>{
    console.log("function");
  } */
  const inlineStyle = {
    backgroundColor: 'red',
  };
  return (
    <div className="App">
      <header className="App-header" style={inlineStyle}>
        <AppHeader title="Tittle" message="Hello, I am AppHeader!" />
      </header>
    </div>
  );
}

export default App;
