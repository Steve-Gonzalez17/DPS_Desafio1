"use client";

import { useState } from "react";
import Link from "next/link";
import { clearCart } from "../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [showCart, setShowCart] = useState(false);

    const dispatch = useAppDispatch();
    const cart = useAppSelector((state) => state.cart);

    const totalItems = cart.reduce(
        (acc, item) => acc + item.quantity,
        0
    );

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <>
            <nav className="flex fixed w-full items-center justify-end px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b bg-[#112E81] text-white">


                {/* Botón menú móvil */}
                <button aria-label="Menu" className="sm:hidden" onClick={() => setShowMenu(!showMenu)} >
                    <svg  width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <rect width="21" height="1.5" rx=".75" fill="white" />
                        <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="white" />
                        <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="white" />
                    </svg>
                </button>

                <div className={`absolute top-full left-0 w-full  bg-[#112E81] text-white shadow-md py-4 px-5 flex-col gap-2 text-sm md:hidden transition-all ${showMenu ? "flex" : "hidden" }`}
                >
                    <Link href="/" onClick={() => setShowMenu(false)}>
                        Inicio
                    </Link>

                    <Link href="/about" onClick={() => setShowMenu(false)}>
                        Dashboard
                    </Link>


                </div>

                {/* Menú escritorio */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link href="/">Inicio</Link>
                    <Link href="/dashboard">Dashboard</Link>

                    {/* Carrito */}
                    <button onClick={() => setShowCart(!showCart)} className="relative cursor-pointer" >
                        <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </button>


                </div>
            </nav>

            {showCart && (
                <div className="fixed right-0 top-0 w-80 h-screen bg-white shadow-xl border-l p-5 z-50">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Carrito de Compras</h2>

                        <button  onClick={() => setShowCart(false)} className="text-2xl cursor-pointer">
                            ✕
                        </button>
                    </div>

                    {cart.length === 0 ? (
                        <p>El carrito está vació.</p>
                    ) : (
                        <>
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center gap-3 border-b py-3" >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-20 h-24 object-cover rounded border"
                                    />

                                    <div className="flex-1">
                                        <h3 className="font-medium text-sm">{item.title}</h3>

                                        <p className="text-gray-500 text-sm">
                                            Cantidad: {item.quantity}
                                        </p>

                                        <p className="font-semibold text-indigo-600">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            <div className="mt-5 font-bold text-right">
                                Total: ${total.toFixed(2)}
                            </div>
                            <div className="flex w-full items-center justify-center p-6">
                                <button className="w-40 text-center h-12 rounded-sm bg-red-600 text-white cursor-pointer"
                                onClick={() =>
                                    dispatch(clearCart())
                                }
                            >
                                Vaciar carrito
                            </button>
                            </div>
                        </>
                    )}

                </div>
            )}
        </>
    );
}