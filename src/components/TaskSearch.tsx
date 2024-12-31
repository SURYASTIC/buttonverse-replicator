import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, RefreshCw, X } from 'lucide-react';

const TaskSearch = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Search Criteria</h2>
        <div className="flex gap-4">
          <Input 
            type="text" 
            placeholder="Task ID"
            className="max-w-xs"
          />
          <Button variant="outline">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
      
      <div className="flex justify-between items-center border-t pt-4">
        <h3 className="text-sm text-gray-600">Search Results</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <X className="h-4 w-4 mr-2" />
            Clear
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