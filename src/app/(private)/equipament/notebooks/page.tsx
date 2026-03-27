import { Menu } from '@/app/components/menu';
import { Navbar } from '@/app/components/Navbar';
import { TableView } from './(components)/tableView';
import { FormData } from './(components)/formData';

export default function Notebook() {
  return (
    <div className="columns is-gapless" style={{ minHeight: '100vh' }}>
      <Menu />
      <div className="column">
        <Navbar title='Notebooks' />
        <div className="column box">
          <FormData />
          <TableView />
        </div>
      </div>
    </div>
  );
}
