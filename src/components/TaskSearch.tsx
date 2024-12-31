import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, RefreshCw, X } from 'lucide-react';

const TaskSearch = () => {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Search Criteria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Task ID</label>
            <Input type="text" placeholder="Enter Task ID" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Process ID</label>
            <Input type="text" placeholder="Enter Process ID" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Task Name</label>
            <Input type="text" placeholder="Enter Task Name" />
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-600">
          Search Results
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <X className="h-4 w-4 mr-2" />
            Clear
          </Button>
          <Button variant="outline" size="sm">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskSearch;