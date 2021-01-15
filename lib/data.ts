import { IData } from "../types/post";

export function convertListBySlugData(data: Partial<IData>) {
  return {
    categories: data.categories ?? '',
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