import Link from 'next/link';

export const Menu = () => {
  return (
    <aside className="menu m-3 m-3" style={{ width: '15vw' }}>
      <p className="menu-label">Devices</p>
      <ul className="menu-list">
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <a className="is-active">Manage Your Team</a>
          <ul>
            <li>
              <a>Members</a>
            </li>
            <li>
              <a>Plugins</a>
            </li>
            <li>
              <a>Add a member</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Invitations</a>
        </li>
        <li>
          <a>Cloud Storage Environment Settings</a>
        </li>
        <li>
          <a>Authentication</a>
        </li>
      </ul>
      <p className="menu-label">Transactions</p>
      <ul className="menu-list">
        <li>
          <a>Payments</a>
        </li>
        <li>
          <a>Transfers</a>
        </li>
        <li>
          <a>Balance</a>
        </li>
      </ul>
    </aside>
  );
};
