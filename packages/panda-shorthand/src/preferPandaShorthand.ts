/**
 * ESLint rule to enforce the usage of Panda CSS shorthand property names.
 *
 * This rule checks for standard CSS properties and suggests using their
 * corresponding Panda CSS shorthand properties, if available.
 *
 * @module PandaCssShorthandRule
 */

import { preset } from '@pandacss/preset-base'
import type { PropertyConfig } from '@pandacss/types'
import { AST_NODE_TYPES, TSESLint, TSESTree } from '@typescript-eslint/utils'
import { RuleFixer } from '@typescript-eslint/utils/ts-eslint'

const preferPandaShorthand: TSESLint.RuleModule<'useShorthand', []> = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce Panda CSS shorthand property names',
    },
    messages: {
      useShorthand:
        "Use Panda CSS shorthand '{{ shorthand }}' instead of '{{ original }}'.",
    },
    fixable: 'code',
    schema: [],
  },
  create(context: Readonly<TSESLint.RuleContext<'useShorthand', []>>) {
    // Mapping of standard CSS properties to Panda CSS shorthands
    const propertyMap: { [key: string]: string | string[] } = {}
    for (const cssProperty of Object.entries(preset.utilities)) {
      const propertyName: string = cssProperty[0]
      const propertyObj: PropertyConfig | undefined = cssProperty[1]
      if (propertyObj?.shorthand) {
        // there is a rare instance where the shorthand is the same as the property name, so do not count it as a shorthand
        if (propertyName !== propertyObj.shorthand) {
          propertyMap[propertyName] = propertyObj.shorthand
        }
      }
    }

    return {
      CallExpression(node: TSESTree.CallExpression): void {
        const patterns: string[] = [
          ...Object.entries(preset.patterns).map(([key]) => key),
          'css',
        ]

        // only flag violations for panda pattern functions
        if (
          node.callee.type === AST_NODE_TYPES.Identifier &&
          patterns.includes(node.callee.name) &&
          node.arguments.length > 0
        ) {
          const arg: TSESTree.CallExpressionArgument = node.arguments[0]

          if (arg.type === AST_NODE_TYPES.ObjectExpression) {
            for (const property of arg.properties) {
              if (
                property.type === AST_NODE_TYPES.Property &&
                property.key.type === AST_NODE_TYPES.Identifier &&
                propertyMap[property.key.name]
              ) {
                const shorthand = propertyMap[property.key.name]
                const shorthandString = Array.isArray(shorthand)
                  ? shorthand.join(' or ') // there may be multiple shorthands
                  : shorthand

                context.report({
                  node: property.key,
                  messageId: 'useShorthand',
                  data: {
                    shorthand: shorthandString,
                    original: property.key.name,
                  },
                  fix(fixer: RuleFixer) {
                    const replacement = Array.isArray(shorthand)
                      ? shorthand[0]
                      : shorthand

                    return fixer.replaceText(property.key, replacement)
                  },
                })
              }
            }
          }
        }
      },
    }
  },
  defaultOptions: [],
}

export default preferPandaShorthand
