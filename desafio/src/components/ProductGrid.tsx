"use client";
import { Product } from "../types/Product";
import { useState, useMemo } from "react";
import { books } from "../data/data";
import { addToCart } from "../redux/cartSlice";
import { useAppDispatch } from "../redux/hooks";

import "../styles/product-grid.css";
import BookModal from "./Modal";
// SearchBar
import SearchBar from "../components/SearchBar";



export default function ProductGrid() {
    const dispatch = useAppDispatch();

    const [selectedBook, setSelectedBook] =
        useState<Product | null>(null);

    const [query, setQuery] = useState("");

    /*
    El buscador solo mostrara el titulo y este sera sencillo a las mayus/minus 

    Si esta vacio se mostrara el catalogo completo de todos los libros
    */
    const filteredBooks = useMemo(() => {
        const libN = query.trim().toLowerCase();
        // si no lo encuentra muestra todos los libros
        if(!libN) return books;
        return books.filter((book) => book.title.toLowerCase().includes(libN));
    }, [query]);

    return (
        /* Seccion del buscador */
        <section className="product-section">
            <SearchBar onSearch={setQuery} />

            <p className="product-count">
                {filteredBooks.length} de {books.length} libros
            </p>

            {filteredBooks.length === 0 ? (
                /* Si no encuentra no muestra nada */
                <p className="product-empty">Sin Coincidencias para "{query}".</p>
            ): (
      
        <div className="product-grid">
            {filteredBooks.map((book) => (
                <div key={book.id}
                    className="product-card"
                >

                    <img
                        src={book.image}
                        alt={book.title}
                        onClick={() => setSelectedBook(book)}
                    />

                    <div className="product-info">
                        <h3 className="product-title">
                            {book.title}
                        </h3>

                        <p className="product-price">
                            ${book.price}
                        </p>

                        <button
                            className="add-button"
                            onClick={() =>
                                dispatch(addToCart(book))
                            }
                        >
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            ))}
            <BookModal
                book={selectedBook}
                onClose={() => setSelectedBook(null)}
            />
        </div>
    )}
      </section>
    );
}