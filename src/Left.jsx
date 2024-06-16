const Left = ({ foods, setFoodShow }) => {
  return (
    <div
      className="
        bg-gray-200 
        p-4 
        w-1/5 
        h-screen
    "
    >
      <ul>
        {foods.map((food) => (
          <p
            onClick={() => {
              setFoodShow(foods.indexOf(food));
            }}
          >
            <li
              className="
                p-2 
                bg-white 
                rounded-lg 
                shadow-md 
                mb-2 
            "
            >
              {food.name}
            </li>
          </p>
        ))}
      </ul>
    </div>
  );
};

export default Left;
