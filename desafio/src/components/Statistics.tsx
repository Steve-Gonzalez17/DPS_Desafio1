"use client";

import { useAppSelector } from "../redux/hooks";

export default function Statistics() {
    const cart = useAppSelector((state) => state.cart);

    const totalProductos = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalVentas = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex items-center gap-5 hover:shadow-md transition">
                <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center text-3xl">
                    📚
                </div>

                <div>
                    <h3 className="text-gray-500 text-sm font-medium">
                        Productos
                    </h3>

                    <p className="text-3xl font-bold text-gray-800">
                        {totalProductos}
                    </p>
                </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex items-center gap-5 hover:shadow-md transition">
                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-3xl">
                    💰
                </div>

                <div>
                    <h3 className="text-gray-500 text-sm font-medium">
                        Ventas
                    </h3>

                    <p className="text-3xl font-bold text-gray-800">
                        ${totalVentas.toFixed(2)}
                    </p>
                </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex items-center gap-5 hover:shadow-md transition">
                <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center text-3xl">
                    🛒
                </div>

                <div>
                    <h3 className="text-gray-500 text-sm font-medium">
                        Distintos
                    </h3>

                    <p className="text-3xl font-bold text-gray-800">
                        {cart.length}
                    </p>
                </div>
            </div>

        </div>
    );
}