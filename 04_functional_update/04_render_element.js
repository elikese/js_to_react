import { resetIndex } from "./04_use_state.js";
import { App } from "./04_app.js";

export function render(element, container) {
    const dom =
        element.type === "TEXT_ELEMENT"
            ? document.createTextNode(element.props.nodeValue)
            : document.createElement(element.type);

    Object.keys(element.props)
        .filter((key) => key !== "children")
        .forEach((key) => {
            if (key.startsWith("on")) {
                const event = key.slice(2).toLowerCase();
                dom.addEventListener(event, element.props[key]);
            } else {
                dom[key] = element.props[key];
            }
        });

    element.props.children.forEach((child) => render(child, dom));

    container.appendChild(dom);
}

export function rerender() {
    const root = document.getElementById("root");
    root.innerHTML = "";
    resetIndex();
    render(App(), root);
}
