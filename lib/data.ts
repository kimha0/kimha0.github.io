import { format } from 'date-fns'
import type { IData } from "../types/post";
import { basename } from 'path'
export function convertListBySlugData(data: Partial<IData>): IData {
  return {
    categories: data.categories ?? '',
    thumbnail: data.thumbnail ?? '',
    meta: {
      description: data.meta?.description ?? '',
      keyword: {
        content: data.meta?.keyword?.content ?? [],
        name: data.meta?.keyword?.name ?? '',
      },
      robots: data.meta?.robots ?? '',
      title: data.meta?.title ?? '',
    },
    og: {
      description: data.og?.description ?? '',
      image: {
        height: data.og?.image?.height ?? 0,
        width: data.og?.image?.width ?? 0,
        url: data.og?.image?.url ?? '',
      },
      locale: data.og?.locale ?? '',
      siteName: data.og?.siteName ?? '',
      title: data.og?.title ?? '',
      type: data.og?.type ?? '',
      url: data.og?.url ?? '',
    },
    published: data.published ?? false,
    tags: data.tags ?? [],
    title: data.title ?? '',
  }
}

export function convertListContent(content: string): string {
  const contents = content.split(/\r\n|\r|\n/)
  if (contents.length > 15) {
    return contents.splice(0, 15).join('\r\n')
  }
  return content
}

const SLUG_REG_EXP = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])-([-]|\s|\w+)+.md/
export function getDateBySlugName(slugName: string): string {
  const filename = basename(slugName)
  return SLUG_REG_EXP.test(filename) ? format(new Date(filename.substring(0, 10)), 'yyyy-MM-dd') : ''
}