import type { LucideIcon } from "lucide-react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface KpiCardProps {
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down" | "neutral";
  icon: LucideIcon;
  accent?: "primary" | "warning" | "info" | "destructive";
}

const accentMap = {
  primary: "text-primary bg-primary/12",
  warning: "text-accent bg-accent/12",
  info: "text-info bg-info/12",
  destructive: "text-destructive bg-destructive/12",
} as const;

export function KpiCard({ label, value, delta, trend = "neutral", icon: Icon, accent = "primary" }: KpiCardProps) {
  const isUp = trend === "up";
  const isDown = trend === "down";
  return (
    <div className="card-surface p-5 animate-fade-up">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{label}</div>
          <div className="mt-2 text-2xl font-semibold text-foreground font-display">{value}</div>
        </div>
        <div className={"flex h-10 w-10 items-center justify-center rounded-xl " + accentMap[accent]}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      {delta && (
        <div className="mt-3 flex items-center gap-1.5 text-xs">
          {isUp && <ArrowUpRight className="h-3.5 w-3.5 text-primary" />}
          {isDown && <ArrowDownRight className="h-3.5 w-3.5 text-destructive" />}
          <span className={isUp ? "text-primary" : isDown ? "text-destructive" : "text-muted-foreground"}>{delta}</span>
          <span className="text-muted-foreground">vs. ontem</span>
        </div>
      )}
    </div>
  );
}
