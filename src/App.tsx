import Button from "./components/Button/Button";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Aside />
      <div className="main">
        <Main />
      </div>
    </div>
  );
}

export default App;
