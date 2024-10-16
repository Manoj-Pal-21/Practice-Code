import { useRef } from "react"
import Circle from "./components/Circle"

function App() {
  const circlRef = useRef();

  const handleMouseMove = (e) => {
    const circle = circlRef.current;
    if (circle) {
      const { clientX, clientY } = e;
      circle.style.left = `${clientX}px`;
      circle.style.top = `${clientY}px`;
    }
  };

  // function throttle(fn, wait) {
  //   let lastTime = 0;
  //   return function (...args) {
  //     const now = new Date().getTime();
  //     if (now - lastTime >= wait) {
  //       lastTime = now;
  //       fn.apply(this, args);
  //     }
  //   };
  // }

  // const throttledMouseMove = throttle(handleMouseMove, 10);


  return (
    <div className="h-screen relative" onMouseMove={handleMouseMove}>
      <Circle ref={circlRef} />
    </div>
  )
}

export default App
