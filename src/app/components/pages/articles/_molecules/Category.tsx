import Link from "next/link";
import { styled } from "styled-components";

interface IProps {
  title: string;
}
const Category = ({ title }: IProps) => {
  return (
    <CategoryContainer>
      <p>{title}</p>
    </CategoryContainer>
  );
};

export default Category;

const CategoryContainer = styled.div`
  padding: 4px 12px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 12px;
  background-color: ${({ theme }) => theme.colors.tertiaryColor};
  p {
    text-transform: capitalize;
    font-size: 1.4rem;
  }

  &:hover {
    transition: all 0.3s ease-in;
  }
`;
