import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export const Card = ({ id, image, name, type, comestible }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl overflow-hidden w-80 shadow-lg">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold text-blue-500 mb-2">{name}</h2>

        <div className="flex gap-1">
          <span className="font-bold">Tipo:</span>
          <span>{type}</span>
        </div>

        <div className="flex gap-1">
          <span className="font-bold">Comestible:</span>
          <span>{comestible}</span>
        </div>

        <button
          onClick={() => navigate(`/ficha/${id}`)}
          className="bg-blue-500 cursor-pointer hover:bg-blue-600 transition-all duration-200 text-white px-4 py-2 rounded-lg w-full flex items-center justify-center gap-1 mt-4"
        >
          <LuSearch />
          Ver ficha
        </button>
      </div>
    </div>
  );
};
