import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { clientes } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/clientes")({
  component: Clientes,
  head: () => ({ meta: [{ title: "Clientes · SmartManager ERP" }] }),
});

function Clientes() {
  return (
    <>
      <PageHeader title="Clientes" subtitle="Base fidelizada e ticket médio" />
      <div className="card-surface overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
            <th className="px-6 py-3">Cliente</th><th className="px-6 py-3">Visitas</th><th className="px-6 py-3">Ticket</th><th className="px-6 py-3">Última visita</th>
          </tr></thead>
          <tbody>
            {clientes.map((c) => (
              <tr key={c.nome} className="border-b border-border/60 last:border-0 hover:bg-secondary/40">
                <td className="px-6 py-4 font-medium">{c.nome}</td>
                <td className="px-6 py-4">{c.visitas}</td>
                <td className="px-6 py-4">{c.ticket.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
                <td className="px-6 py-4 text-muted-foreground">{c.ultimaVisita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
