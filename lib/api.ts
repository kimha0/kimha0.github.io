import fs from 'fs'
import { join, resolve } from 'path'
import matter from 'gray-matter'
import glob from 'glob'

import { convertListBySlugData } from './data'
import { IListData } from '../types/list'

import type { IData, IPost } from '../types/post'

const postsDirectory = join(process.cwd(), '_posts')
const postsWildCard = resolve(postsDirectory, '**/*.md')
const startPath = '/_posts/'

export function getPostSlugs(): string[] {
  return glob.sync(postsWildCard)
    .map(slug => slug.split(startPath))
    .map(paths => paths[paths.length - 1])
}

export function getPostList(): IListData[] {
  const filePaths = glob.sync(postsWildCard)

  return filePaths.map(slug => getPost(slug))
    .map(({ data, content }) => ({
      ...convertListBySlugData(data),
      content,
    }))
    .filter(({ published }) => published)
    .map(({ title, categories, tags, content }) => ({ title, categories, tags, content }))
}

export function getPost(path: string): IPost {
  const fileContent = fs.readFileSync(path, 'utf8')
  const { data, content } = matter(fileContent)

  return {
    data: data as Partial<IData>,
    content,
  }

}
