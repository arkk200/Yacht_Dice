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
    </S.Container>
  );
};

export default ScoreSheet;
