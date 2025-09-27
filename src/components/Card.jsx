import { LuSearch } from "react-icons/lu";

export const Card = ({
  image,
  name,
  type,
  comestible,
}) => {
  return (
<div className="card w-80 h-96 bg-white shadow-lg rounded-2xl overflow-hidden m-4">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold text-blue-500 mb-2">{name}</h2>
        <div className="flex gap-2">
          <span className="font-bold">
            Tipo:
          </span>
          <span>
            {type}
          </span>
        </div>
        <div className="flex gap-2">
          <span className="font-bold">
            Comestible:
          </span>
          <span>
            {comestible}
          </span>
        </div>
    <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 transition-all duration-200 text-white px-4 py-2 rounded-lg w-full flex items-center justify-center gap-1 mt-4">
          <LuSearch />
          Ver ficha
        </button>
      </div>
    </div>
  )
}