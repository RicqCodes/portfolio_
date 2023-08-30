import { useState, useRef, useEffect, RefObject } from "react";

interface ToggleParameter {
  eventType: string;
  isToggle?: boolean;
}

const useToggle = ({ eventType = "click", isToggle }: ToggleParameter) => {
  // Create a state variable `toggle` and a function `setToggle` for updating the state
  const [toggle, setToggle] = useState(false);

  //Create refs for DOM elements that will be controlled by the toggle state
  const toggleRef: RefObject<HTMLElement> = useRef(null);
  const toggledElementRef: RefObject<HTMLElement> = useRef(null);

  useEffect(() => {
    window.addEventListener(eventType, handleClickOutside); // Add a click event listener to the window object that listens for clicks outside of the toggleRef and toggledElementRef elements

    return () => {
      window.removeEventListener(eventType, handleClickOutside); // Remove the event listener when the component unmounts
    };
  }, []);

  const handleClickOutside = (e: Event) => {
    // Function to handle clicks outside of the toggleRef and toggledElementRef elements
    if (toggledElementRef.current !== null) {
      // If both toggleRef and toggledElementRef exist, check if the target of the click is outside of both elements
      if (
        toggleRef.current !== null &&
        !toggleRef.current.contains(e.target as Node) &&
        !toggledElementRef.current.contains(e.target as Node)
      ) {
        // If the target is outside of both elements, set the toggle state to false
        if (!isToggle) {
          setToggle(false);
        }
      }
    } else {
      // If only toggleRef exists, check if the target of the click is outside of toggleRef
      if (
        toggleRef.current !== null &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        if (!isToggle) {
          setToggle(false);
        }
      }
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  }; // Return the toggle state, toggleRef, toggledElement and handleToggle

  return { toggle, toggleRef, toggledElementRef, handleToggle };
};

export default useToggle;
