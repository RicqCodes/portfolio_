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
            Greetings, I am Prince Nwakanma—an adept FE-oriented full-stack web
            developer, proficient DApp craftsman, and seasoned UI/UX designer.
            My commitment resides in sculpting exquisite, utilitarian, and
            user-centric digital landscapes. Over a span of 3 prolific years,
            I&apos;ve cultivated an unwavering drive to manifest my
            clients&apos; aspirations with ingenuity and innovation.
          </motion.p>
          <motion.p
            initial={{ y: "30%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Beyond the realm of code and design, my journey is a testament to
            evolution and adaptability. From my initial foray into web
            development to immersing myself in decentralized applications, each
            milestone has contributed to my growth. I&apos;ve refined my skills
            through the artistry of crafting seamless user interfaces and delved
            into the intricate world of blockchain, merging technology with
            imagination. This holistic approach enables me to infuse versatility
            into every project, transforming abstract ideas into tangible
            digital realms.
          </motion.p>
          <motion.p
            initial={{ y: "30%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            In an ever-evolving digital cosmos, my voyage as a creator has been
            nurtured by relentless curiosity. From conceiving intricate backend
            systems to shaping the very pixels that captivate users, I&apos;ve
            embraced the intricate dance between logic and aesthetics. My
            toolkit includes a pantheon of technologies, from React and Node.js
            to Solidity, each harnessed to materialize innovative solutions. My
            commitment goes beyond lines of code; it&apos;s an unwavering
            promise to weave narratives that resonate and experiences that
            transcend.
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
