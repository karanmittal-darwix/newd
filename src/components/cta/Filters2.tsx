"use client";

import {
  INDUSTRY_OPTIONS,
  PRODUCT_OPTIONS,
  USE_CASE_OPTIONS,
  LANGUAGE_OPTIONS,
} from "@/data/mockData";
import type { FilterState } from "@/types";

interface Props {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string) => void;
}

interface SelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

function FilterSelect({ label, options, value, onChange }: SelectProps) {
  return (
    <div className="flex flex-col gap-1 flex-1 min-w-[140px]">
      <label className="text-xs text-gray-400 font-medium px-1">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-white border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 pr-8"
        >
          {options.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
        <svg
          className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}

export default function Filters2({ filters, onFilterChange }: Props) {
  return (
    <div className=" rounded-xl p-5 bg-white">
      <div className="flex flex-wrap gap-6">
        <FilterSelect
          label="Industry"
          options={INDUSTRY_OPTIONS}
          value={filters.industry}
          onChange={(v) => onFilterChange("industry", v)}
        />
        <FilterSelect
          label="Product"
          options={PRODUCT_OPTIONS}
          value={filters.product}
          onChange={(v) => onFilterChange("product", v)}
        />
        <FilterSelect
          label="Use Case"
          options={USE_CASE_OPTIONS}
          value={filters.useCase}
          onChange={(v) => onFilterChange("useCase", v)}
        />
        <FilterSelect
          label="Language"
          options={LANGUAGE_OPTIONS}
          value={filters.language}
          onChange={(v) => onFilterChange("language", v)}
        />
      </div>

    </div>
  );
}