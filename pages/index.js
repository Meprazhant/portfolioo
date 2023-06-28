import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Landing from '@/components/Landing'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Solar from '@/components/Solar'
import Head from 'next/head'
import React from 'react'

function index() {
    return (
        <div>
            <Head>
                <title>Prashant | Home</title>
                <meta name="description" content="Prashant's Portfolio" />
                <meta property="og:title" content="Prashant Kafle - BCA Student and Freelance Full Stack Web Developer" />
                <meta name="description" content="Prashant Kafle, a BCA student at Mechi Multiple Campus in Bhadrapur and founder of bhetiyo,developer of bhetiyo, hailing from Kachankawal Jhapa. Freelance full stack web developer specializing in Next.js, MERN stack, and Node.js. Proficient in tools like Figma and Photoshop. Passionate about web development and bringing creativity to projects." />
                <meta name="keywords" content="Prashant Kafle,founder of bhetiyo,developer of bhetiyo, BCA student, Mechi Multiple Campus, Bhadrapur, Kachankawal Jhapa, freelance full stack web developer, Next.js, MERN stack, Node.js, Figma, Photoshop, web development, creative web design, versatile professional" />
                <meta property="og:title" content="Prashant Kafle - BCA Student and Freelance Full Stack Web Developer" />
                <meta property="og:description" content="Prashant Kafle, a BCA student at Mechi Multiple Campus in Bhadrapur, hailing from Kachankawal Jhapa. Freelance full stack web developer specializing in Next.js, MERN stack, and Node.js. Proficient in tools like Figma and Photoshop. Passionate about web development and bringing creativity to projects." />
                <meta property="og:image" content="https://i.ibb.co/r38WZ4j/kaaf.jpg" />
                <meta property="og:image:alt" content="Prashant Kafle - BCA Student and Freelance Full Stack Web Developer" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.prashantkafle.com.np" />

                <meta property="og:site_name" content="Prashant Kafle" />

                <meta name="twitter:title" content="Prashant Kafle - BCA Student and Freelance Full Stack Web Developer" />
                <meta name="twitter:description" content="Prashant Kafle,founder of bhetiyo,developer of bhetiyo, a BCA student at Mechi Multiple Campus in Bhadrapur, hailing from Kachankawal Jhapa. Freelance full stack web developer specializing in Next.js, MERN stack, and Node.js. Proficient in tools like Figma and Photoshop. Passionate about web development and bringing creativity to projects." />
                <meta name="twitter:image" content="https://i.ibb.co/r38WZ4j/kaaf.jpg" />
                <meta name="twitter:image:alt" content="Prashant Kafle - founder of bhetiyo,developer of bhetiyo, BCA Student and Freelance Full Stack Web Developer" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@prashantjr2" />
                <meta name="twitter:creator" content="@prashantjr2" />
            </Head>

            <Landing />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default index