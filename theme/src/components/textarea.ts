import { ComponentStyle, mode } from '@yamada-ui/core'
import { getColor, isArray } from '@yamada-ui/utils'

export const Textarea: ComponentStyle = {
  baseStyle: {
    width: '100%',
    minWidth: 0,
    outline: 0,
    position: 'relative',
    appearance: 'none',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    py: '2',
    minH: '20',
    lineHeight: 'short',
    verticalAlign: 'top',
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },

  variants: {
    outline: ({
      theme: t,
      colorScheme: s,
      focusBorderColor: fc = ['blue.500', 'blue.300'],
      errorBorderColor: ec = ['red.500', 'red.300'],
    }) => {
      const focusBorderColor = isArray(fc)
        ? mode(getColor(fc[0], fc[0])(t, s), getColor(fc[1], fc[1])(t, s))(s)
        : getColor(fc, fc)(t, s)
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, s), getColor(ec[1], ec[1])(t, s))(s)
        : getColor(ec, ec)(t, s)

      return {
        border: '1px solid',
        borderColor: 'inherit',
        bg: 'inherit',
        _hover: {
          borderColor: ['gray.300', 'whiteAlpha.400'],
        },
        _readOnly: {
          boxShadow: 'none !important',
          userSelect: 'all',
        },
        _focus: {
          zIndex: 1,
          borderColor: focusBorderColor,
          boxShadow: `0 0 0 1px ${focusBorderColor}`,
        },
        _invalid: {
          borderColor: errorBorderColor,
          boxShadow: `0 0 0 1px ${errorBorderColor}`,
        },
      }
    },
    filled: ({
      theme: t,
      colorScheme: s,
      focusBorderColor: fc = ['blue.500', 'blue.300'],
      errorBorderColor: ec = ['red.500', 'red.300'],
    }) => {
      const focusBorderColor = isArray(fc)
        ? mode(getColor(fc[0], fc[0])(t, s), getColor(fc[1], fc[1])(t, s))(s)
        : getColor(fc, fc)(t, s)
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, s), getColor(ec[1], ec[1])(t, s))(s)
        : getColor(ec, ec)(t, s)

      return {
        border: '2px solid',
        borderColor: 'transparent',
        bg: ['gray.100', 'whiteAlpha.50'],
        _hover: {
          bg: ['gray.200', 'whiteAlpha.100'],
        },
        _readOnly: {
          boxShadow: 'none !important',
          userSelect: 'all',
        },
        _focus: {
          bg: 'transparent',
          borderColor: focusBorderColor,
        },
        _invalid: {
          borderColor: errorBorderColor,
        },
      }
    },
    flushed: ({
      theme: t,
      colorScheme: s,
      focusBorderColor: fc = ['blue.500', 'blue.300'],
      errorBorderColor: ec = ['red.500', 'red.300'],
    }) => {
      const focusBorderColor = isArray(fc)
        ? mode(getColor(fc[0], fc[0])(t, s), getColor(fc[1], fc[1])(t, s))(s)
        : getColor(fc, fc)(t, s)
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, s), getColor(ec[1], ec[1])(t, s))(s)
        : getColor(ec, ec)(t, s)

      return {
        borderBottom: '1px solid',
        borderColor: 'inherit',
        rounded: '0',
        py: '0',
        px: '0',
        bg: 'transparent',
        _readOnly: {
          boxShadow: 'none !important',
          userSelect: 'all',
        },
        _focus: {
          borderColor: focusBorderColor,
          boxShadow: `0px 1px 0px 0px ${focusBorderColor}`,
        },
        _invalid: {
          borderColor: errorBorderColor,
          boxShadow: `0px 1px 0px 0px ${errorBorderColor}`,
        },
      }
    },
    unstyled: {
      bg: 'transparent',
      h: 'auto',
      py: '0',
      px: '0',
    },
  },

  sizes: {
    xs: {
      fontSize: 'xs',
      py: '2',
      px: '2',
      h: '6',
      rounded: 'sm',
    },
    sm: {
      fontSize: 'sm',
      py: '2',
      px: '2',
      h: '8',
      rounded: 'sm',
    },
    md: {
      fontSize: 'md',
      py: '2',
      px: '3',
      h: '10',
      rounded: 'md',
    },
    lg: {
      fontSize: 'lg',
      py: '3',
      px: '4',
      h: '12',
      rounded: 'md',
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
}
