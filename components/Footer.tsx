const Footer = () => {
    return (
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Empresa de Home Care. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  