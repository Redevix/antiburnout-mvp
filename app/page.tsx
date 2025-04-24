import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Detecte o Burnout Antes que Aconteça
        </h1>
        <p className="text-lg md:text-xl mb-10">
          80% das empresas não medem estresse. Nossa plataforma prevê sinais de burnout e entrega relatórios prontos para o RH — com linguagem humana.
        </p>

        <div className="space-y-10">
          <div className="flex items-start space-x-4">
            <Image src="/problema.svg" alt="Problema" width={40} height={40} />
            <div>
              <h2 className="text-2xl font-semibold mb-2">O Problema</h2>
              <p>
                O burnout custa bilhões às empresas todos os anos. A maioria não tem ferramentas para medir estresse em tempo real, e o RH age só depois do estrago.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Image src="/solucao.svg" alt="Solução" width={40} height={40} />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Nossa Solução</h2>
              <p>
                Utilizamos dados biométricos simulados (como se fossem de pulseiras) e inteligência artificial para transformar números em recomendações práticas para o RH.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Image src="/beneficios.svg" alt="Benefícios" width={40} height={40} />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Benefícios</h2>
              <p>
                Relatórios fáceis de entender, com alertas personalizados. Reduza turnover, aumente produtividade e melhore o bem-estar da sua equipe.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/contato"
            className="inline-block bg-blue-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Solicitar Demonstração
          </Link>
        </div>
      </div>
    </main>
  );
}

