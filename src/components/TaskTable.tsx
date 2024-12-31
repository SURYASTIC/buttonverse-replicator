import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';

const TaskTable = () => {
  const tasks = [
    {
      id: '112827455',
      processId: '54713684',
      name: 'Assign Design Request',
      status: 'Assigned',
      counter: 1,
      state: 'Active',
      isException: 'No',
      hasException: 'No',
      createDate: '12/19/2024 3:43:15 PM',
      dueDate: '12/20/2024 11:13:15 AM'
    },
    {
      id: '112827506',
      processId: '54714698',
      name: 'Submit Install Hybrid WAN',
      status: 'Assigned',
      counter: 1,
      state: 'Active',
      isException: 'No',
      hasException: 'No',
      createDate: '12/20/2024 1:55:51 PM',
      dueDate: '12/20/2024 3:55:52 PM'
    }
  ];

  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox />
            </TableHead>
            <TableHead>Process ID</TableHead>
            <TableHead>Task ID</TableHead>
            <TableHead>Task Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Counter</TableHead>
            <TableHead>State</TableHead>
            <TableHead>Is Exception</TableHead>
            <TableHead>Has Exception</TableHead>
            <TableHead>Create Date</TableHead>
            <TableHead>Due Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>{task.processId}</TableCell>
              <TableCell>{task.id}</TableCell>
              <TableCell>{task.name}</TableCell>
              <TableCell>{task.status}</TableCell>
              <TableCell>{task.counter}</TableCell>
              <TableCell>{task.state}</TableCell>
              <TableCell>{task.isException}</TableCell>
              <TableCell>{task.hasException}</TableCell>
              <TableCell>{task.createDate}</TableCell>
              <TableCell>{task.dueDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TaskTable;