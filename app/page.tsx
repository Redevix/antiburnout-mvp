export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-4 text-center">
        AntiBurnout: Bem-estar que se mede
      </h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        80% das empresas não medem burnout. Nossa solução combina pulseiras que detectam níveis de estresse com relatórios automáticos em linguagem humana — sem planilhas, sem complicação.
      </p>
      <a
        href="#"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow"
      >
        Solicitar Demonstração
      </a>
    </main>
  );
}
