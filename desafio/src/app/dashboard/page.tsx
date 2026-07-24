import Statistics from "../../components/Statistics";
import SalesChart from "../../components/SalesChart";

export default function Dashboard() {
    return (
        <main className="min-h-screen bg-gray-50 px-6 md:px-12 lg:px-20 py-10">

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    📊 Dashboard de Ventas
                </h1>

                <p className="text-gray-500 text-base">
                    Resumen general de la actividad del carrito de compras.
                </p>
            </div>


            <section className="mb-8">
                <Statistics />
            </section>


            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

                <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                    📈 Productos agregados
                </h2>

                <div className="w-full overflow-x-auto">
                    <SalesChart />
                </div>

            </section>

        </main>
    );
}