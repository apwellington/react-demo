import { Greeting } from "./components/Greeting";
import {Counter} from "./components/Counter";

function App() {
    return (
        <>
            {/*<h1>Wellcome to our react Demo React APP</h1>*/}
            {/*<Greeting name="Wellington Adames" age={30} isMale={true} />*/}
            <Counter value={0} />
        </>
    );
}

export default App;