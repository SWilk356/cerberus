import { switchAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { checkbox } from './checkbox'
import { formStates } from '../shared/states'

/**
 * This module contains the switch recipe.
 * @module
 */

/**
 * Styles for the Switch component.
 */
export const switchRecipe: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'switch',
  description: 'The styles for the Switch component',
  slots: switchAnatomy.keys(),
  jsx: ['SwitchRoot', 'SwitchControl', 'SwitchThumb', 'SwitchLabel', 'Switch'],

  base: {
    root: {
      alignItems: 'center',
      display: 'inline-flex',
      gap: 'sm',
      position: 'relative',
      verticalAlign: 'middle',
      '--switch-x':
        'calc(var(--switch-width) - calc(var(--switch-height) + 0.20rem))',
    },
    label: checkbox.base!.label,
    control: {
      alignItems: 'center',
      bgColor: 'page.surface.300',
      cursor: 'pointer',
      display: 'inline-flex',
      flexShrink: 0,
      h: 'var(--switch-height)',
      justifyContent: 'flex-start',
      paddingInline: '0.37rem',
      position: 'relative',
      rounded: 'var(--switch-radius)',
      transitionProperty: 'background-color, outline',
      transitionDuration: 'fast',
      w: 'var(--switch-width)',
      _disabled: formStates._disabled,
      _checked: {
        bgColor: 'action.text.200',
      },
      _invalid: {
        outline: '2px solid',
        outlineColor: 'border.error',
        outlineOffset: '2px',
      },
    },
    thumb: {
      colorPalette: 'page',
      alignItems: 'center',
      bgColor: 'colorPalette.text.initial',
      color: 'transparent',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      h: 'var(--thumb-size)',
      justifyContent: 'center',
      p: '0.125rem',
      rounded: 'inherit',
      transitionProperty: 'background-color, color, translate, transform',
      transitionDuration: 'fast',
      w: 'var(--thumb-size)',
      _checked: {
        colorPalette: 'action',
        color: 'action.text.200',
        translate: 'var(--switch-x) 0',
        transform: 'scale(1.25)',
      },
    },
  },

  variants: {
    size: {
      sm: {
        root: {
          '--switch-height': '1.5rem',
          '--switch-width': '3.25rem',
          '--switch-radius': '31.25rem',
          '--thumb-size': '1rem',
        },
      },
      lg: {
        root: {
          '--switch-height': '2.5rem',
          '--switch-width': '5rem',
          '--switch-radius': '0.75rem',
          '--thumb-size': '1.5rem',
        },
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})
