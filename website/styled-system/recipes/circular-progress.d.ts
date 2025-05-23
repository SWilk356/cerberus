/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface CircularProgressVariant {}

type CircularProgressVariantMap = {
  [key in keyof CircularProgressVariant]: Array<CircularProgressVariant[key]>
}

export type CircularProgressVariantProps = {
  [key in keyof CircularProgressVariant]?:
    | ConditionalValue<CircularProgressVariant[key]>
    | undefined
}

export interface CircularProgressRecipe {
  __type: CircularProgressVariantProps
  (
    props?: CircularProgressVariantProps,
  ): Pretty<
    Record<
      'root' | 'group' | 'base' | 'track' | 'path' | 'title' | 'description',
      string
    >
  >
  raw: (props?: CircularProgressVariantProps) => CircularProgressVariantProps
  variantMap: CircularProgressVariantMap
  variantKeys: Array<keyof CircularProgressVariant>
  splitVariantProps<Props extends CircularProgressVariantProps>(
    props: Props,
  ): [
    CircularProgressVariantProps,
    Pretty<DistributiveOmit<Props, keyof CircularProgressVariantProps>>,
  ]
  getVariantProps: (
    props?: CircularProgressVariantProps,
  ) => CircularProgressVariantProps
}

export declare const circularProgress: CircularProgressRecipe
