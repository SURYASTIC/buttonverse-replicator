import React from 'react';
import Navigation from '@/components/Navigation';
import TaskSearch from '@/components/TaskSearch';
import TaskActions from '@/components/TaskActions';
import TaskTable from '@/components/TaskTable';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Tasks</h1>
          <p className="mt-2 text-sm text-gray-600">
            An "Enhanced Search" tab has been added. This is an alternative, expanded search capability that will augment the existing search. Both search tabs will continue to be supported and you may use which ever best meets your needs.
          </p>
        </div>
        
        <TaskSearch />
        <TaskActions />
        <TaskTable />
      </main>
    </div>
  );
};

export default Index;