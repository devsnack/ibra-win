import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function ShowH() {
  const [selected, setSelected] = useState("");
  const router = useRouter();
  useEffect(() => {
    setSelected(router.query.slug);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-semibold text-7xl">{selected}</p>

      <div className="w-[400px] flex justify-center  items-center  gap-28">
        <button className="bg-green-800 w-40 h-9 text-white font-semibold rounded">
          On
        </button>
        <button className="bg-red-400 w-40 h-9 text-white font-semibold rounded">
          Off
        </button>
      </div>
    </div>
  );
}
