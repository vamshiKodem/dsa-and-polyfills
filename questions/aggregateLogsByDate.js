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

  logs.forEach(({ user, action, date }) => {
    if (!output[date]) {
      output[date] = {
        totalActions: 0,
        uniqueUsers: 0,
        _user: new Set(),
        actualActions: {},
      };
    }
    const day = output[date];
    day.totalActions += 1;
    if (!day._user.has(user)) {
      day._user.add(user);
      day.uniqueUsers += 1;
    }
    day.actualActions[action] = (day.actualActions[action] || 0) + 1;
  });

  Object.keys(output).forEach((date) => {
    delete output[date]._user;
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
