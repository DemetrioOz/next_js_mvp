import { Accordion } from "@/app/components/accordion";
import { Menu } from "@/app/components/menu";

export default function Notebook() {
  return (
    <div className="columns is-gapless" style={{ minHeight: '100vh' }}>
      <Menu />
      <main className="column columns">
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
        </div>
      </main>
    </div>
  );
}
