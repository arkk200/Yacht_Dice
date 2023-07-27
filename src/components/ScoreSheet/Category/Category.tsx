import * as S from "./style";

type NameTypes =
  | "Aces"
  | "Deuces"
  | "Threes"
  | "Fours"
  | "Fives"
  | "Sixes"
  | "Choice"
  | "4 of a Kind"
  | "Full House"
  | "S. Straight"
  | "L. Straight"
  | "Yacht";

interface PropTypes {
  name: NameTypes;
}

const specials = [
  "Choice",
  "4 of a Kind",
  "Full House",
  "S. Straight",
  "L. Straight",
  "Yacht",
] as const;

const Category = ({ name }: PropTypes) => {
  return (
    <S.StyledCategory>
      <S.Name
        types={specials.some((item) => item === name) ? "SECONDARY" : "PRIMARY"}
      >
        {name}
      </S.Name>
      <S.ScoreBox></S.ScoreBox>
      <S.ScoreBox></S.ScoreBox>
    </S.StyledCategory>
  );
};

export default Category;
