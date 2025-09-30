import { Fragment } from "react";
import { Card } from "../components/Card";
import { LuFilter } from "react-icons/lu";

export const Lista = () => {
  const hongos = [
    {
      id: 1,
      name: "Volvariella bombycina (Volvaria sedosa)",
      type: "Silvestre",
      comestible: "No",
      image: "https://www.mushroom.pro/c_galleries/a_1k/images/Volvariella_bombycina.jpg",
    },
    {
      id: 2,
      name: "Pleurotus Ostreatus",
      type: "Cultivo",
      comestible: "Si",
      image: "https://lacasadelassetas.com/blog/wp-content/uploads/2019/01/07-seta-de-ostra-pleurotus-ostreatus-lacasadelassetas.jpg",
    },
    {
      id: 3,
      name: "Russula virescens (Gorro Verde)",
      type: "Silvestre",
      comestible: "No",
      image: "https://inaturalist-open-data.s3.amazonaws.com/photos/9476621/medium.jpg",
    },
    {
      id: 4,
      name: "Dacryopinax spathularia",
      type: "Silvestre",
      comestible: "No",
      image: "https://www.anbg.gov.au/fungi/images/0080.jpg",
    },
  ];

  return (
    <Fragment>
      <header className="bg-green-600 w-full h-20 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white">
          Catálogo Profesional de Hongos
        </h1>
      </header>

      <main className="bg-gray-100 w-full min-h-screen">
        {/* Barra de filtros */}
        <form className="flex gap-2 justify-center items-center pt-4">
          <div className="flex flex-col">
            <label htmlFor="buscarNombre" className="sr-only">Buscar por nombre</label>
            <input
              id="buscarNombre"
              name="buscarNombre"
              type="text"
              placeholder="Buscar por nombre..."
              className="rounded-lg p-2 border border-gray-300 bg-white"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="tipoHongo" className="sr-only">Tipo de hongo</label>
            <select
              id="tipoHongo"
              name="tipoHongo"
              className="rounded-lg p-2 border border-gray-300 bg-white"
            >
              <option value="">Todos los tipos</option>
              <option value="comestible">Cultivo</option>
              <option value="incomestible">Silvestre</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="estado" className="sr-only">Estado</label>
            <select
              id="estado"
              name="estado"
              className="rounded-lg p-2 border border-gray-300 bg-white"
            >
              <option value="">Todos</option>
              <option value="vivo">Comestible</option>
              <option value="muerto">Incomestible</option>
            </select>
          </div>

         <button
    type="submit"
    className="rounded-lg bg-green-600 text-white p-2 cursor-pointer flex items-center gap-1"
  >
    <LuFilter />
    Filtrar
  </button>
        </form>

        {/* Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 place-items-center justify-items-center max-w-5xl mx-auto">
          {hongos.map((hongo) => (
            <Card key={hongo.id} {...hongo} />
          ))}
        </section>
      </main>
    </Fragment>
  );
};
