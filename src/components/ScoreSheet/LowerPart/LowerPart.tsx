import { styled } from "styled-components";
import Category from "../Category/Category";
import Total from "./Total/Total";

const LowerPart = () => {
  return (
    <>
      <Category name="Choice" />
      <Margin />
      <Category name="4 of a Kind" />
      <Category name="Full House" />
      <Category name="S. Straight" />
      <Category name="L. Straight" />
      <Category name="Yacht" />
      <Margin />
      <Total />
    </>
  );
};

export default LowerPart;

const Margin = styled.div`
  margin-top: 2%;
`;
