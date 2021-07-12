import fs from 'fs'
import path, { join, resolve } from 'path'
import matter from 'gray-matter'
import glob from 'glob'

import { convertListBySlugData, getDateBySlugName } from './data'
import { IListData } from '../types/list'

import type { IData, IPost } from '../types/post'

const postsDirectory = join(process.cwd(), '_posts')
const postsWildCard = resolve(postsDirectory, '**/*.md')
const startPath = '/_posts/'

export function getPostSlugs(): string[] {
  return glob.sync(postsWildCard)
}

export function getPostName(baseName: string) {
  const fileNames = baseName.split(startPath)
  return fileNames[fileNames.length - 1]
}

export function getPostUrl(baseName: string) {
  const postName = getPostName(baseName)
  return path.basename(postName, '.md')
}

export function getPostList(): IListData[] {
  const filePaths = glob.sync(postsWildCard)
  return filePaths
    .map(slug => ({
      ...getPost(slug),
      createDate: getDateBySlugName(slug),
      url: getPostUrl(slug)
    }))
    .map(({ data, content, createDate, url }) => ({
      ...convertListBySlugData(data),
      content,
      createDate,
      url,
    }))
    .filter(({ published }) => published)
    .map(({ title, categories, tags, content, thumbnail, createDate, url }) => ({ title, categories, tags, content, thumbnail, createDate, url }))
}

export function getPost(path: string): IPost {
  const fileContent = fs.readFileSync(path, 'utf8')
  const { data, content } = matter(fileContent)
  
  return {
    data: convertListBySlugData(data) as Partial<IData>,
    content,
    createDate: getDateBySlugName(path),
    url: getPostUrl(path),
  }

}
