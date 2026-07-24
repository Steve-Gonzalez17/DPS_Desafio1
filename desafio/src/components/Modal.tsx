import { Product } from "../types/Product";

interface BookModalProps {
    book: Product | null;
    onClose: () => void;
}

export default function BookModal({
    book,
    onClose,
}: BookModalProps) {

    if (!book) return null;

    return (
        <div className=" fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>

            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-y-auto p-6 animate-in"
                onClick={(e) => e.stopPropagation()}>

                <h2 className=" text-2xl font-bold text-gray-800 mb-4 text-center">
                    {book.title}
                </h2>

                <div className=" flex justify-center mb-5">
                    <img src={book.image} alt={book.title} className=" w-48 h-64object-coverounded-lg shadow-md"/>
                </div>

                <p className=" text-gray-600 leading-relaxed text-justify mb-6">
                    {book.summary}
                </p>

                <button onClick={onClose} className=" w-full  h-11 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl transition cursor-pointer font-medium">
                    Cerrar
                </button>
            </div>
        </div>
    );
}