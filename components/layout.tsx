import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
  title?: string
}

const Layout: React.FC<Props> = ({ children, title }) => {  

  return (
    <div>
      <Head>
        <title>{title ?? 'hayoung.dev'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className='lg:h-36 h-24 flex justify-items-start items-end border-b border-gray-500 dark:border-gray-300'>
        <Link href="/"><a className='container lg:mx-auto max-w-5xl mx-4 my-6 lg:px-4 px-0 text-3xl font-thin uh-beemysen dark:text-white'>{'hayoung.dev'}</a></Link>
      </header>

      <main className='container lg:mx-auto mb-6 max-w-5xl box-border'>
        {children}
      </main>

    </div>
  )
}

export default Layout