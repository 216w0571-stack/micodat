import React, { Fragment } from "react";
import { LuFilter } from "react-icons/lu";

import "./App.css";
import { Card } from "./components/Card";
import { CgPassword } from "react-icons/cg";



function App() {

  const hongos = [
    {
      id: 1,
      name: 'Volvariella bombycina (Volvaria sedosa)',
      type: 'Silvestre',
      comestible: 'No',
      image: 'https://www.mushroom.pro/c_galleries/a_1k/images/Volvariella_bombycina.jpg',
    },
    {
      id: 2,
      name: 'Pleurotus Ostreatus',
      type: 'Cultivo',
      comestible: 'Si',
      image: 'https://lacasadelassetas.com/blog/wp-content/uploads/2019/01/07-seta-de-ostra-pleurotus-ostreatus-lacasadelassetas.jpg',
    },
    {
      id: 3,
      name: 'Russula virescens (Gorro Verde)',
      type: 'Silvestre',
      comestible: 'No',
      image: 'https://inaturalist-open-data.s3.amazonaws.com/photos/9476621/medium.jpg',
    },
    {
      id: 4,
      name: 'Dacryopinax spathularia',
      type: 'Silvestre',
      comestible: 'No',
      image: 'https://www.anbg.gov.au/fungi/images/0080.jpg',
    },
  ]

  return (
    <Fragment>
      <header className="bg-green-600 w-full h-20 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white">
          Catálogo Profesional de Hongos
        </h1>
      </header>
      <main className="bg-gray-100 w-full h-dvh">
        <form className="flex gap-2 justify-center items-center pt-4">
          <input 
            type="text" 
            placeholder="Buscar por nombre..." 
            className="rounded-lg p-2 border border-gray-300 bg-white"
          />
          <select className="rounded-lg p-2 border border-gray-300 bg-white">
            <option value="">Todos los tipos</option>
            <option value="comestible">Comestible</option>
            <option value="incomestible">Incomestible</option>
          </select>
          <select className="rounded-lg p-2 border border-gray-300 bg-white">
            <option value="">Todos</option>
            <option value="vivo">Vivo</option>
            <option value="muerto">Muerto</option>
          </select>
          <button 
            htmlType="submit"
            className="rounded-lg bg-green-600 text-white p-2 cursor-pointer flex items-center gap-1"
          >
            <LuFilter />
            Filtrar
          </button>
        </form>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 place-items-center justify-items-center max-w-5xl mx-auto">
          {
            hongos.map((hongo) => (
              <Card
                key={hongo.id}
                {...hongo}
              />
            ))
          }
        </section>
      </main>
    </Fragment>
  );
}

export default App;
