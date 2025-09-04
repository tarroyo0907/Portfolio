import React from 'react';

interface SidebarProps {
  isVisible: boolean;
  side: 'left' | 'right';
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  isVisible,
  side,
  title,
  children,
  className = ''
}) => {
  const sideClass = side === 'left' ? 'left-0' : 'right-0';
  
  return (
    <div 
      className={`fixed top-0 ${side === 'left' ? 'left-0' : 'right-0'} h-full w-[400px] bg-black bg-opacity-80 backdrop-blur-sm text-white transform transition-transform duration-300 ease-in-out z-50 ${
        isVisible ? 'translate-x-0' : side === 'left' ? '-translate-x-full' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="p-6 border-b border-white/20">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      
      {/* Scrollable Content */}
      <div className="h-full overflow-y-auto pb-20 p-6">
        <div className="space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;