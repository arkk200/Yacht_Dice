import * as S from "./style";

const isMoreThan63 = null;

const SubTotal = () => {
  return (
    <S.StyledSubTotal>
      <S.SubTotalBox>
        <S.UpperBox>
          <S.SubTotalText>Subtotal</S.SubTotalText>
        </S.UpperBox>

        <S.LowerBox>
          <S.Plus35BonusText>+35 Bonus</S.Plus35BonusText>
        </S.LowerBox>
      </S.SubTotalBox>

      <S.SubTotalScoreBox>
        <S.UpperBox>
          <S.SubTotalScoreText>0/63</S.SubTotalScoreText>
        </S.UpperBox>
        <S.LowerBox>
          <S.Plus35Text>
            {isMoreThan63 != null && (isMoreThan63 ? "+35" : "+0")}
          </S.Plus35Text>
        </S.LowerBox>
      </S.SubTotalScoreBox>

      <S.SubTotalScoreBox>
        <S.UpperBox>
          <S.SubTotalScoreText>0/63</S.SubTotalScoreText>
        </S.UpperBox>
        <S.LowerBox>
          <S.Plus35Text>
            {isMoreThan63 != null && (isMoreThan63 ? "+35" : "+0")}
          </S.Plus35Text>
        </S.LowerBox>
      </S.SubTotalScoreBox>
    </S.StyledSubTotal>
  );
};

export default SubTotal;
