import Link from 'next/link'
import { getPostList } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'

import type { IListData } from '../types/list'

interface IProps {
  allSlugs: IListData[]
}

function List({ allSlugs }: IProps) {
  return (
    <div>
      {allSlugs.map(slug => <ListItem key={slug.title} item={slug} />)}
    </div>
  )
}

function ListItem({ item }: { item: IListData }) {
  return (
    <div className='list-item'>
      <p>{item.title} {item.categories} [{item.tags.join(' ,')}]</p>
      <div dangerouslySetInnerHTML={{ __html: item.content }} />
      
    </div>
  )
}
export default function Home({ allSlugs }: IProps) {
  return (
    <div>
      <List allSlugs={allSlugs} />
      <br />
      Hello World.{' '}
      <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link>
    </div>
  )
}

export const getStaticProps = async () => {
  const allSlugs = getPostList()
  
  const contents = await Promise.all(allSlugs.map(slug => markdownToHtml(slug.content)))
  const test = allSlugs.map((slug, i) => ({ ...slug, content: contents[i] }))

  return {
    props: { allSlugs: test }
  }
}