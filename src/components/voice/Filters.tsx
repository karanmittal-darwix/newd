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

export default function Filters({ filters, onFilterChange }: Props) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white">
      <div className="flex flex-wrap gap-4">
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

      <div className="flex items-center justify-center gap-3 mt-5">
        <button className="flex items-center gap-2 border border-gray-200 rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Request a demo
        </button>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md px-5 py-2 text-sm font-medium transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Play Sample
        </button>
      </div>
    </div>
  );
}