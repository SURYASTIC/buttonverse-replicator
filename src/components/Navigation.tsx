import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Tasks', path: '/' },
    { name: 'Orders', path: '/orders' },
    { name: 'Task Reporting', path: '/reporting' },
    { name: 'IP Data', path: '/ip-data' },
    { name: 'ASRs', path: '/asrs' },
    { name: 'Quick Start', path: '/quick-start' },
    { name: 'Transaction Status', path: '/transactions' },
    { name: 'Settings', path: '/settings' },
    { name: 'Enhanced Search', path: '/enhanced-search' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">BPMPortal</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;