import React from "react";
import { styled } from "styled-components";

// ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
const ToggleSwitch = ({
  switchToggle,
  children,
}: {
  switchToggle: () => void;
  children: React.ReactNode;
}) => {
  return <ToggleContainer onClick={switchToggle}>{children}</ToggleContainer>;
};

export default ToggleSwitch;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
