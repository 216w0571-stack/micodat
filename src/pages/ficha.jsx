import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const Ficha = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("descripcion");
  const [hongo, setHongo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const getHongo = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/hongos/' + id);
        console.log(response.data);
        setHongo(response.data);
        setError(null);
      } catch (err) {
        console.error('Error al obtener el hongo:', err);
        setError('Error al cargar la información del hongo');
      } finally {
        setLoading(false);
      }
    }
    getHongo()
  }, [id]);

  // Estados de carga y error
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-4">Cargando información del hongo...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">{error}</p>
          <Link 
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium"
          >
            ← Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  if (!hongo) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Hongo no encontrado</p>
          <Link 
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium"
          >
            ← Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  // Función helper para mostrar contenido o mensaje por defecto
  const renderContent = (content, defaultMessage = "Información no disponible") => {
  return content && content.trim() ? content : defaultMessage;
};

console.log(JSON.stringify(hongo, null, 2));

const tabs = [
    { key: "descripcion_es", label: "Descripción" },
    { key: "usos", label: "Usos" },
    { key: "tecnicas_recoleccion", label: "Técnicas de recolección" },
    { key: "cultivo", label: "Cultivo" },
    { key: "conservacion", label: "Conservación" },
    { key: "ritualidad", label: "Ritualidad" },
    { key: "significado_local", label: "Significado Local" },
  ];
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Verde */}
      <header className="bg-green-600 text-white p-4">
        <h1 className="text-2xl font-bold text-center">
          {hongo.nombre_es} Ficha Profesional
        </h1>
        
        {/* Botones de navegación */}
        <div className="flex gap-2 mt-4 justify-start">
          <Link 
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
          >
            ← Volver al catálogo
          </Link>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded text-sm font-medium transition-colors">
            🏺 Cambiar a Náhuatl
          </button>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-4xl mx-auto p-4">
        {/* Imagen del Hongo */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <img 
            src={hongo.imagen ? `http://localhost:3000/images/${hongo.imagen}` : '/placeholder-mushroom.jpg'} 
            alt={hongo.nombre_es}
            className="w-full max-w-2xl mx-auto h-80 object-cover rounded-lg"
            onError={(e) => {
              e.target.src = '/placeholder-mushroom.jpg';
            }}
          />
        </div>

        {/* Nombre y Etiqueta */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-2xl font-bold text-gray-800">
<h2>
  <span>{hongo.nombre_es}</span>
</h2>
              </p>
              {hongo.nombre_nah && (
                <p className="text-lg text-gray-600 italic mt-1">
                  <h2 className="text-3xl font-bold mb-2">{hongo.nombre_nah}</h2>
                </p>
              )}
            </div>
            <div className="flex gap-2">
              {hongo.comestible === 1 ? (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Comestible
                </span>
              ) : (
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  No Comestible
                </span>
              )}
              {hongo.tipo === "1" ? (
    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
      Cultivado
    </span>
  ) : (
    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
      Silvestre
    </span>
  )}
            </div>
          </div>
        </div>

        {/* Pestañas */}
        <div className="bg-white rounded-lg shadow-md">
          {/* Navegación de pestañas */}
          <div className="border-b border-gray-200">
            <nav className="flex flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.key
                      ? 'border-green-600 text-green-600 bg-green-50'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contenido de la pestaña activa */}
          <div className="p-6">
            <div className="text-gray-700 leading-relaxed">
              {activeTab === 'descripcion' && (
                <p>{renderContent(hongo.descripcion_es)}</p>
              )}
              {activeTab === 'usos' && (
                <p>{renderContent(hongo.usos)}</p>
              )}
              {activeTab === 'tecnicas' && (
                <p>{renderContent(hongo.tecnicas_recoleccion)}</p>
              )}
              {activeTab === 'cultivo' && (
                <p>{renderContent(hongo.cultivo)}</p>
              )}
              {activeTab === 'conservacion' && (
                <p>{renderContent(hongo.conservacion)}</p>
              )}
              {activeTab === 'ritualidad' && (
                <p>{renderContent(hongo.ritualidad)}</p>
              )}
              {activeTab === 'significado' && (
                <p>{renderContent(hongo.significado_local)}</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};