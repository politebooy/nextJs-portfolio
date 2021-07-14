import React from 'react'
import Layout from '../components/1-Layout/Layout'
import Section from '../components/4-Section/Section'
import Head from 'next/head'

export default function about() {
    return (
        <>
        
      <Head>
        <title>About pate title</title>
        <meta name="description" content="About pate description....................." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
            <Section title="About Page">
                <h4>this is about page</h4>
            </Section>
        </Layout>
        </>
    )
}
