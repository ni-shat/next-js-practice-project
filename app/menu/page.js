'use client';
import React from 'react'

export default function Menu() {
    const domain = typeof window !== 'undefined' ? window.location.origin : '';

    return (
        <main className='p-8'>
            <div>
                Menu page
                <br /> <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo neque unde dolorem cum quae sequi, sapiente fuga quo, 
            </div>
            <br />
            <div className='font-extrabold'>
                Domain name: {domain}
            </div>
        </main>
    )
}
