import './App.css';
import {InoutNumb} from "./components/ImputNumb/InoutNumb";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <InoutNumb text={"Add some numbers"} sign={"$"}/>
            </header>
        </div>
    );
}

export default App;
