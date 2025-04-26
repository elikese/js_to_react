import { createElement } from "./04_create_element.js";
import { useState } from "./04_use_state.js";

export function App() {
    const [count, setCount] = useState(0);
    return createElement(
        "button",
        {
            onClick: () => {
                setCount(count + 1);
                setCount(count + 1);
            },
        },
        `Count: ${count}`
    );
}

// count라는 변수는 App()함수 안쪽에 선언되어있음.
// onClick() 함수는 App()이 실행될 때 count 변수를 클로저로 캡처함.(초기값인 0을 캡쳐)
// setCount()에 함수를 넘기면 직접 useState()에서 관리되고있는 state배열 내 변수를 참조할 수 있게된다.
// 즉, setCount()를 두번연속 실행하게되면, 첫번째 setCount() 캡쳐된 count의 값은 0이고, count는 +1이되어서 setCount(1)로 전달된다.
// rerender()는 호출되고 app()은 다시 실행되면서 count는 1이라는 값으로 바뀐다.
// 하지만 onclick()이 호출된 시점의 count값은 여전히 0으로 참조되면서 두번째 count 이전에 캡쳐된 0을 참조하고, count는 +1이 되어서 setCount(1)로 전달된다.
