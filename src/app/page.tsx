import { ActionSection } from "./components/act-section";
import { Header } from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <ActionSection />
      <section id="services" className="w-full max-w-7xl mx-auto px-3.5">
        <h2 className="font-bold text-xl">Serviços</h2>
        <div className="pt-1.5 flex flex-col gap-4 md:flex-row">
          <div className="bg-white rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.15)] p-6">
            <h3 className="font-bold">Sistemas sob medida</h3>
            <p className="pt-3">Ferramentas web para gestão interna, controle de estoque, controle financeiro,fluxos customizados.</p>
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.15)] p-6">
            <h3 className="font-bold">Automação & Integrações</h3>
            <p className="pt-3">Conectar sistemas, integrações com APIs, WhatsApp / ERPs / gateways.</p>
          </div>
          <div className="bg-white rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.15)] p-6">
            <h3 className="font-bold">Front-end / Dashboards</h3>
            <p className="pt-3">Interfaces clean, responsivas e de fácil uso para usuários finais.</p>
          </div>
        </div>
      </section>
    </>
  );
}