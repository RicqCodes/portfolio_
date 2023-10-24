import React from "react";
import { css, styled } from "styled-components";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

const FramerImage = motion(Image);

const ContentCard = ({
  img,
  alt,
  fullWidth,
  borderRadius,
  ExtraComp,
  fixedHeight,
  priority,
}: {
  img?: StaticImageData | string;
  alt?: string;
  fullWidth?: boolean;
  borderRadius?: boolean;
  fixedHeight?: boolean;
  ExtraComp?: React.ReactNode;
  imageAvail?: boolean;
  priority?: boolean;
}) => {
  return (
    <CardContainer
      $fullWidth={fullWidth}
      $borderRadius={borderRadius}
      $fixedHeight
    >
      {img && alt && (
        <div>
          <>
            {typeof img === "string" ? (
              <FramerImage
                src={img}
                alt={alt}
                blurDataURL={img as string}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                placeholder="blur"
                quality={100}
                priority={priority}
                width="100"
                height="100"
                sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
              />
            ) : (
              <FramerImage
                src={img}
                alt={alt}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            )}
          </>
        </div>
      )}
      {ExtraComp && ExtraComp}
    </CardContainer>
  );
};

export default ContentCard;

const CardContainer = styled(motion.div)<{
  $fullWidth?: boolean;
  $borderRadius?: boolean;
  $fixedHeight?: boolean;
}>`
  height: max-content;
  padding: 3.2rem;
  position: relative;
  ${({ $fullWidth }) =>
    $fullWidth
      ? css`
          width: 100%;
        `
      : css``}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.tertiaryColor};
  z-index: 9;
  /* height: ${({ $fixedHeight }) => ($fixedHeight ? "72rem" : "auto")}; */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 1rem;
    width: 98%;
    height: 98%;
    border: 1px solid ${({ theme }) => theme.colors.tertiaryColor};
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 2rem;
    z-index: -9;
  }

  > div {
    ${({ $fullWidth }) =>
      $fullWidth
        ? css`
            max-width: 100%;
          `
        : css`
            max-width: 38rem;
          `}

    ${({ $borderRadius }) =>
      $borderRadius
        ? css`
            border-top-left-radius: 30%;
            border-top-right-radius: 30%;
            border-bottom-right-radius: 40%;
          `
        : css`
            border-radius: 1rem;
          `};
    height: 100%;
    width: 100%;
    display: inline-block;
    position: relative;
    overflow: hidden;
    object-fit: cover;

    > img {
      height: 100%;
      width: 100%;
    }
  }
`;
