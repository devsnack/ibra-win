import Link from "next/link";
import React, { useState } from "react";
const hotels = [{ name: "AZ" }, { name: "sheraton" }];
function HotelsPage() {
  const [selected, setSelected] = useState("AZ");
  return (
    <div className="flex flex-col justify-center items-center m-auto gap-7">
      <label
        for="countries"
        class="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
      >
        Hotels
      </label>
      <select
        onChange={(e) => {
          setSelected(e.target.value);
        }}
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm mt-3 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>choisir un hotel </option>
        {hotels.map((h) => (
          <option value={h.name}>{h.name}</option>
        ))}
      </select>
      <Link href={`/${selected}`}>
        <button className="bg-green-600 w-32 h-14  rounded-lg text-white font-semibold">
          Select
        </button>
      </Link>
    </div>
  );
}

export default HotelsPage;
