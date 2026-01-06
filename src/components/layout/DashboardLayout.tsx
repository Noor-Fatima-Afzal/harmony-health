import { ReactNode } from 'react';
import { AppSidebar } from './AppSidebar';
import { TopNav } from './TopNav';
import { useSidebarStore } from '@/stores/sidebarStore';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { isCollapsed } = useSidebarStore();

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <div
        className={cn(
          'transition-all duration-300 ease-in-out',
          isCollapsed ? 'lg:ml-20' : 'lg:ml-64'
        )}
      >
        <TopNav />
        <main className="p-4 lg:p-6 animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
}
