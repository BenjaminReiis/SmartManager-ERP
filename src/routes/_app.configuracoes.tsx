import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/_app/configuracoes")({
  component: Configuracoes,
  head: () => ({ meta: [{ title: "Configurações · SmartManager ERP" }] }),
});

function Configuracoes() {
  return (
    <>
      <PageHeader title="Configurações" subtitle="Estabelecimento, perfis e integrações" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card-surface p-6">
          <h3 className="text-lg font-semibold font-display mb-4">Estabelecimento</h3>
          <div className="space-y-4">
            {[["Razão social", "SmartManager LTDA"], ["CNPJ", "12.345.678/0001-90"], ["Endereço", "Av. Paulista, 1500"], ["Horário", "08:00 — 23:00"]].map(([k, v]) => (
              <div key={k}>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">{k}</label>
                <input defaultValue={v} className="mt-1 w-full h-10 px-3 rounded-lg bg-secondary/60 border border-border text-sm" />
              </div>
            ))}
          </div>
        </div>
        <div className="card-surface p-6">
          <h3 className="text-lg font-semibold font-display mb-4">Perfis</h3>
          <div className="space-y-3">
            {[{ p: "Administrador", d: "Acesso total" }, { p: "Gerente", d: "Dashboard, financeiro, RH" }, { p: "RH", d: "Funcionários e ponto" }, { p: "Caixa", d: "PDV e fechamento" }].map((r) => (
              <div key={r.p} className="p-3 rounded-lg bg-secondary/40 flex items-center justify-between">
                <div><div className="font-medium text-sm">{r.p}</div><div className="text-xs text-muted-foreground">{r.d}</div></div>
                <button className="text-xs text-primary font-medium hover:underline">Editar</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
