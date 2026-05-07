import React from "react";

type BadgeVariant = "default" | "urgent";

const tasks: { label: string; due: string; variant: BadgeVariant }[] = [
  { label: "Customer pays ₹2,480", due: "22 Apr", variant: "default" },
  { label: "Customer submits salary slip", due: "EOD today", variant: "urgent" },
  { label: "Agent triggers sanction letter", due: "EOD today", variant: "urgent" },
];

const badgeStyles: Record<BadgeVariant, string> = {
  default: "text-gray-600 bg-white border border-gray-200 shadow-sm",
  urgent: "text-indigo-600 bg-indigo-100/80 border border-indigo-200/60",
};

const CommitAutoTasks: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 max-w-lg w-full">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800 tracking-tight">
          Commit AI · Auto-PD &amp; tasks
        </h1>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          Detects promises, follow-ups, and next steps from the call, then
          routes tasks to CRM and field workflows.
        </p>
      </div>

      <div className="bg-indigo-50/60 rounded-xl p-5">
        <p className="font-mono text-xs text-gray-400 font-medium tracking-widest uppercase mb-4">
          PROMISES CAPTURED · {tasks.length}
        </p>

        <ul className="divide-y divide-indigo-100/60">
          {tasks.map((task) => (
            <li
              key={task.label}
              className="flex items-center justify-between gap-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">{task.label}</span>
              </div>
              <span
                className={`text-xs font-medium rounded-full px-3 py-1 whitespace-nowrap ${badgeStyles[task.variant]}`}
              >
                {task.due}
              </span>
            </li>
          ))}
        </ul>

        <div className="border-t border-dashed border-indigo-200 mt-4 pt-3 flex items-center justify-between">
          <span className="text-xs text-gray-400">
            {tasks.length} booked as CRM tasks
          </span>
          <span className="text-xs font-semibold text-green-500">
            Auto-reminders queued
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommitAutoTasks;