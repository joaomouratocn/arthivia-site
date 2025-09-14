import Image from "next/image";
import stockControl from "@/assets/stock-control.jpg"
import temperatureControl from "@/assets/temperature-control.jpg"
import managerOs from "@/assets/mananger-os.jpg"
import landingPage from "@/assets/landing-page.jpg"
import patientHistory from "@/assets/patient-history.jpg"
import condominium from "@/assets/condominium.jpg"
import atendBot from "@/assets/atend-bot.jpg"
import automations from "@/assets/automations.jpg"

export function PortfolioSection() {
    return (
        <section id="portfolio" className="w-full max-w-7xl mx-auto p-3.5">
            <h2 className="font-bold text-2xl text-center mb-8">Portfólio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center min-h-[280px]">
                    <div className="w-37 h-37 flex items-center justify-center">
                        <Image src={stockControl} alt="Image stock control" width={150} height={150} />
                    </div>
                    <h3 className="font-bold mt-3">Controle de Estoque</h3>
                    <p className="text-sm text-gray-600">Organize entradas e saídas de produtos, controle notas fiscais e acompanhe o fluxo de caixa em tempo real.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center min-h-[280px]">
                    <div className="w-37 h-37 flex items-center justify-center">
                        <Image src={temperatureControl} alt="Image temperature control" width={150} height={150} />
                    </div>
                    <h3 className="font-bold mt-3">Controle de Temperatura</h3>
                    <p className="text-sm text-gray-600">Monitore e registre temperaturas de diferentes pontos em um só painel, garantindo segurança e conformidade.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center min-h-[280px]">
                    <div className="w-37 h-37 flex items-center justify-center">
                        <Image src={managerOs} alt="Image manager os" width={150} height={150} />
                    </div>
                    <h3 className="font-bold mt-3">Gestão de Ordens de Serviço</h3>
                    <p className="text-sm text-gray-600">Centralize solicitações, organize atendimentos e acompanhe o status dos serviços de forma prática.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center min-h-[280px]">
                    <div className="w-37 h-37 flex items-center justify-center">
                        <Image src={patientHistory} alt="Image patient history" width={150} height={150} />
                    </div>
                    <h3 className="font-bold mt-3">Histórico de Pacientes</h3>
                    <p className="text-sm text-gray-600">Gerencie o fornecimento de medicamentos e tenha o histórico completo de cada paciente em mãos.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center min-h-[280px]">
                    <div className="w-37 h-37 flex items-center justify-center">
                        <Image src={condominium} alt="Image condominum" width={150} height={150} />
                    </div>
                    <h3 className="font-bold mt-3">Gestão de Condomínios</h3>
                    <p className="text-sm text-gray-600">Facilite a administração com enquetes, controle de encomendas, câmeras, portões e murais digitais.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center min-h-[280px]">
                    <div className="w-37 h-37 flex items-center justify-center">
                        <Image src={landingPage} alt="Image landing page" width={150} height={150} />
                    </div>
                    <h3 className="font-bold mt-3">Landing Pages</h3>
                    <p className="text-sm text-gray-600">Crie páginas otimizadas para atrair clientes e aumentar as conversões do seu negócio.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center min-h-[280px]">
                    <div className="w-37 h-37 flex items-center justify-center">
                        <Image src={atendBot} alt="Image atend bot" quality={100} priority width={150} height={150} />
                    </div>
                    <h3 className="font-bold mt-3">Bot de Atendimento</h3>
                    <p className="text-sm text-gray-600">Automatize o atendimento da sua empresa e ofereça suporte rápido e eficiente 24h por dia.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center min-h-[280px]">
                    <div className="w-37 h-37 flex items-center justify-center">
                        <Image src={automations} alt="Image automations" quality={100} priority width={150} height={150} />
                    </div>
                    <h3 className="font-bold mt-3">Automações</h3>
                    <p className="text-sm text-gray-600">Otimize processos repetitivos, reduza erros e ganhe mais tempo para focar no crescimento da sua empresa.</p>
                </div>

            </div>
        </section>

    )
}