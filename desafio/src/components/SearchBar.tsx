/* Componente de la barra de busqueda */

"use client";

import {useState} from "react";
import "@/styles/searchBar.css";

interface SearchbarProps {
    onSearch: (query: string) => void;
}

export default function Searchbar({onSearch} : SearchbarProps){
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

    return(
        <div className="search-bar">
            <input type="text" value={valor} onChange={handleChange} placeholder="Buscar por título..."
            className="search-input"aria-label="Buscar libros por título"/>
            {valor && (
                <button type="button" onClick={handleClear} className="search-clear" aria-label="Limpiar Busqueda"> x </button>
            )}
        </div>
    );
}