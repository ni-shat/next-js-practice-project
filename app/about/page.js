'use client';
import React from 'react'

export default function About() {

    const domain = typeof window !== 'undefined' ? window.location.origin : '';

    return (
        <main className='p-8'>
            <div>
                About page 
                <br /> <br /> <br />    
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo neque unde dolorem cum quae sequi, sapiente fuga quo, deleniti est magni quisquam! Vel nostrum voluptatum, amet saepe accusantium expedita facilis blanditiis aperiam voluptates obcaecati possimus cum eveniet odio! Earum corporis odio fuga necessitatibus dignissimos id et itaque nemo temporibus odit?
            </div>
            <br />
            <div className='font-extrabold'>
                Domain name: {domain}
            </div>
        </main>
    )
}
