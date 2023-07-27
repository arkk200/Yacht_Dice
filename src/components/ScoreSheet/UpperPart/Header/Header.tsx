import * as S from "./style";

const Header = () => {
  return (
    <S.StyledHeader>
      <S.FirstPart>
        <S.TurnBox>
          <S.Turn>Turn</S.Turn>
          <S.TurnCount>1/12</S.TurnCount>
        </S.TurnBox>
        <S.Categories>Categories</S.Categories>
      </S.FirstPart>
      <img
        src="/score-sheet.png"
        alt="score sheet"
        style={{
          position: "fixed",
          height: "83.25vh",
          opacity: 0.3,
          top: 62,
          left: -20,
        }}
      />
    </S.StyledHeader>
  );
};

export default Header;
