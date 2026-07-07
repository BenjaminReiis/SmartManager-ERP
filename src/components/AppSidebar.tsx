import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard, DollarSign, Users, Clock, CalendarRange, CalendarOff,
  Palmtree, UtensilsCrossed, Package, Trash2, Target, FileBarChart2,
  Contact, Truck, Settings, Bell, ChefHat,
} from "lucide-react";

const items = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/financeiro", label: "Financeiro", icon: DollarSign },
  { to: "/funcionarios", label: "Funcionários", icon: Users },
  { to: "/ponto", label: "Ponto", icon: Clock },
  { to: "/escalas", label: "Escalas", icon: CalendarRange },
  { to: "/folgas", label: "Folgas", icon: CalendarOff },
  { to: "/ferias", label: "Férias", icon: Palmtree },
  { to: "/cardapio", label: "Cardápio", icon: UtensilsCrossed },
  { to: "/estoque", label: "Estoque", icon: Package },
  { to: "/desperdicio", label: "Desperdício", icon: Trash2 },
  { to: "/metas", label: "Metas", icon: Target },
  { to: "/relatorios", label: "Relatórios", icon: FileBarChart2 },
  { to: "/clientes", label: "Clientes", icon: Contact },
  { to: "/fornecedores", label: "Fornecedores", icon: Truck },
  { to: "/notificacoes", label: "Notificações", icon: Bell },
  { to: "/configuracoes", label: "Configurações", icon: Settings },
] as const;

export function AppSidebar() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });

  return (
    <aside className="hidden lg:flex fixed inset-y-0 left-0 w-64 flex-col bg-sidebar border-r border-sidebar-border z-40">
      <div className="flex items-center gap-3 px-6 py-6 border-b border-sidebar-border">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
          <ChefHat className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm font-semibold text-sidebar-foreground leading-tight">SmartManager</div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">ERP · v1.0</div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
        {items.map(({ to, label, icon: Icon }) => {
          const active = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={
                "group flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all " +
                (active
                  ? "bg-sidebar-accent text-sidebar-primary font-medium shadow-[inset_2px_0_0_var(--sidebar-primary)]"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground")
              }
            >
              <Icon className={"h-4 w-4 " + (active ? "text-sidebar-primary" : "text-sidebar-foreground/50 group-hover:text-sidebar-foreground")} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-sm font-semibold">
            B
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-sidebar-foreground truncate">Benjamin</div>
            <div className="text-xs text-muted-foreground truncate">Gerente Geral</div>
          </div>
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
        </div>
      </div>
    </aside>
  );
}
