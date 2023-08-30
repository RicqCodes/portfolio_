import Letter from "@/app/components/Common/AnimatedLetter";
import React from "react";
import { styled } from "styled-components";
import ImageCard from "../../_molecules/ImageCard";
import NumberCountAnimation from "@/app/components/Common/NumberCountAnimation";
import { motion } from "framer-motion";

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
            <ImageCard
              img="https://i.imgur.com/PTYA65R.png"
              alt="A picture of prince nwakanma"
              borderRadius
              fullWidth
            />
          </motion.div>
        </ImageContainer>
        <BiographyContainer>
          <motion.h4
            initial={{ y: "30%", opacity: "0" }}
            animate={{ y: "0", opacity: "1" }}
          >
            quick biography
          </motion.h4>
          <motion.p
            initial={{ y: "30%", opacity: "0" }}
            animate={{ y: "0", opacity: "1" }}
            transition={{ delay: 0.5 }}
          >
            Hi, I&apos;m Prince Nwakanma, a FE heavy full-stack web developer,
            DApp developer and UI/UX designer with a passion for creating
            beautiful, functional, and user-centered digital experiences. With
            over 5 years of experience in the field. I am always looking for new
            and innovative ways to bring my clients&apos; visions to life.
          </motion.p>
          <motion.p
            initial={{ y: "30%", opacity: "0" }}
            animate={{ y: "0", opacity: "1" }}
            transition={{ delay: 1 }}
          >
            Hi, I&apos;m Prince Nwakanma, a FE heavy full-stack web developer,
            DApp developer and UI/UX designer with a passion for creating
            beautiful, functional, and user-centered digital experiences. With
            over 5 years of experience in the field. I am always looking for new
            and innovative ways to bring my clients&apos; visions to life.
          </motion.p>
          <motion.p
            initial={{ y: "30%", opacity: "0" }}
            animate={{ y: "0", opacity: "1" }}
            transition={{ delay: 1.5 }}
          >
            Hi, I&apos;m Prince Nwakanma, a FE heavy full-stack web developer,
            DApp developer and UI/UX designer with a passion for creating
            beautiful, functional, and user-centered digital experiences. With
            over 5 years of experience in the field. I am always looking for new
            and innovative ways to bring my clients&apos; visions to life.
          </motion.p>
        </BiographyContainer>
        <Stats>
          <div>
            <span>
              <span>{<NumberCountAnimation value={35} />}</span>+
            </span>
            <h4>happy client 😋</h4>
          </div>
          <div>
            <span>
              <span>{<NumberCountAnimation value={40} />}</span>+
            </span>
            <h4>projects completed 👨‍💻</h4>
          </div>
          <div>
            <span>
              <span>{<NumberCountAnimation value={3} />}</span>+
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

  h4 {
    text-transform: capitalize;
    font-weight: 600;
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
