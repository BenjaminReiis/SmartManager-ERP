import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ferias } from "@/lib/mock-data";
import { Palmtree } from "lucide-react";

export const Route = createFileRoute("/_app/ferias")({
  component: Ferias,
  head: () => ({ meta: [{ title: "Férias · SmartManager ERP" }] }),
});

const statusStyle: Record<string, string> = {
  "Em férias": "bg-info/15 text-info",
  "Próxima": "bg-primary/15 text-primary",
  "Vence em 30 dias": "bg-accent/15 text-accent",
  "Vencida": "bg-destructive/15 text-destructive",
};

function Ferias() {
  return (
    <>
      <PageHeader title="Férias" subtitle="Controle de aquisitivo e vencimento" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ferias.map((f) => (
          <div key={f.nome} className="card-surface p-5 flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary/12 text-primary flex items-center justify-center"><Palmtree className="h-6 w-6" /></div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{f.nome}</h3>
                <span className={"text-xs px-2.5 py-1 rounded-full font-medium " + (statusStyle[f.status] || "bg-secondary")}>{f.status}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{f.periodo}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
