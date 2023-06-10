import { Modal, Table, ModalProps } from 'antd'
import { ColumnsType, TablePaginationConfig } from 'antd/es/table'

interface ListModalProps extends ModalProps {
  rowKey: string
  columns: ColumnsType<any>
  dataSource: any[]
  size?: 'small' | 'middle' | 'large'
  pagination?: false | TablePaginationConfig
}

const ListModal: React.FC<ListModalProps> = (props) => {
  const modal: ModalProps & Record<string, any> = { ...props }

  delete modal.columns
  delete modal.dataSource
  delete modal.size
  delete modal.rowKey
  delete modal.pagination

  return (
    <Modal footer={false} {...modal}>
      <br />
      <Table
        rowKey={props.rowKey}
        size={props.size}
        columns={props.columns}
        dataSource={props.dataSource}
        pagination={props.pagination ?? false}
      />
      <br />
    </Modal>
  )
}

export default ListModal
