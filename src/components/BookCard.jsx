function BookCard({ data: { title, author, image, language, pages } }) {
    return (
        <div>
            <img src={ image } alt={ title } />
            <div>
                <h3>{ title }</h3>
                <p>{ title }</p>
                <p>{ author }</p>
                <div>
                    <span>{ language }</span>
                    <span>{ pages }</span>
                </div>
            </div>
            <button>like</button>
        </div>)
}

export default BookCard