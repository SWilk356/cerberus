/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface FileUploaderVariant {}

type FileUploaderVariantMap = {
  [key in keyof FileUploaderVariant]: Array<FileUploaderVariant[key]>
}

export type FileUploaderVariantProps = {
  [key in keyof FileUploaderVariant]?:
    | ConditionalValue<FileUploaderVariant[key]>
    | undefined
}

export interface FileUploaderRecipe {
  __type: FileUploaderVariantProps
  (
    props?: FileUploaderVariantProps,
  ): Pretty<
    Record<
      'container' | 'label' | 'icon' | 'heading' | 'description' | 'input',
      string
    >
  >
  raw: (props?: FileUploaderVariantProps) => FileUploaderVariantProps
  variantMap: FileUploaderVariantMap
  variantKeys: Array<keyof FileUploaderVariant>
  splitVariantProps<Props extends FileUploaderVariantProps>(
    props: Props,
  ): [
    FileUploaderVariantProps,
    Pretty<DistributiveOmit<Props, keyof FileUploaderVariantProps>>,
  ]
  getVariantProps: (
    props?: FileUploaderVariantProps,
  ) => FileUploaderVariantProps
}

/**
 * The styles for FileUploader components


 */
export declare const fileUploader: FileUploaderRecipe
