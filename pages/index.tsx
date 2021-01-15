import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import { getPostList } from '../lib/api'
import { convertListContent } from '../lib/data'

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
        <p className='text-xs mb-2 text-gray-600'>{item.createDate}</p>
        <p className='text-2xl leading-7 text-gray-800'>{item.title}</p>
        <p className='text-base mb-2 text-gray-700'>{item.categories}</p>
      </div>
      <figure className='overflow-hidden mb-8 lg:mb-12'>
        <img src={item.thumbnail} className='object-cover w-full'/>
      </figure>
      <div className='text-base text-gray-600 markdown-body max-h-80 overflow-hidden relative'>
        <ReactMarkdown>{item.content}</ReactMarkdown>
        <div className='bg-gradient-to-b from-transparent to-white h-40 absolute top-80 w-full transform -translate-y-full'></div>
      </div>
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