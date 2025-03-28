import { describe, test, expect } from 'bun:test'
import { focusStates, slotRecipes } from '@cerberus-design/panda-preset'

describe('toast recipe', () => {
  const { toast } = slotRecipes

  test('should be exported', () => {
    expect(toast).toBeDefined()
  })

  test('should have a jsx slot for each anatomy', () => {
    expect(toast.jsx).toMatchObject([
      'NotificationRoot',
      'NotificationHeading',
      'NotificationDescription',
      'NotificationCloseTrigger',
      'NotificationActionTrigger',
      'NotificationCenter',
      'MatchNotificationIcon',
    ])
  })

  test('should have a base.root style', () => {
    expect(toast.base?.root).toMatchObject({
      alignItems: 'center',
      bgColor: 'colorPalette.surface.200',
      color: 'colorPalette.text.200',
      display: 'flex',
      gap: 'md',
      h: 'var(--height)',
      minW: '23rem',
      opacity: 'var(--opacity)',
      overflowWrap: 'anywhere',
      paddingInlineEnd: 'xs',
      position: 'relative',
      rounded: 'sm',
      scale: 'var(--scale)',
      shadow: 'md',
      translate: 'var(--x) var(--y) 0',
      willChange: 'translate, opacity, scale',
      zIndex: 'var(--z-index)',
      transitionDuration: 'slow',
      transitionProperty: 'translate, scale, opacity, height',
      transitionTimingFunction: 'default',
      userSelect: 'none',
      _info: {
        colorPalette: 'info',
      },
      _success: {
        colorPalette: 'success',
      },
      _warning: {
        colorPalette: 'warning',
      },
      _danger: {
        colorPalette: 'danger',
      },
    })
  })

  test('should have a base.icon style', () => {
    expect(toast.base?.icon).toMatchObject({
      color: 'colorPalette.text.200',
      paddingInlineStart: 'md',
    })
  })

  test('should have a base.title style', () => {
    expect(toast.base?.title).toMatchObject({
      color: 'inherit',
      fontWeight: '600',
      textStyle: 'label-md',
    })
  })

  test('should have a base.description style', () => {
    expect(toast.base?.description).toMatchObject({
      color: 'inherit',
      textStyle: 'body-sm',
      '& :is(a)': {
        rounded: 'sm',
        textStyle: 'link',
        _focusVisible: focusStates._focusVisible,
      },
    })
  })

  test('should have a base.actionTrigger style', () => {
    expect(toast.base?.actionTrigger).toMatchObject({
      marginBlockStart: 'xs',
    })
  })

  test('should have a base.closeTrigger style', () => {
    expect(toast.base?.closeTrigger).toMatchObject({
      ...expect.any(Object),
      bgColor: 'transparent',
      color: 'inherit',
      _hover: {
        bgColor: 'colorPalette.ghost.hover',
        color: 'colorPalette.text.100',
      },
    })
  })
})
