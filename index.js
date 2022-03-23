import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Body from './Components/Body'
import Footer from './Components/footer'
import NavBar from './Components/NavBar'

export default function Home() {
  return (
    <div >
      <NavBar />
      <Body />
      <Footer />
    </div>
  )
}
