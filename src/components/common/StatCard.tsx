import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  className?: string;
}

export function StatCard({
  title,
  value,
  change,
  changeLabel,
  icon,
  variant = 'default',
  className,
}: StatCardProps) {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  const variantStyles = {
    default: 'bg-card border-border',
    primary: 'bg-primary-light border-primary/20',
    success: 'bg-success-light border-success/20',
    warning: 'bg-warning-light border-warning/20',
    destructive: 'bg-destructive-light border-destructive/20',
    info: 'bg-info-light border-info/20',
  };

  const iconVariantStyles = {
    default: 'bg-muted text-muted-foreground',
    primary: 'bg-primary/10 text-primary',
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
    destructive: 'bg-destructive/10 text-destructive',
    info: 'bg-info/10 text-info',
  };

  return (
    <div
      className={cn(
        'stat-card p-6 rounded-xl border shadow-soft',
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {change !== undefined && (
            <div className="flex items-center gap-1.5">
              {isPositive && (
                <span className="flex items-center text-sm font-medium text-success">
                  <TrendingUp className="h-4 w-4 mr-0.5" />
                  +{change}%
                </span>
              )}
              {isNegative && (
                <span className="flex items-center text-sm font-medium text-destructive">
                  <TrendingDown className="h-4 w-4 mr-0.5" />
                  {change}%
                </span>
              )}
              {!isPositive && !isNegative && (
                <span className="flex items-center text-sm font-medium text-muted-foreground">
                  <Minus className="h-4 w-4 mr-0.5" />
                  0%
                </span>
              )}
              {changeLabel && (
                <span className="text-xs text-muted-foreground">{changeLabel}</span>
              )}
            </div>
          )}
        </div>
        <div
          className={cn(
            'p-3 rounded-xl',
            iconVariantStyles[variant]
          )}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
