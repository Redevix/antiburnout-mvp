import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6 flex flex-col items-center justify-center space-y-12">
      {/* Hero */}
      <section className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">
          Detecte o Burnout Antes que Aconteça
        </h1>
        <p className="text-lg mb-6">
          80% das empresas não medem estresse. Nossa plataforma prevê sinais de burnout e entrega relatórios prontos para o RH — com linguagem humana.
        </p>
        <Button className="text-lg px-6 py-3">Quero Participar do Piloto</Button>
      </section>

      {/* Problema */}
      <section className="max-w-3xl text-center">
        <h2 className="text-2xl font-semibold mb-2">O Problema</h2>
        <p>
          O burnout custa bilhões às empresas todos os anos. A maioria não tem ferramentas para medir estresse em tempo real, e o RH age só depois do estrago.
        </p>
      </section>

      {/* Solução */}
      <section className="max-w-3xl text-center">
        <h2 className="text-2xl font-semibold mb-2">Nossa Solução</h2>
        <p>
          Utilizamos dados biométricos simulados (como se fossem de pulseiras) e inteligência artificial para transformar números em recomendações práticas para o RH. Relatórios fáceis de entender, com alertas personalizados.
        </p>
      </section>

      {/* Exemplo do MVP */}
      <section className="max-w-xl">
        <h2 className="text-xl font-semibold text-center mb-4">Exemplo de Relatório</h2>
        <Card className="shadow-xl">
          <CardContent className="p-4">
            <p className="text-sm">
              "Na última semana, 3 colaboradores apresentaram aumento no índice de estresse. Recomendamos uma conversa individual e ajustes de carga de trabalho no time de produto."
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Formulário */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Participe do Piloto</h2>
        <p className="mb-4">Estamos selecionando 5 empresas para o teste inicial. Cadastre-se abaixo:</p>
        <form
          action="https://formspree.io/f/seuFormID"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            className="border p-2 rounded w-80"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            className="border p-2 rounded w-80"
            required
          />
          <input
            type="text"
            name="empresa"
            placeholder="Nome da empresa"
            className="border p-2 rounded w-80"
            required
          />
          <Button type="submit">Enviar</Button>
        </form>
      </section>
    </main>
  );
}
