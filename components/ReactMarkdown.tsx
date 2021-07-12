import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter, dark } from 'react-syntax-highlighter'
import type { Components } from 'react-markdown/src/ast-to-react'


const components: Components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter style={dark} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }
}

type Props = {
  children: string
  className?: string
}
const Markdown: React.VFC<Props> = ({ className, children }) => {
  return <ReactMarkdown components={components} className={className}>
    {children}
  </ReactMarkdown>
}

export default Markdown
