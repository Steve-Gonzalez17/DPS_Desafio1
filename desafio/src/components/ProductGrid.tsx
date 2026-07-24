"use client";
import { Product } from "../types/Product";
import { useState } from "react";
import { books } from "../data/data";
import { addToCart } from "../redux/cartSlice";
import { useAppDispatch } from "../redux/hooks";

import "../styles/product-grid.css";
import BookModal from "./Modal";


export default function ProductGrid() {
    const dispatch = useAppDispatch();

    const [selectedBook, setSelectedBook] =
        useState<Product | null>(null);

    return (
        <div className="product-grid">
            {books.map((book) => (
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

    );
}