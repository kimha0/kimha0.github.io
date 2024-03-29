export interface IPost {
  data: Partial<IData>
  content: string
  url: string
  createDate: string
}

export interface IData {
  title: string
  thumbnail: string
  published: boolean
  categories: string
  tags: string[]

  meta: IMeta
  og: IOG

}

interface IMeta {
  title: string
  description: string
  keyword: IKeyword
  robots: string
}

interface IKeyword {
    name: string
    content: string[]
}

interface IOG {
  locale: string
  type: string
  title: string
  description: string
  url: string
  siteName: string
  image: IOGImage
}

interface IOGImage {
  url: string
  width: number
  height: number
}