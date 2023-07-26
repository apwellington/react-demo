import {useState} from "react";

export function Counter({ value = 0 }: { value?:number }) {
    //hooks
    const [count, setCount] = useState(value)
    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        const id = event.currentTarget.id
        if(id === "add") setCount(count + 1)
        if(id === "reset") setCount(0)
        if(id === "sub" && count > 0) setCount(count - 1)
    }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h1>Counter</h1>
                    <p>Count: {count}</p>
                    <div className="buttons-container">
                        <button id="add" className="btn" onClick={handleClick}>Increment</button>
                        <button id="reset" className="btn" onClick={handleClick}>Reset</button>
                        <button id="sub" className="btn" onClick={handleClick}>Decrease</button>
                    </div>
                </div>
            </div>

        </>
    );
}