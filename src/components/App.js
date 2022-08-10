// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
    const [fetchGet, setFetchData] = useState(null)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res=>res.json())
        .then(data => setFetchData(data))
    }, [])

    return (
        <div>
            {fetchGet ? <img src={fetchGet.message} alt="A Random Dog"/> : <p>Loading...</p>}
        </div>
    )
}

export default App
