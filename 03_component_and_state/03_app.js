import { createElement } from "./03_create_element.js";
import { useState } from "./03_use_state.js";

export function App() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");
    return createElement(
        "h1",
        null,
        `${count}`,
        createElement("button", { onclick: () => setCount(count + 1) }, "증가"),
        createElement("button", { onclick: () => setCount(count - 1) }, "감소"),
        createElement("input", { value: inputValue, onChange: (e) => setInputValue(e.target.value) }, "")
    );
}
