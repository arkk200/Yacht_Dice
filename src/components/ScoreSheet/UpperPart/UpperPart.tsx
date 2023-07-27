import Category from "../Category/Category";
import Header from "./Header/Header";

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
    </>
  );
};

export default UpperPart;
