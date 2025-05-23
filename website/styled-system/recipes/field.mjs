import {
  compact,
  getSlotCompoundVariant,
  memo,
  splitProps,
} from '../helpers.mjs'
import { createRecipe } from './create-recipe.mjs'

const fieldDefaultVariants = {
  size: 'lg',
}
const fieldCompoundVariants = []

const fieldSlotNames = [
  ['root', 'field__root'],
  ['errorText', 'field__errorText'],
  ['helperText', 'field__helperText'],
  ['input', 'field__input'],
  ['label', 'field__label'],
  ['select', 'field__select'],
  ['textarea', 'field__textarea'],
  ['requiredIndicator', 'field__requiredIndicator'],
  ['inputRoot', 'field__inputRoot'],
  ['startIndicator', 'field__startIndicator'],
  ['endIndicator', 'field__endIndicator'],
  ['statusIndicator', 'field__statusIndicator'],
]
const fieldSlotFns = /* @__PURE__ */ fieldSlotNames.map(
  ([slotName, slotKey]) => [
    slotName,
    createRecipe(
      slotKey,
      fieldDefaultVariants,
      getSlotCompoundVariant(fieldCompoundVariants, slotName),
    ),
  ],
)

const fieldFn = memo((props = {}) => {
  return Object.fromEntries(
    fieldSlotFns.map(([slotName, slotFn]) => [
      slotName,
      slotFn.recipeFn(props),
    ]),
  )
})

const fieldVariantKeys = ['size']
const getVariantProps = (variants) => ({
  ...fieldDefaultVariants,
  ...compact(variants),
})

export const field = /* @__PURE__ */ Object.assign(fieldFn, {
  __recipe__: false,
  __name__: 'field',
  raw: (props) => props,
  variantKeys: fieldVariantKeys,
  variantMap: {
    size: ['sm', 'md', 'lg'],
  },
  splitVariantProps(props) {
    return splitProps(props, fieldVariantKeys)
  },
  getVariantProps,
})
