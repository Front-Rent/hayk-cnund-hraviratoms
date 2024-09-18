import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

import "./App.scss";
import CounterSection from "./Components/Main/CounterSection/CounterSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <CounterSection />
    </div>
  );
}

export default App;
