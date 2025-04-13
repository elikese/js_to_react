let state = [];
let index = 0;
import { rerender } from "./03_render_element.js";

export function useState(initialValue) {
    console.log(index);
    const currentIndex = index;
    state[currentIndex] ??= initialValue;

    function setState(newValue) {
        state[currentIndex] = newValue;
        // 간이 batch 처리
        rerender();
        // scheduleRender();
    }

    index++;
    return [state[currentIndex], setState];
}

export function resetIndex() {
    index = 0;
}
