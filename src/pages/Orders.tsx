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
    <div className="min-h-screen bg-[#f3f3f3]">
      <Navigation />
      <main className="container mx-auto py-8 px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Orders</h1>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow p-6">
            <TaskSearch />
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <TaskActions onAction={handleAction} />
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <TaskTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Orders;