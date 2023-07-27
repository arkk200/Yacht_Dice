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
      <S.ProfileBox>
        <S.ProfileImage src="/lying-cat.png" />
      </S.ProfileBox>
      <S.ProfileBox>
        <S.ProfileImage src="/lying-cat.png" />
      </S.ProfileBox>
    </S.StyledHeader>
  );
};

export default Header;
