import { useEffect, useState } from "react";
import Nav from "./Nav";
import Left from "./Left";
import Right from "./Right";

function App() {
  const [foodShow, setFoodShow] = useState(0);
  class food {
    constructor(name, description, image) {
      this.name = name;
      this.description = description;
      this.image = image;
    }
  }

  const GreenCurry = new food(
    "Green Curry",
    "pork 500g, eggplant 300g, green curry paste 100g, coconut milk 500ml,water 500ml, fish sauce 1 tbsp, sugar 1 tbsp,",
    "https://www.recipetineats.com/wp-content/uploads/2019/02/Thai-Green-Curry_5.jpg"
  );

  const BakedPorkRibs = new food(
    "Baked Pork Ribs",
    "Pork Ribs 500g, salt 1/2 tps, pepper 1 tbsp, garlic 1 tbsp, honey 1 tbsp, oyster sauce 1 tbsp, soy sauce 1 tbsp, baking powder 1 tbsp,",
    "https://www.unileverfoodsolutions.co.th/dam/global-ufs/mcos/SEA/calcmenu/recipes/TH-recipes/red-meats-&-red-meat-dishes/%E0%B8%8B%E0%B8%B5%E0%B9%88%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%AD%E0%B8%9A/%E0%B8%8B%E0%B8%B5%E0%B9%88%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%AD%E0%B8%9A_header.jpg"
  );

  const PorkSausage = new food(
    "Pork Sausage",
    "pork 100g, baking soda 1/8 tps, suger 1/2 tps, seasoning powder 1/2 tps, pepper 1/2 tps, garlic 1/2 tps, water 50g,",
    "https://static5-th.orstatic.com/userphoto/Article/0/3M/000PU7B0E65CDDFD62589Bj.jpg"
  );

  let foods = [GreenCurry, BakedPorkRibs, PorkSausage];

  return (
    <>
      <Nav />
      <div className="flex">
        <Left foods={foods} setFoodShow={setFoodShow} />
        <Right foods={foods} foodShow={foodShow} />
      </div>
    </>
  );
}

export default App;
