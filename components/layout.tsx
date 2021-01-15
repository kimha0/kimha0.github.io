import Link from 'next/link'
import Head from 'next/head'

export default function Layout({
  children,
  title = 'Title is the default title'
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className='lg:h-48 h-24 flex justify-items-start items-end border-b border-gray-500'>
        <p className='container xl:mx-auto mx-4 my-6 text-3xl font-thin uh-beemysen'>Lorem ipsum dolor</p>
      </header>

      <main className='container lg:mx-auto mb-6 max-w-5xl box-border'>
        {children}
      </main>

    </div>
  )
}