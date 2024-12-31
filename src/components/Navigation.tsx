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
        <div className="flex flex-col">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-blue-600">BPMPortal</h1>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-sm text-gray-600">
                Welcome, User | Help | Manage Notifications
              </div>
              <div className="ml-4 flex items-center">
                <span className="text-sm text-gray-600 mr-2">View a Task:</span>
                <input
                  type="text"
                  placeholder="Task ID..."
                  className="h-8 w-48 rounded border border-gray-300 px-2 text-sm"
                />
                <button className="ml-2 px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm">
                  Go
                </button>
              </div>
            </div>
          </div>
          <div className="flex space-x-8 -mb-px">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  inline-flex items-center px-1 pt-1 pb-3 text-sm font-medium
                  ${location.pathname === item.path
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;