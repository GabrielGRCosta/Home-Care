"use client";
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import logo from '../images/logo.png'

const DetalhesPlano = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const  pathname  = usePathname();
  const  searchParams  = useSearchParams();
  const plano = searchParams.get('plano');

  // Lógica para obter as informações do plano com base no tipo (plano)

  const planoInfo = {
    descricao: 'Descrição do Plano',
    valor: '$99.99',
    duracao: '1 mês',
    detalhes: [
      'Benefício 1',
      'Benefício 2',
      'Benefício 3',
      'Benefício 4',
      'Benefício 5',
    ],
    // Outras informações do plano
  };

  return (
    <div className="min-h-screen bg-white"> 


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



        <header className="bg-blue-500 py-8">
        <button
          className={`fixed top-4 left-4 z-50 bg-purple-500 hover:bg-purple-600 text-white rounded-full p-2 transition-transform duration-300 ease-in-out transform ${
            isSidebarOpen ? 'translate-x-64' : 'translate-x-0'
          }`}
          onClick={toggleSidebar}
        >
          <BiMenu className="h-6 w-6" />
        </button>

        <div className="flex items-center justify-center ">
          <div>
            <Image src={logo} alt="Logo da Home Care" width={300} height={300} />
          </div>
        </div>

      </header>


      <section className="py-12 bg-white text-black">
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-4">Detalhes do Plano {plano}</h1>
            <p className="text-gray-700 mb-6">{planoInfo.descricao}</p>
            <div className="flex items-center justify-between">
            <div className="flex items-center">
                <span className="text-2xl font-bold mr-2">{planoInfo.valor}</span>
                <span className="text-gray-500">{planoInfo.duracao}</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Comprar Plano
            </button>
            </div>
            <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Detalhes do Plano</h2>
            <ul className="list-disc ml-6">
                {planoInfo.detalhes.map((item) => (
                <li key={item} className="text-gray-700">
                    {item}
                </li>
                ))}
            </ul>
            </div>
        </div>
        
        </section>

    </div>
  );
};

export default DetalhesPlano;


