import { CodeBracketIcon, ArrowsRightLeftIcon, ChartBarIcon } from "@heroicons/react/24/outline";

export function ServiceSection() {
    return (
        <section id="services" className="w-full max-w-7xl mx-auto p-3.5">
            <h2 className="font-bold text-2xl text-center mb-8">Serviços</h2>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                    <CodeBracketIcon className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="font-semibold text-lg">Sistemas sob medida</h3>
                    <p className="pt-2 text-gray-600">
                        Ferramentas web para gestão interna, controle de estoque,
                        financeiro e fluxos customizados.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                    <ArrowsRightLeftIcon className="w-10 h-10 text-green-600 mb-4" />
                    <h3 className="font-semibold text-lg">Automação & Integrações</h3>
                    <p className="pt-2 text-gray-600">
                        Conectar sistemas, integrações com APIs, WhatsApp, ERPs e gateways.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                    <ChartBarIcon className="w-10 h-10 text-purple-600 mb-4" />
                    <h3 className="font-semibold text-lg">Front-end / Dashboards</h3>
                    <p className="pt-2 text-gray-600">
                        Interfaces clean, responsivas e de fácil uso para usuários finais.
                    </p>
                </div>
            </div>
        </section>
    );
}
