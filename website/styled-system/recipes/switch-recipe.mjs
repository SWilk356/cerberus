import {
  compact,
  getSlotCompoundVariant,
  memo,
  splitProps,
} from '../helpers.mjs'
import { createRecipe } from './create-recipe.mjs'

const switchRecipeDefaultVariants = {
  size: 'sm',
}
const switchRecipeCompoundVariants = []

const switchRecipeSlotNames = [
  ['root', 'switch__root'],
  ['label', 'switch__label'],
  ['control', 'switch__control'],
  ['thumb', 'switch__thumb'],
]
const switchRecipeSlotFns = /* @__PURE__ */ switchRecipeSlotNames.map(
  ([slotName, slotKey]) => [
    slotName,
    createRecipe(
      slotKey,
      switchRecipeDefaultVariants,
      getSlotCompoundVariant(switchRecipeCompoundVariants, slotName),
    ),
  ],
)

const switchRecipeFn = memo((props = {}) => {
  return Object.fromEntries(
    switchRecipeSlotFns.map(([slotName, slotFn]) => [
      slotName,
      slotFn.recipeFn(props),
    ]),
  )
})

const switchRecipeVariantKeys = ['size']
const getVariantProps = (variants) => ({
  ...switchRecipeDefaultVariants,
  ...compact(variants),
})

export const switchRecipe = /* @__PURE__ */ Object.assign(switchRecipeFn, {
  __recipe__: false,
  __name__: 'switchRecipe',
  raw: (props) => props,
  variantKeys: switchRecipeVariantKeys,
  variantMap: {
    size: ['sm', 'lg'],
  },
  splitVariantProps(props) {
    return splitProps(props, switchRecipeVariantKeys)
  },
  getVariantProps,
})
