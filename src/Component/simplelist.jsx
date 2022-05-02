import { ReactDOM } from "react";

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

function Tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    root.render(element);
}

setInterval(Tick, 1000);