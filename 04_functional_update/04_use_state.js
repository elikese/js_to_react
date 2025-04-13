let state = [];
let index = 0;
import { rerender } from "./04_render_element.js";

export function useState(initialValue) {
    console.log(index);
    const currentIndex = index;
    state[currentIndex] ??= initialValue;

    function setState(newValue) {
        const valueToStore = typeof newValue === "function" ? newValue(state[currentIndex]) : newValue;
        state[currentIndex] = valueToStore;
        rerender();
    }

    index++;
    return [state[currentIndex], setState];
}

export function resetIndex() {
    index = 0;
}
