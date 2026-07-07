import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/_app/folgas")({
  component: Folgas,
  head: () => ({ meta: [{ title: "Folgas · SmartManager ERP" }] }),
});

const folgas = [
  { nome: "Ana Costa", data: "Hoje", motivo: "Folga programada" },
  { nome: "Lucas Ferreira", data: "10/07", motivo: "Compensação" },
  { nome: "Camila Rocha", data: "14/07", motivo: "Folga programada" },
  { nome: "Pedro Almeida", data: "20/07", motivo: "Aniversário" },
];

function Folgas() {
  return (
    <>
      <PageHeader title="Folgas" subtitle="Solicitações e programação de folgas" />
      <div className="card-surface overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
            <th className="px-6 py-3">Funcionário</th><th className="px-6 py-3">Data</th><th className="px-6 py-3">Motivo</th><th className="px-6 py-3 text-right">Ações</th>
          </tr></thead>
          <tbody>
            {folgas.map((f, i) => (
              <tr key={i} className="border-b border-border/60 last:border-0 hover:bg-secondary/40">
                <td className="px-6 py-4 font-medium">{f.nome}</td>
                <td className="px-6 py-4 text-muted-foreground">{f.data}</td>
                <td className="px-6 py-4 text-muted-foreground">{f.motivo}</td>
                <td className="px-6 py-4 text-right"><button className="text-primary text-xs font-medium hover:underline">Aprovar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
