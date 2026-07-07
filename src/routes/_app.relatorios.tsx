import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Download, FileSpreadsheet, FileText } from "lucide-react";

export const Route = createFileRoute("/_app/relatorios")({
  component: Relatorios,
  head: () => ({ meta: [{ title: "Relatórios · SmartManager ERP" }] }),
});

const relatorios = [
  { titulo: "Relatório diário de vendas", descricao: "Todas as vendas de hoje." },
  { titulo: "Fechamento semanal", descricao: "Consolidado da semana." },
  { titulo: "DRE mensal", descricao: "Demonstrativo de resultado." },
  { titulo: "Balanço anual", descricao: "Ano fiscal completo." },
  { titulo: "Ponto e banco de horas", descricao: "Registros da equipe." },
  { titulo: "Movimentação de estoque", descricao: "Entradas, saídas e perdas." },
];

function Relatorios() {
  return (
    <>
      <PageHeader title="Relatórios" subtitle="Exportação em PDF e Excel" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {relatorios.map((r) => (
          <div key={r.titulo} className="card-surface p-6">
            <h3 className="font-semibold font-display">{r.titulo}</h3>
            <p className="text-sm text-muted-foreground mt-1">{r.descricao}</p>
            <div className="mt-4 flex gap-2">
              <button className="inline-flex items-center gap-2 h-9 px-3 rounded-lg bg-primary/15 text-primary text-xs font-medium"><FileText className="h-4 w-4" />PDF</button>
              <button className="inline-flex items-center gap-2 h-9 px-3 rounded-lg bg-info/15 text-info text-xs font-medium"><FileSpreadsheet className="h-4 w-4" />Excel</button>
              <button className="ml-auto inline-flex items-center gap-2 h-9 px-3 rounded-lg border border-border text-xs"><Download className="h-4 w-4" />Baixar</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
