import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { cardapio } from "@/lib/mock-data";
import { Plus, UtensilsCrossed } from "lucide-react";

export const Route = createFileRoute("/_app/cardapio")({
  component: Cardapio,
  head: () => ({ meta: [{ title: "Cardápio · SmartManager ERP" }] }),
});

function Cardapio() {
  return (
    <>
      <PageHeader title="Cardápio" subtitle="Produtos, categorias e disponibilidade"
        actions={<button className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium"><Plus className="h-4 w-4" />Novo item</button>} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardapio.map((p) => (
          <div key={p.nome} className="card-surface overflow-hidden">
            <div className="h-32 bg-gradient-to-br from-primary/25 to-accent/20 flex items-center justify-center"><UtensilsCrossed className="h-10 w-10 text-primary/70" /></div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div><h3 className="font-semibold font-display">{p.nome}</h3><div className="text-xs text-muted-foreground mt-0.5">{p.categoria} · {p.tempo}</div></div>
                <span className={"text-xs px-2 py-1 rounded-full font-medium " + (p.disponivel ? "bg-primary/15 text-primary" : "bg-destructive/15 text-destructive")}>{p.disponivel ? "Disponível" : "Indisponível"}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-3">{p.ingredientes}</p>
              <div className="mt-4 text-xl font-semibold gradient-text font-display">{p.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
