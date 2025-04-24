<h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
  Detecte o Burnout Antes que Aconteça - V2
</h1>

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
      {/* Seção: O Problema */}
      <section>
        <h2 className="text-4xl font-bold text-red-600 mb-4">O Problema</h2>
        <p className="text-lg text-gray-700">
          O burnout custa bilhões às empresas todos os anos. A maioria não tem ferramentas para medir estresse em tempo real, e o RH age só depois do estrago.
        </p>
      </section>

      {/* Seção: Nossa Solução */}
      <section>
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Nossa Solução</h2>
        <p className="text-lg text-gray-700">
          Utilizamos dados biométricos simulados (como se fossem de pulseiras) e inteligência artificial para transformar números em recomendações práticas para o RH.
        </p>
      </section>

      {/* Seção: Benefícios */}
      <section>
        <h2 className="text-4xl font-bold text-green-600 mb-4">Benefícios</h2>
        <ul className="text-lg text-gray-700 list-disc list-inside space-y-2">
          <li>Relatórios fáceis de entender, com alertas personalizados.</li>
          <li>Reduza turnover.</li>
          <li>Aumente a produtividade.</li>
          <li>Melhore o bem-estar da sua equipe.</li>
        </ul>
      </section>

      {/* Botão de ação */}
      <div className="text-center pt-10">
        <a
          href="/contato"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
        >
          Solicitar Demonstração
        </a>
      </div>
    </div>
  );
}
