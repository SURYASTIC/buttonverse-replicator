import React from 'react';
import { Button } from '@/components/ui/button';
import { UserPlus, Users, CheckSquare, MessageSquarePlus, AlertTriangle, FileSpreadsheet } from 'lucide-react';

interface TaskActionsProps {
  onAction: (action: string) => void;
}

const TaskActions = ({ onAction }: TaskActionsProps) => {
  const handleAction = (actionName: string) => {
    onAction(actionName);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => handleAction("Self Assign/Delegate")}
      >
        <UserPlus className="h-4 w-4 mr-2" />
        Self Assign/Delegate
      </Button>
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => handleAction("Assign/Delegate/Unassign")}
      >
        <Users className="h-4 w-4 mr-2" />
        Assign/Delegate/Unassign
      </Button>
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => handleAction("Complete")}
      >
        <CheckSquare className="h-4 w-4 mr-2" />
        Complete
      </Button>
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => handleAction("Add Notes")}
      >
        <MessageSquarePlus className="h-4 w-4 mr-2" />
        Add Notes
      </Button>
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => handleAction("Initiate Exception")}
      >
        <AlertTriangle className="h-4 w-4 mr-2" />
        Initiate Exception
      </Button>
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => handleAction("Export Selected")}
      >
        <FileSpreadsheet className="h-4 w-4 mr-2" />
        Export Selected
      </Button>
    </div>
  );
};

export default TaskActions;