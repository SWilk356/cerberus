import {
  compact,
  getSlotCompoundVariant,
  memo,
  splitProps,
} from '../helpers.mjs'
import { createRecipe } from './create-recipe.mjs'

const circularProgressDefaultVariants = {}
const circularProgressCompoundVariants = []

const circularProgressSlotNames = [
  ['root', 'circular-progress__root'],
  ['group', 'circular-progress__group'],
  ['base', 'circular-progress__base'],
  ['track', 'circular-progress__track'],
  ['path', 'circular-progress__path'],
  ['title', 'circular-progress__title'],
  ['description', 'circular-progress__description'],
]
const circularProgressSlotFns = /* @__PURE__ */ circularProgressSlotNames.map(
  ([slotName, slotKey]) => [
    slotName,
    createRecipe(
      slotKey,
      circularProgressDefaultVariants,
      getSlotCompoundVariant(circularProgressCompoundVariants, slotName),
    ),
  ],
)

const circularProgressFn = memo((props = {}) => {
  return Object.fromEntries(
    circularProgressSlotFns.map(([slotName, slotFn]) => [
      slotName,
      slotFn.recipeFn(props),
    ]),
  )
})

const circularProgressVariantKeys = []
const getVariantProps = (variants) => ({
  ...circularProgressDefaultVariants,
  ...compact(variants),
})

export const circularProgress = /* @__PURE__ */ Object.assign(
  circularProgressFn,
  {
    __recipe__: false,
    __name__: 'circularProgress',
    raw: (props) => props,
    variantKeys: circularProgressVariantKeys,
    variantMap: {},
    splitVariantProps(props) {
      return splitProps(props, circularProgressVariantKeys)
    },
    getVariantProps,
  },
)
