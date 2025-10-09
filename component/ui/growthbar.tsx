"use client";
import { Leaf } from "lucide-react";

export default function GrowthBar({ label = "Growth", value = 80 }) {
  return (
    <div className="w-full max-w-md flex flex-col gap-2">
      {/* Label di atas */}
      <div className="flex items-center gap-2">
        <Leaf className="w-4 h-4 text-green-500" />
        <span className="text-green-500 font-medium">{label}</span>
      </div>

      {/* Progress bar + persentase */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 h-2 bg-gray-200 rounded-full">
          <div
            className="absolute left-0 top-0 h-2 bg-green-400 rounded-full transition-all duration-500"
            style={{ width: `${value}%` }}
          ></div>
          <div
            className="absolute top-1/2 -translate-y-1/2 rounded-full bg-green-400 border-2 border-white shadow"
            style={{
              left: `${value}%`,
              transform: "translate(-50%, -50%)",
              width: "1rem",
              height: "1rem",
            }}
          ></div>
        </div>

        {/* Persentase */}
        <span className="text-green-500 font-medium">{value}%</span>
      </div>
    </div>
  );
}
