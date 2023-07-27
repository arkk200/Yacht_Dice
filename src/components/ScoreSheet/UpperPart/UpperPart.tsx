import Category from "../Category/Category";
import Header from "./Header/Header";
import SubTotal from "./SubTotal/SubTotal";

const UpperPart = () => {
  return (
    <>
      <Header />
      <Category name="Aces" />
      <Category name="Deuces" />
      <Category name="Threes" />
      <Category name="Fours" />
      <Category name="Fives" />
      <Category name="Sixes" />
      <SubTotal />
    </>
  );
};

export default UpperPart;
