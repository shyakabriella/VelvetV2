"use client";

import { useState } from "react";
import { FiltersIcon, ListIcon, MapIcon, ChevronDown } from "./Icons";

export default function Filters() {
  const [view, setView] = useState<"list" | "map">("list");

  return (
    <div className="mx-auto mt-9 max-w-[1426px]">
      <div className="flex flex-wrap items-center gap-3">
        <button className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-3 text-lg">
          <FiltersIcon className="h-5 w-5" /> All Filters
        </button>
        <button className="rounded-md border border-gray-300 bg-white px-4 py-3 text-lg">Amenities</button>
        <button className="rounded-md border border-gray-300 bg-white px-4 py-3 text-lg">Brands</button>
        <span className="mx-1 hidden h-10 border-l border-dotted border-gray-400 sm:block" />
        <button className="rounded-full border border-gray-300 bg-white px-4 py-3 text-lg">Free Breakfast (2)</button>
        <button className="rounded-full border border-gray-300 bg-white px-4 py-3 text-lg">Pool (2)</button>

        <div className="ml-auto flex rounded-full bg-gray-200/80 p-1.5">
          <button
            onClick={() => setView("list")}
            className={`flex items-center gap-3 rounded-full px-7 py-2.5 text-lg font-medium ${
              view === "list" ? "bg-white shadow-md" : ""
            }`}
          >
            <ListIcon /> List
          </button>
          <button
            onClick={() => setView("map")}
            className={`flex items-center gap-3 rounded-full px-7 py-2.5 text-lg font-medium ${
              view === "map" ? "bg-white shadow-md" : ""
            }`}
          >
            <MapIcon /> Map
          </button>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between text-xl font-medium">
        <span>1 - 2 of 2 Results</span>
        <button className="flex items-center gap-2">
          Sort by: Distance <ChevronDown className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
