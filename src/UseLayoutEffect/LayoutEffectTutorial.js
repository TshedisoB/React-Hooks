import { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log("First come");
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div className="App">
      <input
        ref={inputRef}
        value="Tshediso"
        style={{ width: 400, height: 60 }}
      />
    </div>
  );
}

export default LayoutEffectTutorial;
