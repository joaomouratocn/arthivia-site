export function ActionSection() {
    return (
        <div className="w-full max-w-7xl mx-auto relative bg-gradient-to-r from-blue-50 via-white to-green-50 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0001_1px,transparent_1px),linear-gradient(to_bottom,#0001_1px,transparent_1px)] bg-[size:32px_32px] opacity-10" />

            <div className="relative flex flex-col p-6 w-full max-w-7xl mx-auto md:flex-row gap-6 items-center">
                <div className="flex flex-col gap-5 flex-1">
                    <h1 className="text-4xl font-extrabold leading-tight">
                        Transforme sua empresa <br className="hidden sm:block" />
                        com{" "}
                        <span className="text-[var(--primary)]">
                            soluções digitais sob medida
                        </span>
                    </h1>
                    <p className="text-[var(--text-secondary)] text-lg max-w-xl">
                        Automatizamos tarefas, integramos sistemas e criamos dashboards que
                        reduzem custos e aumentam a produtividade de pequenas e médias empresas.
                    </p>
                    <div className="flex gap-3">
                        <a
                            href=""
                            className="px-6 py-3 bg-[var(--primary)] rounded-xl text-white text-sm sm:text-base font-medium shadow-md hover:shadow-lg hover:scale-105 transition-transform"
                        >
                            🚀 Falar no WhatsApp
                        </a>
                        <a
                            href="#portfolio"
                            className="px-6 py-3 border border-[var(--primary)] rounded-xl text-sm sm:text-base font-medium hover:bg-[var(--primary)] hover:text-white transition-colors"
                        >
                            📂 Ver Portfólio
                        </a>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 flex-1 md:max-w-sm hover:scale-105 transition-transform">
                    <h2 className="font-bold text-xl mb-3 text-[var(--primary)]">
                        🎯 Diagnóstico Gratuito
                    </h2>
                    <p className="mb-4 text-gray-700">
                        30 minutos para mapear seus processos, identificar oportunidades de
                        automação e apresentar uma estimativa sob medida.
                    </p>
                    <ul className="list-disc list-inside mb-4 text-gray-700">
                        <li>Mapeamento da situação atual</li>
                        <li>Proposta mínima viável (MVP)</li>
                        <li>Estimativa de prazo & custo</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
