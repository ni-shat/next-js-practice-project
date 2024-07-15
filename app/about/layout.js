import Link from 'next/link'
import React from 'react'

export default function Aboutlayout({ children }) {
    return (
        <div>
            <nav className="ml-8 w-fit my-8">
                <ul className="flex gap-8 ">
                    <li><Link href='/about/mission'>Mission</Link></li>
                    <li><Link href='/about/vision'>Vision</Link></li>
                </ul>
            </nav>
            {children}
        </div>
    )
}
