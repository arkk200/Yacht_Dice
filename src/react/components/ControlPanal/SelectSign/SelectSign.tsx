import * as S from "./style";

const SelectSign = () => {
  return (
    <S.StyledSelectSign>
      <S.SelectSignCorner position="top-left" />
      <S.SelectSignCorner position="top-right" />
      <S.SelectSignCorner position="bottom-left" />
      <S.SelectSignCorner position="bottom-right" />
    </S.StyledSelectSign>
  );
};

export default SelectSign;
