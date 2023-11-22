import { useEffect, useState } from "react";

export default function useDebouncer(value) {
  const [stateDebounced, setStateDebounced] = useState("");

  useEffect(() => {
    const tiomeout = setTimeout(() => {
      setStateDebounced(value);
    }, 600);

    return () => clearTimeout(tiomeout);
  }, [value]);

  return stateDebounced;
}
