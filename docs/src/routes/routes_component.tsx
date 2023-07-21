import HighlighterCode from '../components/Code'

// MDX
import Card from '../mdx/components/card.mdx'
import Emoji from '../mdx/components/emoji.mdx'
import ListSearch from '../mdx/components/list_search.mdx'
import ListModal from '../mdx/components/list_modal.mdx'
import Loading from '../mdx/components/loading.mdx'

// 示例
import { ListSearchBasic } from '../examples/list_search'
import { ListModalBasic } from '../examples/list_modal'
import { LoadingFull, LoadingPart } from '../examples/loading'
import { ButtonBasic } from '../examples/button'

export default [
  {
    path: 'card',
    name: 'Card 卡片',
    element: HighlighterCode(Card),
  },
  {
    path: 'emoji',
    name: 'Emoji 表情',
    element: HighlighterCode(Emoji),
  },
  {
    path: 'list-search',
    name: 'ListSearch 列表搜索',
    element: HighlighterCode(ListSearch, { basic: <ListSearchBasic /> }),
  },
  {
    path: 'list-modal',
    name: 'ListModal 列表弹层',
    element: HighlighterCode(ListModal, { basic: <ListModalBasic /> }),
  },
  {
    path: 'loading',
    name: 'Loading 加载中',
    element: HighlighterCode(Loading, {
      full: <LoadingFull />,
      part: <LoadingPart />,
    }),
  },
  {
    path: 'button',
    name: 'Button 按钮',
    element: HighlighterCode(ListModal, { basic: <ButtonBasic /> }),
  },
]
