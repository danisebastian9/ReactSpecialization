import React from 'react'
import { Link } from "wouter"

const POPULAR_GIFS = ["Pandas", "Development", "Colombia", "Movies", "Technology"]

export default function Home() {
    return (
        <>
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
