import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { notificacoes } from "@/lib/mock-data";
import { AlertTriangle, CheckCircle2, Info } from "lucide-react";

export const Route = createFileRoute("/_app/notificacoes")({
  component: Notificacoes,
  head: () => ({ meta: [{ title: "Notificações · SmartManager ERP" }] }),
});

const icone = {
  alerta: { i: AlertTriangle, c: "text-accent bg-accent/12" },
  sucesso: { i: CheckCircle2, c: "text-primary bg-primary/12" },
  info: { i: Info, c: "text-info bg-info/12" },
} as const;

function Notificacoes() {
  return (
    <>
      <PageHeader title="Notificações" subtitle="Alertas em tempo real" />
      <div className="space-y-3">
        {notificacoes.map((n) => {
          const { i: Icon, c } = icone[n.tipo as keyof typeof icone];
          return (
            <div key={n.id} className="card-surface p-4 flex items-start gap-4">
              <div className={"h-10 w-10 rounded-xl flex items-center justify-center " + c}><Icon className="h-5 w-5" /></div>
              <div className="flex-1">
                <div className="flex items-center justify-between"><h3 className="font-semibold text-sm">{n.titulo}</h3><span className="text-xs text-muted-foreground">{n.tempo}</span></div>
                <p className="text-sm text-muted-foreground mt-1">{n.mensagem}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
