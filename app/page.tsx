"use client";

import { useRouter } from "next/navigation";
import { AlertTriangle, Brain, BarChart4, HeartPulse } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <main className="p-8 max-w-4xl mx-auto space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Detecte o Burnout Antes que Aconteça</h1>
        <p className="text-xl text-gray-600">
          80% das empresas não medem estresse. Nossa plataforma prevê sinais de burnout e entrega relatórios prontos para o RH — com linguagem humana.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
          <AlertTriangle className="text-red-500" /> O Problema
        </h2>
        <p className="text-gray-700">
          O burnout custa bilhões às empresas todos os anos. A maioria não tem ferramentas para medir estresse em tempo real, e o RH age só depois do estrago.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
          <Brain className="text-purple-600" /> Nossa Solução
        </h2>
        <p className="text-gray-700">
          Utilizamos dados biométricos simulados (como se fossem de pulseiras) e inteligência artificial para transformar números em recomendações práticas para o RH.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
          <BarChart4 className="text-blue-600" /> Benefícios
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li className="flex items-center gap-2"><HeartPulse className="text-green-600 w-5 h-5" /> Relatórios fáceis de entender, com alertas personalizados</li>
          <li className="flex items-center gap-2"><HeartPulse className="text-green-600 w-5 h-5" /> Reduza turnover</li>
          <li className="flex items-center gap-2"><HeartPulse className="text-green-600 w-5 h-5" /> Aumente produtividade</li>
          <li className="flex items-center gap-2"><HeartPulse className="text-green-600 w-5 h-5" /> Melhore o bem-estar da sua equipe</li>
        </ul>
      </section>

      <div className="pt-8 text-center">
        <button
          onClick={() => router.push("/solicitar")}
          className="bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition"
        >
          Solicitar Demonstração
        </button>
      </div>
    </main>
  );
}
