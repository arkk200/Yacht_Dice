import StatusWrapper from "@/components/common/StatusWrapper";
import { RecoilRoot } from "recoil";
import ProviderProps from "./types/provider.types";

const Provider = ({ children }: ProviderProps) => {
  return (
    <RecoilRoot>
      <StatusWrapper>{children}</StatusWrapper>
    </RecoilRoot>
  );
};

export default Provider;
