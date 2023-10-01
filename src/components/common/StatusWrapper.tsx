import { countAtom } from "@/store/count";
import { statusAtom } from "@/store/status";
import { isAllDiceSleptAtom } from "@/threejs/store/isAllDiceSlept";
import { ReactNode, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

interface Props {
  children: ReactNode;
}

const StatusWrapper = ({ children }: Props) => {
  const [status, setStatus] = useRecoilState(statusAtom);
  const isAllDiceSlept = useRecoilValue(isAllDiceSleptAtom);
  const count = useRecoilValue(countAtom);

  useEffect(() => {
    if (status === "주사위 굴리기" && isAllDiceSlept) {
      setStatus("주사위 눈금 보이기");
    }
    if (status === "주사위 눈금 보이기") {
      if (count < 3) {
        setTimeout(() => {
          setStatus("남길 주사위 고르기");
        }, 550);
        return;
      }
      setTimeout(() => {
        setStatus("모든 주사위 고르기");
      }, 550);
    }
  }, [status, setStatus, isAllDiceSlept, count]);
  return <>{children}</>;
};

export default StatusWrapper;
