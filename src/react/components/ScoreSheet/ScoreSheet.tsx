import LowerPart from "./LowerPart/LowerPart";
import UpperPart from "./UpperPart/UpperPart";
import * as S from "./style";

const ScoreSheet = () => {
  return (
    <S.ScoreSheetBackground>
      <S.StyledScoreSheet>
        <UpperPart />
        <S.BonusDesc>Bonus if 1 - 6 over 63 points</S.BonusDesc>
        <LowerPart />
      </S.StyledScoreSheet>
    </S.ScoreSheetBackground>
  );
};

export default ScoreSheet;
