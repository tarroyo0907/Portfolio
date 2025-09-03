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
    <>
      {isVisible && (
        <div 
          className={`fixed ${sideClass} top-0 h-full w-96 bg-black/75 text-white p-8 transform transition-all duration-300 ease-in-out z-10 ${className}`}
        >
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="border-t border-white/20 pt-6">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;