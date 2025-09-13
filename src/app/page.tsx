import { Header } from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col p-3.5 w-full max-w-7xl mx-auto md:flex-row gap-3">
        <div className="flex flex-col gap-3 p-2.5">
          <h1 className="text-3xl font-bold">
            Soluções digitais sob medida para pequenas e médias empresas
          </h1>
          <p className="text-[var(--text-secondary)]">
            Transformamos processos manuais em sistemas práticos: tarefas,
            automações, dashboards e integrações.
          </p>
          <div className="flex gap-2.5">
            <a
              href=""
              className="p-2 bg-[var(--primary)] rounded-xl text-white text-[12px] hover:text-green-200 sm:text-[16px]"
            >
              Falar no WhatsApp
            </a>
            <a
              href=""
              className="p-2 border border-[var(--primary)] rounded-xl text-[12px] hover:bg-green-200 sm:text-[16px]"
            >
              Ver portfólio
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.15)] p-6">
          <h2 className="font-bold mb-2">Diagnóstico gratuito</h2>
          <p className="mb-4">
            Converse comigo 30min — analiso seus processos, mostro como
            automatizar e estimativa.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Mapeamento da situação atual</li>
            <li>Proposta mínima viável (MVP)</li>
            <li>Estimativa de prazo & custo</li>
          </ul>
          <p>Desconto especial no primeiro contrato + depoimento garantido.</p>
        </div>
      </div>
    </>
  );
}
