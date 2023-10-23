import Link from "next/link";
import { styled } from "styled-components";

interface IProps {
  title: string;
  url: string;
}
const Category = ({ title, url }: IProps) => {
  return (
    <CategoryContainer>
      <Link href={url}>{title}</Link>
    </CategoryContainer>
  );
};

export default Category;

const CategoryContainer = styled.div`
  padding: 8px 16px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 12px;
  background-color: ${({ theme }) => theme.colors.tertiaryColor};
  a {
    text-transform: capitalize;
    font-size: 14px;
  }

  &:hover {
    transition: all 0.3s ease-in;
  }
`;
