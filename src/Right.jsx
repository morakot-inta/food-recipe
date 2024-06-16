const Right = ({ foods, foodShow }) => {
  return (
    <div
      className="
        p-4 
        w-4/5 
        h-screen 
    "
    >
      <h1
        className="
            text-2xl 
            font-semibold 
            mb-4
         
      "
      >
        {foods[foodShow].name}
      </h1>
      <p
        className="
            text-gray-500
            mb-4
      "
      >
        {foods[foodShow].description}
      </p>
      <img
        src={foods[foodShow].image}
        alt={foods[foodShow].name}
        className="
            rounded-lg 
            shadow-lg 
            mt-4
        "
      />
    </div>
  );
};
export default Right;
