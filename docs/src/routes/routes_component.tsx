import HighlighterCode from '../components/Code'

// MDX
import Card from '../mdx/components/card.mdx'
import Emoji from '../mdx/components/emoji.mdx'
import ListSearch from '../mdx/components/list_search.mdx'
import ListModal from '../mdx/components/list_modal.mdx'

// 示例
import { ListSearchBasic } from '../examples/list_search'
import { ListModalBasic } from '../examples/list_modal'

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
]
