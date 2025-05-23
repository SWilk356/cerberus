import {
  compact,
  getSlotCompoundVariant,
  memo,
  splitProps,
} from '../helpers.mjs'
import { createRecipe } from './create-recipe.mjs'

const fileUploaderDefaultVariants = {}
const fileUploaderCompoundVariants = []

const fileUploaderSlotNames = [
  ['container', 'file-uploader__container'],
  ['label', 'file-uploader__label'],
  ['icon', 'file-uploader__icon'],
  ['heading', 'file-uploader__heading'],
  ['description', 'file-uploader__description'],
  ['input', 'file-uploader__input'],
]
const fileUploaderSlotFns = /* @__PURE__ */ fileUploaderSlotNames.map(
  ([slotName, slotKey]) => [
    slotName,
    createRecipe(
      slotKey,
      fileUploaderDefaultVariants,
      getSlotCompoundVariant(fileUploaderCompoundVariants, slotName),
    ),
  ],
)

const fileUploaderFn = memo((props = {}) => {
  return Object.fromEntries(
    fileUploaderSlotFns.map(([slotName, slotFn]) => [
      slotName,
      slotFn.recipeFn(props),
    ]),
  )
})

const fileUploaderVariantKeys = []
const getVariantProps = (variants) => ({
  ...fileUploaderDefaultVariants,
  ...compact(variants),
})

export const fileUploader = /* @__PURE__ */ Object.assign(fileUploaderFn, {
  __recipe__: false,
  __name__: 'fileUploader',
  raw: (props) => props,
  variantKeys: fileUploaderVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, fileUploaderVariantKeys)
  },
  getVariantProps,
})
