import React from 'react';
import { Button } from '@/components/ui/button';
import { UserPlus, Users, CheckSquare, MessageSquarePlus, AlertTriangle, FileSpreadsheet } from 'lucide-react';

const TaskActions = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <Button variant="outline" size="sm">
        <UserPlus className="h-4 w-4 mr-2" />
        Self Assign/Delegate
      </Button>
      <Button variant="outline" size="sm">
        <Users className="h-4 w-4 mr-2" />
        Assign/Delegate/Unassign
      </Button>
      <Button variant="outline" size="sm">
        <CheckSquare className="h-4 w-4 mr-2" />
        Complete
      </Button>
      <Button variant="outline" size="sm">
        <MessageSquarePlus className="h-4 w-4 mr-2" />
        Add Notes
      </Button>
      <Button variant="outline" size="sm">
        <AlertTriangle className="h-4 w-4 mr-2" />
        Initiate Exception
      </Button>
      <Button variant="outline" size="sm">
        <FileSpreadsheet className="h-4 w-4 mr-2" />
        Export Selected
      </Button>
    </div>
  );
};

export default TaskActions;