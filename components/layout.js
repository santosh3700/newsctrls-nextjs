import Head from 'next/head'
import Headroom from 'react-headroom'
import React from 'react'
import Footer from './Menu/Footer'
import Navbar from './Menu/Navbar'

export default function Layout({ children }) {
    return (
        <>
            <Head>News Controls</Head>
            <Headroom>
                <Navbar />
            </Headroom>
            <main>{children}</main>
            <Footer />
        </>
    )
}