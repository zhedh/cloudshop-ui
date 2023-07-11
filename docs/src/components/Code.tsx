import SyntaxHighlighter, {
  SyntaxHighlighterProps,
  Light,
} from 'react-syntax-highlighter'
import { atelierSeasideLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import styled from 'styled-components'

import tsx from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'

Light.registerLanguage('tsx', tsx)

function code({ className, ...props }: SyntaxHighlighterProps) {
  const match = /language-(\w+)/.exec(className || '')

  return match ? (
    <SyntaxHighlighterContainer
      language={match[1]}
      PreTag="div"
      {...props}
      style={atelierSeasideLight}
    />
  ) : (
    <code className={className} {...props} />
  )
}

const Post = (
  Component: (props: any) => JSX.Element,
  props?: Record<string, any>
) => {
  return <Component {...props} components={{ code }} />
}

const SyntaxHighlighterContainer = styled(SyntaxHighlighter)`
  padding: 20px !important;
  border-radius: 10px;
  line-height: 1.6;
`

export default Post
