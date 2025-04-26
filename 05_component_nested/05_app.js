import { createElement } from "./05_create_element.js";
import { useState } from "./05_use_state.js";

export function App() {
    const [count, setCount] = useState(0);
    return createElement(
        "button",
        {
            onClick: () => {
                setCount((prev) => prev + 1);
                setCount((prev) => prev + 1);
            },
        },
        `Count: ${count}`
    );
}
