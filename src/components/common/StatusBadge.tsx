import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'success' | 'warning' | 'destructive' | 'info' | 'outline';

interface StatusBadgeProps {
  status: string;
  variant?: BadgeVariant;
  className?: string;
  pulse?: boolean;
}

const statusVariantMap: Record<string, BadgeVariant> = {
  // Appointment statuses
  scheduled: 'default',
  confirmed: 'info',
  'checked-in': 'success',
  'in-progress': 'warning',
  completed: 'success',
  cancelled: 'destructive',
  'no-show': 'destructive',
  
  // Patient statuses
  active: 'success',
  inactive: 'default',
  deceased: 'destructive',
  
  // Lab/Radiology statuses
  ordered: 'default',
  pending: 'warning',
  processing: 'info',
  resulted: 'success',
  critical: 'destructive',
  reported: 'success',
  
  // Priority levels
  routine: 'default',
  urgent: 'warning',
  stat: 'destructive',
  
  // Medication statuses
  discontinued: 'default',
  
  // Generic
  draft: 'outline',
  final: 'success',
  amended: 'warning',
};

export function StatusBadge({ status, variant, className, pulse }: StatusBadgeProps) {
  const resolvedVariant = variant || statusVariantMap[status.toLowerCase()] || 'default';
  
  const variantStyles: Record<BadgeVariant, string> = {
    default: 'bg-muted text-muted-foreground',
    success: 'bg-success/10 text-success border-success/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
    destructive: 'bg-destructive/10 text-destructive border-destructive/20',
    info: 'bg-info/10 text-info border-info/20',
    outline: 'bg-transparent border-border text-muted-foreground',
  };

  const displayStatus = status.charAt(0).toUpperCase() + status.slice(1).replace(/-/g, ' ');

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border',
        variantStyles[resolvedVariant],
        className
      )}
    >
      {pulse && (
        <span className={cn(
          'h-1.5 w-1.5 rounded-full animate-pulse',
          resolvedVariant === 'success' && 'bg-success',
          resolvedVariant === 'warning' && 'bg-warning',
          resolvedVariant === 'destructive' && 'bg-destructive',
          resolvedVariant === 'info' && 'bg-info',
          resolvedVariant === 'default' && 'bg-muted-foreground',
          resolvedVariant === 'outline' && 'bg-muted-foreground'
        )} />
      )}
      {displayStatus}
    </span>
  );
}
