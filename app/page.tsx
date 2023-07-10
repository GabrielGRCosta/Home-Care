"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import logo from '../images/logo.png'

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <style jsx global>{`
        /* Adicione estilos globais aqui */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

        body {
          font-family: 'Montserrat', sans-serif;
        }

        h1 {
          font-size: 3rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 2rem;
          text-align: center;
        }

        h2 {
          font-size: 2.5rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 2rem;
          text-align: center;
        }

        p {
          font-size: 1.6rem;
          color: #666;
          line-height: 1.6;
          text-align: center;
        }

        .service {
          background-color: #FF6B6B;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .service-title {
          font-size: 2rem;
          font-weight: 600;
          color: #FFF;
          margin-bottom: 1rem;
        }

        .service-description {
          font-size: 1.6rem;
          color: #FFF;
          line-height: 1.6;
        }

        .service-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 1rem;
          margin-bottom: 1rem;
        }
      `}</style>


      

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-gray-800 text-white ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <nav className="flex flex-col h-full">
          <ul className="flex flex-col mt-12 ml-4 space-y-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Planos">Planos</Link>
            </li>
            <li>
              <Link href="/services">Serviços</Link>
            </li>
            {/* Adicione mais links para as outras páginas do site */}
          </ul>
        </nav>
      </aside>

      {/* Conteúdo da página */}
      <header className="bg-blue-500 py-8">
        <button
          className={`fixed top-4 left-4 z-50 bg-purple-500 hover:bg-purple-600 text-white rounded-full p-2 transition-transform duration-300 ease-in-out transform ${
            isSidebarOpen ? 'translate-x-64' : 'translate-x-0'
          }`}
          onClick={toggleSidebar}
        >
          <BiMenu className="h-6 w-6" />
        </button>

        <div className="absolute top-4 right-4 z-50 flex space-x-4">
          <Link className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-2 transition-transform duration-300 ease-in-out transform" href="/Cadastro">
              Cadastro
          </Link>
          <Link className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-2 transition-transform duration-300 ease-in-out transform" href="/Login">
              Login
          </Link>
        </div>

        <div className="flex items-center justify-center ">
          <div>
            <Image src={logo} alt="Logo da Home Care" width={300} height={300} />
          </div>
        </div>


        <div className="text-white mt-8">
          <h1>Bem-vindo ao Sistema de Home Care</h1>
          <p>Cuidando de você e de seus entes queridos</p>
        </div>
      </header>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2>Nossos Serviços</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="service">
              <h3 className="service-title">Acompanhamento Domiciliar</h3>
              <Image
                src="https://www.vitalmed.com.br/wp-content/uploads/2017/12/shutterstock_513803056_menor-795x450.jpg"
                className='rounded-3xl'
                alt="Descrição da imagem"
                width={600}
                height={300}
                objectFit="cover"
                objectPosition="center"
              />
              <p className="service-description">
                Oferecemos um serviço completo de acompanhamento domiciliar, garantindo que nossos pacientes tenham o
                suporte necessário em seu próprio ambiente.
              </p>
            </div>
            <div className="service">
              <h3 className="service-title">Terapia Ocupacional</h3>
              <Image
                src="https://images.educamaisbrasil.com.br/content/noticias/terapia-ocupacional-tudo-o-que-voce-precisa-saber_g.jpg"
                className='rounded-3xl'
                alt="Descrição da imagem"
                width={999}
                height={999}
                objectFit="cover"
                objectPosition="center"
              />
              <p className="service-description">
                Nossa equipe de terapeutas ocupacionais trabalha em estreita colaboração com os pacientes para ajudá-los
                a desenvolver habilidades motoras, cognitivas e sociais, promovendo sua independência e qualidade de vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 py-8 mt-auto">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Empresa de Home Care. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;



