import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { fornecedores } from "@/lib/mock-data";
import { Truck } from "lucide-react";

export const Route = createFileRoute("/_app/fornecedores")({
  component: Fornecedores,
  head: () => ({ meta: [{ title: "Fornecedores · SmartManager ERP" }] }),
});

function Fornecedores() {
  return (
    <>
      <PageHeader title="Fornecedores" subtitle="Parceiros e histórico de entregas" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {fornecedores.map((f) => (
          <div key={f.nome} className="card-surface p-5 flex items-start gap-4">
            <div className="h-11 w-11 rounded-xl bg-info/12 text-info flex items-center justify-center"><Truck className="h-5 w-5" /></div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold truncate">{f.nome}</h3>
                <span className={"text-xs px-2 py-0.5 rounded-full font-medium " + (f.status === "ativo" ? "bg-primary/15 text-primary" : "bg-accent/15 text-accent")}>{f.status === "ativo" ? "Ativo" : "Atenção"}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{f.categoria}</p>
              <p className="text-xs text-muted-foreground mt-2">{f.contato}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
