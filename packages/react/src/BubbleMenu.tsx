import { BubbleMenuPlugin, BubbleMenuPluginProps, BubbleMenuView } from '@tiptap/extension-bubble-menu'
import React, { useEffect, useState } from 'react'

import { useCurrentEditor } from './Context.js'

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type BubbleMenuProps = Omit<Optional<BubbleMenuPluginProps, 'pluginKey'>, 'element' | 'editor'> & {
  editor: BubbleMenuPluginProps['editor'] | null;
  className?: string;
  children: React.ReactNode;
  updateDelay?: number;
};

export const BubbleMenu = (props: BubbleMenuProps) => {
  const [element, setElement] = useState<HTMLDivElement | null>(null)
  const { editor: currentEditor } = useCurrentEditor()
  const latestProps = React.useRef(props)

  latestProps.current = props

  useEffect(() => {
    if (!element) {
      return
    }

    if (props.editor?.isDestroyed || currentEditor?.isDestroyed) {
      return
    }

    const menuEditor = props.editor || currentEditor
    const pluginKey = latestProps.current.pluginKey ?? 'bubbleMenu'

    if (!menuEditor) {
      console.warn('BubbleMenu component is not rendered inside of an editor component or does not have editor prop.')
      return
    }

    const plugin = BubbleMenuPlugin({
      updateDelay: latestProps.current.updateDelay,
      editor: menuEditor,
      element,
      pluginKey,
      shouldShow: (...args) => {
        return (latestProps.current.shouldShow ?? BubbleMenuView.shouldShow)?.(...args) ?? false
      },
      tippyOptions: latestProps.current.tippyOptions,
    })

    menuEditor.registerPlugin(plugin)
    return () => { menuEditor.unregisterPlugin(pluginKey) }
  }, [props.editor, currentEditor, element])

  return (
    <div ref={setElement} className={props.className} style={{ visibility: 'hidden' }}>
      {props.children}
    </div>
  )
}
