function createElement(type, props, ...children) {
    const result = {
        type,
        props: {
            ...props,
            children: children.map((child) => (typeof child === "object" ? child : createTextElement(child))),
        },
    };
    console.log(result);
    return result;
}

function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        },
    };
}
