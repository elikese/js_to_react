import { rerender } from "./04_render_element.js";

let state = [];
let index = 0;

export const useState = (initialValue) => {
    const currentIndex = index;
    state[currentIndex] ??= initialValue;

    function setState(newValue) {
        const valueToStore = typeof newValue === "function" ? newValue(state[currentIndex]) : newValue;
        state[currentIndex] = valueToStore;
        rerender();
    }

    index++;
    return [state[currentIndex], setState];
};

export const resetIndex = () => {
    index = 0;
};
