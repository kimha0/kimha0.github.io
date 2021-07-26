import Markdown from '../../components/ReactMarkdown'
import Layout from '../../components/layout'
import { getPost, getPostSlugs, getPostUrl } from '../..//lib/api'

import type { IPost } from '../../types/post'
import path from 'path'
import Image from 'next/image'


interface IProps {
  slug: IPost
}

function Post({ slug }: IProps) {
  return (
    <div className='grid gap-4 grid-cols-1 list'>
      <section className='notosanskr bg-transparent border-t border-gray-500 pt-8 px-4 pb-20'>
        <div>
          <p className='text-xs mb-2'>{slug.createDate}</p>
          <p className='text-2xl leading-7'>{slug.data.title}</p>
          <p className='text-base mb-2'>{slug.data.categories}</p>
        </div>

        <div className='mb-8 lg:mb-12' />

        {slug.data.thumbnail &&
          <figure className='overflow-hidden mb-8 lg:mb-12'>
            <Image
              src={{
                src: `/${slug.data.thumbnail}`,
                height: 508,
                width: 992,
              }}
              className='object-cover w-full'
              alt={`${slug.data.title} thumbnail`}
            />
          </figure>
        }

        <div className='mb-8 lg:mb-12' />

        <Markdown className="text-black dark:text-gray-300 markdown-body">{slug.content}</Markdown>
      </section>
    </div>
  )
}

export default function Home({ slug }: IProps) {
  return (
    <Layout title={slug.data.title}>
      <Post slug={slug} />
    </Layout>
  )
}

export async function getStaticPaths() {

  const paths = getPostSlugs()
  .map(p => getPostUrl(p))
  .map(p => ({ params: { slug: p } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const p = path.format({
    root: '/',
    dir: '_posts',
    base: `${params.slug}.md`,
  })

  const slug = getPost(p)

  return {
    props: {
      slug
    }
  }
}