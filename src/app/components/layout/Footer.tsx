"use client";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { keyframes } from "styled-components";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <FooterContainer data-section="footer">
      <FooterContent
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <LogoSection 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Logo>PN</Logo>
          <span>Prince Nwakanma</span>
        </LogoSection>
        
        <Divider />
        
        <FooterMiddle>
          <ContactSection variants={itemVariants}>
            <h4>Connect with me</h4>
            <SocialLinks>
              <SocialLink 
                href="https://www.linkedin.com/in/princewill-nwakanma-6a6a99181"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </SocialLink>
              <SocialLink 
                href="https://github.com/ricqcodes"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </SocialLink>
              <SocialLink 
                href="https://twitter.com/ricqcodes"
                target="_blank"
                rel="noreferrer"
                title="Twitter"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter />
              </SocialLink>
              <SocialLink 
                href="mailto:contact@princenwakanma.dev"
                target="_blank"
                rel="noreferrer"
                title="Email"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
              </SocialLink>
            </SocialLinks>
          </ContactSection>
        </FooterMiddle>
        
        <BottomSection variants={itemVariants}>
          <Copyright>
            <p>
              © {currentYear} Prince Nwakanma. All rights reserved.
            </p>
          </Copyright>
          <Attribution>
            <p>
              Built with <span className="heart">❤️</span> by <Author>Ricqcodes</Author>
            </p>
          </Attribution>
        </BottomSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const rotateBg = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const pulseAnimation = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1); }
  70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
`;

const FooterContainer = styled.footer`
  width: 100%;
  padding: 5rem 2rem 3rem;
  background: ${({ theme }) => theme.colors.background};
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const FooterContent = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const slideIn = keyframes`
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const Logo = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primaryColor}, 
    ${({ theme }) => theme.colors.accentColor},
    ${({ theme }) => theme.colors.primaryColor});
  background-size: 300% 300%;
  animation: ${rotateBg} 8s infinite ease-in-out, ${pulseAnimation} 2s infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.5px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    animation: ${pulseAnimation} 2s infinite;
    animation-delay: 1s;
  }
`;


const LogoSection = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  span {
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(to right, 
        ${({ theme }) => theme.colors.primaryColor}, 
        ${({ theme }) => theme.colors.accentColor});
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.5s ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  
  &:hover ${Logo} {
    transform: rotate(360deg);
    transition: transform 0.8s ease-in-out;
  }
`;



const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
`;

const FooterMiddle = styled.div`
  display: flex;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const ContactSection = styled(motion.div)`
  h4 {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

const SocialLink = styled(motion.a)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.8rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondaryColor};
    background: rgba(255, 255, 255, 0.07);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const BottomSection = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

const Copyright = styled.div`
  p {
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const Attribution = styled.div`
  p {
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    @media (max-width: 768px) {
      justify-content: center;
    }
    
    .heart {
      color: #ff6b6b;
      margin: 0 0.3rem;
    }
  }
`;

const Author = styled.span`
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.secondaryColor},
    ${({ theme }) => theme.colors.variantColor}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  letter-spacing: 0.5px;
`;