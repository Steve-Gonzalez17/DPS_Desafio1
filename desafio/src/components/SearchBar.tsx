"use client";

import { useState } from "react";

interface SearchbarProps {
    onSearch: (query: string) => void;
}

export default function Searchbar({ onSearch }: SearchbarProps) {
    const [valor, setValor] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValor(newValue);
        onSearch(newValue);
    };

    const handleClear = () => {
        setValor("");
        onSearch("");
    };

    return (
        <div className="w-full max-w-xl mx-auto mb-8 relative">
            <input type="text" value={valor} onChange={handleChange} placeholder="Buscar por título..." aria-label="Buscar libros por título" className="w-full h-12 px-5 pr-12 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 shadow-sm outline-none transition focus:border-[#112E81] focus:ring-2 focus:ring-[#112E81]/20" />

            {valor && (
                <button type="button" onClick={handleClear} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition cursor-pointer text-xl" aria-label="Limpiar búsqueda">
                    ✕
                </button>
            )}
        </div>
    );
}