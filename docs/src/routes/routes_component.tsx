import Button from '../mdx/components/button.mdx'
import ListSearch from '../mdx/components/list_search.mdx'
import ListModal from '../mdx/components/list_modal.mdx'
import HighlighterCode from '../components/Code'
import { ListSearchBasic } from '../examples/list_search'
import {ListModalBasic} from '../examples/list_modal'

export default [
  {
    path: 'button',
    name: 'Button 按钮',
    element: HighlighterCode(Button, { example: <ListSearchBasic /> }),
  },
  {
    path: 'list-search',
    name: 'ListSearch 列表搜索',
    element: HighlighterCode(ListSearch, { basic: <ListSearchBasic /> }),
  },
  {
    path: 'list-modal',
    name: 'ListModal 列表弹层',
    element: HighlighterCode(ListModal, { basic: <ListModalBasic/>}),
  },
]
