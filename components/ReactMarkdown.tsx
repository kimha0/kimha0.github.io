import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import type { Components } from 'react-markdown/src/ast-to-react'
import useIsomorphicLayoutEffect from '../lib/useIsoMorphicLayoutEffect'



const components: (isDark: boolean) => Components = (isDark: boolean)  => ({
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter style={isDark ? vscDarkPlus : vs } language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }
})

type Props = {
  children: string
  className?: string
}
const Markdown: React.VFC<Props> = ({ className, children }) => {
  const [isDark, setIsDark] = useState(false)

  function onDarkModeChange(ev: MediaQueryListEvent) {
    setIsDark(ev.matches)
  }

  const componentsMemo = useMemo(() => {
    return components(isDark)
  }, [isDark])
  
  useIsomorphicLayoutEffect(() => {
    const mql = window?.matchMedia('(prefers-color-scheme: dark)')
    setIsDark(mql.matches)
    mql.addEventListener('change', onDarkModeChange)

    return () => {
      mql.removeEventListener('change', onDarkModeChange)
    }
  }, [])

  return <ReactMarkdown components={components(isDark)} className={className}>
    {children}
  </ReactMarkdown>
}

export default Markdown
