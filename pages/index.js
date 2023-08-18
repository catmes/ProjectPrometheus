// components
import Loader from '../components/Loader'

// styles & images
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

// libraries
import toast from 'react-hot-toast'

export default function Home() {
  return (
    <div>
      <button onClick={() => toast.success('hello toast!')}>
        I love toast
      </button>
    </div>
  )
}
