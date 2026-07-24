import { Product } from "../types/Product"; 
import "../styles/modal.css";

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
        <div
            className="modal-overlay"
            onClick={onClose}
        >
            <div
                className="modal"
                onClick={(e) => e.stopPropagation()}
            >
                <h2>{book.title}</h2>

                <img
                    src={book.image}
                    alt={book.title}
                />

                <p style={{textAlign:"justify",}}>{book.summary}</p>

                <button onClick={onClose}>
                    Cerrar
                </button>
            </div>
        </div>
    );
}