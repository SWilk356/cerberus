import { memo, splitProps } from '../helpers.mjs'
import { createRecipe, mergeRecipes } from './create-recipe.mjs'

const buttonFn = /* @__PURE__ */ createRecipe(
  'button',
  {
    palette: 'action',
    usage: 'filled',
    shape: 'sharp',
    size: 'md',
  },
  [
    {
      palette: 'danger',
      usage: 'filled',
      css: {
        color: 'colorPalette.text.200',
        _hover: {
          color: 'colorPalette.text.inverse',
        },
      },
    },
  ],
)

const buttonVariantMap = {
  palette: [
    'action',
    'secondaryAction',
    'info',
    'success',
    'warning',
    'danger',
  ],
  usage: ['ghost', 'outlined', 'filled'],
  shape: ['sharp', 'rounded'],
  size: ['sm', 'md'],
}

const buttonVariantKeys = Object.keys(buttonVariantMap)

export const button = /* @__PURE__ */ Object.assign(memo(buttonFn.recipeFn), {
  __recipe__: true,
  __name__: 'button',
  __getCompoundVariantCss__: buttonFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: buttonVariantKeys,
  variantMap: buttonVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, buttonVariantKeys)
  },
  getVariantProps: buttonFn.getVariantProps,
})
