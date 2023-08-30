import { keyframes } from "styled-components";

export const slideInDown = keyframes`
    0% {
      -webkit-transform: translateY(32px);
      -ms-transform: translateY(32px);
      transform: translateY(32px);
    }
  
    100% {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }

  `;

export const slideInLeft = keyframes`
    0% {
      -webkit-transform: translateX(-100px);
      -ms-transform: translateX(-100px);
      transform: translateX(-100px);
    }
  
    100% {
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      transform: translateX(0);
    }
  `;

//   .slideInLeft {
//     -webkit-animation-name: slideInLeft;
//     animation-name: slideInLeft;
//   }

export const slideInRight = keyframes`
    0% {
      -webkit-transform: translateX(100px);
      -ms-transform: translateX(100px);
      transform: translateX(100px);
    }
  
    100% {
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      transform: translateX(0);
    }
  `;

//   .slideInRight {
//     -webkit-animation-name: slideInRight;
//     animation-name: slideInRight;
//   }

export const slideOutLeft = keyframes`
    0% {
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      transform: translateX(0);
    }
  
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  `;

//   .slideOutLeft {
//     -webkit-animation-name: slideOutLeft;
//     animation-name: slideOutLeft;
//   }

export const slideOutRight = keyframes`
  
    0% {
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      transform: translateX(0);
    }
  
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  `;

//   .slideOutRight {
//     -webkit-animation-name: slideOutRight;
//     animation-name: slideOutRight;
//   }

export const slideOutUp = keyframes`
  
    0% {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }
  
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  `;

//   .slideOutUp {
//     -webkit-animation-name: slideOutUp;
//     animation-name: slideOutUp;
//   }

export const bounce = keyframes`
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-50px);}
	60% {transform: translateY(-25px);}
`;

export const bounce2 = keyframes`
    70% { transform:translateY(0%); }
    80% { transform:translateY(-15%); }
    90% { transform:translateY(0%); }
    95% { transform:translateY(-7%); }
    97% { transform:translateY(0%); }
    99% { transform:translateY(-3%); }
  100% { transform:translateY(0); }
`;

export const bounceIn = keyframes`
    0% {
      /* opacity: 0; */
      -webkit-transform: scale(.3);
      -ms-transform: scale(.3);
      transform: scale(.3);
    }
  
    50% {
      opacity: 1;
      -webkit-transform: scale(1.05);
      -ms-transform: scale(1.05);
      transform: scale(1.05);
    }
  
    70% {
      -webkit-transform: scale(.9);
      -ms-transform: scale(.9);
      transform: scale(.9);
    }
  
    100% {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }
`;

export const opaque = keyframes`
 0%{
    opacity: 0;
 }

 100% {
  opacity: 1;
 }
`;
