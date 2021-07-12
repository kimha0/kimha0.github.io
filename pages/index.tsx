import Markdown from '../components/ReactMarkdown'
import Layout from '../components/layout'
import { getPostList } from '../lib/api'
import { convertListContent } from '../lib/data'
import Link from 'next/link'
import Image from 'next/image'

import type { IListData } from '../types/list'

interface IProps {
  slugs: IListData[]
}

function List({ slugs }: IProps) {
  return (
    <div className='grid gap-4 grid-cols-1 list'>
      {slugs.map(slug => <ListItem key={slug.title} item={slug} />)}
    </div>
  )
}

function ListItem({ item }: { item: IListData }) {
  return (
    <section className='notosanskr bg-transparent border-t border-gray-500 pt-8 px-4'>
      <div>
        <p className='text-xs mb-2'>{item.createDate}</p>
        <p className='text-2xl leading-7'>{item.title}</p>
        <p className='text-base mb-2'>{item.categories}</p>
      </div>
      <Link href={`/post/${item.url}`} passHref>
        <figure className='overflow-hidden cursor-pointer'>
          <Image
            src={{
              src: `/${item.thumbnail}`,
              height: 508,
              width: 992,
            }}
            className='object-cover w-full'
            alt={`${item.title} thumbnail`}
          />
        </figure>
      </Link>
      <div className='mb-8 lg:mb-12' />
      <Link href={`/post/${item.url}`} passHref>
        <div className='text-base markdown-body max-h-80 overflow-hidden relative cursor-pointer'>
          <Markdown className="text-black dark:text-gray-300">{item.content}</Markdown>
          <div className='bg-gradient-to-b from-transparent to-white dark:to-black h-40 absolute top-80 w-full transform -translate-y-full'></div>
        </div>
      </Link>
    </section>
  )
}
export default function Home({ slugs }: IProps) {
  return (
    <Layout>
      <List slugs={slugs} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = getPostList()
    .map(post => ({
      ...post,
      content: convertListContent(post.content)
    }))
  // const contents = await Promise.all(posts.map(slug => markdownToHtml(slug.content)))
  // const slugs = posts.map((slug, i) => ({ ...slug, content: contents[i] }))

  return {
    props: { slugs: posts }
  }
}