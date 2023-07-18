import React, { useState } from 'react'
import { Popover } from 'antd'
import styled from 'styled-components'
import EMOJI_MAP from './config.json'
import EMOJI_ICONS from './emoji.png'

interface EmojiProps {
  children: React.ReactNode
  onSelect: (value: string) => void
}

const Emoji: React.FC<EmojiProps> = (props) => {
  const [open, setOpen] = useState(false)

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }

  const handleSelect = (value: string) => {
    props.onSelect(value)
    setOpen(false)
  }

  const content = (
    <Container>
      <img src={EMOJI_ICONS} alt="" />
      <Panel>
        {Object.keys(EMOJI_MAP).map((key) => (
          <EmojiIcon
            key={key}
            onClick={() =>
              handleSelect(EMOJI_MAP[key as keyof typeof EMOJI_MAP])
            }
          />
        ))}
      </Panel>
    </Container>
  )

  return (
    <Popover
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
      content={content}
    >
      {props.children}
    </Popover>
  )
}

const Container = styled.div`
  position: relative;
  width: 432px;
  height: 218px;

  > img {
    width: 100%;
    height: 100%;
  }
`
const Panel = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 6px 12px;
`

const EmojiIcon = styled.span`
  display: block;
  width: 8.333%;
  height: 16.666%;
  border-radius: var(--border-radius);
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`

export default React.memo(Emoji)
