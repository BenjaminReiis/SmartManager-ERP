import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { employees } from "@/lib/mock-data";
import { Clock, LogIn, LogOut, Pause } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/_app/ponto")({
  component: Ponto,
  head: () => ({ meta: [{ title: "Ponto Eletrônico · SmartManager ERP" }] }),
});

function Ponto() {
  const [now, setNow] = useState<string>("--:--");
  useEffect(() => {
    const upd = () => setNow(new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }));
    upd();
    const t = setInterval(upd, 30000);
    return () => clearInterval(t);
  }, []);
  const trabalhando = employees.filter((e) => e.status === "trabalhando");
  return (
    <>
      <PageHeader title="Ponto Eletrônico" subtitle="Registros de entrada, saída e intervalos em tempo real" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="card-surface p-6 flex flex-col items-center text-center">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Horário atual</div>
          <div className="text-6xl font-semibold font-display gradient-text mt-2">{now}</div>
          <div className="mt-6 flex gap-2">
            <button className="h-11 px-5 rounded-lg bg-primary text-primary-foreground text-sm font-medium inline-flex items-center gap-2"><LogIn className="h-4 w-4" />Entrada</button>
            <button className="h-11 px-5 rounded-lg bg-accent text-accent-foreground text-sm font-medium inline-flex items-center gap-2"><Pause className="h-4 w-4" />Pausa</button>
            <button className="h-11 px-5 rounded-lg border border-border text-sm inline-flex items-center gap-2"><LogOut className="h-4 w-4" />Saída</button>
          </div>
        </div>
        <div className="card-surface p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold font-display mb-4 flex items-center gap-2"><Clock className="h-5 w-5 text-primary" />Banco de horas</h3>
          <div className="space-y-3">
            {employees.slice(0, 6).map((e) => (
              <div key={e.id} className="flex items-center gap-4 p-3 rounded-lg bg-secondary/40">
                <div className="flex-1"><div className="text-sm font-medium">{e.nome}</div><div className="text-xs text-muted-foreground">Trabalhou: {e.horas}</div></div>
                <div className={"text-sm font-semibold " + (e.saldo.startsWith("-") ? "text-destructive" : "text-primary")}>{e.saldo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="card-surface p-6">
        <h3 className="text-lg font-semibold font-display mb-4">Trabalhando agora ({trabalhando.length})</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trabalhando.map((e) => (
            <div key={e.id} className="p-4 rounded-xl border border-border bg-secondary/40">
              <div className="text-sm font-medium">{e.nome}</div>
              <div className="text-xs text-muted-foreground">Entrada às {e.entrada}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
