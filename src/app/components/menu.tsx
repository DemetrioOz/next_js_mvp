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
          <Link href="/equipament">Equipamentos</Link>
          <ul>
            <li>
              <Link href="/equipament/notebooks">Notebooks</Link>
            </li>
            <li>
              <Link href="/dashboard/peripherals">Perifericos</Link>
            </li>
            <li>
              <Link href="/dashboard/peripherals">Smartphones</Link>
            </li>
            <li>
              <Link href="/dashboard/peripherals">Desktops</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/dashboard">Colaboradores</Link>
        </li>
      </ul>
    </aside>
  );
};
