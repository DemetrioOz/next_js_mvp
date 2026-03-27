
'use client';
import { useState } from 'react';
import { Menu } from '@/app/components/menu';
import { Navbar } from '@/app/components/Navbar';
// import { getBaseUrl } from '@/app/lib/url';

// async function getDashboardData() {
//   const baseUrl = getBaseUrl();
//   const res = await fetch(`${baseUrl}/api/equipament/peripherals`, {
//     cache: 'no-store',
//   });
//   const data = await res.json();
//   return data;
// }



export default function Peripherals() {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState(0);

  return (
    <div className="columns is-gapless" style={{ minHeight: '100vh' }}>
      <Menu />
      <div className="column">
        <Navbar title='Perifericos' />
        <div className="columns is-multiline">
          <div className="column is-one-quarter card mx-1">
            <div className="is-flex is-justify-content-space-between is-align-items-center mx-3">
              <h1 className="is-size-4"><b>Mouse</b></h1>
              <h1 className="is-size-3 has-text-weight-bold">25</h1>
            </div>
            <div className="is-flex is-justify-content-space-between is-align-items-center mx-3 my-1">
              <h1 className="is-size-4"><b>Mouse Dell</b></h1>
            </div>
            <div>
              <button className="button" onClick={() => setShowInput(!showInput)}>
                Remover
              </button>
              {showInput && (
                <>
                  <div className="field mt-2">
                    <label htmlFor="numero-chamado" className="label is-small">
                      Numero do chamado
                    </label>
                    <input
                      id="numero-chamado"
                      className="input"
                      type="text"
                      placeholder="Numero do chamado"
                      autoFocus
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
