import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { desperdicio, wasteByMonth } from "@/lib/mock-data";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const Route = createFileRoute("/_app/desperdicio")({
  component: Desperdicio,
  head: () => ({ meta: [{ title: "Desperdício · SmartManager ERP" }] }),
});

function Desperdicio() {
  return (
    <>
      <PageHeader title="Desperdício" subtitle="Registros e evolução mensal" />
      <div className="card-surface p-6 mb-6">
        <h3 className="text-lg font-semibold font-display mb-4">Desperdício por mês (kg)</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={wasteByMonth}>
              <defs><linearGradient id="wg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--color-accent)" stopOpacity={0.5} /><stop offset="100%" stopColor="var(--color-accent)" stopOpacity={0} /></linearGradient></defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="mes" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: "var(--color-popover)", border: "1px solid var(--color-border)", borderRadius: 12, fontSize: 12 }} />
              <Area type="monotone" dataKey="kg" stroke="var(--color-accent)" strokeWidth={2.5} fill="url(#wg)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="card-surface overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
            <th className="px-6 py-3">Produto</th><th className="px-6 py-3">Quantidade</th><th className="px-6 py-3">Motivo</th><th className="px-6 py-3">Data</th>
          </tr></thead>
          <tbody>
            {desperdicio.map((d, i) => (
              <tr key={i} className="border-b border-border/60 last:border-0 hover:bg-secondary/40">
                <td className="px-6 py-4 font-medium">{d.produto}</td><td className="px-6 py-4">{d.quantidade}</td>
                <td className="px-6 py-4 text-muted-foreground">{d.motivo}</td><td className="px-6 py-4 text-muted-foreground">{d.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
