import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  const sections = [
    { title: "Índice", page: 1 },
    { title: "Introducción", page: 2 },
    { title: "Objetivo de la Investigación", page: 3 },
    { title: "Desarrollo", page: 4 },
    { title: "Historia del Observatorio", page: 6 },
    { title: "Tecnología y Equipo", page: 7 },
    { title: "Contribuciones a la Ciencia", page: 8 },
    { title: "Participantes del Proyecto", page: 9 },
    { title: "Conclusiones", page: 10 },
    { title: "Bibliografía", page: 11 }
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Investigación del Observatorio ALMA</h1>
          <h2 className="text-2xl font-semibold text-gray-700">Atacama Large Millimeter Array</h2>
        </header>

        <main className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Índice</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {sections.map((section, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{section.title}</span>
                    <span className="text-gray-500">Página {section.page}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Introducción</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Chile se ha convertido en un epicentro mundial para la astronomía, gracias a sus cielos excepcionalmente claros y secos, 
                especialmente en el desierto de Atacama. La importancia de Chile en la astronomía global es innegable, albergando 
                algunos de los observatorios más avanzados del mundo. Estos incluyen no solo ALMA, sino también el Very Large Telescope (VLT), 
                el futuro Extremely Large Telescope (ELT), y muchos otros. La contribución de Chile a la astronomía ha sido fundamental 
                para numerosos descubrimientos astronómicos, desde la detección de exoplanetas hasta el estudio de galaxias distantes, 
                posicionando al país como un líder en la investigación astronómica internacional.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Objetivo de la Investigación</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                El objetivo principal de esta investigación es estudiar el Atacama Large Millimeter Array (ALMA) debido a su 
                capacidad única para observar el universo en longitudes de onda milimétricas y submilimétricas. ALMA fue elegido 
                por su incomparable resolución y sensibilidad, que permiten investigar la formación de estrellas y planetas, 
                detectar moléculas complejas en el espacio, y estudiar galaxias en las etapas más tempranas del universo. 
                Además, su ubicación en el desierto de Atacama proporciona condiciones atmosféricas ideales para este tipo de 
                observaciones, haciendo de ALMA un instrumento crucial para avanzar nuestra comprensión del cosmos.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Desarrollo</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Ubicación del Observatorio</h3>
              <p className="text-gray-700 mb-4">
                ALMA está ubicado en el Llano de Chajnantor, en la cordillera de los Andes del norte de Chile, específicamente en la Región de Antofagasta. 
                Este sitio se encuentra a una altitud de aproximadamente 5.000 metros sobre el nivel del mar, lo que lo convierte en uno de los 
                observatorios astronómicos más altos del mundo.
              </p>
              <h4 className="text-lg font-semibold mb-2">Descripción Geográfica y Climatológica</h4>
              <p className="text-gray-700 mb-4">
                El Llano de Chajnantor es parte del desierto de Atacama, conocido por ser uno de los lugares más áridos del planeta. 
                La región se caracteriza por su terreno volcánico y su extrema sequedad. El clima es frío y seco, con temperaturas que 
                pueden variar drásticamente entre el día y la noche.
              </p>
              <h4 className="text-lg font-semibold mb-2">Condiciones Atmosféricas</h4>
              <p className="text-gray-700">
                La atmósfera en esta ubicación es excepcionalmente seca y estable, con muy poca interferencia de vapor de agua. 
                Estas condiciones son ideales para las observaciones en longitudes de onda milimétricas y submilimétricas, ya que 
                el vapor de agua atmosférico puede absorber y distorsionar estas señales. La baja humedad y la alta altitud 
                proporcionan una claridad atmosférica excepcional, crucial para el funcionamiento óptimo de ALMA.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historia del Observatorio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                ALMA fue concebido en la década de 1990 como un proyecto internacional ambicioso para crear el radiotelescopio 
                más potente del mundo. La fundación oficial del proyecto se produjo en 2003, cuando el Observatorio Europeo Austral (ESO), 
                la Fundación Nacional de Ciencias de Estados Unidos (NSF) y los Institutos Nacionales de Ciencias Naturales de Japón (NINS) 
                unieron fuerzas para llevar a cabo este megaproyecto científico.
              </p>
              <p className="text-gray-700 mb-4">
                La construcción de ALMA comenzó en 2003 y se completó en 2013, aunque las primeras observaciones científicas 
                se realizaron en 2011 con un conjunto parcial de antenas. El observatorio fue inaugurado oficialmente el 13 de marzo de 2013.
              </p>
              <p className="text-gray-700">
                ALMA se fundó con el objetivo de proporcionar a los astrónomos una herramienta sin precedentes para estudiar 
                el universo frío, donde se forman las estrellas y los planetas, y para observar algunas de las galaxias más 
                distantes y antiguas del universo. Su ubicación en Chile fue elegida debido a las condiciones atmosféricas 
                ideales del desierto de Atacama y al compromiso del país con la investigación astronómica internacional.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tecnología y Equipo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                ALMA consta de 66 antenas de alta precisión que trabajan juntas como un solo telescopio. Estas antenas se dividen en:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                <li>50 antenas de 12 metros de diámetro para el array principal</li>
                <li>12 antenas de 7 metros de diámetro para el Atacama Compact Array</li>
                <li>4 antenas de 12 metros adicionales para el Total Power Array</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Las antenas pueden ser movidas y reconfiguradas, con separaciones que van desde 150 metros hasta 16 kilómetros, 
                permitiendo a ALMA observar el universo en diferentes escalas de resolución.
              </p>
              <p className="text-gray-700 mb-4">
                ALMA utiliza receptores superconductores extremadamente sensibles, enfriados a temperaturas cercanas al cero absoluto, 
                para detectar señales débiles del espacio profundo. El observatorio también cuenta con un superordenador correlador 
                que combina las señales de todas las antenas, actuando como el "cerebro" de ALMA.
              </p>
              <p className="text-gray-700">
                Todo este equipo permite a ALMA observar el universo en longitudes de onda milimétricas y submilimétricas, 
                proporcionando imágenes de alta resolución y espectros detallados de objetos astronómicos.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contribuciones a la Ciencia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Desde su puesta en marcha, ALMA ha realizado numerosas contribuciones significativas a la astronomía y la astrofísica:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                <li>
                  <strong>Formación de planetas:</strong> ALMA ha capturado imágenes detalladas de discos protoplanetarios 
                  alrededor de estrellas jóvenes, revelando estructuras como anillos y brechas que indican la formación de planetas.
                </li>
                <li>
                  <strong>Galaxias distantes:</strong> Ha detectado y estudiado algunas de las galaxias más distantes y antiguas 
                  conocidas, proporcionando información sobre la formación y evolución temprana de las galaxias.
                </li>
                <li>
                  <strong>Moléculas complejas:</strong> ALMA ha descubierto moléculas orgánicas complejas en el espacio, 
                  incluyendo azúcares y precursores de aminoácidos, contribuyendo a nuestra comprensión de la química prebiótica en el universo.
                </li>
                <li>
                  <strong>Agujeros negros:</strong> Ha proporcionado imágenes de alta resolución de los discos de acreción 
                  alrededor de agujeros negros supermasivos, contribuyendo a nuestra comprensión de estos objetos extremos.
                </li>
                <li>
                  <strong>Evolución estelar:</strong> ALMA ha estudiado en detalle las últimas etapas de la vida de las estrellas, 
                  revelando procesos complejos de pérdida de masa y formación de nebulosas planetarias.
                </li>
              </ul>
              <p className="text-gray-700">
                Estas contribuciones han revolucionado nuestra comprensión del universo frío y han abierto nuevas áreas de investigación en astronomía. 
                ALMA continúa siendo una herramienta crucial para los astrónomos en todo el mundo, proporcionando datos que desafían y 
                expanden nuestros modelos del cosmos.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Participantes del Proyecto</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Dra. María González - Investigadora Principal, Astrofísica</li>
                <li>Dr. Carlos Rodríguez - Especialista en Radioastronomía</li>
                <li>Ing. Laura Müller - Ingeniera de Instrumentación</li>
                <li>Dr. Ahmed Hassan - Astrónomo de Datos</li>
                <li>Dra. Sophie Chen - Experta en Formación Estelar</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Conclusiones</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Resumen de lo Aprendido</h3>
              <p className="text-gray-700 mb-4">
                A lo largo de esta investigación, hemos profundizado en diversos aspectos del Observatorio ALMA, desde su ubicación 
                estratégica en el desierto de Atacama hasta sus contribuciones revolucionarias en el campo de la astronomía. Hemos 
                aprendido sobre la complejidad de su tecnología, que incluye 66 antenas de alta precisión trabajando en conjunto, y 
                cómo esta configuración única permite observaciones sin precedentes del universo en longitudes de onda milimétricas 
                y submilimétricas.
              </p>
              <p className="text-gray-700 mb-4">
                Además, hemos explorado cómo ALMA ha transformado nuestra comprensión de procesos fundamentales en el cosmos, desde 
                la formación de planetas y estrellas hasta la evolución de galaxias y el comportamiento de agujeros negros supermasivos. 
                La capacidad de ALMA para detectar moléculas complejas en el espacio ha abierto nuevas vías de investigación en 
                astrobiología y en el estudio de los orígenes de la vida.
              </p>
              <h3 className="text-xl font-semibold mb-2">Importancia del Observatorio</h3>
              <p className="text-gray-700 mb-4">
                Para Chile, ALMA representa un hito en su compromiso con la investigación astronómica de vanguardia. El observatorio 
                no solo ha puesto a Chile en el mapa de la astronomía mundial, sino que también ha impulsado el desarrollo científico 
                y tecnológico en el país, atrayendo a investigadores de todo el mundo y fomentando la colaboración internacional.
              </p>
              <p className="text-gray-700">
                A nivel mundial, ALMA se ha establecido como una herramienta indispensable para la comunidad astronómica. Sus 
                capacidades únicas han permitido descubrimientos que están redefiniendo nuestra comprensión del universo. Desde la 
                detección de galaxias en los confines del universo observable hasta el estudio detallado de la formación planetaria 
                en nuestro vecindario cósmico, ALMA continúa expandiendo las fronteras del conocimiento astronómico, consolidando 
                su posición como uno de los observatorios más importantes y productivos en la historia de la astronomía.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bibliografía</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Las fuentes utilizadas para esta investigación incluyen:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Sitio web oficial de ALMA: <a href="https://www.almaobservatory.org" className="text-blue-600 hover:underline">https://www.almaobservatory.org</a></li>
                <li>European Southern Observatory (ESO): <a href="https://www.eso.org" className="text-blue-600 hover:underline">https://www.eso.org</a></li>
                <li>National Radio Astronomy Observatory (NRAO): <a href="https://public.nrao.edu" className="text-blue-600 hover:underline">https://public.nrao.edu</a></li>
                <li>Artículos científicos publicados en revistas como Nature y Astronomy & Astrophysics</li>
                <li>Informes técnicos y comunicados de prensa de ALMA</li>
                <li>Entrevistas y declaraciones de científicos asociados al proyecto ALMA</li>
                <li>Recursos educativos de astronomía de universidades chilenas e internacionales</li>
                <li>Búsquedas en Google Scholar para artículos académicos relacionados con ALMA y sus descubrimientos</li>
                <li>Bases de datos astronómicas como NASA ADS (Astrophysics Data System)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Nota: Esta bibliografía se ha compilado utilizando fuentes disponibles públicamente y búsquedas en Google. 
                Para una investigación académica formal, se recomienda profundizar en fuentes primarias y artículos revisados por pares.
              </p>
            </CardContent>
          </Card>
        </main>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          © 2024 Investigación ALMA. Todos los derechos reservados.
        </footer>
      </div>
    </div>
  )
}