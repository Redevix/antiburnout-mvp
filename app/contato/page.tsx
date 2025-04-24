export default function SolicitarDemonstração() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Solicitar Demonstração
      </h1>

      <p className="text-xl text-center mb-8">
        Preencha o formulário abaixo e nossa equipe entrará em contato para agendar a demonstração.
      </p>

      {/* Formulário de Solicitação */}
      <form className="space-y-6">
        <div>
          <label htmlFor="nome" className="block text-lg font-medium text-gray-700">
            Nome da Empresa
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg"
            placeholder="Digite o nome da sua empresa"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div>
          <label htmlFor="mensagem" className="block text-lg font-medium text-gray-700">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            required
            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg"
            rows={6}
            placeholder="Fale um pouco sobre sua empresa ou o que você está buscando"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-xl"
          >
            Enviar Solicitação
          </button>
        </div>
      </form>
    </div>
  );
}
