"use client";

import { Product } from "../types/Product";
import { useState } from "react";
import { books } from "../data/data";
import { addToCart } from "../redux/cartSlice";
import { useAppDispatch } from "../redux/hooks";

import BookModal from "./Modal";

export default function ProductGrid() {
    const dispatch = useAppDispatch();

    const [selectedBook, setSelectedBook] =
        useState<Product | null>(null);

    return (
        <section className="px-6 md:px-12 lg:px-20 py-10">

            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Libros disponibles
            </h2>

            <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {books.map((book) => (
                    <div key={book.id} className="  bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden borderborder-gray-100 group">

                        <div className="h-64 bg-gray-100 flex items-center justify-center cursor-pointer overflow-hidden"
                            onClick={() => setSelectedBook(book)} >
                            <img src={book.image} alt={book.title} className=" h-full w-full object-cover transition-transform duration-300"
                            />
                        </div>

                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-gray-800truncate">
                                {book.title}
                            </h3>

                            <p className="text-[#112E81] font-bold text-xl mt-2">
                                ${book.price}
                            </p>

                            <button className="  mt-5 w-full bg-[#112E81] text-white hover:bg-[#1f3c8c]  py-2.5 rounded-xl font-medium transition cursor-pointer" onClick={() =>  dispatch(addToCart(book)) } >
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <BookModal
                book={selectedBook}
                onClose={() => setSelectedBook(null)}
            />

        </section>
    );
}