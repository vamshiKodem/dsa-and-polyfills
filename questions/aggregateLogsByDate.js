const logs = [
  { user: "u1", action: "login", date: "11-04-2026" },
  { user: "u2", action: "logout", date: "11-04-2026" },
  { user: "u1", action: "view_page", date: "11-04-2026" },
  { user: "u3", action: "login", date: "11-04-2026" },
  { user: "u2", action: "login", date: "10-04-2026" },
  { user: "u2", action: "logout", date: "10-04-2026" },
  { user: "u4", action: "login", date: "10-04-2026" },
  { user: "u5", action: "update_profile", date: "09-04-2026" },
  { user: "u5", action: "login", date: "09-04-2026" },
  { user: "u6", action: "login", date: "09-04-2026" },
];

const aggregateLogsByDate = (logs) => {
  const output = {};

  logs.forEach((log) => {
    if (log.date in output) {
      const current = output[log.date];
      output[log.date] = {
        ...current,
        users: current.users.add(log.user),
        uniqueUsers: current.users.size,
        totalActions: current.totalActions + 1,
        actualActions: {
          ...current.actualActions,
          [log.action]: current.actualActions[log.action]
            ? current.actualActions[log.action] + 1
            : 1,
        },
      };
    } else {
      output[log.date] = {
        totalActions: 1,
        uniqueUsers: 1,
        users: new Set([log.user]),
        actualActions: {
          [log.action]: 1,
        },
      };
    }
  });
  Object.keys(output).forEach((log) => {
    delete output[log].users;
  });

  return output;
};

console.log(aggregateLogsByDate(logs));

// const output = {
//   "11-04-2026": {
//     totalActions: 4,
//     uniqueUsers: 3,
//     actualActions: {
//       login: 1,
//       logout: 1,
//       view_page: 1,
//     },
//   },
//   "10-04-2026": {
//     totalActions: 3,
//     uniqueUsers: 2,
//     actualActions: {
//       login: 2,
//       logout: 1,
//     },
//   },
//   "09-04-2026": {
//     totalActions: 3,
//     uniqueUsers: 2,
//     actualActions: {
//       update_profile: 1,
//       login: 1,
//     },
//   },
// };
