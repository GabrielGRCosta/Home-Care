"use client";
import Image from 'next/image';
import { useState } from 'react';
import logo from '../images/logo.png';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const router = useRouter();


  const handleLoginSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Dados do login:', loginData);
    // Lógica para autenticar o usuário com os dados do login
    router.push('/');
  };

  const handleLoginChange = (e: { target: { name: any; value: any; }; }) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const toCadastro = () => {
    router.push('/Cadastro');
  };

  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center login-container"> 
      <div className="min-h-screen bg-blue-600 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="text-center mb-8">
            <Image src={logo} alt="Logo da Home Care" width={300} height={300} />
            <h1 className="text-2xl font-bold mt-4">Login</h1>
          </div>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500 text-black"
                value={loginData.email}
                onChange={handleLoginChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500 text-black"
                value={loginData.password}
                onChange={handleLoginChange}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mx-3"
                onClick={handleLoginSubmit}
              >
                Acessar
              </button>
              <button
                type="button"
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mx-3"
                onClick={toCadastro}
              
                
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
