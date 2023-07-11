import Button from '../mdx/components/button.mdx'
import ListSearch from '../mdx/components/list_search.mdx'
import ListModal from '../mdx/components/list_modal.mdx'
import HighlighterCode from '../components/Code'

export default [
  {
    path: 'button',
    name: 'Button 按钮',
    element: HighlighterCode(Button , {example: <>你好，欢迎光临</>}),
  },
  {
    path: 'list-search',
    name: 'ListSearch 列表搜索',
    element: HighlighterCode(ListSearch),
  },
  {
    path: 'list-modal',
    name: 'ListModal 列表弹层',
    element: HighlighterCode(ListModal),
  },
]
