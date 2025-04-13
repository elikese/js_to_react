const el = createElement(
    "div",
    { id: "box" },
    createElement("h1", null, "안녕"),
    createElement("p", null, "이건 진짜 DOM이야"),
    createElement(
        "button",
        {
            onclick: () => alert("눌렀다!"),
        },
        "눌러봐"
    )
);

const root = document.getElementById("root");
render(el, root);
