import React from 'react';
import Navigation from '@/components/Navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Search, X } from 'lucide-react';

const QuickStart = () => {
  const { toast } = useToast();

  const handleSearch = () => {
    toast({
      title: "Search Action",
      description: "Search button was clicked",
    });
  };

  const handleClear = () => {
    toast({
      title: "Clear Action",
      description: "Clear button was clicked",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Quick Start</h1>
          <p className="mt-2 text-sm text-gray-600">
            An "Enhanced Search" tab has been added. This is an alternative, expanded search capability that will augment the existing search.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <label className="w-32 text-sm font-medium text-gray-700">Search On Id:</label>
              <select className="flex-1 h-10 rounded-md border border-gray-300 bg-white px-3">
                <option>Customer Order Id</option>
                <option>Service Order Id</option>
                <option>Service Id</option>
              </select>
              <Input className="flex-1" placeholder="Enter search term..." />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-32 text-sm font-medium text-gray-700">Customer Id:</label>
              <Input className="flex-1" />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-32 text-sm font-medium text-gray-700">ECCKT:</label>
              <Input className="flex-1" />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-32 text-sm font-medium text-gray-700">PON:</label>
              <Input className="flex-1" />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-32 text-sm font-medium text-gray-700">Order Type:</label>
              <select className="flex-1 h-10 rounded-md border border-gray-300 bg-white px-3">
                <option>All</option>
                <option>Cancel</option>
                <option>New</option>
                <option>Supp-Modify</option>
              </select>
            </div>

            <div className="flex justify-end gap-4">
              <Button 
                variant="outline" 
                onClick={handleClear}
              >
                <X className="h-4 w-4 mr-2" />
                Clear
              </Button>
              <Button 
                onClick={handleSearch}
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuickStart;