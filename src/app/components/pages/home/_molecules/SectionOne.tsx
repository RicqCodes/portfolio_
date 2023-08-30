// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { styled } from "styled-components";
// import {
//   bounce,
//   bounceIn,
//   opaque,
//   slideInDown,
//   slideInLeft,
//   slideInRight,
// } from "@/styles/animate.styled";
// import PageContainer from "../_molecules/PageContainer";

// const FramerImage = motion(Image);

// const SectionOne: React.FC = () => {
//   return (
//     <PageContainer>
//       <InnerContent>
//         <Article>
//           <Content>
//             <Text>
//               <h1 aria-label="Front Developer">
//                 <span>
//                   Frontend & Blockchain
//                   <br /> Developer
//                   <span>.</span>
//                 </span>
//               </h1>
//               <p>
//                 I take pleasure in creating robust and scalable frontend
//                 products that provide exceptional user experiences.
//               </p>
//             </Text>
//             <InnerContentBottom>
//               <Ul aria-label="Highlights.">
//                 <li>
//                   possess strong expertise in progressive enhancement, and UI
//                   engineering.
//                 </li>
//                 <li>
//                   3 years of experience in building products for clients across
//                   various countries.
//                 </li>
//               </Ul>
//             </InnerContentBottom>
//           </Content>
//         </Article>
//         <Picture>
//           <div>
//             <FramerImage
//               src="https://i.imgur.com/PTYA65R.png"
//               alt="a picture of riqcodes"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.6 }}
//               priority
//               width="1"
//               height="1"
//               sizes="(max-width: 768px) 100vw,
//               (max-width: 1200px) 50vw,
//               33vw"
//             />
//           </div>
//         </Picture>
//       </InnerContent>
//     </PageContainer>
//   );
// };

// export default SectionOne;

// const InnerContent = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
//   margin: 0 auto;
//   margin-top: calc(14.91rem);

//   @media (max-width: 58em) {
//     flex-direction: column-reverse;
//     height: 100%;
//     margin-top: 0;
//   }
// `;

// const Article = styled.article`
//   margin-top: -5.04rem;
//   text-align: left;
//   position: relative;
// `;

// const Picture = styled.div`
//   height: max-content;
//   padding: 3.2rem;
//   position: relative;
//   border-radius: 3rem;
//   background-color: ${({ theme }) => theme.colors.tertiaryColor};
//   animation: ${slideInRight} 0.8s ease-in;
//   margin-top: -3rem;
//   z-index: 9;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     right: 1rem;
//     width: 98%;
//     height: 98%;
//     border: 1px solid ${({ theme }) => theme.colors.tertiaryColor};
//     background-color: ${({ theme }) => theme.colors.primaryColor};
//     /* background: linear-gradient(
//       230deg,
//       ${({ theme }) => theme.colors.secondaryColor} 56%,
//       ${({ theme }) => theme.colors.primaryColor} calc(56% + 2px)
//     ); */
//     border-radius: 2rem;
//     z-index: -9;
//   }

//   > div {
//     max-width: 28rem;
//     height: 100%;
//     display: inline-block;
//     border-radius: 40%;
//     position: relative;
//     overflow: hidden;
//     object-fit: cover;

//     > img {
//       height: 100%;
//       width: 100%;
//     }
//   }
// `;

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   gap: 3.6rem;
// `;

// const Text = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;

//   h1 {
//     margin: 0;
//     font-size: 5.33rem;
//     font-weight: 900;
//     line-height: 1.1;
//     letter-spacing: -0.19rem;

//     animation: ${slideInLeft} 0.8s ease-in;
//   }
//   p {
//     margin: 0;
//     font-size: 1.88rem;
//     width: 30vw;
//     opacity: 0.7;
//     animation: ${slideInDown} 0.8s ease-in;
//     line-height: 1.6;
//   }

//   @media (max-width: 58em) {
//     text-align: center;
//     h1 {
//       font-size: 4rem;
//     }

//     p {
//       width: 100%;
//     }
//   }

//   & h1 > span > span {
//     margin-left: 0.5rem;
//   }
// `;

// const InnerContentBottom = styled.div`
//   align-self: flex-start;
//   display: flex;
//   width: 100%;
// `;

// const Ul = styled.ul`
//   display: flex;
//   gap: 3rem;
//   font-size: 1.2rem;
//   color: ${({ theme }) => theme.colors.secondaryColor};
//   width: 45vw;
//   line-height: 1.6;
//   opacity: 0.5;

//   li:first-child {
//     animation: ${opaque} 0.8s ease-in;
//   }
//   li:last-child {
//     animation: ${opaque} 1.4s ease-in;
//   }

//   @media (max-width: 58em) {
//     width: 100%;
//     justify-content: center;
//     text-align: center;
//     li {
//       width: 40%;
//     }
//   }
// `;
