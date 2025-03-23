import { useState, useEffect } from "react";

export function HomePage() {
  return (
    <>
      {/* <div className="bg-gray-50 min-h-screen font-sans tracking-wide"> */}
      {/* Barra de navegación */}
      {/* <Navbar /> */}

      {/* Sección de héroe */}
      <HeroSection />

      {/* Sección de características / funciones */}
      <FeaturesSection />

      {/* Carrusel de patrocinadores */}
      <SponsorsCarousel />

      {/* Sección de testimonios */}
      <TestimonialsSection />

      {/* Sección de newsletter / suscripción */}
      <NewsletterSection />

      {/* Botón de chat */}
      <ChatButton />

      {/* Pie de página */}
      {/* <Footer /> */}
      {/* </div> */}
    </>
  );
}

/* ============================================================
   COMPONENTE: Navbar
   ============================================================ */
function Navbar() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="text-2xl font-bold">Tu Empresa</div>
          <button className="md:hidden focus:outline-none" aria-label="Menú">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </div>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row md:space-x-6 items-center">
            <li className="hover:text-blue-300 transition-colors duration-200">
              <a href="#inicio">Inicio</a>
            </li>
            <li className="hover:text-blue-300 transition-colors duration-200">
              <a href="#features">Características</a>
            </li>
            <li className="hover:text-blue-300 transition-colors duration-200">
              <a href="#testimonios">Testimonios</a>
            </li>
            <li className="hover:text-blue-300 transition-colors duration-200">
              <a href="#contacto">Contacto</a>
            </li>
            <li>
              <input
                type="text"
                placeholder="Buscar..."
                className="px-2 py-1 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </li>
            <li>
              <button className="bg-blue-700 px-3 py-1 rounded hover:bg-blue-800 transition-colors duration-200">
                Iniciar sesión
              </button>
            </li>
            <li>
              <select className="text-black px-2 py-1 rounded focus:outline-none">
                <option>Español</option>
                <option>English</option>
                <option>Deutsch</option>
                <option>Русский</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

/* ============================================================
   COMPONENTE: HeroSection
   ============================================================ */
function HeroSection() {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-b from-white to-blue-50 py-20 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-50 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full opacity-50 -ml-24 -mb-24"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="mb-8 text-xl md:text-2xl font-medium text-gray-700 bg-white bg-opacity-70 py-10 px-50 rounded-lg shadow-sm inline-block transform -rotate-1">
            <div className="mx-auto mb-2">
              <img
                src="/icon_black_icero.png"
                alt="iCero logo"
                className="h-50 w-50 mx-auto"
                style={{ transform: "scale(2)" }}
              />
            </div>
            <p>Empezamos desde cero,</p>
            <p>Informática desde cero.</p>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Visualiza Tu <span className="text-blue-800">Futuro</span> con
            Nosotros
          </h1>

          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto bg-white bg-opacity-70 p-4 rounded-lg">
            Digitalizamos tu empresa por el mejor precio. ¿Quieres empezar ya?
            ¡Contáctanos!
          </p>

          <div className="mt-8 space-y-4">
            <p className="text-lg text-gray-600">
              Equipo{" "}
              <span className="text-blue-600 font-semibold border-b-2 border-blue-300">
                titulado y preparado
              </span>{" "}
              para mejorar tu negocio.
            </p>

            <p className="text-lg text-gray-600">
              ¿Y tú, quieres{" "}
              <span className="text-blue-600 font-semibold border-b-2 border-blue-300">
                triunfar
              </span>{" "}
              junto a nosotros?
            </p>
          </div>

          <div className="mt-10 flex flex-col md:flex-row justify-center gap-6 max-w-md mx-auto">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform font-bold">
              Empezar
            </button>
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg font-medium">
              ¿Cómo funciona?
            </button>
          </div>
        </div>

        {/* Enhanced decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            <svg
              className="animate-pulse"
              width="120"
              height="120"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="48" stroke="#3B82F6" strokeWidth="4" />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#60A5FA"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              <path
                d="M50 20v60M20 50h60"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   COMPONENTE: FeaturesSection
   ============================================================ */
function FeaturesSection() {
  return (
    <section id="features" className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Características Destacadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-600 rounded-full text-white mr-4">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L20 8V16L12 22L4 16V8L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Innovación</h3>
            </div>
            <p className="text-gray-600">
              Constantemente innovamos para ofrecer soluciones que transformen
              tu negocio.
            </p>
          </div>
          {/* Feature Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-600 rounded-full text-white mr-4">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 12L12 3L21 12V21H3V12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Calidad</h3>
            </div>
            <p className="text-gray-600">
              Métodos de desarrollo y control de calidad de última generación
              para garantizar resultados rápidos y eficientes.
            </p>
          </div>
          {/* Feature Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-600 rounded-full text-white mr-4">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 20V10M12 10L8 14M12 10L16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Soporte</h3>
            </div>
            <p className="text-gray-600">
              Ofrecemos soporte y mantenimiento adicional, todo el año,
              directamente desde nuestro equipo.
            </p>
          </div>
        </div>
        {/* Más características con contenido repetitivo para extender la sección */}
        <div className="mt-12">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md mb-4">
              <h4 className="text-xl font-bold text-gray-800">
                Característica Extra {index + 1}
              </h4>
              <p className="text-gray-600 mt-2">
                Detalles adicionales sobre la característica extra número{" "}
                {index + 1}. Esta sección se repite para extender el contenido y
                ofrecer una descripción completa y extensa de cada punto.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   COMPONENTE: SponsorsCarousel
   ============================================================ */
function SponsorsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sponsors = [
    { id: 1, name: "Patrocinador 1", featured: false },
    { id: 2, name: "Patrocinador 2", featured: true },
    { id: 3, name: "Patrocinador 3", featured: false },
    { id: 4, name: "Patrocinador 4", featured: false },
    { id: 5, name: "Patrocinador 5", featured: false },
    { id: 6, name: "Patrocinador 6", featured: false },
  ];

  const visibleCount = 3;

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + visibleCount) % sponsors.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex - visibleCount;
      if (newIndex < 0) newIndex = sponsors.length - visibleCount;
      return newIndex;
    });
  };

  const visibleSponsors = sponsors.slice(
    currentIndex,
    currentIndex + visibleCount
  );
  // Si no hay suficientes elementos, se agregan desde el inicio para completar
  if (visibleSponsors.length < visibleCount) {
    visibleSponsors.push(
      ...sponsors.slice(0, visibleCount - visibleSponsors.length)
    );
  }

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Nuestros Patrocinadores
        </h2>
        <div className="flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="p-3 bg-gray-200 rounded-l hover:bg-gray-300 transition-colors duration-200"
            aria-label="Anterior"
          >
            ◀
          </button>
          <div className="flex overflow-hidden mx-4">
            {visibleSponsors.map((sponsor, index) => (
              <div
                key={sponsor.id}
                className={`min-w-[150px] mx-2 p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-center transition-all duration-300 ${
                  sponsor.featured ? "border-2 border-blue-600" : ""
                }`}
              >
                <div className="mb-2">
                  <svg
                    className="h-12 w-12 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">{sponsor.name}</p>
              </div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-3 bg-gray-200 rounded-r hover:bg-gray-300 transition-colors duration-200"
            aria-label="Siguiente"
          >
            ▶
          </button>
        </div>
        {/* Extensión del carrusel para más líneas */}
        <div className="mt-8 text-center text-gray-500">
          {Array.from({ length: 5 }).map((_, idx) => (
            <p key={idx}>
              Información adicional sobre patrocinadores línea {idx + 1}.
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   COMPONENTE: TestimonialsSection
   ============================================================ */
function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Cliente A",
      message:
        "La experiencia ha sido excepcional. La innovación y el compromiso se reflejan en cada paso del proceso.",
    },
    {
      id: 2,
      name: "Cliente B",
      message:
        "Gracias a ellos, nuestro negocio ha alcanzado nuevas alturas. Su equipo de soporte es de primera.",
    },
    {
      id: 3,
      name: "Cliente C",
      message:
        "Recomiendo encarecidamente sus servicios. La calidad y el profesionalismo son incomparables.",
    },
  ];

  return (
    <section id="testimonios" className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Testimonios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <p className="text-gray-700 mb-4">
                &ldquo;{testimonial.message}&rdquo;
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">CEO, Empresa X</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Líneas extra para aumentar el tamaño del componente */}
        <div className="mt-8">
          {Array.from({ length: 4 }).map((_, idx) => (
            <p key={idx} className="text-center text-gray-500">
              Comentario adicional de usuario {idx + 1}.
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   COMPONENTE: NewsletterSection
   ============================================================ */
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Aquí se podría llamar a una API para gestionar la suscripción
    setSubscribed(true);
  };

  return (
    <section id="contacto" className="bg-blue-600 py-16 px-4 md:px-8">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Suscríbete a nuestro Newsletter
        </h2>
        {!subscribed ? (
          <form onSubmit={handleSubscribe} className="max-w-lg mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <input
                type="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full md:flex-1 px-4 py-3 rounded-md text-gray-800 focus:outline-none mb-4 md:mb-0 md:mr-4"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors duration-200"
              >
                Suscribirme
              </button>
            </div>
          </form>
        ) : (
          <p className="text-xl font-semibold mt-4">
            ¡Gracias por suscribirte!
          </p>
        )}
        {/* Líneas decorativas para extender la sección */}
        <div className="mt-8">
          {Array.from({ length: 3 }).map((_, idx) => (
            <p key={idx} className="mt-2">
              Información adicional de newsletter, línea {idx + 1}.
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   COMPONENTE: ChatButton
   ============================================================ */
function ChatButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-blue-600 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 hover:bg-blue-700 transition-colors duration-200">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h12a2 2 0 012 2v10z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>💬 ¿Ayuda? ¡Hablemos!</span>
      </button>
      {/* Líneas extra decorativas */}
      <div className="mt-2 text-xs text-gray-700 text-right pr-2">
        <p>Línea adicional 1</p>
        <p>Línea adicional 2</p>
      </div>
    </div>
  );
}

/* ============================================================
   COMPONENTE: Footer
   ============================================================ */
function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">
            Acerca de Nosotros
          </h3>
          <p>
            Somos una empresa dedicada a transformar ideas en realidades.
            Nuestro equipo trabaja constantemente para brindar la mejor
            experiencia a nuestros clientes.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Enlaces Rápidos</h3>
          <ul>
            <li className="mb-2 hover:text-white transition-colors duration-200">
              <a href="#inicio">Inicio</a>
            </li>
            <li className="mb-2 hover:text-white transition-colors duration-200">
              <a href="#features">Características</a>
            </li>
            <li className="mb-2 hover:text-white transition-colors duration-200">
              <a href="#testimonios">Testimonios</a>
            </li>
            <li className="mb-2 hover:text-white transition-colors duration-200">
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Contáctanos</h3>
          <p className="mb-2">Dirección: Calle Falsa 123, Ciudad</p>
          <p className="mb-2">Teléfono: +123 456 789</p>
          <p>Email: info@tuempresa.com</p>
        </div>
      </div>
      {/* Extensión del footer para cumplir con líneas extra */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos
          reservados.
        </p>
        <p>Política de privacidad | Términos de servicio | Aviso legal</p>
        <div className="mt-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <p key={idx} className="text-gray-500">
              Información adicional del footer, línea {idx + 1}.
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   SECCIÓN EXTRA: Contenido Adicional para Extender el Código
   ============================================================ */
function ExtraContent() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contenido Adicional
        </h2>
        {Array.from({ length: 10 }).map((_, idx) => (
          <div key={idx} className="mb-6 p-4 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Título Sección Extra {idx + 1}
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              volutpat mollis justo, ac scelerisque metus interdum id. Proin
              eget tincidunt leo. Sed euismod, nunc at hendrerit pharetra, urna
              orci interdum ex, nec pharetra odio arcu in neque. Integer at
              lectus sit amet metus vestibulum volutpat.
            </p>
            <p className="text-gray-500 mt-2">
              Frase decorativa adicional para extender la longitud de esta
              sección, línea {idx + 1}.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
