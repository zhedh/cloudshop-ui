import { Button, Form, FormInstance } from 'antd'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FieldItem } from './types'
import ListSearchFeild from './ListSearchFeild'

interface ListSearchProps {
  form: FormInstance<any>
  fields: FieldItem[]
  initialValues?: Record<string, any>
  loading?: boolean
  onValuesChange?: (changedValues: any, values: any) => void
  onSearch: (values: any) => void
}

const StyledForm = styled.div`
  padding: 10px;

  .ant-form-item {
    margin: 10px;
  }
`

const ListSearch: React.FC<ListSearchProps> = (props) => {
  const {
    form,
    initialValues = {},
    fields = [],
    // onValuesChange,
    onSearch = () => undefined,
  } = props
  const [changedValues, setChangedValues] = useState({})

  useEffect(() => {
    onSearch(initialValues)
  }, [])

  const onValuesChange = (changedValues: any, values: any) => {
    setChangedValues(changedValues)
    props.onValuesChange && props.onValuesChange(changedValues, values)
  }

  return (
    <StyledForm>
      <Form
        layout="inline"
        form={form}
        preserve={false}
        initialValues={initialValues}
        onValuesChange={onValuesChange}
        onFinish={onSearch}
      >
        {fields.map((field) => (
          <Form.Item key={field.name} label={field.label} name={field.name}>
            <ListSearchFeild field={field} changedValues={changedValues} />
          </Form.Item>
        ))}
        <Form.Item label="" shouldUpdate={true}>
          {({ resetFields }) => (
            <>
              <Button
                onClick={() => {
                  resetFields()
                  onSearch(initialValues)
                }}
              >
                重置
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button loading={props.loading} type="primary" htmlType="submit">
                查询
              </Button>
            </>
          )}
        </Form.Item>
      </Form>
    </StyledForm>
  )
}

export default ListSearch
