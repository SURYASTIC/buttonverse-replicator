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
    <div className="rounded-lg border border-gray-200">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="w-12">
              <Checkbox />
            </TableHead>
            <TableHead className="font-semibold">Process ID</TableHead>
            <TableHead className="font-semibold">Task ID</TableHead>
            <TableHead className="font-semibold">Task Name</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold">Counter</TableHead>
            <TableHead className="font-semibold">State</TableHead>
            <TableHead className="font-semibold">Is Exception</TableHead>
            <TableHead className="font-semibold">Has Exception</TableHead>
            <TableHead className="font-semibold">Create Date</TableHead>
            <TableHead className="font-semibold">Due Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id} className="hover:bg-gray-50">
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">{task.processId}</TableCell>
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