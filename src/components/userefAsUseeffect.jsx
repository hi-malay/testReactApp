import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const UserefAsUseeffect = () => {
  const useRefData = useRef(true);
  const [state, setState] = useState(0);
  const [stateChange, setStateChange] = useState(false);

  const useEffectMy = () => {
    if (useRefData.current) {
      useRefData.current = false;
      setState(2);
    }
  };

  useEffectMy();
  return (
    <div>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Click me
      </button>
      <button
        onClick={() => {
          setStateChange(true);
        }}
      >
        Chaneg State
      </button>
      {state}
    </div>
  );
};

export default UserefAsUseeffect;
