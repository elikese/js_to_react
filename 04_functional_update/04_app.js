import { createElement } from "./04_create_element.js";
import { useState } from "./04_use_state.js";

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

// JS는 싱글스레드 + 동기실행 모델
// 따라서 실행 중인 함수가 있으면, 중간에 어떠한 함수가 호출되더라도, 해당 함수가 끝날 때까지 기다렸다가 실행
// (+) count라는 변수는 App()함수 안쪽에 선언되어있음.
// setCount()는 결국 호출되는 시점에서 상위 스코프의 count 변수를 참조하는 메모리를 app()이 끝날때까지 0으로 남아있음( JS의 클로저 특성 )
// 함수를 선언하게되면 그 스코프에서 벗어나서 직접 useState()에서 관리되고있는 state배열 내 변수를 참조할 수 있게된다.
// 이러한 특성을 이용해서 함수를 선언하게되면 그 스코프에서 벗어나서 직접 useState()에서 관리되고있는 state배열 내 변수를 참조할 수 있게된다.

//즉, setCount()를 두번연속 실행하게되면, 첫번째 setCount() 실행시 스코프 내에서 count는 0으로 값이 고정되고, count는 +1이되어서 최종 1이란 값으로 state배열내에서 업데이트된다.
//그리고 reRender()는 실행되지 않고 예약이 되게되고(JS는 싱글스레드 + 동기실행 모델), 두번째 setCount()가 실행된다. 이때도 역시나 count는 0인 값으로 참조되고 있고, count는 +1이되어서 최종 1이라는 값으로 state배열 내에서 업데이트된다.
//최종적으로 rerender()가 실행되면서 count 값은 1로서 app()함수 내에서 업데이트되어 페인팅된다.
