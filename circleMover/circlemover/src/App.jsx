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

  return (
    <div className="h-screen relative" onMouseMove={handleMouseMove}>
      <Circle ref={circlRef} />
    </div>
  )
}

export default App
