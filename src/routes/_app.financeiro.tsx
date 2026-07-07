import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { KpiCard } from "@/components/KpiCard";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { DollarSign, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { contasPagar } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/financeiro")({
  component: Financeiro,
  head: () => ({ meta: [{ title: "Financeiro · SmartManager ERP" }] }),
});

const monthly = [
  { mes: "Jan", receita: 342000, despesa: 189000 },
  { mes: "Fev", receita: 358000, despesa: 194000 },
  { mes: "Mar", receita: 371000, despesa: 202000 },
  { mes: "Abr", receita: 355000, despesa: 198000 },
  { mes: "Mai", receita: 388000, despesa: 211000 },
  { mes: "Jun", receita: 402000, despesa: 218000 },
  { mes: "Jul", receita: 338000, despesa: 174000 },
];

function Financeiro() {
  return (
    <>
      <PageHeader title="Financeiro" subtitle="Receitas, despesas, contas a pagar e fluxo de caixa" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <KpiCard label="Receita do mês" value="R$ 338.200" delta="+12,4%" trend="up" icon={TrendingUp} accent="primary" />
        <KpiCard label="Despesas" value="R$ 174.500" delta="-3,1%" trend="down" icon={TrendingDown} accent="warning" />
        <KpiCard label="Lucro líquido" value="R$ 163.700" delta="+22%" trend="up" icon={DollarSign} accent="primary" />
        <KpiCard label="Impostos previstos" value="R$ 42.100" icon={Wallet} accent="info" />
      </div>

      <div className="card-surface p-6 mb-6">
        <h3 className="text-lg font-semibold font-display mb-4">Receitas × Despesas</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthly}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="mes" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v/1000}k`} />
              <Tooltip contentStyle={{ background: "var(--color-popover)", border: "1px solid var(--color-border)", borderRadius: 12, fontSize: 12 }} />
              <Bar dataKey="receita" fill="var(--color-primary)" radius={[6, 6, 0, 0]} />
              <Bar dataKey="despesa" fill="var(--color-accent)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card-surface overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold font-display">Contas a pagar</h3>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
              <th className="px-6 py-3 font-medium">Fornecedor</th>
              <th className="px-6 py-3 font-medium">Vencimento</th>
              <th className="px-6 py-3 font-medium text-right">Valor</th>
              <th className="px-6 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {contasPagar.map((c, i) => (
              <tr key={i} className="border-b border-border/60 last:border-0 hover:bg-secondary/40">
                <td className="px-6 py-4 font-medium">{c.fornecedor}</td>
                <td className="px-6 py-4 text-muted-foreground">{c.vencimento}</td>
                <td className="px-6 py-4 text-right font-medium">{c.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
                <td className="px-6 py-4">
                  <span className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium " + (c.status === "pago" ? "bg-primary/15 text-primary" : "bg-accent/15 text-accent")}>
                    {c.status === "pago" ? "Pago" : "Pendente"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
