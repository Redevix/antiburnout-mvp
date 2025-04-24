export default function PaginaObrigado() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
      <h1 className="text-5xl font-bold text-green-600 mb-6">
        Obrigado pela sua solicitação!
      </h1>
      <p className="text-lg text-gray-700 max-w-xl">
        Recebemos seu pedido de demonstração e em breve entraremos em contato com você.  
        Enquanto isso, sinta-se à vontade para explorar mais sobre nossa solução.
      </p>

      <a
        href="/"
        className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Voltar para o Início
      </a>
    </div>
  );
}
