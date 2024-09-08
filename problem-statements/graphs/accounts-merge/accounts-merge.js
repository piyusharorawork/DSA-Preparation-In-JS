import { UnionFind } from "../../../data-structures/graph/graph";

export function accountsMerge(accounts) {
  const uf = new UnionFind();
  const emailToUserNameMap = {};

  for (const account of accounts) {
    const userName = account[0];
    const firstEmail = account[1];

    for (let i = 1; i < account.length; i++) {
      const email = account[i];
      uf.union(firstEmail, email);
      emailToUserNameMap[email] = userName;
    }
  }

  const groups = {};
  for (const email in emailToUserNameMap) {
    const root = uf.find(email);
    if (!groups[root]) {
      groups[root] = [];
    }
    groups[root].push(email);
  }

  const result = [];

  for (const groupedEmail in groups) {
    const userName = emailToUserNameMap[groupedEmail];

    const emails = groups[groupedEmail];
    result.push([userName, ...emails.sort()]);
  }

  return result;
}
