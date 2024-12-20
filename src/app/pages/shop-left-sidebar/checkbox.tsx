import React from "react";
import styled from "styled-components";

interface CheckboxProps {
  uncheckedBgColor?: string; // Background color when unchecked
  checkedBgColor?: string;   // Background color when checked
  title?: string;            // Title
  id?: string;               // Unique ID for each checkbox
}


const Checkbox: React.FC<CheckboxProps> = ({
  uncheckedBgColor = "#eae6fa", // Default light purple
  checkedBgColor = "#6c4aed",   // Default dark purple
  title = "",           // Default title
  id,                           // Unique ID
}) => {
  // Generate a unique ID if one is not provided
  const uniqueId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <StyledWrapper uncheckedBgColor={uncheckedBgColor} checkedBgColor={checkedBgColor}>
      <div className="checkbox-wrapper-46">
        <input type="checkbox" id={uniqueId} className="inp-cbx " />
        <label htmlFor={uniqueId} className="cbx">
          <span>
            <svg viewBox="0 0 12 10" height="10px" width="12px">
              <polyline points="1.5 6 4.5 9 10.5 1" />
            </svg>
          </span>
          <span className="flex-wrap">{title}</span>
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{
  uncheckedBgColor: string;
  checkedBgColor: string;
}>`
  .checkbox-wrapper-46 input[type="checkbox"] {
    display: none;
    visibility: hidden;
  }

  .checkbox-wrapper-46 .cbx {
    margin: auto;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
  }

  .checkbox-wrapper-46 .cbx span {
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
  }

  .checkbox-wrapper-46 .cbx span:first-child {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: none;
    border-style: none;
    transform: scale(1);
    vertical-align: middle;
    border: none;
    background: ${(props) => props.uncheckedBgColor};
    transition: all 0.2s ease;
  }

  .checkbox-wrapper-46 .cbx span:first-child svg {
    position: absolute;
    top: 3px;
    left: 2px;
    fill: none;
    stroke: ${(props) => props.checkedBgColor};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 0;
    transition: all 0.3s ease;
  }

  .checkbox-wrapper-46 .cbx span:first-child:before {
    content: "";
    width: 100%;
    height: 100%;
    background: ${(props) => props.checkedBgColor};
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
  }

  .checkbox-wrapper-46 .cbx span:last-child {
    padding-left: 8px;
  }

  .checkbox-wrapper-46 .cbx:hover span:first-child {
    border-color: #c3b5e3;
  }

  .checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child {
    background: ${(props) => props.checkedBgColor};
    border-color: ${(props) => props.checkedBgColor};
    animation: wave-46 0.4s ease;
  }

  .checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child svg {
    stroke: #ffffff;
    stroke-dashoffset: 0;
  }

  .checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child:before {
    transform: scale(3.5);
    opacity: 0;
    transition: all 0.6s ease;
  }

  @keyframes wave-46 {
    50% {
      transform: scale(0.9);
    }
  }

  /* Media Queries */
  @media (max-width: 768px) {
    /* Tablet and smaller screens */
    .checkbox-wrapper-46 .cbx span:first-child {
      width: 14px; /* Reduced size */
      height: 14px;
    }

    .checkbox-wrapper-46 .cbx span:first-child svg {
      top: 2px;
      left: 1.5px;
      height: 8px;
      width: 10px;
    }
  }

  @media (max-width: 480px) {
    /* Mobile screens */
    .checkbox-wrapper-46 .cbx span:first-child {
      width: 12px; /* Further reduced size */
      height: 12px;
    }

    .checkbox-wrapper-46 .cbx span:first-child svg {
      top: 1.5px;
      left: 1px;
      height: 6px;
      width: 8px;
    }
  }
`;


export default Checkbox;