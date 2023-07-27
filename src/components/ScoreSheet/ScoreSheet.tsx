import UpperPart from "./UpperPart/UpperPart";
import * as S from "./style";

const ScoreSheet = () => {
  return (
    <S.Container>
      <S.ScoreSheetBackground>
        <S.StyledScoreSheet>
          <UpperPart />
        </S.StyledScoreSheet>
      </S.ScoreSheetBackground>
    </S.Container>
  );
};

export default ScoreSheet;
