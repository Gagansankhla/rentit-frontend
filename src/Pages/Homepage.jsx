import React from 'react'
import Hero from '../Pages/Hero'


export default function Example() {
    return (
        <>
            <main>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">{
                    <Hero />
                }</div>
            </main>

        </>
    )
}