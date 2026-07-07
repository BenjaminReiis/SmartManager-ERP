import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/_app/metas")({
  component: Metas,
  head: () => ({ meta: [{ title: "Metas · SmartManager ERP" }] }),
});

const metas = [
  { titulo: "Faturamento do mês", atual: 338200, meta: 380000, unidade: "R$" },
  { titulo: "Ticket médio", atual: 39.5, meta: 42, unidade: "R$" },
  { titulo: "Redução de desperdício", atual: 18, meta: 15, unidade: "kg", invert: true },
  { titulo: "Novos clientes", atual: 128, meta: 150, unidade: "" },
];

function Metas() {
  return (
    <>
      <PageHeader title="Metas & KPIs" subtitle="Objetivos do mês em tempo real" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metas.map((m) => {
          const pct = m.invert ? Math.min(100, (m.meta / m.atual) * 100) : Math.min(100, (m.atual / m.meta) * 100);
          return (
            <div key={m.titulo} className="card-surface p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-semibold">{m.titulo}</h3>
                <span className="text-2xl font-semibold gradient-text font-display">{pct.toFixed(0)}%</span>
              </div>
              <div className="text-sm text-muted-foreground">{m.unidade} {m.atual.toLocaleString("pt-BR")} / {m.unidade} {m.meta.toLocaleString("pt-BR")}</div>
              <div className="h-3 rounded-full bg-secondary mt-4 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
