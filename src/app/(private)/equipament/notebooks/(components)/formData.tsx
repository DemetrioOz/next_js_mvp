import { Accordion } from "@/app/components/accordion"

export const FormData = () => {
  return (
    <Accordion title="Filtros">
      <div className="columns mx-1">
        <div className="column m-0 p-1">
          <input className="input" type="text" placeholder="AssertTag" autoFocus />
        </div>
        <div className="column m-0 p-1">
          <input className="input" type="text" placeholder="Serial Number" />
        </div>
      </div>
      <div className="columns mx-1">
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
      <div className="columns mx-1">
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
        <div className="column  m-0 p-1">
          <div className="select">
            <select>
              <option>Type</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
      <div className="columns mx-1">
        <div className="column m-0 p-1">
          <input className="input" type="text" placeholder="cost" />
        </div>
        <div className="column m-0 p-1">
          <input className="input" type="date" placeholder="purchaseDate" />
        </div>
        <div className="column m-0 p-1">
          <input className="input" type="date" placeholder="warrantyEnd" />
        </div>
      </div>
    </Accordion>
  )
}