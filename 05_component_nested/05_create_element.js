export function createElement(type, props, ...children) {
    const result = {
        type,
        props: {
            ...props,
            children: children.map((child) => (typeof child === "object" ? child : createTextElement(child))),
        },
    };
    return result;
}

export function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        },
    };
}
