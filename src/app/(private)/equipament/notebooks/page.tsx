import { Accordion } from "@/app/components/accordion";
import { Menu } from "@/app/components/menu";

export default function Notebook() {
  return (
    <div className="columns is-gapless" style={{ minHeight: '100vh' }}>
      <Menu />
      <main className="column columns">
        <div className="column">
          <Accordion title="Notebooks" opened={true}>
            <div className="columns">
              <div className="column m-0 p-1">
                <input className="input" type="text" placeholder="AssertTag" />
              </div>
              <div className="column m-0 p-1">
                <input className="input" type="text" placeholder="Serial Number" />
              </div>
            </div>
            <div className="columns">
              <div className="column m-0 p-1">
                <input className="input" type="text" placeholder="Brand" />
              </div>
              <div className="column m-0 p-1">
                <input className="input" type="text" placeholder="model" />
              </div>
              <div className="column m-0 p-1">
                <input className="input" type="text" placeholder="rentalOwner" />
              </div>
            </div>
            <div className="columns">
              <div className="column  m-0 p-1">
                <div className="select">
                  <select>
                    <option>Status</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
              <div className="column  m-0 p-1">
                <div className="select">
                  <select>
                    <option>Location</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column m-0 p-1">
                <input className="input" type="text" placeholder="cost" />
              </div>
              <div className="column m-0 p-1">
                <input className="input" type="date" placeholder="purchaseDate" />
              </div>
              <div className="column m-0 p-1">
                {/* <div className="field">
                  <div className="control"> */}
                <input className="input" type="date" placeholder="warrantyEnd" />
                {/* </div> */}
                {/* </div> */}

                {/* <input className="input" type="text" placeholder="warrantyEnd" /> */}
              </div>
            </div>
            <p>assetType</p>
          </Accordion>
        </div>
        <div className="column">
          <Accordion title="Notebooks">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse elementum mauris et porta mattis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse elementum mauris et porta mattis.
            </p>
          </Accordion>
        </div> \
      </main>
    </div>
  );
}
