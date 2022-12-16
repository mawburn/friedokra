import Head from 'next/head'
import Image from 'next/image'
import { Switch } from '../components'
import { ThemeToggle } from '../components/ThemeToggle'

export default function Home() {
  return (
    <div className="bg-indigo-500">
      <Head>
        <title>FriedOkra</title>
        <meta name="description" content="FriedOkra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Switch>Click Me</Switch>
      <ThemeToggle />

      <Image width={330} height={400} src="/okra.webp" alt="FriedOkra" />
    </div>
  )
}
