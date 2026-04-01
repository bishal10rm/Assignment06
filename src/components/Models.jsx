import React, { useState, useEffect } from "react";
const Models = ({ modelPromise, selectedProducts }) => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    if (!modelPromise) return;
    modelPromise
      .then((data) => {
        setModels(data);
      })
      .catch((err) => console.error(err));
  }, [modelPromise]);

//   conditional rendering 
    const displayModels =
      selectedProducts === "available"
      ? models 
      : models.filter((m) => m.selected === true);
    return (
      <div className="container mx-auto mt-10">
       {displayModels.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayModels.map((model) => (
            <div
              key={model.id}
              className="border p-5 rounded-2xl shadow hover:shadow-lg"
            >
              <span className="inline-block bg-[#4F39F6] text-white rounded-full text-sm px-3 py-1">
                {model.tag}
              </span>
              <h2 className="text-2xl font-bold mt-2">{model.name}</h2>
              <h3 className="text-[16px] mt-1">{model.description}</h3>
              <h3 className="text-xl mt-1">{model.period}</h3>
              <h3 className="text-[16px] mt-1">{model.features.join(", ")}</h3>
              <p className="text-gray-500 mt-2">Price: ${model.price}</p>
              <button className="btn bg-[#4F39F6] w-full mt-4">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Models;