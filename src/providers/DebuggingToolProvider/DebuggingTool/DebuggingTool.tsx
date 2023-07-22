import { styled } from "styled-components";

interface PropTypes {
  onClickCallbacks: {
    [key in string]: () => void;
  };
}

const DebuggingTool = ({ onClickCallbacks }: PropTypes) => {
  return (
    <StyledDebuggingTool>
      {Object.entries(onClickCallbacks).map(([name, onClick], index) => (
        <Button key={name} onClick={onClick} index={index}>
          {name}
        </Button>
      ))}
    </StyledDebuggingTool>
  );
};

export default DebuggingTool;

const StyledDebuggingTool = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  display: flex;
  gap: 18px;
  padding: 14px 16px;
  border-radius: 6px;

  font-family: "Pretendard";

  background-color: #f58c8c;
`;

const Button = styled.button<{ index: number }>`
  padding: 10px 16px;
  border-radius: 4px;
  color: white;
  background-color: hsl(${(props) => props.index * 20}, 100%, 50%);
`;
