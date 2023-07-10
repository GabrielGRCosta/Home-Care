"use client";
import Image from 'next/image';
import { useState } from 'react';
import logo from '../images/logo.png';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

const Cadastro = () => {
  const [cadastroData, setCadastroData] = useState({
    nome: '',
    email: '',
    senha: '',
    celular: '',
    endereco: ''
  });

  const router = useRouter();

  const handleCadastroSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Dados do cadastro:', cadastroData);
    // Lógica para cadastrar o usuário com os dados do formulário
    router.push('/');
  };

  const handleCadastroChange = (e: { target: { name: any; value: any; }; }) => {
    setCadastroData({
      ...cadastroData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <header className="bg-blue-500 py-8">
        <div className="text-white mt-8">
        <div className="flex items-center justify-center">
          <Image src={logo} alt="Logo da Home Care" width={300} height={300} />
        </div>
          <h3 className="text-center text-4xl font-bold">Cadastro</h3>
        </div>
      </header>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
            <form onSubmit={handleCadastroSubmit}>
              <div className="mb-6">
                <label htmlFor="nome" className="block text-gray-700 font-semibold mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                  value={cadastroData.nome}
                  onChange={handleCadastroChange}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                  value={cadastroData.email}
                  onChange={handleCadastroChange}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="senha" className="block text-gray-700 font-semibold mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                  value={cadastroData.senha}
                  onChange={handleCadastroChange}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="celular" className="block text-gray-700 font-semibold mb-2">
                  Número de Celular
                </label>
                <input
                  type="text"
                  id="celular"
                  name="celular"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                  value={cadastroData.celular}
                  onChange={handleCadastroChange}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="endereco" className="block text-gray-700 font-semibold mb-2">
                  Endereço
                </label>
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                  value={cadastroData.endereco}
                  onChange={handleCadastroChange}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-4 font-semibold focus:outline-none"
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cadastro;