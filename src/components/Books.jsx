import { useState } from "react"
import { books } from "../constants/mockData.js"
import BookCard from "./BookCard.jsx"

function Books() {
    const [liked, setLiked] = useState([])
    const handleLikedList = (book, status) => {
        if (status) {
            const newLikedList = liked.filter(i => i.id != book.id); setLiked(newLikedList)
        } else {
            setLiked(liked => [...liked, book])
        }
    }
    return (
        <div>
            <div>{ books.map(book => (
                <BookCard key={ book.id } data={ book } handleLikedList={ handleLikedList } />)) }
            </div>
            <div>{!!liked.length && <div></div>}</div>

        </div>
    )
}

export default Books