import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { DollarSign, TrendingUp, ShoppingBag, Users, Trash2, Target, Wallet } from "lucide-react";
import { KpiCard } from "@/components/KpiCard";
import { PageHeader } from "@/components/PageHeader";
import { revenueByHour, customerFlow, topProducts } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/")({
  component: Dashboard,
  head: () => ({ meta: [{ title: "Dashboard · SmartManager ERP" }] }),
});

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Bom dia";
  if (h < 18) return "Boa tarde";
  return "Boa noite";
}

function Dashboard() {
  const [now, setNow] = useState<Date | null>(null);
  const [revenue, setRevenue] = useState(12850);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setRevenue((v) => v + Math.floor(Math.random() * 90) + 10), 3500);
    return () => clearInterval(t);
  }, []);

  const title = now ? `${greeting()}, Benjamin` : "Olá, Benjamin";
  const subtitle = now
    ? `Hoje é ${new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(now)}, ${new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "long", year: "numeric" }).format(now)}`
    : "Bem-vindo ao SmartManager ERP";

  return (
    <>
      <PageHeader title={title} subtitle={subtitle} />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
        <KpiCard label="Faturamento hoje" value={revenue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} delta="+8,2%" trend="up" icon={DollarSign} accent="primary" />
        <KpiCard label="Despesas" value="R$ 4.230" delta="+2,1%" trend="down" icon={Wallet} accent="warning" />
        <KpiCard label="Lucro" value="R$ 8.620" delta="+11,4%" trend="up" icon={TrendingUp} accent="primary" />
        <KpiCard label="Pedidos" value="325" delta="+18" trend="up" icon={ShoppingBag} accent="info" />
        <KpiCard label="Funcionários trabalhando" value="18 / 22" icon={Users} accent="info" />
        <KpiCard label="Desperdício" value="18 kg" delta="-12%" trend="down" icon={Trash2} accent="warning" />
        <KpiCard label="Ticket médio" value="R$ 39,50" delta="+3,4%" trend="up" icon={TrendingUp} accent="primary" />
        <KpiCard label="Meta diária" value="89%" delta="+5%" trend="up" icon={Target} accent="primary" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        <div className="card-surface p-6 xl:col-span-2">
          <h3 className="text-lg font-semibold font-display mb-4">Faturamento em tempo real</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueByHour}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="hora" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `R$ ${v/1000}k`} />
                <Tooltip contentStyle={{ background: "var(--color-popover)", border: "1px solid var(--color-border)", borderRadius: 12, fontSize: 12 }} />
                <Area type="monotone" dataKey="valor" stroke="var(--color-primary)" strokeWidth={2.5} fill="url(#revGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card-surface p-6">
          <h3 className="text-lg font-semibold font-display mb-4">Fluxo de clientes</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={customerFlow}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="hora" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--color-popover)", border: "1px solid var(--color-border)", borderRadius: 12, fontSize: 12 }} />
                <Line type="monotone" dataKey="clientes" stroke="var(--color-chart-2)" strokeWidth={2.5} dot={{ fill: "var(--color-chart-2)", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="card-surface p-6">
        <h3 className="text-lg font-semibold font-display mb-4">Produtos mais vendidos</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topProducts} layout="vertical" margin={{ left: 40 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" horizontal={false} />
              <XAxis type="number" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis dataKey="nome" type="category" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} width={140} />
              <Tooltip contentStyle={{ background: "var(--color-popover)", border: "1px solid var(--color-border)", borderRadius: 12, fontSize: 12 }} cursor={{ fill: "var(--color-secondary)", opacity: 0.4 }} />
              <Bar dataKey="vendas" radius={[0, 8, 8, 0]}>
                {topProducts.map((_, i) => (<Cell key={i} fill={`var(--color-chart-${(i % 5) + 1})`} />))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
