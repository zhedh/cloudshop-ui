import HighlighterCode from '../components/Code'

// MDX
import ListSearch from '../mdx/components/list_search.mdx'

// 示例
import { ListSearchBasic } from '../examples/list_search'

export default [
  {
    path: 'list-search',
    name: 'ListSearch 列表搜索',
    element: HighlighterCode(ListSearch, { basic: <ListSearchBasic /> }),
  },
  // {
  //   path: 'list-modal',
  //   name: 'ListModal 列表弹层',
  //   element: HighlighterCode(ListModal, { basic: <ListModalBasic /> }),
  // },
  // {
  //   path: 'loading',
  //   name: 'Loading 加载中',
  //   element: HighlighterCode(Loading, {
  //     full: <LoadingFull />,
  //     part: <LoadingPart />,
  //   }),
  // },
]
