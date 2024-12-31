import React from 'react';
import Navigation from '@/components/Navigation';
import TaskSearch from '@/components/TaskSearch';
import TaskActions from '@/components/TaskActions';
import TaskTable from '@/components/TaskTable';
import { useToast } from '@/components/ui/use-toast';

const Orders = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Orders</h1>
        </div>
        <TaskSearch />
        <TaskActions onAction={(action) => {
          toast({
            title: "Order Action",
            description: `${action} action was triggered`,
          });
        }} />
        <TaskTable />
      </main>
    </div>
  );
};

export default Orders;