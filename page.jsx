// ESTE É O ARQUIVO PRINCIPAL DA SUA LANDING
// Aqui você troca textos, preços e link do botão

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <section className="max-w-2xl text-center">

        {/* TÍTULO PRINCIPAL */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🎯 JobTailor BR
        </h1>

        {/* SUBTÍTULO */}
        <p className="text-lg text-gray-600 mb-6">
          Aumente suas chances de entrevista em até <span className="font-semibold">3x</span> 
          com currículos e cartas 100% personalizados para cada vaga.
        </p>

        {/* LISTA DE BENEFÍCIOS */}
        <ul className="text-left space-y-2 mb-6 text-gray-700">
          <li>✅ CV adaptado para cada vaga (ATS-friendly)</li>
          <li>✅ Carta de apresentação sob medida</li>
          <li>✅ Vagas selecionadas enviadas no WhatsApp</li>
          <li>✅ Entrega em até 48h</li>
        </ul>

        {/* BLOCO DE PREÇO */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
          <p className="text-xl font-semibold">R$39/mês</p>
          <p className="text-gray-500 mb-4">
            🔥 Promoção primeiros clientes: <span className="font-bold">R$19 no 1º mês</span> (cupom: PRIMEIROS)
          </p>

          {/* BOTÃO DE AÇÃO */}
          <a
            href="https://seulinkdecheckout.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Quero meu currículo personalizado
          </a>
        </div>

        {/* RODAPÉ */}
        <p className="text-sm text-gray-500">Suporte rápido via WhatsApp 📞</p>
      </section>
    </main>
  )
}
