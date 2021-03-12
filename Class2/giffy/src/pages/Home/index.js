import React, {useState} from 'react'
import { Link, useLocation } from "wouter"


const POPULAR_GIFS = ["Pandas", "Development", "Colombia", "Movies", "Technology"]

export default function Home() {
    const [keyword, setKeyword] = useState("")
    const [path, pushLocation] = useLocation()

    const handleSubmit = event => {
        event.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = event => {
        setKeyword(event.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search a Gif here..." onChange={handleChange} type="text" value={keyword} />
            </form>
            <h3 className="App-title">Los Gifs más populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
