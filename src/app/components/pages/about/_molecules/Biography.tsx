import Letter from "@/app/components/Common/AnimatedLetter";
import React from "react";
import { styled } from "styled-components";
import ContentCard from "../../_molecules/ContentCard";
import NumberCountAnimation from "@/app/components/Common/NumberCountAnimation";
import { motion } from "framer-motion";
import Prince from "@/images/prince.png";

const Biography = () => {
  return (
    <MainContainer>
      <Letter text="Crafting Digital Experiences with Passion." />
      <ContentContainer>
        <ImageContainer>
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <ContentCard
              img={Prince}
              alt="A picture of prince nwakanma"
              borderRadius
              priority={true}
              fullWidth
              imageAvail
            />
          </motion.div>
        </ImageContainer>
        <BiographyContainer>
          <motion.h3
            initial={{ y: "30%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
          >
            quick biography
          </motion.h3>
          <motion.p
            initial={{ y: "30%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
                I’m Prince Nwakanma, a blockchain engineer who enjoys building reliable, high-performance products from the ground up. 
                My work sits at the intersection of full-stack web development and decentralized systems — combining clean, 
                well-structured frontends with solid backend and smart contract architecture. With over six years of experience, 
                I’ve built and shipped production-ready solutions across DeFi, NFTs, and large-scale web applications, always 
                with a focus on performance, maintainability, and real-world usability.

          </motion.p>
          <motion.p
            initial={{ y: "30%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ delay: 1 }}
          >
                I’ve worked across the entire development lifecycle — from designing system architecture to deploying and optimizing 
                production environments. Over the years, I’ve built custom smart contracts for DEX platforms, implemented token 
                standards like ERC-20 and ERC-721, and developed cross-chain infrastructure used in live applications. I care deeply 
                about writing clean, testable code, and I rely on strong testing, CI/CD pipelines, and performance tuning to ensure 
                the systems I build are both scalable and dependable.
          </motion.p>
          <motion.p
            initial={{ y: "30%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
                My day-to-day stack includes React, TypeScript, and Next.js on the frontend, with Solidity, Ethers.js, and Hardhat 
                powering the blockchain layer. On the backend, I work with Node.js and modern APIs, and I also use Rust when performance 
                and safety really matter. I’m comfortable integrating wallets like MetaMask and WalletConnect, and I follow security-first 
                practices that make my code audit-ready and production-safe. I’m always exploring new protocols and tools, but my goal 
                stays the same: building secure, efficient systems that people actually enjoy using.

          </motion.p>
        </BiographyContainer>
        <Stats>
          <div>
            <span>
              <span>{<NumberCountAnimation value={120} />}</span>+
            </span>
            <h4>happy client 😋</h4>
          </div>
          <div>
            <span>
              <span>{<NumberCountAnimation value={80} />}</span>+
            </span>
            <h4>projects completed 👨‍💻</h4>
          </div>
          <div>
            <span>
              <span>{<NumberCountAnimation value={6} />}</span>+
            </span>
            <h4>years of experience 🔬</h4>
          </div>
        </Stats>
      </ContentContainer>
    </MainContainer>
  );
};

export default Biography;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.2rem;
`;

const ContentContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  row-gap: 5rem;
  column-gap: 8rem;

  @media (max-width: 50em) {
    column-gap: 0;
    row-gap: 4rem;
  }
`;

const ImageContainer = styled.div`
  grid-column: span 3 / span 3;
  width: 100%;

  @media (max-width: 50em) {
    grid-column: span 8 / span 8;
  }
`;

const BiographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.4rem;
  grid-column: span 5 / span 5;

  h3 {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 2.4rem;
  }

  @media (max-width: 50em) {
    grid-column: span 8 / span 8;
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2.4rem;
  align-items: center;
  grid-column: span 8 / span 8;

  > div {
    text-align: center;
    span {
      font-size: 6rem;
      font-weight: 600;
      margin: 0;
    }

    h4 {
      opacity: 0.7;
      font-size: 2rem;
      text-transform: capitalize;
    }
  }

  @media (max-width: 50em) {
    > div {
      span {
        font-size: 4rem;
      }
    }
  }

  @media (max-width: 50em) {
    flex-direction: column;
  }
`;
