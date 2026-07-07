import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { employees, type EmployeeStatus } from "@/lib/mock-data";
import { UserPlus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_app/funcionarios")({
  component: Funcionarios,
  head: () => ({ meta: [{ title: "Funcionários · SmartManager ERP" }] }),
});

const statusStyle: Record<EmployeeStatus, string> = {
  trabalhando: "bg-primary/15 text-primary",
  pausa: "bg-accent/15 text-accent",
  folga: "bg-info/15 text-info",
  ferias: "bg-chart-5/15 text-[oklch(0.7_0.18_305)]",
};
const statusLabel: Record<EmployeeStatus, string> = {
  trabalhando: "Trabalhando", pausa: "Em pausa", folga: "Folga", ferias: "Férias",
};

function Funcionarios() {
  const [selected, setSelected] = useState<typeof employees[number] | null>(null);
  return (
    <>
      <PageHeader
        title="Funcionários" subtitle="Equipe, ponto, banco de horas e escalas"
        actions={
          <button className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90">
            <UserPlus className="h-4 w-4" />Novo funcionário
          </button>
        }
      />
      <div className="card-surface overflow-hidden overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
              <th className="px-6 py-3">Nome</th><th className="px-6 py-3">Cargo</th><th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Entrada</th><th className="px-6 py-3">Horas hoje</th><th className="px-6 py-3">Banco</th>
              <th className="px-6 py-3">Saldo</th><th className="px-6 py-3">Férias</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e) => (
              <tr key={e.id} onClick={() => setSelected(e)} className="border-b border-border/60 last:border-0 hover:bg-secondary/40 cursor-pointer">
                <td className="px-6 py-4 font-medium">{e.nome}</td>
                <td className="px-6 py-4 text-muted-foreground">{e.cargo}</td>
                <td className="px-6 py-4">
                  <span className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium " + statusStyle[e.status]}>
                    {statusLabel[e.status]}
                  </span>
                </td>
                <td className="px-6 py-4 text-muted-foreground">{e.entrada}</td>
                <td className="px-6 py-4 font-medium">{e.horas}</td>
                <td className="px-6 py-4"><span className={e.banco.startsWith("-") ? "text-destructive" : "text-primary"}>{e.banco}</span></td>
                <td className="px-6 py-4"><span className={e.saldo.startsWith("-") ? "text-destructive" : "text-primary"}>{e.saldo}</span></td>
                <td className="px-6 py-4 text-muted-foreground">{e.ferias}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setSelected(null)}>
          <div className="card-surface w-full max-w-2xl p-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-semibold font-display">{selected.nome}</h2>
            <p className="text-sm text-muted-foreground">{selected.cargo}</p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[["Telefone", selected.telefone], ["CPF", selected.cpf], ["Contratação", selected.contratacao], ["Banco", selected.banco]].map(([k, v]) => (
                <div key={k} className="rounded-lg bg-secondary/60 p-3">
                  <div className="text-xs text-muted-foreground">{k}</div>
                  <div className="text-sm font-medium mt-0.5">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
