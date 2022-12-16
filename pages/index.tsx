import Head from 'next/head'
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
      <Switch onColor="#f00">Click Me</Switch>
      <ThemeToggle />
    </div>
  )
}
