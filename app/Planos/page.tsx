"use client";
import Image from 'next/image';
import PlanCard from '../../Home-Care/components/PlanCard';
import { BiCalendarWeek,BiChart,BiCalendar,BiWrench } from 'react-icons/bi';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import logo from '../images/logo.png'
import Link from 'next/link';

const Planos = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
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

        <div className="text-white mt-8">
          <h1 className="text-center text-4xl font-bold ">Planos</h1>
        </div>
      </header>
      <section className="py-12 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-center text-2xl font-bold mb-8">Nossos Planos</h2>
    <div className="flex flex-wrap justify-center -mx-4 text-gray-700">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
        <div className="mt-4">
          <PlanCard plan="weekly" title="Plano Semanal" description="Flexível para atender às suas necessidades semanais de assistência domiciliar." />
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
        <div className="mt-4">
          <PlanCard plan="monthly" title="Plano Mensal" description="Abrangente para fornecer assistência domiciliar contínua durante todo o mês." />
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
        <div className="mt-4">
          <PlanCard plan="annual" title="Plano Anual" description="Econômico para receber assistência domiciliar ao longo de todo o ano, com benefícios exclusivos." />
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
        <div className="mt-4">
          <PlanCard plan="custom" title="Plano Personalizado" description="Crie um plano personalizado de acordo com suas necessidades específicas de assistência domiciliar." />
        </div>
      </div>
    </div>
  </div>
</section>




    </div>
  );
};

export default Planos;
