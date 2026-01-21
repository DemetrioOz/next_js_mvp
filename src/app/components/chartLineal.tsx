"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import type { ChartOptions, ChartData, TooltipItem } from "chart.js";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface ChartDataItem {
  labels: string[];
  data: number[];
}

interface GraphicData {
  [location: string]: {
    [equipment: string]: ChartDataItem;
  };
}

interface GraficoStatus {
  obj: {
    graphic?: GraphicData;
  };
}

export const ChartLineal = ({ obj }: GraficoStatus) => {
  const [equipment, setEquipament] = useState<string>("equipamentos");
  const [location, setLocation] = useState<string>("todas");
  const [open, setOpen] = useState<boolean>(false);

  const current = obj?.graphic?.[location]?.[equipment];

  const data: ChartData<"bar"> = {
    labels: current?.labels || [],
    datasets: [
      {
        label: "Quantidade",
        data: current?.data || [],
        backgroundColor: "#00003b",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<"bar">) {
            const value = context.raw as number;
            return value >= 1000
              ? (value / 1000).toFixed(1).replace(".0", "") + " mil"
              : value.toString();
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          callback: (value) =>
            Number(value) >= 1000
              ? (Number(value) / 1000).toFixed(1).replace(".0", "") + " mil"
              : value.toString(),
        },
      },
    },
  };

  return (
    <div>
      <h2>Gráfico de status</h2>
      <div
        className={`dropdown${open ? " is-active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>Dropdown button</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">
              {" "}
              Dropdown item{" "}
            </a>
            <a className="dropdown-item"> Other dropdown item </a>
            <a href="#" className="dropdown-item is-active">
              {" "}
              Active dropdown item{" "}
            </a>
            <a href="#" className="dropdown-item">
              {" "}
              Other dropdown item{" "}
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              {" "}
              With a divider{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
    // <div className="card shadow-sm">
    //   <div className="card-header fw-bold d-flex justify-content-between">
    //     <h5>Gráfico de status</h5>
    //     <div className="btn-group me-2" style={{ width: "20vh" }}>
    //       <button
    //         type="button"
    //         className="btn btn-primary dropdown-toggle dropdown-toggle-split"
    //         data-bs-toggle="dropdown"
    //         aria-haspopup="true"
    //         aria-expanded="false"
    //       >
    //         <svg
    //           className="icon icon-xs"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //             clipRule="evenodd"
    //           ></path>
    //         </svg>
    //         <span className="sr-only">
    //           {equipment[0].toUpperCase() + equipment.substring(1)}
    //         </span>
    //       </button>
    //       <div className="dropdown-menu">
    //         <button
    //           className="dropdown-item"
    //           onClick={() => setEquipament("smartphone")}
    //         >
    //           Smartphone
    //         </button>
    //         <button
    //           className="dropdown-item"
    //           onClick={() => setEquipament("notebooks")}
    //         >
    //           Notebook
    //         </button>
    //         <button
    //           className="dropdown-item"
    //           onClick={() => setEquipament("equipamentos")}
    //         >
    //           Equipamentos
    //         </button>
    //       </div>
    //     </div>
    //     <div className="btn-group me-2" style={{ width: "20vh" }}>
    //       <button
    //         type="button"
    //         className="btn btn-primary dropdown-toggle dropdown-toggle-split"
    //         data-bs-toggle="dropdown"
    //         aria-haspopup="true"
    //         aria-expanded="false"
    //       >
    //         <svg
    //           className="icon icon-xs"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //             clipRule="evenodd"
    //           ></path>
    //         </svg>
    //         <span className="sr-only">
    //           {location === "campoBom"
    //             ? "Campo Bom"
    //             : location[0].toUpperCase() + location.substring(1)}
    //         </span>
    //       </button>
    //       <div className="dropdown-menu">
    //         <button
    //           className="dropdown-item"
    //           onClick={() => setLocation("campoBom")}
    //         >
    //           Campo Bom
    //         </button>
    //         <button
    //           className="dropdown-item"
    //           onClick={() => setLocation("pinheiros")}
    //         >
    //           Pinheiros
    //         </button>
    //         <button
    //           className="dropdown-item"
    //           onClick={() => setLocation("todas")}
    //         >
    //           Todas
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="card-body" style={{ height: "60vh" }}>
    //     <Bar data={data} options={options} />
    //   </div>
    // </div>
  );
};
