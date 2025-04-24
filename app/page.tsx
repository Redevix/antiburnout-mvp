export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8 text-gray-900">
      {/* Seção de Título com Imagem */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">
          AntiBurnout: Medindo o Estresse de Forma Inteligente
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          80% das empresas não medem burnout. Nossa solução é simples: pulseiras que detectam níveis de estresse e relatórios automáticos em linguagem humana.
        </p>
        <img
          src="/img/pulseira-estresse.jpg" // Coloque sua imagem aqui
          alt="Pulseira Anti-Burnout"
          className="w-full max-w-md mx-auto rounded-xl shadow-lg"
        />
      </div>

      {/* Botão de Solicitação */}
      <div className="mt-8">
        <a
          href="/contato"  // Alterar o link para uma página de contato ou formulário
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-xl"
        >
          Solicitar Demonstração
        </a>
      </div>
    </main>
  );
}
