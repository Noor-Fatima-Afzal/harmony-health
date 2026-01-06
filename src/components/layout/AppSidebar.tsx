import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Users,
  Calendar,
  FileText,
  Pill,
  FlaskConical,
  Scan,
  Bed,
  Scissors,
  AlertTriangle,
  UserCog,
  TrendingUp,
  DollarSign,
  Settings,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  Activity,
  Stethoscope,
  Heart,
  X,
  Menu,
  ClipboardList,
  Building2,
  Dumbbell,
  Apple,
  Shield,
  BarChart3,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/stores/sidebarStore';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface NavItem {
  label: string;
  icon: React.ElementType;
  href?: string;
  children?: { label: string; href: string }[];
}

const navigationItems: NavItem[] = [
  { label: 'Dashboard', icon: Home, href: '/' },
  {
    label: 'Patients',
    icon: Users,
    children: [
      { label: 'Patient List', href: '/patients' },
      { label: 'Registration', href: '/patients/register' },
      { label: 'Appointments', href: '/appointments' },
      { label: 'EMR', href: '/emr' },
    ],
  },
  {
    label: 'Clinical',
    icon: Stethoscope,
    children: [
      { label: 'Prescriptions', href: '/prescriptions' },
      { label: 'Lab Orders', href: '/lab-orders' },
      { label: 'Radiology', href: '/radiology' },
      { label: 'Procedures', href: '/procedures' },
      { label: 'Emergency', href: '/emergency' },
    ],
  },
  {
    label: 'Pharmacy',
    icon: Pill,
    children: [
      { label: 'Dispensing', href: '/pharmacy/dispensing' },
      { label: 'Inventory', href: '/pharmacy/inventory' },
      { label: 'Billing', href: '/pharmacy/billing' },
    ],
  },
  {
    label: 'Laboratory',
    icon: FlaskConical,
    children: [
      { label: 'Orders', href: '/lab/orders' },
      { label: 'Results', href: '/lab/results' },
      { label: 'Inventory', href: '/lab/inventory' },
    ],
  },
  {
    label: 'Radiology',
    icon: Scan,
    children: [
      { label: 'Orders', href: '/radiology/orders' },
      { label: 'Worklist', href: '/radiology/worklist' },
      { label: 'Viewer', href: '/radiology/viewer' },
      { label: 'Reports', href: '/radiology/reports' },
    ],
  },
  {
    label: 'Beds & Rooms',
    icon: Bed,
    href: '/beds',
  },
  {
    label: 'Surgery',
    icon: Scissors,
    children: [
      { label: 'Schedule', href: '/surgery/schedule' },
      { label: 'Checklist', href: '/surgery/checklist' },
    ],
  },
  {
    label: 'Emergency',
    icon: AlertTriangle,
    href: '/emergency-dashboard',
  },
  {
    label: 'Staff',
    icon: UserCog,
    children: [
      { label: 'Directory', href: '/staff' },
      { label: 'Scheduling', href: '/staff/scheduling' },
      { label: 'Performance', href: '/staff/performance' },
    ],
  },
  {
    label: 'Therapy',
    icon: Dumbbell,
    children: [
      { label: 'Physiotherapy', href: '/therapy/physio' },
      { label: 'Nutrition', href: '/therapy/nutrition' },
      { label: 'Fitness', href: '/therapy/fitness' },
    ],
  },
  {
    label: 'Finance',
    icon: DollarSign,
    children: [
      { label: 'Billing', href: '/finance/billing' },
      { label: 'Insurance', href: '/finance/insurance' },
      { label: 'Reports', href: '/finance/reports' },
    ],
  },
  {
    label: 'Analytics',
    icon: BarChart3,
    children: [
      { label: 'Dashboard', href: '/analytics' },
      { label: 'Reports', href: '/analytics/reports' },
      { label: 'Predictions', href: '/analytics/predictions' },
    ],
  },
  {
    label: 'Admin',
    icon: Building2,
    children: [
      { label: 'Users & Roles', href: '/admin/users' },
      { label: 'Compliance', href: '/admin/compliance' },
      { label: 'Audit Logs', href: '/admin/audit' },
    ],
  },
];

const bottomItems: NavItem[] = [
  { label: 'Settings', icon: Settings, href: '/settings' },
  { label: 'Help', icon: HelpCircle, href: '/help' },
];

export function AppSidebar() {
  const location = useLocation();
  const { isCollapsed, toggleCollapsed, isMobileOpen, setMobileOpen } = useSidebarStore();
  const [expandedItems, setExpandedItems] = useState<string[]>(['Patients', 'Clinical']);

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const isActive = (href?: string) => {
    if (!href) return false;
    return location.pathname === href;
  };

  const isChildActive = (children?: { href: string }[]) => {
    if (!children) return false;
    return children.some((child) => location.pathname === child.href);
  };

  const NavItemComponent = ({ item }: { item: NavItem }) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.label);
    const active = isActive(item.href) || isChildActive(item.children);
    const Icon = item.icon;

    if (isCollapsed) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to={item.href || item.children?.[0]?.href || '#'}
              className={cn(
                'flex items-center justify-center w-12 h-12 rounded-lg mx-auto transition-all duration-200',
                active
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-lg shadow-primary/25'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              )}
              onClick={() => setMobileOpen(false)}
            >
              <Icon className="h-5 w-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right" className="font-medium">
            {item.label}
          </TooltipContent>
        </Tooltip>
      );
    }

    if (hasChildren) {
      return (
        <div>
          <button
            onClick={() => toggleExpanded(item.label)}
            className={cn(
              'w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200',
              active
                ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
            )}
          >
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5" />
              <span className="font-medium text-sm">{item.label}</span>
            </div>
            {isExpanded ? (
              <ChevronDown className="h-4 w-4 opacity-60" />
            ) : (
              <ChevronRight className="h-4 w-4 opacity-60" />
            )}
          </button>
          {isExpanded && (
            <div className="ml-4 mt-1 space-y-1 border-l border-sidebar-border pl-4">
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  to={child.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block px-3 py-2 rounded-lg text-sm transition-all duration-200',
                    isActive(child.href)
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground font-medium shadow-lg shadow-primary/25'
                      : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
                  )}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        to={item.href || '#'}
        onClick={() => setMobileOpen(false)}
        className={cn(
          'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200',
          active
            ? 'bg-sidebar-primary text-sidebar-primary-foreground font-medium shadow-lg shadow-primary/25'
            : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
        )}
      >
        <Icon className="h-5 w-5" />
        <span className="text-sm">{item.label}</span>
      </Link>
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fade-in"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 z-50 h-full bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out',
          isCollapsed ? 'w-20' : 'w-64',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Header */}
        <div className={cn(
          'flex items-center h-16 px-4 border-b border-sidebar-border',
          isCollapsed ? 'justify-center' : 'justify-between'
        )}>
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-sidebar-accent-foreground text-lg leading-none">MedCore</h1>
                <p className="text-xs text-sidebar-foreground/60">Healthcare System</p>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/30">
              <Heart className="h-5 w-5 text-white" />
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(false)}
            className="lg:hidden text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 h-[calc(100vh-8rem)]">
          <nav className="p-3 space-y-1">
            {navigationItems.map((item) => (
              <NavItemComponent key={item.label} item={item} />
            ))}
          </nav>
        </ScrollArea>

        {/* Bottom items */}
        <div className={cn(
          'absolute bottom-0 left-0 right-0 p-3 border-t border-sidebar-border space-y-1',
          isCollapsed && 'flex flex-col items-center'
        )}>
          {!isCollapsed && (
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleCollapsed}
              className="w-full justify-start text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <ChevronRight className={cn(
                'h-4 w-4 mr-2 transition-transform duration-200',
                !isCollapsed && 'rotate-180'
              )} />
              Collapse
            </Button>
          )}
          {isCollapsed && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleCollapsed}
                  className="text-sidebar-foreground/60 hover:bg-sidebar-accent"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Expand</TooltipContent>
            </Tooltip>
          )}
        </div>
      </aside>
    </>
  );
}
