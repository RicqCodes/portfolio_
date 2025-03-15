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
                I am Prince Nwakanma, a specialized blockchain engineer with expertise 
                in full-stack web development, decentralized application architecture, 
                and system design. My technical foundation combines frontend optimization 
                using React/Next.js with backend infrastructure development. With over 6 years of industry experience, 
                I&apos;ve consistently delivered high-performance solutions across DeFi protocols, NFT platforms, 
                and enterprise-grade applications, leveraging advanced TypeScript patterns and smart contract development.

          </motion.p>
          <motion.p
            initial={{ y: "30%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ delay: 1 }}
          >
                My technical trajectory encompasses the complete development lifecycle—from systems architecture to deployment optimization. 
                I&apos;ve engineered custom smart contracts for DEX platforms, implemented ERC-20/ERC-721 token standards, and built cross-chain 
                infrastructure for production environments. My development methodology emphasizes code quality through comprehensive testing frameworks, 
                CI/CD implementation, and performance optimization. This systematic approach has enabled me to architect scalable solutions that maintain 
                exceptional user experiences while meeting strict technical requirements.

          </motion.p>
          <motion.p
            initial={{ y: "30%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
                My technical stack encompasses React.js, TypeScript, Next.js, Solidity, Ethers.js, Hardhat, and Tailwind CSS for frontend development, 
                complemented by Node.js, Express, and MongoDB for backend systems. For systems-level programming, I leverage Rust to build high-performance, 
                memory-safe applications with near-native speed. I&apos;m proficient in Web3 development tools including Truffle, Ganache, and OpenZeppelin, 
                with experience integrating wallets like MetaMask and WalletConnect. I implement advanced security practices including formal verification techniques 
                and audit-ready development patterns. My commitment to technical excellence drives me to continuously explore emerging protocols and frameworks 
                while maintaining a focus on delivering robust, gas-efficient, and secure blockchain solutions.

          </motion.p>
        </BiographyContainer>
        <Stats>
          <div>
            <span>
              <span>{<NumberCountAnimation value={50} />}</span>+
            </span>
            <h4>happy client 😋</h4>
          </div>
          <div>
            <span>
              <span>{<NumberCountAnimation value={68} />}</span>+
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
