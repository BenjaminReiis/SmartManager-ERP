import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { estoque } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/estoque")({
  component: Estoque,
  head: () => ({ meta: [{ title: "Estoque · SmartManager ERP" }] }),
});

const statusStyle: Record<string, string> = { critico: "bg-destructive/15 text-destructive", atencao: "bg-accent/15 text-accent", normal: "bg-primary/15 text-primary" };
const statusLabel: Record<string, string> = { critico: "Crítico", atencao: "Atenção", normal: "Normal" };

function Estoque() {
  return (
    <>
      <PageHeader title="Estoque" subtitle="Controle de insumos e produtos" />
      <div className="card-surface overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
            <th className="px-6 py-3">Produto</th><th className="px-6 py-3">Quantidade</th><th className="px-6 py-3">Mínimo</th><th className="px-6 py-3">Status</th>
          </tr></thead>
          <tbody>
            {estoque.map((e) => (
              <tr key={e.produto} className="border-b border-border/60 last:border-0 hover:bg-secondary/40">
                <td className="px-6 py-4 font-medium">{e.produto}</td>
                <td className="px-6 py-4">{e.quantidade}</td>
                <td className="px-6 py-4 text-muted-foreground">{e.minimo}</td>
                <td className="px-6 py-4"><span className={"px-2.5 py-1 rounded-full text-xs font-medium " + statusStyle[e.status]}>{statusLabel[e.status]}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
