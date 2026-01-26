"use client";

import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartData, ChartOptions, TooltipItem } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

type Equipment = "equipamentos" | "notebooks" | "smartphone";
type Location = "campoBom" | "pinheiros" | "todas";

interface GraphicBlock {
  labels: string[];
  data: number[];
}

interface DashboardData {
  graphic: Record<Location, Record<Equipment, GraphicBlock>>;
}

interface Props {
  obj?: DashboardData;
}

export function ChartLineal({ obj }: Props) {
  const [equipment, setEquipment] = useState<Equipment>("equipamentos");
  const [location, setLocation] = useState<Location>("todas");

  const current = obj?.graphic?.[location]?.[equipment];

  if (!current) {
    return (
      <div className="card">
        <div className="card-content has-text-centered">
          Carregando gráfico...
        </div>
      </div>
    );
  }

  const data: ChartData<"bar"> = {
    labels: current.labels,
    datasets: [
      {
        label: "Quantidade",
        data: current.data,
        backgroundColor: "#363636",
        borderRadius: 6,
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
          label: (ctx: TooltipItem<"bar">) => {
            const value = ctx.raw as number;
            return value >= 1000
              ? `${(value / 1000).toFixed(1).replace(".0", "")} mil`
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
              ? `${(Number(value) / 1000).toFixed(1).replace(".0", "")} mil`
              : value.toString(),
        },
      },
    },
  };

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">Gráfico de Status</p>
      </header>

      <div className="card-content">
        <div style={{ height: 500 }}>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
