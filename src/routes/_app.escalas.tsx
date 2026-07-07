import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { escala } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/escalas")({
  component: Escalas,
  head: () => ({ meta: [{ title: "Escalas · SmartManager ERP" }] }),
});

function Escalas() {
  return (
    <>
      <PageHeader title="Escalas semanais" subtitle="Planejamento por dia e por funcionário" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {escala.map((d) => (
          <div key={d.dia} className="card-surface p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold font-display">{d.dia}</h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary font-medium">{d.funcionarios.length}</span>
            </div>
            <div className="space-y-2">
              {d.funcionarios.map((n) => (
                <div key={n} className="text-sm p-2 rounded-lg bg-secondary/40">{n}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
