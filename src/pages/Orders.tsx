import React from 'react';
import Navigation from '@/components/Navigation';
import TaskSearch from '@/components/TaskSearch';
import TaskActions from '@/components/TaskActions';
import TaskTable from '@/components/TaskTable';
import { useToast } from '@/hooks/use-toast';

const Orders = () => {
  const { toast } = useToast();

  const handleAction = (action: string) => {
    toast({
      title: "Order Action",
      description: `${action} action was triggered for Orders page`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-[95%] mx-auto py-6 px-4">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Orders</h1>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <TaskSearch />
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <TaskActions onAction={handleAction} />
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <TaskTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Orders;