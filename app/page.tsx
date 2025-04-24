// app/page.tsx

export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Detecte o Burnout Antes que Aconteça</h1>
        <p className="text-xl text-gray-600">
          80% das empresas não medem estresse. Nossa plataforma prevê sinais de burnout e entrega relatórios prontos para o RH — com linguagem humana.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">O Problema</h2>
        <p className="text-gray-700">
          O burnout custa bilhões às empresas todos os anos. A maioria não tem ferramentas para medir estresse em tempo real, e o RH age só depois do estrago.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">Nossa Solução</h2>
        <p className="text-gray-700">
          Utilizamos dados biométricos simulados (como se fossem de pulseiras) e inteligência artificial para transformar números em recomendações práticas para o RH.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">Benefícios</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Relatórios fáceis de entender, com alertas personalizados</li>
          <li>Reduza turnover</li>
          <li>Aumente produtividade</li>
          <li>Melhore o bem-estar da sua equipe</li>
        </ul>
      </section>

      <section className="space-y-4 bg-gray-100 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-gray-800">Exemplo de Relatório</h2>
        <p className="text-gray-700 italic">
          Alerta Semanal - Equipe de Produto
        </p>
        <p className="text-gray-700">
          "Na última semana, 3 colaboradores apresentaram aumento no índice de estresse. Recomendamos uma conversa individual e ajustes de carga de trabalho no time de produto."
        </p>
        <p className="text-yellow-600 font-semibold">Alerta Médio<br/>Time: Produto</p>
      </section>
    </main>
  );
}
