import { RecoilRoot } from "recoil";
import ProviderProps from "./types/provider.types";

const Provider = ({ children }: ProviderProps) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Provider;
