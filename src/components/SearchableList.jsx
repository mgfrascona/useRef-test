import { useState, useRef } from 'react'

const SearchableList = () => {
    const [ searchTerm, setSearchTerm ] = useState('')
    const inputRef = useRef(null)

    const items = [
        'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
        'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon'
    ]

    const filteredItems = searchTerm.trim() === '' ? items
        : items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder='Search fruits...'
            />
            {
                filteredItems.length === 0 ? <div>'No items match search...'</div>
                    : (<ul>
                        {filteredItems.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>)
            }
        </div>
    )
}

export default SearchableList
