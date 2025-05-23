const tokens = {
  'aspectRatios.square': {
    value: '1 / 1',
    variable: 'var(--cerberus-aspect-ratios-square)',
  },
  'aspectRatios.landscape': {
    value: '4 / 3',
    variable: 'var(--cerberus-aspect-ratios-landscape)',
  },
  'aspectRatios.portrait': {
    value: '3 / 4',
    variable: 'var(--cerberus-aspect-ratios-portrait)',
  },
  'aspectRatios.wide': {
    value: '16 / 9',
    variable: 'var(--cerberus-aspect-ratios-wide)',
  },
  'aspectRatios.ultrawide': {
    value: '18 / 5',
    variable: 'var(--cerberus-aspect-ratios-ultrawide)',
  },
  'aspectRatios.golden': {
    value: '1.618 / 1',
    variable: 'var(--cerberus-aspect-ratios-golden)',
  },
  'borders.none': {
    value: 'none',
    variable: 'var(--cerberus-borders-none)',
  },
  'easings.default': {
    value: 'cubic-bezier(0.4, 0, 0.2, 1)',
    variable: 'var(--cerberus-easings-default)',
  },
  'easings.linear': {
    value: 'linear',
    variable: 'var(--cerberus-easings-linear)',
  },
  'easings.in': {
    value: 'cubic-bezier(0.4, 0, 1, 1)',
    variable: 'var(--cerberus-easings-in)',
  },
  'easings.out': {
    value: 'cubic-bezier(0, 0, 0.2, 1)',
    variable: 'var(--cerberus-easings-out)',
  },
  'easings.in-out': {
    value: 'cubic-bezier(0.4, 0, 0.2, 1)',
    variable: 'var(--cerberus-easings-in-out)',
  },
  'durations.fastest': {
    value: '50ms',
    variable: 'var(--cerberus-durations-fastest)',
  },
  'durations.faster': {
    value: '100ms',
    variable: 'var(--cerberus-durations-faster)',
  },
  'durations.fast': {
    value: '150ms',
    variable: 'var(--cerberus-durations-fast)',
  },
  'durations.normal': {
    value: '200ms',
    variable: 'var(--cerberus-durations-normal)',
  },
  'durations.slow': {
    value: '300ms',
    variable: 'var(--cerberus-durations-slow)',
  },
  'durations.slower': {
    value: '400ms',
    variable: 'var(--cerberus-durations-slower)',
  },
  'durations.slowest': {
    value: '500ms',
    variable: 'var(--cerberus-durations-slowest)',
  },
  'radii.xs': {
    value: '0.125rem',
    variable: 'var(--cerberus-radii-xs)',
  },
  'radii.sm': {
    value: '0.25rem',
    variable: 'var(--cerberus-radii-sm)',
  },
  'radii.md': {
    value: '0.375rem',
    variable: 'var(--cerberus-radii-md)',
  },
  'radii.lg': {
    value: '0.5rem',
    variable: 'var(--cerberus-radii-lg)',
  },
  'radii.xl': {
    value: '0.75rem',
    variable: 'var(--cerberus-radii-xl)',
  },
  'radii.2xl': {
    value: '1rem',
    variable: 'var(--cerberus-radii-2xl)',
  },
  'radii.3xl': {
    value: '1.5rem',
    variable: 'var(--cerberus-radii-3xl)',
  },
  'radii.4xl': {
    value: '2rem',
    variable: 'var(--cerberus-radii-4xl)',
  },
  'radii.full': {
    value: '9999px',
    variable: 'var(--cerberus-radii-full)',
  },
  'fontWeights.thin': {
    value: '100',
    variable: 'var(--cerberus-font-weights-thin)',
  },
  'fontWeights.extralight': {
    value: '200',
    variable: 'var(--cerberus-font-weights-extralight)',
  },
  'fontWeights.light': {
    value: '300',
    variable: 'var(--cerberus-font-weights-light)',
  },
  'fontWeights.normal': {
    value: '400',
    variable: 'var(--cerberus-font-weights-normal)',
  },
  'fontWeights.medium': {
    value: '500',
    variable: 'var(--cerberus-font-weights-medium)',
  },
  'fontWeights.semibold': {
    value: '600',
    variable: 'var(--cerberus-font-weights-semibold)',
  },
  'fontWeights.bold': {
    value: '700',
    variable: 'var(--cerberus-font-weights-bold)',
  },
  'fontWeights.extrabold': {
    value: '800',
    variable: 'var(--cerberus-font-weights-extrabold)',
  },
  'fontWeights.black': {
    value: '900',
    variable: 'var(--cerberus-font-weights-black)',
  },
  'lineHeights.none': {
    value: '1',
    variable: 'var(--cerberus-line-heights-none)',
  },
  'lineHeights.tight': {
    value: '1.25',
    variable: 'var(--cerberus-line-heights-tight)',
  },
  'lineHeights.snug': {
    value: '1.375',
    variable: 'var(--cerberus-line-heights-snug)',
  },
  'lineHeights.normal': {
    value: '1.5',
    variable: 'var(--cerberus-line-heights-normal)',
  },
  'lineHeights.relaxed': {
    value: '1.625',
    variable: 'var(--cerberus-line-heights-relaxed)',
  },
  'lineHeights.loose': {
    value: '2',
    variable: 'var(--cerberus-line-heights-loose)',
  },
  'letterSpacings.tighter': {
    value: '-0.05em',
    variable: 'var(--cerberus-letter-spacings-tighter)',
  },
  'letterSpacings.tight': {
    value: '-0.025em',
    variable: 'var(--cerberus-letter-spacings-tight)',
  },
  'letterSpacings.normal': {
    value: '0em',
    variable: 'var(--cerberus-letter-spacings-normal)',
  },
  'letterSpacings.wide': {
    value: '0.025em',
    variable: 'var(--cerberus-letter-spacings-wide)',
  },
  'letterSpacings.wider': {
    value: '0.05em',
    variable: 'var(--cerberus-letter-spacings-wider)',
  },
  'letterSpacings.widest': {
    value: '0.1em',
    variable: 'var(--cerberus-letter-spacings-widest)',
  },
  'fontSizes.2xs': {
    value: '0.5rem',
    variable: 'var(--cerberus-font-sizes-2xs)',
  },
  'fontSizes.xs': {
    value: '0.75rem',
    variable: 'var(--cerberus-font-sizes-xs)',
  },
  'fontSizes.sm': {
    value: '0.875rem',
    variable: 'var(--cerberus-font-sizes-sm)',
  },
  'fontSizes.md': {
    value: '1rem',
    variable: 'var(--cerberus-font-sizes-md)',
  },
  'fontSizes.lg': {
    value: '1.125rem',
    variable: 'var(--cerberus-font-sizes-lg)',
  },
  'fontSizes.xl': {
    value: '1.25rem',
    variable: 'var(--cerberus-font-sizes-xl)',
  },
  'fontSizes.2xl': {
    value: '1.5rem',
    variable: 'var(--cerberus-font-sizes-2xl)',
  },
  'fontSizes.3xl': {
    value: '1.875rem',
    variable: 'var(--cerberus-font-sizes-3xl)',
  },
  'fontSizes.4xl': {
    value: '2.25rem',
    variable: 'var(--cerberus-font-sizes-4xl)',
  },
  'fontSizes.5xl': {
    value: '3rem',
    variable: 'var(--cerberus-font-sizes-5xl)',
  },
  'fontSizes.6xl': {
    value: '3.75rem',
    variable: 'var(--cerberus-font-sizes-6xl)',
  },
  'fontSizes.7xl': {
    value: '4.5rem',
    variable: 'var(--cerberus-font-sizes-7xl)',
  },
  'fontSizes.8xl': {
    value: '6rem',
    variable: 'var(--cerberus-font-sizes-8xl)',
  },
  'fontSizes.9xl': {
    value: '8rem',
    variable: 'var(--cerberus-font-sizes-9xl)',
  },
  'blurs.sm': {
    value: '4px',
    variable: 'var(--cerberus-blurs-sm)',
  },
  'blurs.base': {
    value: '8px',
    variable: 'var(--cerberus-blurs-base)',
  },
  'blurs.md': {
    value: '12px',
    variable: 'var(--cerberus-blurs-md)',
  },
  'blurs.lg': {
    value: '16px',
    variable: 'var(--cerberus-blurs-lg)',
  },
  'blurs.xl': {
    value: '24px',
    variable: 'var(--cerberus-blurs-xl)',
  },
  'blurs.2xl': {
    value: '40px',
    variable: 'var(--cerberus-blurs-2xl)',
  },
  'blurs.3xl': {
    value: '64px',
    variable: 'var(--cerberus-blurs-3xl)',
  },
  'sizes.0': {
    value: '0rem',
    variable: 'var(--cerberus-sizes-0)',
  },
  'sizes.1': {
    value: '0.25rem',
    variable: 'var(--cerberus-sizes-1)',
  },
  'sizes.2': {
    value: '0.5rem',
    variable: 'var(--cerberus-sizes-2)',
  },
  'sizes.3': {
    value: '0.75rem',
    variable: 'var(--cerberus-sizes-3)',
  },
  'sizes.4': {
    value: '1rem',
    variable: 'var(--cerberus-sizes-4)',
  },
  'sizes.5': {
    value: '1.25rem',
    variable: 'var(--cerberus-sizes-5)',
  },
  'sizes.6': {
    value: '1.5rem',
    variable: 'var(--cerberus-sizes-6)',
  },
  'sizes.7': {
    value: '1.75rem',
    variable: 'var(--cerberus-sizes-7)',
  },
  'sizes.8': {
    value: '2rem',
    variable: 'var(--cerberus-sizes-8)',
  },
  'sizes.9': {
    value: '2.25rem',
    variable: 'var(--cerberus-sizes-9)',
  },
  'sizes.10': {
    value: '2.5rem',
    variable: 'var(--cerberus-sizes-10)',
  },
  'sizes.11': {
    value: '2.75rem',
    variable: 'var(--cerberus-sizes-11)',
  },
  'sizes.12': {
    value: '3rem',
    variable: 'var(--cerberus-sizes-12)',
  },
  'sizes.14': {
    value: '3.5rem',
    variable: 'var(--cerberus-sizes-14)',
  },
  'sizes.16': {
    value: '4rem',
    variable: 'var(--cerberus-sizes-16)',
  },
  'sizes.20': {
    value: '5rem',
    variable: 'var(--cerberus-sizes-20)',
  },
  'sizes.24': {
    value: '6rem',
    variable: 'var(--cerberus-sizes-24)',
  },
  'sizes.28': {
    value: '7rem',
    variable: 'var(--cerberus-sizes-28)',
  },
  'sizes.32': {
    value: '8rem',
    variable: 'var(--cerberus-sizes-32)',
  },
  'sizes.36': {
    value: '9rem',
    variable: 'var(--cerberus-sizes-36)',
  },
  'sizes.40': {
    value: '10rem',
    variable: 'var(--cerberus-sizes-40)',
  },
  'sizes.44': {
    value: '11rem',
    variable: 'var(--cerberus-sizes-44)',
  },
  'sizes.48': {
    value: '12rem',
    variable: 'var(--cerberus-sizes-48)',
  },
  'sizes.52': {
    value: '13rem',
    variable: 'var(--cerberus-sizes-52)',
  },
  'sizes.56': {
    value: '14rem',
    variable: 'var(--cerberus-sizes-56)',
  },
  'sizes.60': {
    value: '15rem',
    variable: 'var(--cerberus-sizes-60)',
  },
  'sizes.64': {
    value: '16rem',
    variable: 'var(--cerberus-sizes-64)',
  },
  'sizes.72': {
    value: '18rem',
    variable: 'var(--cerberus-sizes-72)',
  },
  'sizes.80': {
    value: '20rem',
    variable: 'var(--cerberus-sizes-80)',
  },
  'sizes.96': {
    value: '24rem',
    variable: 'var(--cerberus-sizes-96)',
  },
  'sizes.0.5': {
    value: '0.125rem',
    variable: 'var(--cerberus-sizes-0\\.5)',
  },
  'sizes.1.5': {
    value: '0.375rem',
    variable: 'var(--cerberus-sizes-1\\.5)',
  },
  'sizes.2.5': {
    value: '0.625rem',
    variable: 'var(--cerberus-sizes-2\\.5)',
  },
  'sizes.3.5': {
    value: '0.875rem',
    variable: 'var(--cerberus-sizes-3\\.5)',
  },
  'sizes.xs': {
    value: '20rem',
    variable: 'var(--cerberus-sizes-xs)',
  },
  'sizes.sm': {
    value: '24rem',
    variable: 'var(--cerberus-sizes-sm)',
  },
  'sizes.md': {
    value: '28rem',
    variable: 'var(--cerberus-sizes-md)',
  },
  'sizes.lg': {
    value: '32rem',
    variable: 'var(--cerberus-sizes-lg)',
  },
  'sizes.xl': {
    value: '36rem',
    variable: 'var(--cerberus-sizes-xl)',
  },
  'sizes.2xl': {
    value: '42rem',
    variable: 'var(--cerberus-sizes-2xl)',
  },
  'sizes.3xl': {
    value: '48rem',
    variable: 'var(--cerberus-sizes-3xl)',
  },
  'sizes.4xl': {
    value: '56rem',
    variable: 'var(--cerberus-sizes-4xl)',
  },
  'sizes.5xl': {
    value: '64rem',
    variable: 'var(--cerberus-sizes-5xl)',
  },
  'sizes.6xl': {
    value: '72rem',
    variable: 'var(--cerberus-sizes-6xl)',
  },
  'sizes.7xl': {
    value: '80rem',
    variable: 'var(--cerberus-sizes-7xl)',
  },
  'sizes.8xl': {
    value: '90rem',
    variable: 'var(--cerberus-sizes-8xl)',
  },
  'sizes.prose': {
    value: '65ch',
    variable: 'var(--cerberus-sizes-prose)',
  },
  'sizes.full': {
    value: '100%',
    variable: 'var(--cerberus-sizes-full)',
  },
  'sizes.min': {
    value: 'min-content',
    variable: 'var(--cerberus-sizes-min)',
  },
  'sizes.max': {
    value: 'max-content',
    variable: 'var(--cerberus-sizes-max)',
  },
  'sizes.fit': {
    value: 'fit-content',
    variable: 'var(--cerberus-sizes-fit)',
  },
  'sizes.breakpoint-sm': {
    value: '640px',
    variable: 'var(--cerberus-sizes-breakpoint-sm)',
  },
  'sizes.breakpoint-md': {
    value: '768px',
    variable: 'var(--cerberus-sizes-breakpoint-md)',
  },
  'sizes.breakpoint-lg': {
    value: '1024px',
    variable: 'var(--cerberus-sizes-breakpoint-lg)',
  },
  'sizes.breakpoint-xl': {
    value: '1280px',
    variable: 'var(--cerberus-sizes-breakpoint-xl)',
  },
  'sizes.breakpoint-2xl': {
    value: '1536px',
    variable: 'var(--cerberus-sizes-breakpoint-2xl)',
  },
  'animations.spin': {
    value: 'spin 1s linear infinite',
    variable: 'var(--cerberus-animations-spin)',
  },
  'animations.ping': {
    value: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
    variable: 'var(--cerberus-animations-ping)',
  },
  'animations.pulse': {
    value: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    variable: 'var(--cerberus-animations-pulse)',
  },
  'animations.bounce': {
    value: 'bounce 1s infinite',
    variable: 'var(--cerberus-animations-bounce)',
  },
  'colors.current': {
    value: 'currentColor',
    variable: 'var(--cerberus-colors-current)',
  },
  'colors.black': {
    value: '#000',
    variable: 'var(--cerberus-colors-black)',
  },
  'colors.white': {
    value: '#fff',
    variable: 'var(--cerberus-colors-white)',
  },
  'colors.transparent': {
    value: 'rgb(0 0 0 / 0)',
    variable: 'var(--cerberus-colors-transparent)',
  },
  'colors.rose.50': {
    value: '#fff1f2',
    variable: 'var(--cerberus-colors-rose-50)',
  },
  'colors.rose.100': {
    value: '#ffe4e6',
    variable: 'var(--cerberus-colors-rose-100)',
  },
  'colors.rose.200': {
    value: '#fecdd3',
    variable: 'var(--cerberus-colors-rose-200)',
  },
  'colors.rose.300': {
    value: '#fda4af',
    variable: 'var(--cerberus-colors-rose-300)',
  },
  'colors.rose.400': {
    value: '#fb7185',
    variable: 'var(--cerberus-colors-rose-400)',
  },
  'colors.rose.500': {
    value: '#f43f5e',
    variable: 'var(--cerberus-colors-rose-500)',
  },
  'colors.rose.600': {
    value: '#e11d48',
    variable: 'var(--cerberus-colors-rose-600)',
  },
  'colors.rose.700': {
    value: '#be123c',
    variable: 'var(--cerberus-colors-rose-700)',
  },
  'colors.rose.800': {
    value: '#9f1239',
    variable: 'var(--cerberus-colors-rose-800)',
  },
  'colors.rose.900': {
    value: '#881337',
    variable: 'var(--cerberus-colors-rose-900)',
  },
  'colors.rose.950': {
    value: '#4c0519',
    variable: 'var(--cerberus-colors-rose-950)',
  },
  'colors.pink.50': {
    value: '#fdf2f8',
    variable: 'var(--cerberus-colors-pink-50)',
  },
  'colors.pink.100': {
    value: '#fce7f3',
    variable: 'var(--cerberus-colors-pink-100)',
  },
  'colors.pink.200': {
    value: '#fbcfe8',
    variable: 'var(--cerberus-colors-pink-200)',
  },
  'colors.pink.300': {
    value: '#f9a8d4',
    variable: 'var(--cerberus-colors-pink-300)',
  },
  'colors.pink.400': {
    value: '#f472b6',
    variable: 'var(--cerberus-colors-pink-400)',
  },
  'colors.pink.500': {
    value: '#ec4899',
    variable: 'var(--cerberus-colors-pink-500)',
  },
  'colors.pink.600': {
    value: '#db2777',
    variable: 'var(--cerberus-colors-pink-600)',
  },
  'colors.pink.700': {
    value: '#be185d',
    variable: 'var(--cerberus-colors-pink-700)',
  },
  'colors.pink.800': {
    value: '#9d174d',
    variable: 'var(--cerberus-colors-pink-800)',
  },
  'colors.pink.900': {
    value: '#831843',
    variable: 'var(--cerberus-colors-pink-900)',
  },
  'colors.pink.950': {
    value: '#500724',
    variable: 'var(--cerberus-colors-pink-950)',
  },
  'colors.fuchsia.50': {
    value: '#fdf4ff',
    variable: 'var(--cerberus-colors-fuchsia-50)',
  },
  'colors.fuchsia.100': {
    value: '#fae8ff',
    variable: 'var(--cerberus-colors-fuchsia-100)',
  },
  'colors.fuchsia.200': {
    value: '#f5d0fe',
    variable: 'var(--cerberus-colors-fuchsia-200)',
  },
  'colors.fuchsia.300': {
    value: '#f0abfc',
    variable: 'var(--cerberus-colors-fuchsia-300)',
  },
  'colors.fuchsia.400': {
    value: '#e879f9',
    variable: 'var(--cerberus-colors-fuchsia-400)',
  },
  'colors.fuchsia.500': {
    value: '#d946ef',
    variable: 'var(--cerberus-colors-fuchsia-500)',
  },
  'colors.fuchsia.600': {
    value: '#c026d3',
    variable: 'var(--cerberus-colors-fuchsia-600)',
  },
  'colors.fuchsia.700': {
    value: '#a21caf',
    variable: 'var(--cerberus-colors-fuchsia-700)',
  },
  'colors.fuchsia.800': {
    value: '#86198f',
    variable: 'var(--cerberus-colors-fuchsia-800)',
  },
  'colors.fuchsia.900': {
    value: '#701a75',
    variable: 'var(--cerberus-colors-fuchsia-900)',
  },
  'colors.fuchsia.950': {
    value: '#4a044e',
    variable: 'var(--cerberus-colors-fuchsia-950)',
  },
  'colors.purple.50': {
    value: '#faf5ff',
    variable: 'var(--cerberus-colors-purple-50)',
  },
  'colors.purple.100': {
    value: '#f3e8ff',
    variable: 'var(--cerberus-colors-purple-100)',
  },
  'colors.purple.200': {
    value: '#e9d5ff',
    variable: 'var(--cerberus-colors-purple-200)',
  },
  'colors.purple.300': {
    value: '#d8b4fe',
    variable: 'var(--cerberus-colors-purple-300)',
  },
  'colors.purple.400': {
    value: '#c084fc',
    variable: 'var(--cerberus-colors-purple-400)',
  },
  'colors.purple.500': {
    value: '#a855f7',
    variable: 'var(--cerberus-colors-purple-500)',
  },
  'colors.purple.600': {
    value: '#9333ea',
    variable: 'var(--cerberus-colors-purple-600)',
  },
  'colors.purple.700': {
    value: '#7e22ce',
    variable: 'var(--cerberus-colors-purple-700)',
  },
  'colors.purple.800': {
    value: '#6b21a8',
    variable: 'var(--cerberus-colors-purple-800)',
  },
  'colors.purple.900': {
    value: '#581c87',
    variable: 'var(--cerberus-colors-purple-900)',
  },
  'colors.purple.950': {
    value: '#3b0764',
    variable: 'var(--cerberus-colors-purple-950)',
  },
  'colors.violet.50': {
    value: '#f5f3ff',
    variable: 'var(--cerberus-colors-violet-50)',
  },
  'colors.violet.100': {
    value: '#ede9fe',
    variable: 'var(--cerberus-colors-violet-100)',
  },
  'colors.violet.200': {
    value: '#ddd6fe',
    variable: 'var(--cerberus-colors-violet-200)',
  },
  'colors.violet.300': {
    value: '#c4b5fd',
    variable: 'var(--cerberus-colors-violet-300)',
  },
  'colors.violet.400': {
    value: '#a78bfa',
    variable: 'var(--cerberus-colors-violet-400)',
  },
  'colors.violet.500': {
    value: '#8b5cf6',
    variable: 'var(--cerberus-colors-violet-500)',
  },
  'colors.violet.600': {
    value: '#7c3aed',
    variable: 'var(--cerberus-colors-violet-600)',
  },
  'colors.violet.700': {
    value: '#6d28d9',
    variable: 'var(--cerberus-colors-violet-700)',
  },
  'colors.violet.800': {
    value: '#5b21b6',
    variable: 'var(--cerberus-colors-violet-800)',
  },
  'colors.violet.900': {
    value: '#4c1d95',
    variable: 'var(--cerberus-colors-violet-900)',
  },
  'colors.violet.950': {
    value: '#2e1065',
    variable: 'var(--cerberus-colors-violet-950)',
  },
  'colors.indigo.50': {
    value: '#eef2ff',
    variable: 'var(--cerberus-colors-indigo-50)',
  },
  'colors.indigo.100': {
    value: '#e0e7ff',
    variable: 'var(--cerberus-colors-indigo-100)',
  },
  'colors.indigo.200': {
    value: '#c7d2fe',
    variable: 'var(--cerberus-colors-indigo-200)',
  },
  'colors.indigo.300': {
    value: '#a5b4fc',
    variable: 'var(--cerberus-colors-indigo-300)',
  },
  'colors.indigo.400': {
    value: '#818cf8',
    variable: 'var(--cerberus-colors-indigo-400)',
  },
  'colors.indigo.500': {
    value: '#6366f1',
    variable: 'var(--cerberus-colors-indigo-500)',
  },
  'colors.indigo.600': {
    value: '#4f46e5',
    variable: 'var(--cerberus-colors-indigo-600)',
  },
  'colors.indigo.700': {
    value: '#4338ca',
    variable: 'var(--cerberus-colors-indigo-700)',
  },
  'colors.indigo.800': {
    value: '#3730a3',
    variable: 'var(--cerberus-colors-indigo-800)',
  },
  'colors.indigo.900': {
    value: '#312e81',
    variable: 'var(--cerberus-colors-indigo-900)',
  },
  'colors.indigo.950': {
    value: '#1e1b4b',
    variable: 'var(--cerberus-colors-indigo-950)',
  },
  'colors.blue.50': {
    value: '#eff6ff',
    variable: 'var(--cerberus-colors-blue-50)',
  },
  'colors.blue.100': {
    value: '#dbeafe',
    variable: 'var(--cerberus-colors-blue-100)',
  },
  'colors.blue.200': {
    value: '#bfdbfe',
    variable: 'var(--cerberus-colors-blue-200)',
  },
  'colors.blue.300': {
    value: '#93c5fd',
    variable: 'var(--cerberus-colors-blue-300)',
  },
  'colors.blue.400': {
    value: '#60a5fa',
    variable: 'var(--cerberus-colors-blue-400)',
  },
  'colors.blue.500': {
    value: '#3b82f6',
    variable: 'var(--cerberus-colors-blue-500)',
  },
  'colors.blue.600': {
    value: '#2563eb',
    variable: 'var(--cerberus-colors-blue-600)',
  },
  'colors.blue.700': {
    value: '#1d4ed8',
    variable: 'var(--cerberus-colors-blue-700)',
  },
  'colors.blue.800': {
    value: '#1e40af',
    variable: 'var(--cerberus-colors-blue-800)',
  },
  'colors.blue.900': {
    value: '#1e3a8a',
    variable: 'var(--cerberus-colors-blue-900)',
  },
  'colors.blue.950': {
    value: '#172554',
    variable: 'var(--cerberus-colors-blue-950)',
  },
  'colors.sky.50': {
    value: '#f0f9ff',
    variable: 'var(--cerberus-colors-sky-50)',
  },
  'colors.sky.100': {
    value: '#e0f2fe',
    variable: 'var(--cerberus-colors-sky-100)',
  },
  'colors.sky.200': {
    value: '#bae6fd',
    variable: 'var(--cerberus-colors-sky-200)',
  },
  'colors.sky.300': {
    value: '#7dd3fc',
    variable: 'var(--cerberus-colors-sky-300)',
  },
  'colors.sky.400': {
    value: '#38bdf8',
    variable: 'var(--cerberus-colors-sky-400)',
  },
  'colors.sky.500': {
    value: '#0ea5e9',
    variable: 'var(--cerberus-colors-sky-500)',
  },
  'colors.sky.600': {
    value: '#0284c7',
    variable: 'var(--cerberus-colors-sky-600)',
  },
  'colors.sky.700': {
    value: '#0369a1',
    variable: 'var(--cerberus-colors-sky-700)',
  },
  'colors.sky.800': {
    value: '#075985',
    variable: 'var(--cerberus-colors-sky-800)',
  },
  'colors.sky.900': {
    value: '#0c4a6e',
    variable: 'var(--cerberus-colors-sky-900)',
  },
  'colors.sky.950': {
    value: '#082f49',
    variable: 'var(--cerberus-colors-sky-950)',
  },
  'colors.cyan.50': {
    value: '#ecfeff',
    variable: 'var(--cerberus-colors-cyan-50)',
  },
  'colors.cyan.100': {
    value: '#cffafe',
    variable: 'var(--cerberus-colors-cyan-100)',
  },
  'colors.cyan.200': {
    value: '#a5f3fc',
    variable: 'var(--cerberus-colors-cyan-200)',
  },
  'colors.cyan.300': {
    value: '#67e8f9',
    variable: 'var(--cerberus-colors-cyan-300)',
  },
  'colors.cyan.400': {
    value: '#22d3ee',
    variable: 'var(--cerberus-colors-cyan-400)',
  },
  'colors.cyan.500': {
    value: '#06b6d4',
    variable: 'var(--cerberus-colors-cyan-500)',
  },
  'colors.cyan.600': {
    value: '#0891b2',
    variable: 'var(--cerberus-colors-cyan-600)',
  },
  'colors.cyan.700': {
    value: '#0e7490',
    variable: 'var(--cerberus-colors-cyan-700)',
  },
  'colors.cyan.800': {
    value: '#155e75',
    variable: 'var(--cerberus-colors-cyan-800)',
  },
  'colors.cyan.900': {
    value: '#164e63',
    variable: 'var(--cerberus-colors-cyan-900)',
  },
  'colors.cyan.950': {
    value: '#083344',
    variable: 'var(--cerberus-colors-cyan-950)',
  },
  'colors.teal.50': {
    value: '#f0fdfa',
    variable: 'var(--cerberus-colors-teal-50)',
  },
  'colors.teal.100': {
    value: '#ccfbf1',
    variable: 'var(--cerberus-colors-teal-100)',
  },
  'colors.teal.200': {
    value: '#99f6e4',
    variable: 'var(--cerberus-colors-teal-200)',
  },
  'colors.teal.300': {
    value: '#5eead4',
    variable: 'var(--cerberus-colors-teal-300)',
  },
  'colors.teal.400': {
    value: '#2dd4bf',
    variable: 'var(--cerberus-colors-teal-400)',
  },
  'colors.teal.500': {
    value: '#14b8a6',
    variable: 'var(--cerberus-colors-teal-500)',
  },
  'colors.teal.600': {
    value: '#0d9488',
    variable: 'var(--cerberus-colors-teal-600)',
  },
  'colors.teal.700': {
    value: '#0f766e',
    variable: 'var(--cerberus-colors-teal-700)',
  },
  'colors.teal.800': {
    value: '#115e59',
    variable: 'var(--cerberus-colors-teal-800)',
  },
  'colors.teal.900': {
    value: '#134e4a',
    variable: 'var(--cerberus-colors-teal-900)',
  },
  'colors.teal.950': {
    value: '#042f2e',
    variable: 'var(--cerberus-colors-teal-950)',
  },
  'colors.emerald.50': {
    value: '#ecfdf5',
    variable: 'var(--cerberus-colors-emerald-50)',
  },
  'colors.emerald.100': {
    value: '#d1fae5',
    variable: 'var(--cerberus-colors-emerald-100)',
  },
  'colors.emerald.200': {
    value: '#a7f3d0',
    variable: 'var(--cerberus-colors-emerald-200)',
  },
  'colors.emerald.300': {
    value: '#6ee7b7',
    variable: 'var(--cerberus-colors-emerald-300)',
  },
  'colors.emerald.400': {
    value: '#34d399',
    variable: 'var(--cerberus-colors-emerald-400)',
  },
  'colors.emerald.500': {
    value: '#10b981',
    variable: 'var(--cerberus-colors-emerald-500)',
  },
  'colors.emerald.600': {
    value: '#059669',
    variable: 'var(--cerberus-colors-emerald-600)',
  },
  'colors.emerald.700': {
    value: '#047857',
    variable: 'var(--cerberus-colors-emerald-700)',
  },
  'colors.emerald.800': {
    value: '#065f46',
    variable: 'var(--cerberus-colors-emerald-800)',
  },
  'colors.emerald.900': {
    value: '#064e3b',
    variable: 'var(--cerberus-colors-emerald-900)',
  },
  'colors.emerald.950': {
    value: '#022c22',
    variable: 'var(--cerberus-colors-emerald-950)',
  },
  'colors.green.50': {
    value: '#f0fdf4',
    variable: 'var(--cerberus-colors-green-50)',
  },
  'colors.green.100': {
    value: '#dcfce7',
    variable: 'var(--cerberus-colors-green-100)',
  },
  'colors.green.200': {
    value: '#bbf7d0',
    variable: 'var(--cerberus-colors-green-200)',
  },
  'colors.green.300': {
    value: '#86efac',
    variable: 'var(--cerberus-colors-green-300)',
  },
  'colors.green.400': {
    value: '#4ade80',
    variable: 'var(--cerberus-colors-green-400)',
  },
  'colors.green.500': {
    value: '#22c55e',
    variable: 'var(--cerberus-colors-green-500)',
  },
  'colors.green.600': {
    value: '#16a34a',
    variable: 'var(--cerberus-colors-green-600)',
  },
  'colors.green.700': {
    value: '#15803d',
    variable: 'var(--cerberus-colors-green-700)',
  },
  'colors.green.800': {
    value: '#166534',
    variable: 'var(--cerberus-colors-green-800)',
  },
  'colors.green.900': {
    value: '#14532d',
    variable: 'var(--cerberus-colors-green-900)',
  },
  'colors.green.950': {
    value: '#052e16',
    variable: 'var(--cerberus-colors-green-950)',
  },
  'colors.lime.50': {
    value: '#f7fee7',
    variable: 'var(--cerberus-colors-lime-50)',
  },
  'colors.lime.100': {
    value: '#ecfccb',
    variable: 'var(--cerberus-colors-lime-100)',
  },
  'colors.lime.200': {
    value: '#d9f99d',
    variable: 'var(--cerberus-colors-lime-200)',
  },
  'colors.lime.300': {
    value: '#bef264',
    variable: 'var(--cerberus-colors-lime-300)',
  },
  'colors.lime.400': {
    value: '#a3e635',
    variable: 'var(--cerberus-colors-lime-400)',
  },
  'colors.lime.500': {
    value: '#84cc16',
    variable: 'var(--cerberus-colors-lime-500)',
  },
  'colors.lime.600': {
    value: '#65a30d',
    variable: 'var(--cerberus-colors-lime-600)',
  },
  'colors.lime.700': {
    value: '#4d7c0f',
    variable: 'var(--cerberus-colors-lime-700)',
  },
  'colors.lime.800': {
    value: '#3f6212',
    variable: 'var(--cerberus-colors-lime-800)',
  },
  'colors.lime.900': {
    value: '#365314',
    variable: 'var(--cerberus-colors-lime-900)',
  },
  'colors.lime.950': {
    value: '#1a2e05',
    variable: 'var(--cerberus-colors-lime-950)',
  },
  'colors.yellow.50': {
    value: '#fefce8',
    variable: 'var(--cerberus-colors-yellow-50)',
  },
  'colors.yellow.100': {
    value: '#fef9c3',
    variable: 'var(--cerberus-colors-yellow-100)',
  },
  'colors.yellow.200': {
    value: '#fef08a',
    variable: 'var(--cerberus-colors-yellow-200)',
  },
  'colors.yellow.300': {
    value: '#fde047',
    variable: 'var(--cerberus-colors-yellow-300)',
  },
  'colors.yellow.400': {
    value: '#facc15',
    variable: 'var(--cerberus-colors-yellow-400)',
  },
  'colors.yellow.500': {
    value: '#eab308',
    variable: 'var(--cerberus-colors-yellow-500)',
  },
  'colors.yellow.600': {
    value: '#ca8a04',
    variable: 'var(--cerberus-colors-yellow-600)',
  },
  'colors.yellow.700': {
    value: '#a16207',
    variable: 'var(--cerberus-colors-yellow-700)',
  },
  'colors.yellow.800': {
    value: '#854d0e',
    variable: 'var(--cerberus-colors-yellow-800)',
  },
  'colors.yellow.900': {
    value: '#713f12',
    variable: 'var(--cerberus-colors-yellow-900)',
  },
  'colors.yellow.950': {
    value: '#422006',
    variable: 'var(--cerberus-colors-yellow-950)',
  },
  'colors.amber.50': {
    value: '#fffbeb',
    variable: 'var(--cerberus-colors-amber-50)',
  },
  'colors.amber.100': {
    value: '#fef3c7',
    variable: 'var(--cerberus-colors-amber-100)',
  },
  'colors.amber.200': {
    value: '#fde68a',
    variable: 'var(--cerberus-colors-amber-200)',
  },
  'colors.amber.300': {
    value: '#fcd34d',
    variable: 'var(--cerberus-colors-amber-300)',
  },
  'colors.amber.400': {
    value: '#fbbf24',
    variable: 'var(--cerberus-colors-amber-400)',
  },
  'colors.amber.500': {
    value: '#f59e0b',
    variable: 'var(--cerberus-colors-amber-500)',
  },
  'colors.amber.600': {
    value: '#d97706',
    variable: 'var(--cerberus-colors-amber-600)',
  },
  'colors.amber.700': {
    value: '#b45309',
    variable: 'var(--cerberus-colors-amber-700)',
  },
  'colors.amber.800': {
    value: '#92400e',
    variable: 'var(--cerberus-colors-amber-800)',
  },
  'colors.amber.900': {
    value: '#78350f',
    variable: 'var(--cerberus-colors-amber-900)',
  },
  'colors.amber.950': {
    value: '#451a03',
    variable: 'var(--cerberus-colors-amber-950)',
  },
  'colors.orange.50': {
    value: '#fff7ed',
    variable: 'var(--cerberus-colors-orange-50)',
  },
  'colors.orange.100': {
    value: '#ffedd5',
    variable: 'var(--cerberus-colors-orange-100)',
  },
  'colors.orange.200': {
    value: '#fed7aa',
    variable: 'var(--cerberus-colors-orange-200)',
  },
  'colors.orange.300': {
    value: '#fdba74',
    variable: 'var(--cerberus-colors-orange-300)',
  },
  'colors.orange.400': {
    value: '#fb923c',
    variable: 'var(--cerberus-colors-orange-400)',
  },
  'colors.orange.500': {
    value: '#f97316',
    variable: 'var(--cerberus-colors-orange-500)',
  },
  'colors.orange.600': {
    value: '#ea580c',
    variable: 'var(--cerberus-colors-orange-600)',
  },
  'colors.orange.700': {
    value: '#c2410c',
    variable: 'var(--cerberus-colors-orange-700)',
  },
  'colors.orange.800': {
    value: '#9a3412',
    variable: 'var(--cerberus-colors-orange-800)',
  },
  'colors.orange.900': {
    value: '#7c2d12',
    variable: 'var(--cerberus-colors-orange-900)',
  },
  'colors.orange.950': {
    value: '#431407',
    variable: 'var(--cerberus-colors-orange-950)',
  },
  'colors.red.50': {
    value: '#fef2f2',
    variable: 'var(--cerberus-colors-red-50)',
  },
  'colors.red.100': {
    value: '#fee2e2',
    variable: 'var(--cerberus-colors-red-100)',
  },
  'colors.red.200': {
    value: '#fecaca',
    variable: 'var(--cerberus-colors-red-200)',
  },
  'colors.red.300': {
    value: '#fca5a5',
    variable: 'var(--cerberus-colors-red-300)',
  },
  'colors.red.400': {
    value: '#f87171',
    variable: 'var(--cerberus-colors-red-400)',
  },
  'colors.red.500': {
    value: '#ef4444',
    variable: 'var(--cerberus-colors-red-500)',
  },
  'colors.red.600': {
    value: '#dc2626',
    variable: 'var(--cerberus-colors-red-600)',
  },
  'colors.red.700': {
    value: '#b91c1c',
    variable: 'var(--cerberus-colors-red-700)',
  },
  'colors.red.800': {
    value: '#991b1b',
    variable: 'var(--cerberus-colors-red-800)',
  },
  'colors.red.900': {
    value: '#7f1d1d',
    variable: 'var(--cerberus-colors-red-900)',
  },
  'colors.red.950': {
    value: '#450a0a',
    variable: 'var(--cerberus-colors-red-950)',
  },
  'colors.neutral.50': {
    value: '#fafafa',
    variable: 'var(--cerberus-colors-neutral-50)',
  },
  'colors.neutral.100': {
    value: '#f5f5f5',
    variable: 'var(--cerberus-colors-neutral-100)',
  },
  'colors.neutral.200': {
    value: '#e5e5e5',
    variable: 'var(--cerberus-colors-neutral-200)',
  },
  'colors.neutral.300': {
    value: '#d4d4d4',
    variable: 'var(--cerberus-colors-neutral-300)',
  },
  'colors.neutral.400': {
    value: '#a3a3a3',
    variable: 'var(--cerberus-colors-neutral-400)',
  },
  'colors.neutral.500': {
    value: '#737373',
    variable: 'var(--cerberus-colors-neutral-500)',
  },
  'colors.neutral.600': {
    value: '#525252',
    variable: 'var(--cerberus-colors-neutral-600)',
  },
  'colors.neutral.700': {
    value: '#404040',
    variable: 'var(--cerberus-colors-neutral-700)',
  },
  'colors.neutral.800': {
    value: '#262626',
    variable: 'var(--cerberus-colors-neutral-800)',
  },
  'colors.neutral.900': {
    value: '#171717',
    variable: 'var(--cerberus-colors-neutral-900)',
  },
  'colors.neutral.950': {
    value: '#0a0a0a',
    variable: 'var(--cerberus-colors-neutral-950)',
  },
  'colors.stone.50': {
    value: '#fafaf9',
    variable: 'var(--cerberus-colors-stone-50)',
  },
  'colors.stone.100': {
    value: '#f5f5f4',
    variable: 'var(--cerberus-colors-stone-100)',
  },
  'colors.stone.200': {
    value: '#e7e5e4',
    variable: 'var(--cerberus-colors-stone-200)',
  },
  'colors.stone.300': {
    value: '#d6d3d1',
    variable: 'var(--cerberus-colors-stone-300)',
  },
  'colors.stone.400': {
    value: '#a8a29e',
    variable: 'var(--cerberus-colors-stone-400)',
  },
  'colors.stone.500': {
    value: '#78716c',
    variable: 'var(--cerberus-colors-stone-500)',
  },
  'colors.stone.600': {
    value: '#57534e',
    variable: 'var(--cerberus-colors-stone-600)',
  },
  'colors.stone.700': {
    value: '#44403c',
    variable: 'var(--cerberus-colors-stone-700)',
  },
  'colors.stone.800': {
    value: '#292524',
    variable: 'var(--cerberus-colors-stone-800)',
  },
  'colors.stone.900': {
    value: '#1c1917',
    variable: 'var(--cerberus-colors-stone-900)',
  },
  'colors.stone.950': {
    value: '#0c0a09',
    variable: 'var(--cerberus-colors-stone-950)',
  },
  'colors.zinc.50': {
    value: '#fafafa',
    variable: 'var(--cerberus-colors-zinc-50)',
  },
  'colors.zinc.100': {
    value: '#f4f4f5',
    variable: 'var(--cerberus-colors-zinc-100)',
  },
  'colors.zinc.200': {
    value: '#e4e4e7',
    variable: 'var(--cerberus-colors-zinc-200)',
  },
  'colors.zinc.300': {
    value: '#d4d4d8',
    variable: 'var(--cerberus-colors-zinc-300)',
  },
  'colors.zinc.400': {
    value: '#a1a1aa',
    variable: 'var(--cerberus-colors-zinc-400)',
  },
  'colors.zinc.500': {
    value: '#71717a',
    variable: 'var(--cerberus-colors-zinc-500)',
  },
  'colors.zinc.600': {
    value: '#52525b',
    variable: 'var(--cerberus-colors-zinc-600)',
  },
  'colors.zinc.700': {
    value: '#3f3f46',
    variable: 'var(--cerberus-colors-zinc-700)',
  },
  'colors.zinc.800': {
    value: '#27272a',
    variable: 'var(--cerberus-colors-zinc-800)',
  },
  'colors.zinc.900': {
    value: '#18181b',
    variable: 'var(--cerberus-colors-zinc-900)',
  },
  'colors.zinc.950': {
    value: '#09090b',
    variable: 'var(--cerberus-colors-zinc-950)',
  },
  'colors.gray.50': {
    value: '#f9fafb',
    variable: 'var(--cerberus-colors-gray-50)',
  },
  'colors.gray.100': {
    value: '#f3f4f6',
    variable: 'var(--cerberus-colors-gray-100)',
  },
  'colors.gray.200': {
    value: '#e5e7eb',
    variable: 'var(--cerberus-colors-gray-200)',
  },
  'colors.gray.300': {
    value: '#d1d5db',
    variable: 'var(--cerberus-colors-gray-300)',
  },
  'colors.gray.400': {
    value: '#9ca3af',
    variable: 'var(--cerberus-colors-gray-400)',
  },
  'colors.gray.500': {
    value: '#6b7280',
    variable: 'var(--cerberus-colors-gray-500)',
  },
  'colors.gray.600': {
    value: '#4b5563',
    variable: 'var(--cerberus-colors-gray-600)',
  },
  'colors.gray.700': {
    value: '#374151',
    variable: 'var(--cerberus-colors-gray-700)',
  },
  'colors.gray.800': {
    value: '#1f2937',
    variable: 'var(--cerberus-colors-gray-800)',
  },
  'colors.gray.900': {
    value: '#111827',
    variable: 'var(--cerberus-colors-gray-900)',
  },
  'colors.gray.950': {
    value: '#030712',
    variable: 'var(--cerberus-colors-gray-950)',
  },
  'colors.slate.50': {
    value: '#f8fafc',
    variable: 'var(--cerberus-colors-slate-50)',
  },
  'colors.slate.100': {
    value: '#f1f5f9',
    variable: 'var(--cerberus-colors-slate-100)',
  },
  'colors.slate.200': {
    value: '#e2e8f0',
    variable: 'var(--cerberus-colors-slate-200)',
  },
  'colors.slate.300': {
    value: '#cbd5e1',
    variable: 'var(--cerberus-colors-slate-300)',
  },
  'colors.slate.400': {
    value: '#94a3b8',
    variable: 'var(--cerberus-colors-slate-400)',
  },
  'colors.slate.500': {
    value: '#64748b',
    variable: 'var(--cerberus-colors-slate-500)',
  },
  'colors.slate.600': {
    value: '#475569',
    variable: 'var(--cerberus-colors-slate-600)',
  },
  'colors.slate.700': {
    value: '#334155',
    variable: 'var(--cerberus-colors-slate-700)',
  },
  'colors.slate.800': {
    value: '#1e293b',
    variable: 'var(--cerberus-colors-slate-800)',
  },
  'colors.slate.900': {
    value: '#0f172a',
    variable: 'var(--cerberus-colors-slate-900)',
  },
  'colors.slate.950': {
    value: '#020617',
    variable: 'var(--cerberus-colors-slate-950)',
  },
  'colors.acheron.neutral.0': {
    value: '#fafafa',
    variable: 'var(--cerberus-colors-acheron-neutral-0)',
  },
  'colors.acheron.neutral.5': {
    value: '#f4f3f2',
    variable: 'var(--cerberus-colors-acheron-neutral-5)',
  },
  'colors.acheron.neutral.10': {
    value: '#ececec',
    variable: 'var(--cerberus-colors-acheron-neutral-10)',
  },
  'colors.acheron.neutral.20': {
    value: '#dad9d8',
    variable: 'var(--cerberus-colors-acheron-neutral-20)',
  },
  'colors.acheron.neutral.30': {
    value: '#b4b3b2',
    variable: 'var(--cerberus-colors-acheron-neutral-30)',
  },
  'colors.acheron.neutral.40': {
    value: '#8f8d8b',
    variable: 'var(--cerberus-colors-acheron-neutral-40)',
  },
  'colors.acheron.neutral.50': {
    value: '#6a6764',
    variable: 'var(--cerberus-colors-acheron-neutral-50)',
  },
  'colors.acheron.neutral.60': {
    value: '#44413e',
    variable: 'var(--cerberus-colors-acheron-neutral-60)',
  },
  'colors.acheron.neutral.70': {
    value: '#373431',
    variable: 'var(--cerberus-colors-acheron-neutral-70)',
  },
  'colors.acheron.neutral.80': {
    value: '#292725',
    variable: 'var(--cerberus-colors-acheron-neutral-80)',
  },
  'colors.acheron.neutral.90': {
    value: '#1b1a19',
    variable: 'var(--cerberus-colors-acheron-neutral-90)',
  },
  'colors.acheron.neutral.100': {
    value: '#0e0d0c',
    variable: 'var(--cerberus-colors-acheron-neutral-100)',
  },
  'colors.acheron.neutral.white': {
    value: '#ffffff',
    variable: 'var(--cerberus-colors-acheron-neutral-white)',
  },
  'colors.acheron.brand.5': {
    value: '#fefdfa',
    variable: 'var(--cerberus-colors-acheron-brand-5)',
  },
  'colors.acheron.brand.10': {
    value: '#fdf6ed',
    variable: 'var(--cerberus-colors-acheron-brand-10)',
  },
  'colors.acheron.brand.20': {
    value: '#fbeddb',
    variable: 'var(--cerberus-colors-acheron-brand-20)',
  },
  'colors.acheron.brand.30': {
    value: '#f7dcb7',
    variable: 'var(--cerberus-colors-acheron-brand-30)',
  },
  'colors.acheron.brand.40': {
    value: '#f4ca93',
    variable: 'var(--cerberus-colors-acheron-brand-40)',
  },
  'colors.acheron.brand.50': {
    value: '#f0b86f',
    variable: 'var(--cerberus-colors-acheron-brand-50)',
  },
  'colors.acheron.brand.60': {
    value: '#eca64b',
    variable: 'var(--cerberus-colors-acheron-brand-60)',
  },
  'colors.acheron.brand.70': {
    value: '#bd853c',
    variable: 'var(--cerberus-colors-acheron-brand-70)',
  },
  'colors.acheron.brand.80': {
    value: '#8e642d',
    variable: 'var(--cerberus-colors-acheron-brand-80)',
  },
  'colors.acheron.brand.90': {
    value: '#5e431e',
    variable: 'var(--cerberus-colors-acheron-brand-90)',
  },
  'colors.acheron.brand.100': {
    value: '#2f210f',
    variable: 'var(--cerberus-colors-acheron-brand-100)',
  },
  'colors.acheron.accent.10': {
    value: '#edf7fd',
    variable: 'var(--cerberus-colors-acheron-accent-10)',
  },
  'colors.acheron.accent.20': {
    value: '#dbf0fb',
    variable: 'var(--cerberus-colors-acheron-accent-20)',
  },
  'colors.acheron.accent.30': {
    value: '#b7e1f8',
    variable: 'var(--cerberus-colors-acheron-accent-30)',
  },
  'colors.acheron.accent.40': {
    value: '#94d2f4',
    variable: 'var(--cerberus-colors-acheron-accent-40)',
  },
  'colors.acheron.accent.50': {
    value: '#70c3f1',
    variable: 'var(--cerberus-colors-acheron-accent-50)',
  },
  'colors.acheron.accent.60': {
    value: '#4cb4ed',
    variable: 'var(--cerberus-colors-acheron-accent-60)',
  },
  'colors.acheron.accent.70': {
    value: '#3d90be',
    variable: 'var(--cerberus-colors-acheron-accent-70)',
  },
  'colors.acheron.accent.80': {
    value: '#2e6c8e',
    variable: 'var(--cerberus-colors-acheron-accent-80)',
  },
  'colors.acheron.accent.90': {
    value: '#1e485f',
    variable: 'var(--cerberus-colors-acheron-accent-90)',
  },
  'colors.acheron.accent.100': {
    value: '#0f242f',
    variable: 'var(--cerberus-colors-acheron-accent-100)',
  },
  'colors.acheron.success.10': {
    value: '#effaf1',
    variable: 'var(--cerberus-colors-acheron-success-10)',
  },
  'colors.acheron.success.20': {
    value: '#d0f0d4',
    variable: 'var(--cerberus-colors-acheron-success-20)',
  },
  'colors.acheron.success.30': {
    value: '#a0e0a9',
    variable: 'var(--cerberus-colors-acheron-success-30)',
  },
  'colors.acheron.success.40': {
    value: '#71d17e',
    variable: 'var(--cerberus-colors-acheron-success-40)',
  },
  'colors.acheron.success.50': {
    value: '#41c152',
    variable: 'var(--cerberus-colors-acheron-success-50)',
  },
  'colors.acheron.success.60': {
    value: '#12b227',
    variable: 'var(--cerberus-colors-acheron-success-60)',
  },
  'colors.acheron.success.70': {
    value: '#0e8e1f',
    variable: 'var(--cerberus-colors-acheron-success-70)',
  },
  'colors.acheron.success.80': {
    value: '#0f671b',
    variable: 'var(--cerberus-colors-acheron-success-80)',
  },
  'colors.acheron.success.90': {
    value: '#0a4412',
    variable: 'var(--cerberus-colors-acheron-success-90)',
  },
  'colors.acheron.success.100': {
    value: '#052309',
    variable: 'var(--cerberus-colors-acheron-success-100)',
  },
  'colors.acheron.danger.10': {
    value: '#ffedea',
    variable: 'var(--cerberus-colors-acheron-danger-10)',
  },
  'colors.acheron.danger.20': {
    value: '#fedad5',
    variable: 'var(--cerberus-colors-acheron-danger-20)',
  },
  'colors.acheron.danger.30': {
    value: '#fdb6ab',
    variable: 'var(--cerberus-colors-acheron-danger-30)',
  },
  'colors.acheron.danger.40': {
    value: '#fd9181',
    variable: 'var(--cerberus-colors-acheron-danger-40)',
  },
  'colors.acheron.danger.50': {
    value: '#fc6d57',
    variable: 'var(--cerberus-colors-acheron-danger-50)',
  },
  'colors.acheron.danger.60': {
    value: '#fb482d',
    variable: 'var(--cerberus-colors-acheron-danger-60)',
  },
  'colors.acheron.danger.70': {
    value: '#c93a24',
    variable: 'var(--cerberus-colors-acheron-danger-70)',
  },
  'colors.acheron.danger.80': {
    value: '#972b1b',
    variable: 'var(--cerberus-colors-acheron-danger-80)',
  },
  'colors.acheron.danger.90': {
    value: '#641d12',
    variable: 'var(--cerberus-colors-acheron-danger-90)',
  },
  'colors.acheron.danger.100': {
    value: '#320e09',
    variable: 'var(--cerberus-colors-acheron-danger-100)',
  },
  'colors.acheron.warning.10': {
    value: '#fdfbed',
    variable: 'var(--cerberus-colors-acheron-warning-10)',
  },
  'colors.acheron.warning.20': {
    value: '#fbf7ce',
    variable: 'var(--cerberus-colors-acheron-warning-20)',
  },
  'colors.acheron.warning.30': {
    value: '#f6ef9e',
    variable: 'var(--cerberus-colors-acheron-warning-30)',
  },
  'colors.acheron.warning.40': {
    value: '#f2e76d',
    variable: 'var(--cerberus-colors-acheron-warning-40)',
  },
  'colors.acheron.warning.50': {
    value: '#edde3d',
    variable: 'var(--cerberus-colors-acheron-warning-50)',
  },
  'colors.acheron.warning.60': {
    value: '#e9d70c',
    variable: 'var(--cerberus-colors-acheron-warning-60)',
  },
  'colors.acheron.warning.70': {
    value: '#baab0a',
    variable: 'var(--cerberus-colors-acheron-warning-70)',
  },
  'colors.acheron.warning.80': {
    value: '#8c8107',
    variable: 'var(--cerberus-colors-acheron-warning-80)',
  },
  'colors.acheron.warning.90': {
    value: '#5d5605',
    variable: 'var(--cerberus-colors-acheron-warning-90)',
  },
  'colors.acheron.warning.100': {
    value: '#2f2b02',
    variable: 'var(--cerberus-colors-acheron-warning-100)',
  },
  'colors.acheron.drop-shadow.100': {
    value: '#44413e26',
    variable: 'var(--cerberus-colors-acheron-drop-shadow-100)',
  },
  'colors.acheron.drop-shadow.200': {
    value: '#44413e40',
    variable: 'var(--cerberus-colors-acheron-drop-shadow-200)',
  },
  'colors.acheron.drop-shadow.300': {
    value: '#44413e59',
    variable: 'var(--cerberus-colors-acheron-drop-shadow-300)',
  },
  'colors.acheron.drop-shadow.400': {
    value: '#44413e80',
    variable: 'var(--cerberus-colors-acheron-drop-shadow-400)',
  },
  'colors.acheron.drop-shadow.500': {
    value: '#0e0d0c59',
    variable: 'var(--cerberus-colors-acheron-drop-shadow-500)',
  },
  'colors.acheron.drop-shadow.600': {
    value: '#0e0d0c80',
    variable: 'var(--cerberus-colors-acheron-drop-shadow-600)',
  },
  'colors.acheron.drop-shadow.700': {
    value: '#0e0d0cbf',
    variable: 'var(--cerberus-colors-acheron-drop-shadow-700)',
  },
  'colors.acheron.drop-shadow.800': {
    value: '#00000059',
    variable: 'var(--cerberus-colors-acheron-drop-shadow-800)',
  },
  'colors.acheron.drop-shadow.900': {
    value: '#00000080',
    variable: 'var(--cerberus-colors-acheron-drop-shadow-900)',
  },
  'colors.acheron.drop-shadow.1000': {
    value: '#000000e5',
    variable: 'var(--cerberus-colors-acheron-drop-shadow-1000)',
  },
  'colors.acheron.info.10': {
    value: '#edf2fd',
    variable: 'var(--cerberus-colors-acheron-info-10)',
  },
  'colors.acheron.info.20': {
    value: '#dbe6fb',
    variable: 'var(--cerberus-colors-acheron-info-20)',
  },
  'colors.acheron.info.30': {
    value: '#b7cdf8',
    variable: 'var(--cerberus-colors-acheron-info-30)',
  },
  'colors.acheron.info.40': {
    value: '#94b3f4',
    variable: 'var(--cerberus-colors-acheron-info-40)',
  },
  'colors.acheron.info.50': {
    value: '#709af1',
    variable: 'var(--cerberus-colors-acheron-info-50)',
  },
  'colors.acheron.info.60': {
    value: '#4c81ed',
    variable: 'var(--cerberus-colors-acheron-info-60)',
  },
  'colors.acheron.info.70': {
    value: '#3d67be',
    variable: 'var(--cerberus-colors-acheron-info-70)',
  },
  'colors.acheron.info.80': {
    value: '#2e4d8e',
    variable: 'var(--cerberus-colors-acheron-info-80)',
  },
  'colors.acheron.info.90': {
    value: '#1e345f',
    variable: 'var(--cerberus-colors-acheron-info-90)',
  },
  'colors.acheron.info.100': {
    value: '#0f1a2f',
    variable: 'var(--cerberus-colors-acheron-info-100)',
  },
  'colors.cerberus.neutral.5': {
    value: '#f9f9fb',
    variable: 'var(--cerberus-colors-cerberus-neutral-5)',
  },
  'colors.cerberus.neutral.10': {
    value: '#eeedf2',
    variable: 'var(--cerberus-colors-cerberus-neutral-10)',
  },
  'colors.cerberus.neutral.15': {
    value: '#e7e5eb',
    variable: 'var(--cerberus-colors-cerberus-neutral-15)',
  },
  'colors.cerberus.neutral.20': {
    value: '#dedce5',
    variable: 'var(--cerberus-colors-cerberus-neutral-20)',
  },
  'colors.cerberus.neutral.30': {
    value: '#a6a0b6',
    variable: 'var(--cerberus-colors-cerberus-neutral-30)',
  },
  'colors.cerberus.neutral.40': {
    value: '#776f90',
    variable: 'var(--cerberus-colors-cerberus-neutral-40)',
  },
  'colors.cerberus.neutral.50': {
    value: '#605579',
    variable: 'var(--cerberus-colors-cerberus-neutral-50)',
  },
  'colors.cerberus.neutral.60': {
    value: '#392e55',
    variable: 'var(--cerberus-colors-cerberus-neutral-60)',
  },
  'colors.cerberus.neutral.70': {
    value: '#2d2246',
    variable: 'var(--cerberus-colors-cerberus-neutral-70)',
  },
  'colors.cerberus.neutral.80': {
    value: '#201935',
    variable: 'var(--cerberus-colors-cerberus-neutral-80)',
  },
  'colors.cerberus.neutral.90': {
    value: '#130a2a',
    variable: 'var(--cerberus-colors-cerberus-neutral-90)',
  },
  'colors.cerberus.neutral.100': {
    value: '#0c0420',
    variable: 'var(--cerberus-colors-cerberus-neutral-100)',
  },
  'colors.cerberus.neutral.white': {
    value: '#ffffff',
    variable: 'var(--cerberus-colors-cerberus-neutral-white)',
  },
  'colors.cerberus.brand.5': {
    value: '#fcfbfe',
    variable: 'var(--cerberus-colors-cerberus-brand-5)',
  },
  'colors.cerberus.brand.10': {
    value: '#efe5f8',
    variable: 'var(--cerberus-colors-cerberus-brand-10)',
  },
  'colors.cerberus.brand.20': {
    value: '#dfccf0',
    variable: 'var(--cerberus-colors-cerberus-brand-20)',
  },
  'colors.cerberus.brand.30': {
    value: '#bb93e1',
    variable: 'var(--cerberus-colors-cerberus-brand-30)',
  },
  'colors.cerberus.brand.40': {
    value: '#9f66d3',
    variable: 'var(--cerberus-colors-cerberus-brand-40)',
  },
  'colors.cerberus.brand.50': {
    value: '#7f33c4',
    variable: 'var(--cerberus-colors-cerberus-brand-50)',
  },
  'colors.cerberus.brand.60': {
    value: '#5f00b5',
    variable: 'var(--cerberus-colors-cerberus-brand-60)',
  },
  'colors.cerberus.brand.70': {
    value: '#4c0091',
    variable: 'var(--cerberus-colors-cerberus-brand-70)',
  },
  'colors.cerberus.brand.80': {
    value: '#39006d',
    variable: 'var(--cerberus-colors-cerberus-brand-80)',
  },
  'colors.cerberus.brand.90': {
    value: '#260048',
    variable: 'var(--cerberus-colors-cerberus-brand-90)',
  },
  'colors.cerberus.brand.100': {
    value: '#130024',
    variable: 'var(--cerberus-colors-cerberus-brand-100)',
  },
  'colors.cerberus.teal.10': {
    value: '#eefdfc',
    variable: 'var(--cerberus-colors-cerberus-teal-10)',
  },
  'colors.cerberus.teal.20': {
    value: '#d8f9f7',
    variable: 'var(--cerberus-colors-cerberus-teal-20)',
  },
  'colors.cerberus.teal.30': {
    value: '#b8f4f3',
    variable: 'var(--cerberus-colors-cerberus-teal-30)',
  },
  'colors.cerberus.teal.40': {
    value: '#95eeed',
    variable: 'var(--cerberus-colors-cerberus-teal-40)',
  },
  'colors.cerberus.teal.50': {
    value: '#72e9e7',
    variable: 'var(--cerberus-colors-cerberus-teal-50)',
  },
  'colors.cerberus.teal.60': {
    value: '#41e3e0',
    variable: 'var(--cerberus-colors-cerberus-teal-60)',
  },
  'colors.cerberus.teal.70': {
    value: '#3fb6b4',
    variable: 'var(--cerberus-colors-cerberus-teal-70)',
  },
  'colors.cerberus.teal.80': {
    value: '#3b8180',
    variable: 'var(--cerberus-colors-cerberus-teal-80)',
  },
  'colors.cerberus.teal.90': {
    value: '#1f5b5a',
    variable: 'var(--cerberus-colors-cerberus-teal-90)',
  },
  'colors.cerberus.teal.100': {
    value: '#102d2d',
    variable: 'var(--cerberus-colors-cerberus-teal-100)',
  },
  'colors.cerberus.success.10': {
    value: '#e8f8ed',
    variable: 'var(--cerberus-colors-cerberus-success-10)',
  },
  'colors.cerberus.success.20': {
    value: '#d0f0db',
    variable: 'var(--cerberus-colors-cerberus-success-20)',
  },
  'colors.cerberus.success.30': {
    value: '#a0e0b7',
    variable: 'var(--cerberus-colors-cerberus-success-30)',
  },
  'colors.cerberus.success.40': {
    value: '#71d192',
    variable: 'var(--cerberus-colors-cerberus-success-40)',
  },
  'colors.cerberus.success.50': {
    value: '#41c16e',
    variable: 'var(--cerberus-colors-cerberus-success-50)',
  },
  'colors.cerberus.success.60': {
    value: '#12b24a',
    variable: 'var(--cerberus-colors-cerberus-success-60)',
  },
  'colors.cerberus.success.70': {
    value: '#0e8e3b',
    variable: 'var(--cerberus-colors-cerberus-success-70)',
  },
  'colors.cerberus.success.80': {
    value: '#0b6b2c',
    variable: 'var(--cerberus-colors-cerberus-success-80)',
  },
  'colors.cerberus.success.90': {
    value: '#07471e',
    variable: 'var(--cerberus-colors-cerberus-success-90)',
  },
  'colors.cerberus.success.100': {
    value: '#04240f',
    variable: 'var(--cerberus-colors-cerberus-success-100)',
  },
  'colors.cerberus.danger.10': {
    value: '#ffebea',
    variable: 'var(--cerberus-colors-cerberus-danger-10)',
  },
  'colors.cerberus.danger.20': {
    value: '#fed7d5',
    variable: 'var(--cerberus-colors-cerberus-danger-20)',
  },
  'colors.cerberus.danger.30': {
    value: '#fdafab',
    variable: 'var(--cerberus-colors-cerberus-danger-30)',
  },
  'colors.cerberus.danger.40': {
    value: '#fd8681',
    variable: 'var(--cerberus-colors-cerberus-danger-40)',
  },
  'colors.cerberus.danger.50': {
    value: '#fc5e57',
    variable: 'var(--cerberus-colors-cerberus-danger-50)',
  },
  'colors.cerberus.danger.60': {
    value: '#fb362d',
    variable: 'var(--cerberus-colors-cerberus-danger-60)',
  },
  'colors.cerberus.danger.70': {
    value: '#d31d27',
    variable: 'var(--cerberus-colors-cerberus-danger-70)',
  },
  'colors.cerberus.danger.80': {
    value: '#97201b',
    variable: 'var(--cerberus-colors-cerberus-danger-80)',
  },
  'colors.cerberus.danger.90': {
    value: '#641612',
    variable: 'var(--cerberus-colors-cerberus-danger-90)',
  },
  'colors.cerberus.danger.100': {
    value: '#320b09',
    variable: 'var(--cerberus-colors-cerberus-danger-100)',
  },
  'colors.cerberus.warning.10': {
    value: '#fefbe9',
    variable: 'var(--cerberus-colors-cerberus-warning-10)',
  },
  'colors.cerberus.warning.20': {
    value: '#fcf6d1',
    variable: 'var(--cerberus-colors-cerberus-warning-20)',
  },
  'colors.cerberus.warning.30': {
    value: '#f9eda4',
    variable: 'var(--cerberus-colors-cerberus-warning-30)',
  },
  'colors.cerberus.warning.40': {
    value: '#f7e376',
    variable: 'var(--cerberus-colors-cerberus-warning-40)',
  },
  'colors.cerberus.warning.50': {
    value: '#f4da49',
    variable: 'var(--cerberus-colors-cerberus-warning-50)',
  },
  'colors.cerberus.warning.60': {
    value: '#f1d11b',
    variable: 'var(--cerberus-colors-cerberus-warning-60)',
  },
  'colors.cerberus.warning.70': {
    value: '#c1a716',
    variable: 'var(--cerberus-colors-cerberus-warning-70)',
  },
  'colors.cerberus.warning.80': {
    value: '#917d10',
    variable: 'var(--cerberus-colors-cerberus-warning-80)',
  },
  'colors.cerberus.warning.90': {
    value: '#60540b',
    variable: 'var(--cerberus-colors-cerberus-warning-90)',
  },
  'colors.cerberus.warning.100': {
    value: '#302a05',
    variable: 'var(--cerberus-colors-cerberus-warning-100)',
  },
  'colors.cerberus.info.10': {
    value: '#e6f3fb',
    variable: 'var(--cerberus-colors-cerberus-info-10)',
  },
  'colors.cerberus.info.20': {
    value: '#cce7f7',
    variable: 'var(--cerberus-colors-cerberus-info-20)',
  },
  'colors.cerberus.info.30': {
    value: '#9acfee',
    variable: 'var(--cerberus-colors-cerberus-info-30)',
  },
  'colors.cerberus.info.40': {
    value: '#67b8e6',
    variable: 'var(--cerberus-colors-cerberus-info-40)',
  },
  'colors.cerberus.info.50': {
    value: '#35a0dd',
    variable: 'var(--cerberus-colors-cerberus-info-50)',
  },
  'colors.cerberus.info.60': {
    value: '#0288d5',
    variable: 'var(--cerberus-colors-cerberus-info-60)',
  },
  'colors.cerberus.info.70': {
    value: '#026daa',
    variable: 'var(--cerberus-colors-cerberus-info-70)',
  },
  'colors.cerberus.info.80': {
    value: '#015280',
    variable: 'var(--cerberus-colors-cerberus-info-80)',
  },
  'colors.cerberus.info.90': {
    value: '#013655',
    variable: 'var(--cerberus-colors-cerberus-info-90)',
  },
  'colors.cerberus.info.100': {
    value: '#001b2b',
    variable: 'var(--cerberus-colors-cerberus-info-100)',
  },
  'colors.cerberus.drop-shadow.100': {
    value: '#1601261a',
    variable: 'var(--cerberus-colors-cerberus-drop-shadow-100)',
  },
  'colors.cerberus.drop-shadow.200': {
    value: '#16012640',
    variable: 'var(--cerberus-colors-cerberus-drop-shadow-200)',
  },
  'colors.cerberus.drop-shadow.300': {
    value: '#16012659',
    variable: 'var(--cerberus-colors-cerberus-drop-shadow-300)',
  },
  'colors.cerberus.drop-shadow.400': {
    value: '#16012680',
    variable: 'var(--cerberus-colors-cerberus-drop-shadow-400)',
  },
  'colors.cerberus.drop-shadow.500': {
    value: '#05010859',
    variable: 'var(--cerberus-colors-cerberus-drop-shadow-500)',
  },
  'colors.cerberus.drop-shadow.600': {
    value: '#05010880',
    variable: 'var(--cerberus-colors-cerberus-drop-shadow-600)',
  },
  'colors.cerberus.drop-shadow.700': {
    value: '#050108a6',
    variable: 'var(--cerberus-colors-cerberus-drop-shadow-700)',
  },
  'colors.cerberus.drop-shadow.800': {
    value: '#00000059',
    variable: 'var(--cerberus-colors-cerberus-drop-shadow-800)',
  },
  'colors.cerberus.drop-shadow.900': {
    value: '#00000080',
    variable: 'var(--cerberus-colors-cerberus-drop-shadow-900)',
  },
  'colors.cerberus.drop-shadow.1000': {
    value: '#000000a6',
    variable: 'var(--cerberus-colors-cerberus-drop-shadow-1000)',
  },
  'fonts.serif': {
    value: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    variable: 'var(--cerberus-fonts-serif)',
  },
  'fonts.display': {
    value: 'var(--font-display, var(--font-poppins, sans-serif))',
    variable: 'var(--cerberus-fonts-display)',
  },
  'fonts.sans': {
    value: 'var(--font-sans, var(--font-poppins, sans-serif))',
    variable: 'var(--cerberus-fonts-sans)',
  },
  'fonts.mono': {
    value: 'var(--font-mono, var(--font-recursive, monospace))',
    variable: 'var(--cerberus-fonts-mono)',
  },
  'gradients.acheron.dark.charon-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-brand-20), var(--cerberus-colors-acheron-brand-50))',
    variable: 'var(--cerberus-gradients-acheron-dark-charon-light)',
  },
  'gradients.acheron.dark.charon-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-brand-80), var(--cerberus-colors-acheron-brand-60))',
    variable: 'var(--cerberus-gradients-acheron-dark-charon-dark)',
  },
  'gradients.acheron.dark.nyx-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-neutral-40), var(--cerberus-colors-acheron-neutral-20))',
    variable: 'var(--cerberus-gradients-acheron-dark-nyx-light)',
  },
  'gradients.acheron.dark.nyx-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-neutral-100), var(--cerberus-colors-acheron-neutral-60))',
    variable: 'var(--cerberus-gradients-acheron-dark-nyx-dark)',
  },
  'gradients.acheron.dark.thanatos-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-success-60), var(--cerberus-colors-acheron-success-80))',
    variable: 'var(--cerberus-gradients-acheron-dark-thanatos-dark)',
  },
  'gradients.acheron.dark.thanatos-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-success-10), var(--cerberus-colors-acheron-success-40))',
    variable: 'var(--cerberus-gradients-acheron-dark-thanatos-light)',
  },
  'gradients.acheron.dark.amphiaraus-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-info-10), var(--cerberus-colors-acheron-info-30))',
    variable: 'var(--cerberus-gradients-acheron-dark-amphiaraus-light)',
  },
  'gradients.acheron.dark.amphiaraus-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-info-90), var(--cerberus-colors-acheron-info-60))',
    variable: 'var(--cerberus-gradients-acheron-dark-amphiaraus-dark)',
  },
  'gradients.acheron.dark.hades-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-danger-20), var(--cerberus-colors-acheron-danger-40))',
    variable: 'var(--cerberus-gradients-acheron-dark-hades-light)',
  },
  'gradients.acheron.dark.hades-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-danger-80), var(--cerberus-colors-acheron-danger-50))',
    variable: 'var(--cerberus-gradients-acheron-dark-hades-dark)',
  },
  'gradients.acheron.dark.styx-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-accent-20), var(--cerberus-colors-acheron-accent-50))',
    variable: 'var(--cerberus-gradients-acheron-dark-styx-light)',
  },
  'gradients.acheron.dark.styx-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-accent-90), var(--cerberus-colors-acheron-accent-60))',
    variable: 'var(--cerberus-gradients-acheron-dark-styx-dark)',
  },
  'gradients.acheron.dark.asphodel-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-warning-20), var(--cerberus-colors-acheron-warning-50))',
    variable: 'var(--cerberus-gradients-acheron-dark-asphodel-light)',
  },
  'gradients.acheron.dark.asphodel-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-warning-80), var(--cerberus-colors-acheron-warning-50))',
    variable: 'var(--cerberus-gradients-acheron-dark-asphodel-dark)',
  },
  'gradients.acheron.light.charon-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-brand-20), var(--cerberus-colors-acheron-brand-50))',
    variable: 'var(--cerberus-gradients-acheron-light-charon-light)',
  },
  'gradients.acheron.light.charon-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-brand-80), var(--cerberus-colors-acheron-brand-60))',
    variable: 'var(--cerberus-gradients-acheron-light-charon-dark)',
  },
  'gradients.acheron.light.nyx-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-neutral-40), var(--cerberus-colors-acheron-neutral-20))',
    variable: 'var(--cerberus-gradients-acheron-light-nyx-light)',
  },
  'gradients.acheron.light.nyx-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-neutral-100), var(--cerberus-colors-acheron-neutral-60))',
    variable: 'var(--cerberus-gradients-acheron-light-nyx-dark)',
  },
  'gradients.acheron.light.thanatos-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-success-60), var(--cerberus-colors-acheron-success-80))',
    variable: 'var(--cerberus-gradients-acheron-light-thanatos-dark)',
  },
  'gradients.acheron.light.thanatos-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-success-10), var(--cerberus-colors-acheron-success-40))',
    variable: 'var(--cerberus-gradients-acheron-light-thanatos-light)',
  },
  'gradients.acheron.light.amphiaraus-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-info-10), var(--cerberus-colors-acheron-info-30))',
    variable: 'var(--cerberus-gradients-acheron-light-amphiaraus-light)',
  },
  'gradients.acheron.light.amphiaraus-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-info-90), var(--cerberus-colors-acheron-info-60))',
    variable: 'var(--cerberus-gradients-acheron-light-amphiaraus-dark)',
  },
  'gradients.acheron.light.hades-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-danger-20), var(--cerberus-colors-acheron-danger-40))',
    variable: 'var(--cerberus-gradients-acheron-light-hades-light)',
  },
  'gradients.acheron.light.hades-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-danger-80), var(--cerberus-colors-acheron-danger-50))',
    variable: 'var(--cerberus-gradients-acheron-light-hades-dark)',
  },
  'gradients.acheron.light.styx-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-accent-20), var(--cerberus-colors-acheron-accent-50))',
    variable: 'var(--cerberus-gradients-acheron-light-styx-light)',
  },
  'gradients.acheron.light.styx-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-accent-90), var(--cerberus-colors-acheron-accent-60))',
    variable: 'var(--cerberus-gradients-acheron-light-styx-dark)',
  },
  'gradients.acheron.light.asphodel-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-warning-20), var(--cerberus-colors-acheron-warning-50))',
    variable: 'var(--cerberus-gradients-acheron-light-asphodel-light)',
  },
  'gradients.acheron.light.asphodel-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-acheron-warning-80), var(--cerberus-colors-acheron-warning-50))',
    variable: 'var(--cerberus-gradients-acheron-light-asphodel-dark)',
  },
  'gradients.cerberus.dark.charon-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-brand-20), var(--cerberus-colors-cerberus-brand-40))',
    variable: 'var(--cerberus-gradients-cerberus-dark-charon-light)',
  },
  'gradients.cerberus.dark.charon-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-brand-70), var(--cerberus-colors-cerberus-brand-40))',
    variable: 'var(--cerberus-gradients-cerberus-dark-charon-dark)',
  },
  'gradients.cerberus.dark.nyx-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-neutral-30), var(--cerberus-colors-cerberus-neutral-10))',
    variable: 'var(--cerberus-gradients-cerberus-dark-nyx-light)',
  },
  'gradients.cerberus.dark.nyx-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-neutral-100), var(--cerberus-colors-cerberus-neutral-60))',
    variable: 'var(--cerberus-gradients-cerberus-dark-nyx-dark)',
  },
  'gradients.cerberus.dark.thanatos-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-success-60), var(--cerberus-colors-cerberus-success-80))',
    variable: 'var(--cerberus-gradients-cerberus-dark-thanatos-dark)',
  },
  'gradients.cerberus.dark.thanatos-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-success-10), var(--cerberus-colors-cerberus-success-40))',
    variable: 'var(--cerberus-gradients-cerberus-dark-thanatos-light)',
  },
  'gradients.cerberus.dark.amphiaraus-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-info-10), var(--cerberus-colors-cerberus-info-30))',
    variable: 'var(--cerberus-gradients-cerberus-dark-amphiaraus-light)',
  },
  'gradients.cerberus.dark.amphiaraus-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-info-90), var(--cerberus-colors-cerberus-info-60))',
    variable: 'var(--cerberus-gradients-cerberus-dark-amphiaraus-dark)',
  },
  'gradients.cerberus.dark.hades-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-danger-20), var(--cerberus-colors-cerberus-danger-40))',
    variable: 'var(--cerberus-gradients-cerberus-dark-hades-light)',
  },
  'gradients.cerberus.dark.hades-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-danger-80), var(--cerberus-colors-cerberus-danger-50))',
    variable: 'var(--cerberus-gradients-cerberus-dark-hades-dark)',
  },
  'gradients.cerberus.dark.styx-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-teal-20), var(--cerberus-colors-cerberus-teal-50))',
    variable: 'var(--cerberus-gradients-cerberus-dark-styx-light)',
  },
  'gradients.cerberus.dark.styx-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-teal-90), var(--cerberus-colors-cerberus-teal-60))',
    variable: 'var(--cerberus-gradients-cerberus-dark-styx-dark)',
  },
  'gradients.cerberus.dark.asphodel-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-warning-20), var(--cerberus-colors-cerberus-warning-50))',
    variable: 'var(--cerberus-gradients-cerberus-dark-asphodel-light)',
  },
  'gradients.cerberus.dark.asphodel-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-warning-80), var(--cerberus-colors-cerberus-warning-60))',
    variable: 'var(--cerberus-gradients-cerberus-dark-asphodel-dark)',
  },
  'gradients.cerberus.light.charon-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-brand-20), var(--cerberus-colors-cerberus-brand-40))',
    variable: 'var(--cerberus-gradients-cerberus-light-charon-light)',
  },
  'gradients.cerberus.light.charon-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-brand-70), var(--cerberus-colors-cerberus-brand-40))',
    variable: 'var(--cerberus-gradients-cerberus-light-charon-dark)',
  },
  'gradients.cerberus.light.nyx-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-neutral-30), var(--cerberus-colors-acheron-neutral-10))',
    variable: 'var(--cerberus-gradients-cerberus-light-nyx-light)',
  },
  'gradients.cerberus.light.nyx-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-neutral-100), var(--cerberus-colors-cerberus-neutral-60))',
    variable: 'var(--cerberus-gradients-cerberus-light-nyx-dark)',
  },
  'gradients.cerberus.light.thanatos-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-success-60), var(--cerberus-colors-cerberus-success-80))',
    variable: 'var(--cerberus-gradients-cerberus-light-thanatos-dark)',
  },
  'gradients.cerberus.light.thanatos-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-success-10), var(--cerberus-colors-cerberus-success-40))',
    variable: 'var(--cerberus-gradients-cerberus-light-thanatos-light)',
  },
  'gradients.cerberus.light.amphiaraus-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-info-10), var(--cerberus-colors-cerberus-info-30))',
    variable: 'var(--cerberus-gradients-cerberus-light-amphiaraus-light)',
  },
  'gradients.cerberus.light.amphiaraus-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-info-90), var(--cerberus-colors-cerberus-info-60))',
    variable: 'var(--cerberus-gradients-cerberus-light-amphiaraus-dark)',
  },
  'gradients.cerberus.light.hades-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-danger-20), var(--cerberus-colors-cerberus-danger-40))',
    variable: 'var(--cerberus-gradients-cerberus-light-hades-light)',
  },
  'gradients.cerberus.light.hades-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-danger-80), var(--cerberus-colors-cerberus-danger-50))',
    variable: 'var(--cerberus-gradients-cerberus-light-hades-dark)',
  },
  'gradients.cerberus.light.styx-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-teal-20), var(--cerberus-colors-cerberus-teal-50))',
    variable: 'var(--cerberus-gradients-cerberus-light-styx-light)',
  },
  'gradients.cerberus.light.styx-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-teal-100), var(--cerberus-colors-cerberus-teal-60))',
    variable: 'var(--cerberus-gradients-cerberus-light-styx-dark)',
  },
  'gradients.cerberus.light.asphodel-light': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-warning-20), var(--cerberus-colors-cerberus-warning-50))',
    variable: 'var(--cerberus-gradients-cerberus-light-asphodel-light)',
  },
  'gradients.cerberus.light.asphodel-dark': {
    value:
      'linear-gradient(to left bottom, var(--cerberus-colors-cerberus-warning-80), var(--cerberus-colors-cerberus-warning-60))',
    variable: 'var(--cerberus-gradients-cerberus-light-asphodel-dark)',
  },
  'spacing.0': {
    value: '0rem',
    variable: 'var(--cerberus-spacing-0)',
  },
  'spacing.1': {
    value: '0.25rem',
    variable: 'var(--cerberus-spacing-1)',
  },
  'spacing.2': {
    value: '0.5rem',
    variable: 'var(--cerberus-spacing-2)',
  },
  'spacing.3': {
    value: '0.75rem',
    variable: 'var(--cerberus-spacing-3)',
  },
  'spacing.4': {
    value: '1rem',
    variable: 'var(--cerberus-spacing-4)',
  },
  'spacing.5': {
    value: '1.25rem',
    variable: 'var(--cerberus-spacing-5)',
  },
  'spacing.6': {
    value: '1.5rem',
    variable: 'var(--cerberus-spacing-6)',
  },
  'spacing.7': {
    value: '1.75rem',
    variable: 'var(--cerberus-spacing-7)',
  },
  'spacing.8': {
    value: '2rem',
    variable: 'var(--cerberus-spacing-8)',
  },
  'spacing.9': {
    value: '2.25rem',
    variable: 'var(--cerberus-spacing-9)',
  },
  'spacing.10': {
    value: '2.5rem',
    variable: 'var(--cerberus-spacing-10)',
  },
  'spacing.11': {
    value: '2.75rem',
    variable: 'var(--cerberus-spacing-11)',
  },
  'spacing.12': {
    value: '3rem',
    variable: 'var(--cerberus-spacing-12)',
  },
  'spacing.14': {
    value: '3.5rem',
    variable: 'var(--cerberus-spacing-14)',
  },
  'spacing.16': {
    value: '4rem',
    variable: 'var(--cerberus-spacing-16)',
  },
  'spacing.20': {
    value: '5rem',
    variable: 'var(--cerberus-spacing-20)',
  },
  'spacing.24': {
    value: '6rem',
    variable: 'var(--cerberus-spacing-24)',
  },
  'spacing.28': {
    value: '7rem',
    variable: 'var(--cerberus-spacing-28)',
  },
  'spacing.32': {
    value: '8rem',
    variable: 'var(--cerberus-spacing-32)',
  },
  'spacing.36': {
    value: '9rem',
    variable: 'var(--cerberus-spacing-36)',
  },
  'spacing.40': {
    value: '10rem',
    variable: 'var(--cerberus-spacing-40)',
  },
  'spacing.44': {
    value: '11rem',
    variable: 'var(--cerberus-spacing-44)',
  },
  'spacing.48': {
    value: '12rem',
    variable: 'var(--cerberus-spacing-48)',
  },
  'spacing.52': {
    value: '13rem',
    variable: 'var(--cerberus-spacing-52)',
  },
  'spacing.56': {
    value: '14rem',
    variable: 'var(--cerberus-spacing-56)',
  },
  'spacing.60': {
    value: '15rem',
    variable: 'var(--cerberus-spacing-60)',
  },
  'spacing.64': {
    value: '16rem',
    variable: 'var(--cerberus-spacing-64)',
  },
  'spacing.72': {
    value: '18rem',
    variable: 'var(--cerberus-spacing-72)',
  },
  'spacing.80': {
    value: '20rem',
    variable: 'var(--cerberus-spacing-80)',
  },
  'spacing.96': {
    value: '24rem',
    variable: 'var(--cerberus-spacing-96)',
  },
  'spacing.0.5': {
    value: '0.125rem',
    variable: 'var(--cerberus-spacing-0\\.5)',
  },
  'spacing.1.5': {
    value: '0.375rem',
    variable: 'var(--cerberus-spacing-1\\.5)',
  },
  'spacing.2.5': {
    value: '0.625rem',
    variable: 'var(--cerberus-spacing-2\\.5)',
  },
  'spacing.3.5': {
    value: '0.875rem',
    variable: 'var(--cerberus-spacing-3\\.5)',
  },
  'spacing.none': {
    value: '0rem',
    variable: 'var(--cerberus-spacing-none)',
  },
  'spacing.xs': {
    value: '0.25rem',
    variable: 'var(--cerberus-spacing-xs)',
  },
  'spacing.sm': {
    value: '0.5rem',
    variable: 'var(--cerberus-spacing-sm)',
  },
  'spacing.md': {
    value: '1rem',
    variable: 'var(--cerberus-spacing-md)',
  },
  'spacing.lg': {
    value: '1.5rem',
    variable: 'var(--cerberus-spacing-lg)',
  },
  'spacing.xl': {
    value: '2rem',
    variable: 'var(--cerberus-spacing-xl)',
  },
  'spacing.2xl': {
    value: '2.5rem',
    variable: 'var(--cerberus-spacing-2xl)',
  },
  'spacing.3xl': {
    value: '4rem',
    variable: 'var(--cerberus-spacing-3xl)',
  },
  'spacing.full': {
    value: '31.25rem',
    variable: 'var(--cerberus-spacing-full)',
  },
  'shadows.xs': {
    value: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    variable: 'var(--cerberus-shadows-xs)',
  },
  'shadows.xl': {
    value:
      '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    variable: 'var(--cerberus-shadows-xl)',
  },
  'shadows.2xl': {
    value: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    variable: 'var(--cerberus-shadows-2xl)',
  },
  'shadows.inner': {
    value: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    variable: 'var(--cerberus-shadows-inner)',
  },
  'shadows.sm': {
    value: '0px 2px 16px 0px hsla(274, 95%, 8%, 0.1)',
    variable: 'var(--cerberus-shadows-sm)',
  },
  'shadows.md': {
    value: '0px 0px 20px 4px hsla(274, 95%, 8%, 0.1)',
    variable: 'var(--cerberus-shadows-md)',
  },
  'shadows.lg': {
    value: '0px 0px 20px 8px hsla(274, 95%, 8%, 0.25)',
    variable: 'var(--cerberus-shadows-lg)',
  },
  'zIndex.hide': {
    value: -1,
    variable: 'var(--cerberus-z-index-hide)',
  },
  'zIndex.base': {
    value: 0,
    variable: 'var(--cerberus-z-index-base)',
  },
  'zIndex.decorator': {
    value: 50,
    variable: 'var(--cerberus-z-index-decorator)',
  },
  'zIndex.dropdown': {
    value: 1000,
    variable: 'var(--cerberus-z-index-dropdown)',
  },
  'zIndex.sticky': {
    value: 1200,
    variable: 'var(--cerberus-z-index-sticky)',
  },
  'zIndex.banner': {
    value: 1300,
    variable: 'var(--cerberus-z-index-banner)',
  },
  'zIndex.overlay': {
    value: 1400,
    variable: 'var(--cerberus-z-index-overlay)',
  },
  'zIndex.modal': {
    value: 1500,
    variable: 'var(--cerberus-z-index-modal)',
  },
  'zIndex.popover': {
    value: 1600,
    variable: 'var(--cerberus-z-index-popover)',
  },
  'zIndex.toast': {
    value: 1700,
    variable: 'var(--cerberus-z-index-toast)',
  },
  'zIndex.tooltip': {
    value: 1800,
    variable: 'var(--cerberus-z-index-tooltip)',
  },
  'breakpoints.sm': {
    value: '640px',
    variable: 'var(--cerberus-breakpoints-sm)',
  },
  'breakpoints.md': {
    value: '768px',
    variable: 'var(--cerberus-breakpoints-md)',
  },
  'breakpoints.lg': {
    value: '1024px',
    variable: 'var(--cerberus-breakpoints-lg)',
  },
  'breakpoints.xl': {
    value: '1280px',
    variable: 'var(--cerberus-breakpoints-xl)',
  },
  'breakpoints.2xl': {
    value: '1536px',
    variable: 'var(--cerberus-breakpoints-2xl)',
  },
  'colors.page.backdrop.initial': {
    value: 'var(--cerberus-colors-page-backdrop-initial)',
    variable: 'var(--cerberus-colors-page-backdrop-initial)',
  },
  'colors.page.bg.100': {
    value: 'var(--cerberus-colors-page-bg-100)',
    variable: 'var(--cerberus-colors-page-bg-100)',
  },
  'colors.page.bg.200': {
    value: 'var(--cerberus-colors-page-bg-200)',
    variable: 'var(--cerberus-colors-page-bg-200)',
  },
  'colors.page.bg.initial': {
    value: 'var(--cerberus-colors-page-bg-initial)',
    variable: 'var(--cerberus-colors-page-bg-initial)',
  },
  'colors.page.border.100': {
    value: 'var(--cerberus-colors-page-border-100)',
    variable: 'var(--cerberus-colors-page-border-100)',
  },
  'colors.page.border.200': {
    value: 'var(--cerberus-colors-page-border-200)',
    variable: 'var(--cerberus-colors-page-border-200)',
  },
  'colors.page.border.initial': {
    value: 'var(--cerberus-colors-page-border-initial)',
    variable: 'var(--cerberus-colors-page-border-initial)',
  },
  'colors.page.surface.100': {
    value: 'var(--cerberus-colors-page-surface-100)',
    variable: 'var(--cerberus-colors-page-surface-100)',
  },
  'colors.page.surface.200': {
    value: 'var(--cerberus-colors-page-surface-200)',
    variable: 'var(--cerberus-colors-page-surface-200)',
  },
  'colors.page.surface.300': {
    value: 'var(--cerberus-colors-page-surface-300)',
    variable: 'var(--cerberus-colors-page-surface-300)',
  },
  'colors.page.surface.initial': {
    value: 'var(--cerberus-colors-page-surface-initial)',
    variable: 'var(--cerberus-colors-page-surface-initial)',
  },
  'colors.page.surface.inverse': {
    value: 'var(--cerberus-colors-page-surface-inverse)',
    variable: 'var(--cerberus-colors-page-surface-inverse)',
  },
  'colors.page.text.100': {
    value: 'var(--cerberus-colors-page-text-100)',
    variable: 'var(--cerberus-colors-page-text-100)',
  },
  'colors.page.text.200': {
    value: 'var(--cerberus-colors-page-text-200)',
    variable: 'var(--cerberus-colors-page-text-200)',
  },
  'colors.page.text.300': {
    value: 'var(--cerberus-colors-page-text-300)',
    variable: 'var(--cerberus-colors-page-text-300)',
  },
  'colors.page.text.initial': {
    value: 'var(--cerberus-colors-page-text-initial)',
    variable: 'var(--cerberus-colors-page-text-initial)',
  },
  'colors.page.text.inverse': {
    value: 'var(--cerberus-colors-page-text-inverse)',
    variable: 'var(--cerberus-colors-page-text-inverse)',
  },
  'colors.action.bg.initial': {
    value: 'var(--cerberus-colors-action-bg-initial)',
    variable: 'var(--cerberus-colors-action-bg-initial)',
  },
  'colors.action.bg.hover': {
    value: 'var(--cerberus-colors-action-bg-hover)',
    variable: 'var(--cerberus-colors-action-bg-hover)',
  },
  'colors.action.bg.active': {
    value: 'var(--cerberus-colors-action-bg-active)',
    variable: 'var(--cerberus-colors-action-bg-active)',
  },
  'colors.action.border.100': {
    value: 'var(--cerberus-colors-action-border-100)',
    variable: 'var(--cerberus-colors-action-border-100)',
  },
  'colors.action.border.initial': {
    value: 'var(--cerberus-colors-action-border-initial)',
    variable: 'var(--cerberus-colors-action-border-initial)',
  },
  'colors.action.border.focus': {
    value: 'var(--cerberus-colors-action-border-focus)',
    variable: 'var(--cerberus-colors-action-border-focus)',
  },
  'colors.action.ghost.initial': {
    value: 'var(--cerberus-colors-action-ghost-initial)',
    variable: 'var(--cerberus-colors-action-ghost-initial)',
  },
  'colors.action.ghost.hover': {
    value: 'var(--cerberus-colors-action-ghost-hover)',
    variable: 'var(--cerberus-colors-action-ghost-hover)',
  },
  'colors.action.ghost.active': {
    value: 'var(--cerberus-colors-action-ghost-active)',
    variable: 'var(--cerberus-colors-action-ghost-active)',
  },
  'colors.action.navigation.initial': {
    value: 'var(--cerberus-colors-action-navigation-initial)',
    variable: 'var(--cerberus-colors-action-navigation-initial)',
  },
  'colors.action.navigation.hover': {
    value: 'var(--cerberus-colors-action-navigation-hover)',
    variable: 'var(--cerberus-colors-action-navigation-hover)',
  },
  'colors.action.navigation.visited': {
    value: 'var(--cerberus-colors-action-navigation-visited)',
    variable: 'var(--cerberus-colors-action-navigation-visited)',
  },
  'colors.action.text.100': {
    value: 'var(--cerberus-colors-action-text-100)',
    variable: 'var(--cerberus-colors-action-text-100)',
  },
  'colors.action.text.200': {
    value: 'var(--cerberus-colors-action-text-200)',
    variable: 'var(--cerberus-colors-action-text-200)',
  },
  'colors.action.text.initial': {
    value: 'var(--cerberus-colors-action-text-initial)',
    variable: 'var(--cerberus-colors-action-text-initial)',
  },
  'colors.action.text.inverse': {
    value: 'var(--cerberus-colors-action-text-inverse)',
    variable: 'var(--cerberus-colors-action-text-inverse)',
  },
  'colors.action.text.static': {
    value: 'var(--cerberus-colors-action-text-static)',
    variable: 'var(--cerberus-colors-action-text-static)',
  },
  'colors.secondaryAction.bg.initial': {
    value: 'var(--cerberus-colors-secondary-action-bg-initial)',
    variable: 'var(--cerberus-colors-secondary-action-bg-initial)',
  },
  'colors.secondaryAction.bg.hover': {
    value: 'var(--cerberus-colors-secondary-action-bg-hover)',
    variable: 'var(--cerberus-colors-secondary-action-bg-hover)',
  },
  'colors.secondaryAction.bg.active': {
    value: 'var(--cerberus-colors-secondary-action-bg-active)',
    variable: 'var(--cerberus-colors-secondary-action-bg-active)',
  },
  'colors.secondaryAction.border.100': {
    value: 'var(--cerberus-colors-secondary-action-border-100)',
    variable: 'var(--cerberus-colors-secondary-action-border-100)',
  },
  'colors.secondaryAction.border.initial': {
    value: 'var(--cerberus-colors-secondary-action-border-initial)',
    variable: 'var(--cerberus-colors-secondary-action-border-initial)',
  },
  'colors.secondaryAction.ghost.initial': {
    value: 'var(--cerberus-colors-secondary-action-ghost-initial)',
    variable: 'var(--cerberus-colors-secondary-action-ghost-initial)',
  },
  'colors.secondaryAction.ghost.hover': {
    value: 'var(--cerberus-colors-secondary-action-ghost-hover)',
    variable: 'var(--cerberus-colors-secondary-action-ghost-hover)',
  },
  'colors.secondaryAction.ghost.active': {
    value: 'var(--cerberus-colors-secondary-action-ghost-active)',
    variable: 'var(--cerberus-colors-secondary-action-ghost-active)',
  },
  'colors.secondaryAction.navigation.initial': {
    value: 'var(--cerberus-colors-secondary-action-navigation-initial)',
    variable: 'var(--cerberus-colors-secondary-action-navigation-initial)',
  },
  'colors.secondaryAction.navigation.hover': {
    value: 'var(--cerberus-colors-secondary-action-navigation-hover)',
    variable: 'var(--cerberus-colors-secondary-action-navigation-hover)',
  },
  'colors.secondaryAction.navigation.visited': {
    value: 'var(--cerberus-colors-secondary-action-navigation-visited)',
    variable: 'var(--cerberus-colors-secondary-action-navigation-visited)',
  },
  'colors.secondaryAction.text.100': {
    value: 'var(--cerberus-colors-secondary-action-text-100)',
    variable: 'var(--cerberus-colors-secondary-action-text-100)',
  },
  'colors.secondaryAction.text.200': {
    value: 'var(--cerberus-colors-secondary-action-text-200)',
    variable: 'var(--cerberus-colors-secondary-action-text-200)',
  },
  'colors.secondaryAction.text.initial': {
    value: 'var(--cerberus-colors-secondary-action-text-initial)',
    variable: 'var(--cerberus-colors-secondary-action-text-initial)',
  },
  'colors.secondaryAction.text.static': {
    value: 'var(--cerberus-colors-secondary-action-text-static)',
    variable: 'var(--cerberus-colors-secondary-action-text-static)',
  },
  'colors.info.border.initial': {
    value: 'var(--cerberus-colors-info-border-initial)',
    variable: 'var(--cerberus-colors-info-border-initial)',
  },
  'colors.info.bg.initial': {
    value: 'var(--cerberus-colors-info-bg-initial)',
    variable: 'var(--cerberus-colors-info-bg-initial)',
  },
  'colors.info.bg.hover': {
    value: 'var(--cerberus-colors-info-bg-hover)',
    variable: 'var(--cerberus-colors-info-bg-hover)',
  },
  'colors.info.bg.active': {
    value: 'var(--cerberus-colors-info-bg-active)',
    variable: 'var(--cerberus-colors-info-bg-active)',
  },
  'colors.info.ghost.initial': {
    value: 'var(--cerberus-colors-info-ghost-initial)',
    variable: 'var(--cerberus-colors-info-ghost-initial)',
  },
  'colors.info.ghost.hover': {
    value: 'var(--cerberus-colors-info-ghost-hover)',
    variable: 'var(--cerberus-colors-info-ghost-hover)',
  },
  'colors.info.ghost.active': {
    value: 'var(--cerberus-colors-info-ghost-active)',
    variable: 'var(--cerberus-colors-info-ghost-active)',
  },
  'colors.info.surface.100': {
    value: 'var(--cerberus-colors-info-surface-100)',
    variable: 'var(--cerberus-colors-info-surface-100)',
  },
  'colors.info.surface.200': {
    value: 'var(--cerberus-colors-info-surface-200)',
    variable: 'var(--cerberus-colors-info-surface-200)',
  },
  'colors.info.surface.initial': {
    value: 'var(--cerberus-colors-info-surface-initial)',
    variable: 'var(--cerberus-colors-info-surface-initial)',
  },
  'colors.info.text.100': {
    value: 'var(--cerberus-colors-info-text-100)',
    variable: 'var(--cerberus-colors-info-text-100)',
  },
  'colors.info.text.200': {
    value: 'var(--cerberus-colors-info-text-200)',
    variable: 'var(--cerberus-colors-info-text-200)',
  },
  'colors.info.text.initial': {
    value: 'var(--cerberus-colors-info-text-initial)',
    variable: 'var(--cerberus-colors-info-text-initial)',
  },
  'colors.info.text.static': {
    value: 'var(--cerberus-colors-info-text-static)',
    variable: 'var(--cerberus-colors-info-text-static)',
  },
  'colors.success.border.initial': {
    value: 'var(--cerberus-colors-success-border-initial)',
    variable: 'var(--cerberus-colors-success-border-initial)',
  },
  'colors.success.bg.initial': {
    value: 'var(--cerberus-colors-success-bg-initial)',
    variable: 'var(--cerberus-colors-success-bg-initial)',
  },
  'colors.success.bg.hover': {
    value: 'var(--cerberus-colors-success-bg-hover)',
    variable: 'var(--cerberus-colors-success-bg-hover)',
  },
  'colors.success.bg.active': {
    value: 'var(--cerberus-colors-success-bg-active)',
    variable: 'var(--cerberus-colors-success-bg-active)',
  },
  'colors.success.ghost.initial': {
    value: 'var(--cerberus-colors-success-ghost-initial)',
    variable: 'var(--cerberus-colors-success-ghost-initial)',
  },
  'colors.success.ghost.hover': {
    value: 'var(--cerberus-colors-success-ghost-hover)',
    variable: 'var(--cerberus-colors-success-ghost-hover)',
  },
  'colors.success.ghost.active': {
    value: 'var(--cerberus-colors-success-ghost-active)',
    variable: 'var(--cerberus-colors-success-ghost-active)',
  },
  'colors.success.surface.100': {
    value: 'var(--cerberus-colors-success-surface-100)',
    variable: 'var(--cerberus-colors-success-surface-100)',
  },
  'colors.success.surface.200': {
    value: 'var(--cerberus-colors-success-surface-200)',
    variable: 'var(--cerberus-colors-success-surface-200)',
  },
  'colors.success.surface.initial': {
    value: 'var(--cerberus-colors-success-surface-initial)',
    variable: 'var(--cerberus-colors-success-surface-initial)',
  },
  'colors.success.text.100': {
    value: 'var(--cerberus-colors-success-text-100)',
    variable: 'var(--cerberus-colors-success-text-100)',
  },
  'colors.success.text.200': {
    value: 'var(--cerberus-colors-success-text-200)',
    variable: 'var(--cerberus-colors-success-text-200)',
  },
  'colors.success.text.initial': {
    value: 'var(--cerberus-colors-success-text-initial)',
    variable: 'var(--cerberus-colors-success-text-initial)',
  },
  'colors.success.text.inverse': {
    value: 'var(--cerberus-colors-success-text-inverse)',
    variable: 'var(--cerberus-colors-success-text-inverse)',
  },
  'colors.success.text.static': {
    value: 'var(--cerberus-colors-success-text-static)',
    variable: 'var(--cerberus-colors-success-text-static)',
  },
  'colors.warning.border.initial': {
    value: 'var(--cerberus-colors-warning-border-initial)',
    variable: 'var(--cerberus-colors-warning-border-initial)',
  },
  'colors.warning.bg.initial': {
    value: 'var(--cerberus-colors-warning-bg-initial)',
    variable: 'var(--cerberus-colors-warning-bg-initial)',
  },
  'colors.warning.bg.hover': {
    value: 'var(--cerberus-colors-warning-bg-hover)',
    variable: 'var(--cerberus-colors-warning-bg-hover)',
  },
  'colors.warning.bg.active': {
    value: 'var(--cerberus-colors-warning-bg-active)',
    variable: 'var(--cerberus-colors-warning-bg-active)',
  },
  'colors.warning.ghost.initial': {
    value: 'var(--cerberus-colors-warning-ghost-initial)',
    variable: 'var(--cerberus-colors-warning-ghost-initial)',
  },
  'colors.warning.ghost.hover': {
    value: 'var(--cerberus-colors-warning-ghost-hover)',
    variable: 'var(--cerberus-colors-warning-ghost-hover)',
  },
  'colors.warning.ghost.active': {
    value: 'var(--cerberus-colors-warning-ghost-active)',
    variable: 'var(--cerberus-colors-warning-ghost-active)',
  },
  'colors.warning.surface.100': {
    value: 'var(--cerberus-colors-warning-surface-100)',
    variable: 'var(--cerberus-colors-warning-surface-100)',
  },
  'colors.warning.surface.200': {
    value: 'var(--cerberus-colors-warning-surface-200)',
    variable: 'var(--cerberus-colors-warning-surface-200)',
  },
  'colors.warning.surface.initial': {
    value: 'var(--cerberus-colors-warning-surface-initial)',
    variable: 'var(--cerberus-colors-warning-surface-initial)',
  },
  'colors.warning.text.100': {
    value: 'var(--cerberus-colors-warning-text-100)',
    variable: 'var(--cerberus-colors-warning-text-100)',
  },
  'colors.warning.text.200': {
    value: 'var(--cerberus-colors-warning-text-200)',
    variable: 'var(--cerberus-colors-warning-text-200)',
  },
  'colors.warning.text.initial': {
    value: 'var(--cerberus-colors-warning-text-initial)',
    variable: 'var(--cerberus-colors-warning-text-initial)',
  },
  'colors.warning.text.inverse': {
    value: 'var(--cerberus-colors-warning-text-inverse)',
    variable: 'var(--cerberus-colors-warning-text-inverse)',
  },
  'colors.warning.text.static': {
    value: 'var(--cerberus-colors-warning-text-static)',
    variable: 'var(--cerberus-colors-warning-text-static)',
  },
  'colors.danger.bg.initial': {
    value: 'var(--cerberus-colors-danger-bg-initial)',
    variable: 'var(--cerberus-colors-danger-bg-initial)',
  },
  'colors.danger.bg.hover': {
    value: 'var(--cerberus-colors-danger-bg-hover)',
    variable: 'var(--cerberus-colors-danger-bg-hover)',
  },
  'colors.danger.bg.active': {
    value: 'var(--cerberus-colors-danger-bg-active)',
    variable: 'var(--cerberus-colors-danger-bg-active)',
  },
  'colors.danger.border.initial': {
    value: 'var(--cerberus-colors-danger-border-initial)',
    variable: 'var(--cerberus-colors-danger-border-initial)',
  },
  'colors.danger.ghost.initial': {
    value: 'var(--cerberus-colors-danger-ghost-initial)',
    variable: 'var(--cerberus-colors-danger-ghost-initial)',
  },
  'colors.danger.ghost.hover': {
    value: 'var(--cerberus-colors-danger-ghost-hover)',
    variable: 'var(--cerberus-colors-danger-ghost-hover)',
  },
  'colors.danger.ghost.active': {
    value: 'var(--cerberus-colors-danger-ghost-active)',
    variable: 'var(--cerberus-colors-danger-ghost-active)',
  },
  'colors.danger.surface.100': {
    value: 'var(--cerberus-colors-danger-surface-100)',
    variable: 'var(--cerberus-colors-danger-surface-100)',
  },
  'colors.danger.surface.200': {
    value: 'var(--cerberus-colors-danger-surface-200)',
    variable: 'var(--cerberus-colors-danger-surface-200)',
  },
  'colors.danger.surface.initial': {
    value: 'var(--cerberus-colors-danger-surface-initial)',
    variable: 'var(--cerberus-colors-danger-surface-initial)',
  },
  'colors.danger.text.100': {
    value: 'var(--cerberus-colors-danger-text-100)',
    variable: 'var(--cerberus-colors-danger-text-100)',
  },
  'colors.danger.text.200': {
    value: 'var(--cerberus-colors-danger-text-200)',
    variable: 'var(--cerberus-colors-danger-text-200)',
  },
  'colors.danger.text.initial': {
    value: 'var(--cerberus-colors-danger-text-initial)',
    variable: 'var(--cerberus-colors-danger-text-initial)',
  },
  'colors.danger.text.inverse': {
    value: 'var(--cerberus-colors-danger-text-inverse)',
    variable: 'var(--cerberus-colors-danger-text-inverse)',
  },
  'colors.danger.text.static': {
    value: 'var(--cerberus-colors-danger-text-static)',
    variable: 'var(--cerberus-colors-danger-text-static)',
  },
  'colors.gradient.charon-light.text.initial': {
    value: 'var(--cerberus-colors-gradient-charon-light-text-initial)',
    variable: 'var(--cerberus-colors-gradient-charon-light-text-initial)',
  },
  'colors.gradient.charon-dark.text.initial': {
    value: 'var(--cerberus-colors-gradient-charon-dark-text-initial)',
    variable: 'var(--cerberus-colors-gradient-charon-dark-text-initial)',
  },
  'colors.gradient.nyx-light.text.initial': {
    value: 'var(--cerberus-colors-gradient-nyx-light-text-initial)',
    variable: 'var(--cerberus-colors-gradient-nyx-light-text-initial)',
  },
  'colors.gradient.nyx-dark.text.initial': {
    value: 'var(--cerberus-colors-gradient-nyx-dark-text-initial)',
    variable: 'var(--cerberus-colors-gradient-nyx-dark-text-initial)',
  },
  'colors.gradient.amphiaraus-light.text.initial': {
    value: 'var(--cerberus-colors-gradient-amphiaraus-light-text-initial)',
    variable: 'var(--cerberus-colors-gradient-amphiaraus-light-text-initial)',
  },
  'colors.gradient.amphiaraus-dark.text.initial': {
    value: 'var(--cerberus-colors-gradient-amphiaraus-dark-text-initial)',
    variable: 'var(--cerberus-colors-gradient-amphiaraus-dark-text-initial)',
  },
  'colors.gradient.styx-light.text.initial': {
    value: 'var(--cerberus-colors-gradient-styx-light-text-initial)',
    variable: 'var(--cerberus-colors-gradient-styx-light-text-initial)',
  },
  'colors.gradient.styx-dark.text.initial': {
    value: 'var(--cerberus-colors-gradient-styx-dark-text-initial)',
    variable: 'var(--cerberus-colors-gradient-styx-dark-text-initial)',
  },
  'colors.gradient.thanatos-light.text.initial': {
    value: 'var(--cerberus-colors-gradient-thanatos-light-text-initial)',
    variable: 'var(--cerberus-colors-gradient-thanatos-light-text-initial)',
  },
  'colors.gradient.thanatos-dark.text.initial': {
    value: 'var(--cerberus-colors-gradient-thanatos-dark-text-initial)',
    variable: 'var(--cerberus-colors-gradient-thanatos-dark-text-initial)',
  },
  'colors.gradient.hades-light.text.initial': {
    value: 'var(--cerberus-colors-gradient-hades-light-text-initial)',
    variable: 'var(--cerberus-colors-gradient-hades-light-text-initial)',
  },
  'colors.gradient.hades-dark.text.initial': {
    value: 'var(--cerberus-colors-gradient-hades-dark-text-initial)',
    variable: 'var(--cerberus-colors-gradient-hades-dark-text-initial)',
  },
  'colors.gradient.asphodel-light.text.initial': {
    value: 'var(--cerberus-colors-gradient-asphodel-light-text-initial)',
    variable: 'var(--cerberus-colors-gradient-asphodel-light-text-initial)',
  },
  'colors.gradient.asphodel-dark.text.initial': {
    value: 'var(--cerberus-colors-gradient-asphodel-dark-text-initial)',
    variable: 'var(--cerberus-colors-gradient-asphodel-dark-text-initial)',
  },
  'colors.dataViz.diverging.50': {
    value: 'var(--cerberus-colors-data-viz-diverging-50)',
    variable: 'var(--cerberus-colors-data-viz-diverging-50)',
  },
  'colors.dataViz.diverging.100': {
    value: 'var(--cerberus-colors-data-viz-diverging-100)',
    variable: 'var(--cerberus-colors-data-viz-diverging-100)',
  },
  'colors.dataViz.diverging.200': {
    value: 'var(--cerberus-colors-data-viz-diverging-200)',
    variable: 'var(--cerberus-colors-data-viz-diverging-200)',
  },
  'colors.dataViz.diverging.300': {
    value: 'var(--cerberus-colors-data-viz-diverging-300)',
    variable: 'var(--cerberus-colors-data-viz-diverging-300)',
  },
  'colors.dataViz.diverging.400': {
    value: 'var(--cerberus-colors-data-viz-diverging-400)',
    variable: 'var(--cerberus-colors-data-viz-diverging-400)',
  },
  'colors.dataViz.diverging.500': {
    value: 'var(--cerberus-colors-data-viz-diverging-500)',
    variable: 'var(--cerberus-colors-data-viz-diverging-500)',
  },
  'colors.dataViz.diverging.600': {
    value: 'var(--cerberus-colors-data-viz-diverging-600)',
    variable: 'var(--cerberus-colors-data-viz-diverging-600)',
  },
  'colors.dataViz.diverging.700': {
    value: 'var(--cerberus-colors-data-viz-diverging-700)',
    variable: 'var(--cerberus-colors-data-viz-diverging-700)',
  },
  'colors.dataViz.diverging.800': {
    value: 'var(--cerberus-colors-data-viz-diverging-800)',
    variable: 'var(--cerberus-colors-data-viz-diverging-800)',
  },
  'colors.dataViz.diverging.900': {
    value: 'var(--cerberus-colors-data-viz-diverging-900)',
    variable: 'var(--cerberus-colors-data-viz-diverging-900)',
  },
  'colors.dataViz.sequential.100': {
    value: 'var(--cerberus-colors-data-viz-sequential-100)',
    variable: 'var(--cerberus-colors-data-viz-sequential-100)',
  },
  'colors.dataViz.sequential.200': {
    value: 'var(--cerberus-colors-data-viz-sequential-200)',
    variable: 'var(--cerberus-colors-data-viz-sequential-200)',
  },
  'colors.dataViz.sequential.300': {
    value: 'var(--cerberus-colors-data-viz-sequential-300)',
    variable: 'var(--cerberus-colors-data-viz-sequential-300)',
  },
  'colors.dataViz.sequential.400': {
    value: 'var(--cerberus-colors-data-viz-sequential-400)',
    variable: 'var(--cerberus-colors-data-viz-sequential-400)',
  },
  'colors.dataViz.sequential.500': {
    value: 'var(--cerberus-colors-data-viz-sequential-500)',
    variable: 'var(--cerberus-colors-data-viz-sequential-500)',
  },
  'colors.dataViz.sequential.600': {
    value: 'var(--cerberus-colors-data-viz-sequential-600)',
    variable: 'var(--cerberus-colors-data-viz-sequential-600)',
  },
  'colors.dataViz.qualitative.100': {
    value: 'var(--cerberus-colors-data-viz-qualitative-100)',
    variable: 'var(--cerberus-colors-data-viz-qualitative-100)',
  },
  'colors.dataViz.qualitative.200': {
    value: 'var(--cerberus-colors-data-viz-qualitative-200)',
    variable: 'var(--cerberus-colors-data-viz-qualitative-200)',
  },
  'colors.dataViz.qualitative.300': {
    value: 'var(--cerberus-colors-data-viz-qualitative-300)',
    variable: 'var(--cerberus-colors-data-viz-qualitative-300)',
  },
  'colors.dataViz.qualitative.400': {
    value: 'var(--cerberus-colors-data-viz-qualitative-400)',
    variable: 'var(--cerberus-colors-data-viz-qualitative-400)',
  },
  'colors.dataViz.qualitative.500': {
    value: 'var(--cerberus-colors-data-viz-qualitative-500)',
    variable: 'var(--cerberus-colors-data-viz-qualitative-500)',
  },
  'colors.dataViz.qualitative.600': {
    value: 'var(--cerberus-colors-data-viz-qualitative-600)',
    variable: 'var(--cerberus-colors-data-viz-qualitative-600)',
  },
  'colors.dataViz.qualitative.700': {
    value: 'var(--cerberus-colors-data-viz-qualitative-700)',
    variable: 'var(--cerberus-colors-data-viz-qualitative-700)',
  },
  'colors.dataViz.progress.start': {
    value: 'var(--cerberus-colors-data-viz-progress-start)',
    variable: 'var(--cerberus-colors-data-viz-progress-start)',
  },
  'colors.dataViz.progress.end': {
    value: 'var(--cerberus-colors-data-viz-progress-end)',
    variable: 'var(--cerberus-colors-data-viz-progress-end)',
  },
  'colors.dataViz.progress.complete': {
    value: 'var(--cerberus-colors-data-viz-progress-complete)',
    variable: 'var(--cerberus-colors-data-viz-progress-complete)',
  },
  'spacing.-1': {
    value: 'calc(var(--cerberus-spacing-1) * -1)',
    variable: 'var(--cerberus-spacing-1)',
  },
  'spacing.-2': {
    value: 'calc(var(--cerberus-spacing-2) * -1)',
    variable: 'var(--cerberus-spacing-2)',
  },
  'spacing.-3': {
    value: 'calc(var(--cerberus-spacing-3) * -1)',
    variable: 'var(--cerberus-spacing-3)',
  },
  'spacing.-4': {
    value: 'calc(var(--cerberus-spacing-4) * -1)',
    variable: 'var(--cerberus-spacing-4)',
  },
  'spacing.-5': {
    value: 'calc(var(--cerberus-spacing-5) * -1)',
    variable: 'var(--cerberus-spacing-5)',
  },
  'spacing.-6': {
    value: 'calc(var(--cerberus-spacing-6) * -1)',
    variable: 'var(--cerberus-spacing-6)',
  },
  'spacing.-7': {
    value: 'calc(var(--cerberus-spacing-7) * -1)',
    variable: 'var(--cerberus-spacing-7)',
  },
  'spacing.-8': {
    value: 'calc(var(--cerberus-spacing-8) * -1)',
    variable: 'var(--cerberus-spacing-8)',
  },
  'spacing.-9': {
    value: 'calc(var(--cerberus-spacing-9) * -1)',
    variable: 'var(--cerberus-spacing-9)',
  },
  'spacing.-10': {
    value: 'calc(var(--cerberus-spacing-10) * -1)',
    variable: 'var(--cerberus-spacing-10)',
  },
  'spacing.-11': {
    value: 'calc(var(--cerberus-spacing-11) * -1)',
    variable: 'var(--cerberus-spacing-11)',
  },
  'spacing.-12': {
    value: 'calc(var(--cerberus-spacing-12) * -1)',
    variable: 'var(--cerberus-spacing-12)',
  },
  'spacing.-14': {
    value: 'calc(var(--cerberus-spacing-14) * -1)',
    variable: 'var(--cerberus-spacing-14)',
  },
  'spacing.-16': {
    value: 'calc(var(--cerberus-spacing-16) * -1)',
    variable: 'var(--cerberus-spacing-16)',
  },
  'spacing.-20': {
    value: 'calc(var(--cerberus-spacing-20) * -1)',
    variable: 'var(--cerberus-spacing-20)',
  },
  'spacing.-24': {
    value: 'calc(var(--cerberus-spacing-24) * -1)',
    variable: 'var(--cerberus-spacing-24)',
  },
  'spacing.-28': {
    value: 'calc(var(--cerberus-spacing-28) * -1)',
    variable: 'var(--cerberus-spacing-28)',
  },
  'spacing.-32': {
    value: 'calc(var(--cerberus-spacing-32) * -1)',
    variable: 'var(--cerberus-spacing-32)',
  },
  'spacing.-36': {
    value: 'calc(var(--cerberus-spacing-36) * -1)',
    variable: 'var(--cerberus-spacing-36)',
  },
  'spacing.-40': {
    value: 'calc(var(--cerberus-spacing-40) * -1)',
    variable: 'var(--cerberus-spacing-40)',
  },
  'spacing.-44': {
    value: 'calc(var(--cerberus-spacing-44) * -1)',
    variable: 'var(--cerberus-spacing-44)',
  },
  'spacing.-48': {
    value: 'calc(var(--cerberus-spacing-48) * -1)',
    variable: 'var(--cerberus-spacing-48)',
  },
  'spacing.-52': {
    value: 'calc(var(--cerberus-spacing-52) * -1)',
    variable: 'var(--cerberus-spacing-52)',
  },
  'spacing.-56': {
    value: 'calc(var(--cerberus-spacing-56) * -1)',
    variable: 'var(--cerberus-spacing-56)',
  },
  'spacing.-60': {
    value: 'calc(var(--cerberus-spacing-60) * -1)',
    variable: 'var(--cerberus-spacing-60)',
  },
  'spacing.-64': {
    value: 'calc(var(--cerberus-spacing-64) * -1)',
    variable: 'var(--cerberus-spacing-64)',
  },
  'spacing.-72': {
    value: 'calc(var(--cerberus-spacing-72) * -1)',
    variable: 'var(--cerberus-spacing-72)',
  },
  'spacing.-80': {
    value: 'calc(var(--cerberus-spacing-80) * -1)',
    variable: 'var(--cerberus-spacing-80)',
  },
  'spacing.-96': {
    value: 'calc(var(--cerberus-spacing-96) * -1)',
    variable: 'var(--cerberus-spacing-96)',
  },
  'spacing.-0.5': {
    value: 'calc(var(--cerberus-spacing-0\\.5) * -1)',
    variable: 'var(--cerberus-spacing-0\\.5)',
  },
  'spacing.-1.5': {
    value: 'calc(var(--cerberus-spacing-1\\.5) * -1)',
    variable: 'var(--cerberus-spacing-1\\.5)',
  },
  'spacing.-2.5': {
    value: 'calc(var(--cerberus-spacing-2\\.5) * -1)',
    variable: 'var(--cerberus-spacing-2\\.5)',
  },
  'spacing.-3.5': {
    value: 'calc(var(--cerberus-spacing-3\\.5) * -1)',
    variable: 'var(--cerberus-spacing-3\\.5)',
  },
  'spacing.-xs': {
    value: 'calc(var(--cerberus-spacing-xs) * -1)',
    variable: 'var(--cerberus-spacing-xs)',
  },
  'spacing.-sm': {
    value: 'calc(var(--cerberus-spacing-sm) * -1)',
    variable: 'var(--cerberus-spacing-sm)',
  },
  'spacing.-md': {
    value: 'calc(var(--cerberus-spacing-md) * -1)',
    variable: 'var(--cerberus-spacing-md)',
  },
  'spacing.-lg': {
    value: 'calc(var(--cerberus-spacing-lg) * -1)',
    variable: 'var(--cerberus-spacing-lg)',
  },
  'spacing.-xl': {
    value: 'calc(var(--cerberus-spacing-xl) * -1)',
    variable: 'var(--cerberus-spacing-xl)',
  },
  'spacing.-2xl': {
    value: 'calc(var(--cerberus-spacing-2xl) * -1)',
    variable: 'var(--cerberus-spacing-2xl)',
  },
  'spacing.-3xl': {
    value: 'calc(var(--cerberus-spacing-3xl) * -1)',
    variable: 'var(--cerberus-spacing-3xl)',
  },
  'spacing.-full': {
    value: 'calc(var(--cerberus-spacing-full) * -1)',
    variable: 'var(--cerberus-spacing-full)',
  },
  'colors.colorPalette': {
    value: 'var(--cerberus-colors-color-palette)',
    variable: 'var(--cerberus-colors-color-palette)',
  },
  'colors.colorPalette.50': {
    value: 'var(--cerberus-colors-color-palette-50)',
    variable: 'var(--cerberus-colors-color-palette-50)',
  },
  'colors.colorPalette.100': {
    value: 'var(--cerberus-colors-color-palette-100)',
    variable: 'var(--cerberus-colors-color-palette-100)',
  },
  'colors.colorPalette.200': {
    value: 'var(--cerberus-colors-color-palette-200)',
    variable: 'var(--cerberus-colors-color-palette-200)',
  },
  'colors.colorPalette.300': {
    value: 'var(--cerberus-colors-color-palette-300)',
    variable: 'var(--cerberus-colors-color-palette-300)',
  },
  'colors.colorPalette.400': {
    value: 'var(--cerberus-colors-color-palette-400)',
    variable: 'var(--cerberus-colors-color-palette-400)',
  },
  'colors.colorPalette.500': {
    value: 'var(--cerberus-colors-color-palette-500)',
    variable: 'var(--cerberus-colors-color-palette-500)',
  },
  'colors.colorPalette.600': {
    value: 'var(--cerberus-colors-color-palette-600)',
    variable: 'var(--cerberus-colors-color-palette-600)',
  },
  'colors.colorPalette.700': {
    value: 'var(--cerberus-colors-color-palette-700)',
    variable: 'var(--cerberus-colors-color-palette-700)',
  },
  'colors.colorPalette.800': {
    value: 'var(--cerberus-colors-color-palette-800)',
    variable: 'var(--cerberus-colors-color-palette-800)',
  },
  'colors.colorPalette.900': {
    value: 'var(--cerberus-colors-color-palette-900)',
    variable: 'var(--cerberus-colors-color-palette-900)',
  },
  'colors.colorPalette.950': {
    value: 'var(--cerberus-colors-color-palette-950)',
    variable: 'var(--cerberus-colors-color-palette-950)',
  },
  'colors.colorPalette.neutral.0': {
    value: 'var(--cerberus-colors-color-palette-neutral-0)',
    variable: 'var(--cerberus-colors-color-palette-neutral-0)',
  },
  'colors.colorPalette.0': {
    value: 'var(--cerberus-colors-color-palette-0)',
    variable: 'var(--cerberus-colors-color-palette-0)',
  },
  'colors.colorPalette.neutral.5': {
    value: 'var(--cerberus-colors-color-palette-neutral-5)',
    variable: 'var(--cerberus-colors-color-palette-neutral-5)',
  },
  'colors.colorPalette.5': {
    value: 'var(--cerberus-colors-color-palette-5)',
    variable: 'var(--cerberus-colors-color-palette-5)',
  },
  'colors.colorPalette.neutral.10': {
    value: 'var(--cerberus-colors-color-palette-neutral-10)',
    variable: 'var(--cerberus-colors-color-palette-neutral-10)',
  },
  'colors.colorPalette.10': {
    value: 'var(--cerberus-colors-color-palette-10)',
    variable: 'var(--cerberus-colors-color-palette-10)',
  },
  'colors.colorPalette.neutral.20': {
    value: 'var(--cerberus-colors-color-palette-neutral-20)',
    variable: 'var(--cerberus-colors-color-palette-neutral-20)',
  },
  'colors.colorPalette.20': {
    value: 'var(--cerberus-colors-color-palette-20)',
    variable: 'var(--cerberus-colors-color-palette-20)',
  },
  'colors.colorPalette.neutral.30': {
    value: 'var(--cerberus-colors-color-palette-neutral-30)',
    variable: 'var(--cerberus-colors-color-palette-neutral-30)',
  },
  'colors.colorPalette.30': {
    value: 'var(--cerberus-colors-color-palette-30)',
    variable: 'var(--cerberus-colors-color-palette-30)',
  },
  'colors.colorPalette.neutral.40': {
    value: 'var(--cerberus-colors-color-palette-neutral-40)',
    variable: 'var(--cerberus-colors-color-palette-neutral-40)',
  },
  'colors.colorPalette.40': {
    value: 'var(--cerberus-colors-color-palette-40)',
    variable: 'var(--cerberus-colors-color-palette-40)',
  },
  'colors.colorPalette.neutral.50': {
    value: 'var(--cerberus-colors-color-palette-neutral-50)',
    variable: 'var(--cerberus-colors-color-palette-neutral-50)',
  },
  'colors.colorPalette.neutral.60': {
    value: 'var(--cerberus-colors-color-palette-neutral-60)',
    variable: 'var(--cerberus-colors-color-palette-neutral-60)',
  },
  'colors.colorPalette.60': {
    value: 'var(--cerberus-colors-color-palette-60)',
    variable: 'var(--cerberus-colors-color-palette-60)',
  },
  'colors.colorPalette.neutral.70': {
    value: 'var(--cerberus-colors-color-palette-neutral-70)',
    variable: 'var(--cerberus-colors-color-palette-neutral-70)',
  },
  'colors.colorPalette.70': {
    value: 'var(--cerberus-colors-color-palette-70)',
    variable: 'var(--cerberus-colors-color-palette-70)',
  },
  'colors.colorPalette.neutral.80': {
    value: 'var(--cerberus-colors-color-palette-neutral-80)',
    variable: 'var(--cerberus-colors-color-palette-neutral-80)',
  },
  'colors.colorPalette.80': {
    value: 'var(--cerberus-colors-color-palette-80)',
    variable: 'var(--cerberus-colors-color-palette-80)',
  },
  'colors.colorPalette.neutral.90': {
    value: 'var(--cerberus-colors-color-palette-neutral-90)',
    variable: 'var(--cerberus-colors-color-palette-neutral-90)',
  },
  'colors.colorPalette.90': {
    value: 'var(--cerberus-colors-color-palette-90)',
    variable: 'var(--cerberus-colors-color-palette-90)',
  },
  'colors.colorPalette.neutral.100': {
    value: 'var(--cerberus-colors-color-palette-neutral-100)',
    variable: 'var(--cerberus-colors-color-palette-neutral-100)',
  },
  'colors.colorPalette.neutral.white': {
    value: 'var(--cerberus-colors-color-palette-neutral-white)',
    variable: 'var(--cerberus-colors-color-palette-neutral-white)',
  },
  'colors.colorPalette.white': {
    value: 'var(--cerberus-colors-color-palette-white)',
    variable: 'var(--cerberus-colors-color-palette-white)',
  },
  'colors.colorPalette.brand.5': {
    value: 'var(--cerberus-colors-color-palette-brand-5)',
    variable: 'var(--cerberus-colors-color-palette-brand-5)',
  },
  'colors.colorPalette.brand.10': {
    value: 'var(--cerberus-colors-color-palette-brand-10)',
    variable: 'var(--cerberus-colors-color-palette-brand-10)',
  },
  'colors.colorPalette.brand.20': {
    value: 'var(--cerberus-colors-color-palette-brand-20)',
    variable: 'var(--cerberus-colors-color-palette-brand-20)',
  },
  'colors.colorPalette.brand.30': {
    value: 'var(--cerberus-colors-color-palette-brand-30)',
    variable: 'var(--cerberus-colors-color-palette-brand-30)',
  },
  'colors.colorPalette.brand.40': {
    value: 'var(--cerberus-colors-color-palette-brand-40)',
    variable: 'var(--cerberus-colors-color-palette-brand-40)',
  },
  'colors.colorPalette.brand.50': {
    value: 'var(--cerberus-colors-color-palette-brand-50)',
    variable: 'var(--cerberus-colors-color-palette-brand-50)',
  },
  'colors.colorPalette.brand.60': {
    value: 'var(--cerberus-colors-color-palette-brand-60)',
    variable: 'var(--cerberus-colors-color-palette-brand-60)',
  },
  'colors.colorPalette.brand.70': {
    value: 'var(--cerberus-colors-color-palette-brand-70)',
    variable: 'var(--cerberus-colors-color-palette-brand-70)',
  },
  'colors.colorPalette.brand.80': {
    value: 'var(--cerberus-colors-color-palette-brand-80)',
    variable: 'var(--cerberus-colors-color-palette-brand-80)',
  },
  'colors.colorPalette.brand.90': {
    value: 'var(--cerberus-colors-color-palette-brand-90)',
    variable: 'var(--cerberus-colors-color-palette-brand-90)',
  },
  'colors.colorPalette.brand.100': {
    value: 'var(--cerberus-colors-color-palette-brand-100)',
    variable: 'var(--cerberus-colors-color-palette-brand-100)',
  },
  'colors.colorPalette.accent.10': {
    value: 'var(--cerberus-colors-color-palette-accent-10)',
    variable: 'var(--cerberus-colors-color-palette-accent-10)',
  },
  'colors.colorPalette.accent.20': {
    value: 'var(--cerberus-colors-color-palette-accent-20)',
    variable: 'var(--cerberus-colors-color-palette-accent-20)',
  },
  'colors.colorPalette.accent.30': {
    value: 'var(--cerberus-colors-color-palette-accent-30)',
    variable: 'var(--cerberus-colors-color-palette-accent-30)',
  },
  'colors.colorPalette.accent.40': {
    value: 'var(--cerberus-colors-color-palette-accent-40)',
    variable: 'var(--cerberus-colors-color-palette-accent-40)',
  },
  'colors.colorPalette.accent.50': {
    value: 'var(--cerberus-colors-color-palette-accent-50)',
    variable: 'var(--cerberus-colors-color-palette-accent-50)',
  },
  'colors.colorPalette.accent.60': {
    value: 'var(--cerberus-colors-color-palette-accent-60)',
    variable: 'var(--cerberus-colors-color-palette-accent-60)',
  },
  'colors.colorPalette.accent.70': {
    value: 'var(--cerberus-colors-color-palette-accent-70)',
    variable: 'var(--cerberus-colors-color-palette-accent-70)',
  },
  'colors.colorPalette.accent.80': {
    value: 'var(--cerberus-colors-color-palette-accent-80)',
    variable: 'var(--cerberus-colors-color-palette-accent-80)',
  },
  'colors.colorPalette.accent.90': {
    value: 'var(--cerberus-colors-color-palette-accent-90)',
    variable: 'var(--cerberus-colors-color-palette-accent-90)',
  },
  'colors.colorPalette.accent.100': {
    value: 'var(--cerberus-colors-color-palette-accent-100)',
    variable: 'var(--cerberus-colors-color-palette-accent-100)',
  },
  'colors.colorPalette.success.10': {
    value: 'var(--cerberus-colors-color-palette-success-10)',
    variable: 'var(--cerberus-colors-color-palette-success-10)',
  },
  'colors.colorPalette.success.20': {
    value: 'var(--cerberus-colors-color-palette-success-20)',
    variable: 'var(--cerberus-colors-color-palette-success-20)',
  },
  'colors.colorPalette.success.30': {
    value: 'var(--cerberus-colors-color-palette-success-30)',
    variable: 'var(--cerberus-colors-color-palette-success-30)',
  },
  'colors.colorPalette.success.40': {
    value: 'var(--cerberus-colors-color-palette-success-40)',
    variable: 'var(--cerberus-colors-color-palette-success-40)',
  },
  'colors.colorPalette.success.50': {
    value: 'var(--cerberus-colors-color-palette-success-50)',
    variable: 'var(--cerberus-colors-color-palette-success-50)',
  },
  'colors.colorPalette.success.60': {
    value: 'var(--cerberus-colors-color-palette-success-60)',
    variable: 'var(--cerberus-colors-color-palette-success-60)',
  },
  'colors.colorPalette.success.70': {
    value: 'var(--cerberus-colors-color-palette-success-70)',
    variable: 'var(--cerberus-colors-color-palette-success-70)',
  },
  'colors.colorPalette.success.80': {
    value: 'var(--cerberus-colors-color-palette-success-80)',
    variable: 'var(--cerberus-colors-color-palette-success-80)',
  },
  'colors.colorPalette.success.90': {
    value: 'var(--cerberus-colors-color-palette-success-90)',
    variable: 'var(--cerberus-colors-color-palette-success-90)',
  },
  'colors.colorPalette.success.100': {
    value: 'var(--cerberus-colors-color-palette-success-100)',
    variable: 'var(--cerberus-colors-color-palette-success-100)',
  },
  'colors.colorPalette.danger.10': {
    value: 'var(--cerberus-colors-color-palette-danger-10)',
    variable: 'var(--cerberus-colors-color-palette-danger-10)',
  },
  'colors.colorPalette.danger.20': {
    value: 'var(--cerberus-colors-color-palette-danger-20)',
    variable: 'var(--cerberus-colors-color-palette-danger-20)',
  },
  'colors.colorPalette.danger.30': {
    value: 'var(--cerberus-colors-color-palette-danger-30)',
    variable: 'var(--cerberus-colors-color-palette-danger-30)',
  },
  'colors.colorPalette.danger.40': {
    value: 'var(--cerberus-colors-color-palette-danger-40)',
    variable: 'var(--cerberus-colors-color-palette-danger-40)',
  },
  'colors.colorPalette.danger.50': {
    value: 'var(--cerberus-colors-color-palette-danger-50)',
    variable: 'var(--cerberus-colors-color-palette-danger-50)',
  },
  'colors.colorPalette.danger.60': {
    value: 'var(--cerberus-colors-color-palette-danger-60)',
    variable: 'var(--cerberus-colors-color-palette-danger-60)',
  },
  'colors.colorPalette.danger.70': {
    value: 'var(--cerberus-colors-color-palette-danger-70)',
    variable: 'var(--cerberus-colors-color-palette-danger-70)',
  },
  'colors.colorPalette.danger.80': {
    value: 'var(--cerberus-colors-color-palette-danger-80)',
    variable: 'var(--cerberus-colors-color-palette-danger-80)',
  },
  'colors.colorPalette.danger.90': {
    value: 'var(--cerberus-colors-color-palette-danger-90)',
    variable: 'var(--cerberus-colors-color-palette-danger-90)',
  },
  'colors.colorPalette.danger.100': {
    value: 'var(--cerberus-colors-color-palette-danger-100)',
    variable: 'var(--cerberus-colors-color-palette-danger-100)',
  },
  'colors.colorPalette.warning.10': {
    value: 'var(--cerberus-colors-color-palette-warning-10)',
    variable: 'var(--cerberus-colors-color-palette-warning-10)',
  },
  'colors.colorPalette.warning.20': {
    value: 'var(--cerberus-colors-color-palette-warning-20)',
    variable: 'var(--cerberus-colors-color-palette-warning-20)',
  },
  'colors.colorPalette.warning.30': {
    value: 'var(--cerberus-colors-color-palette-warning-30)',
    variable: 'var(--cerberus-colors-color-palette-warning-30)',
  },
  'colors.colorPalette.warning.40': {
    value: 'var(--cerberus-colors-color-palette-warning-40)',
    variable: 'var(--cerberus-colors-color-palette-warning-40)',
  },
  'colors.colorPalette.warning.50': {
    value: 'var(--cerberus-colors-color-palette-warning-50)',
    variable: 'var(--cerberus-colors-color-palette-warning-50)',
  },
  'colors.colorPalette.warning.60': {
    value: 'var(--cerberus-colors-color-palette-warning-60)',
    variable: 'var(--cerberus-colors-color-palette-warning-60)',
  },
  'colors.colorPalette.warning.70': {
    value: 'var(--cerberus-colors-color-palette-warning-70)',
    variable: 'var(--cerberus-colors-color-palette-warning-70)',
  },
  'colors.colorPalette.warning.80': {
    value: 'var(--cerberus-colors-color-palette-warning-80)',
    variable: 'var(--cerberus-colors-color-palette-warning-80)',
  },
  'colors.colorPalette.warning.90': {
    value: 'var(--cerberus-colors-color-palette-warning-90)',
    variable: 'var(--cerberus-colors-color-palette-warning-90)',
  },
  'colors.colorPalette.warning.100': {
    value: 'var(--cerberus-colors-color-palette-warning-100)',
    variable: 'var(--cerberus-colors-color-palette-warning-100)',
  },
  'colors.colorPalette.drop-shadow.100': {
    value: 'var(--cerberus-colors-color-palette-drop-shadow-100)',
    variable: 'var(--cerberus-colors-color-palette-drop-shadow-100)',
  },
  'colors.colorPalette.drop-shadow.200': {
    value: 'var(--cerberus-colors-color-palette-drop-shadow-200)',
    variable: 'var(--cerberus-colors-color-palette-drop-shadow-200)',
  },
  'colors.colorPalette.drop-shadow.300': {
    value: 'var(--cerberus-colors-color-palette-drop-shadow-300)',
    variable: 'var(--cerberus-colors-color-palette-drop-shadow-300)',
  },
  'colors.colorPalette.drop-shadow.400': {
    value: 'var(--cerberus-colors-color-palette-drop-shadow-400)',
    variable: 'var(--cerberus-colors-color-palette-drop-shadow-400)',
  },
  'colors.colorPalette.drop-shadow.500': {
    value: 'var(--cerberus-colors-color-palette-drop-shadow-500)',
    variable: 'var(--cerberus-colors-color-palette-drop-shadow-500)',
  },
  'colors.colorPalette.drop-shadow.600': {
    value: 'var(--cerberus-colors-color-palette-drop-shadow-600)',
    variable: 'var(--cerberus-colors-color-palette-drop-shadow-600)',
  },
  'colors.colorPalette.drop-shadow.700': {
    value: 'var(--cerberus-colors-color-palette-drop-shadow-700)',
    variable: 'var(--cerberus-colors-color-palette-drop-shadow-700)',
  },
  'colors.colorPalette.drop-shadow.800': {
    value: 'var(--cerberus-colors-color-palette-drop-shadow-800)',
    variable: 'var(--cerberus-colors-color-palette-drop-shadow-800)',
  },
  'colors.colorPalette.drop-shadow.900': {
    value: 'var(--cerberus-colors-color-palette-drop-shadow-900)',
    variable: 'var(--cerberus-colors-color-palette-drop-shadow-900)',
  },
  'colors.colorPalette.drop-shadow.1000': {
    value: 'var(--cerberus-colors-color-palette-drop-shadow-1000)',
    variable: 'var(--cerberus-colors-color-palette-drop-shadow-1000)',
  },
  'colors.colorPalette.1000': {
    value: 'var(--cerberus-colors-color-palette-1000)',
    variable: 'var(--cerberus-colors-color-palette-1000)',
  },
  'colors.colorPalette.info.10': {
    value: 'var(--cerberus-colors-color-palette-info-10)',
    variable: 'var(--cerberus-colors-color-palette-info-10)',
  },
  'colors.colorPalette.info.20': {
    value: 'var(--cerberus-colors-color-palette-info-20)',
    variable: 'var(--cerberus-colors-color-palette-info-20)',
  },
  'colors.colorPalette.info.30': {
    value: 'var(--cerberus-colors-color-palette-info-30)',
    variable: 'var(--cerberus-colors-color-palette-info-30)',
  },
  'colors.colorPalette.info.40': {
    value: 'var(--cerberus-colors-color-palette-info-40)',
    variable: 'var(--cerberus-colors-color-palette-info-40)',
  },
  'colors.colorPalette.info.50': {
    value: 'var(--cerberus-colors-color-palette-info-50)',
    variable: 'var(--cerberus-colors-color-palette-info-50)',
  },
  'colors.colorPalette.info.60': {
    value: 'var(--cerberus-colors-color-palette-info-60)',
    variable: 'var(--cerberus-colors-color-palette-info-60)',
  },
  'colors.colorPalette.info.70': {
    value: 'var(--cerberus-colors-color-palette-info-70)',
    variable: 'var(--cerberus-colors-color-palette-info-70)',
  },
  'colors.colorPalette.info.80': {
    value: 'var(--cerberus-colors-color-palette-info-80)',
    variable: 'var(--cerberus-colors-color-palette-info-80)',
  },
  'colors.colorPalette.info.90': {
    value: 'var(--cerberus-colors-color-palette-info-90)',
    variable: 'var(--cerberus-colors-color-palette-info-90)',
  },
  'colors.colorPalette.info.100': {
    value: 'var(--cerberus-colors-color-palette-info-100)',
    variable: 'var(--cerberus-colors-color-palette-info-100)',
  },
  'colors.colorPalette.neutral.15': {
    value: 'var(--cerberus-colors-color-palette-neutral-15)',
    variable: 'var(--cerberus-colors-color-palette-neutral-15)',
  },
  'colors.colorPalette.15': {
    value: 'var(--cerberus-colors-color-palette-15)',
    variable: 'var(--cerberus-colors-color-palette-15)',
  },
  'colors.colorPalette.teal.10': {
    value: 'var(--cerberus-colors-color-palette-teal-10)',
    variable: 'var(--cerberus-colors-color-palette-teal-10)',
  },
  'colors.colorPalette.teal.20': {
    value: 'var(--cerberus-colors-color-palette-teal-20)',
    variable: 'var(--cerberus-colors-color-palette-teal-20)',
  },
  'colors.colorPalette.teal.30': {
    value: 'var(--cerberus-colors-color-palette-teal-30)',
    variable: 'var(--cerberus-colors-color-palette-teal-30)',
  },
  'colors.colorPalette.teal.40': {
    value: 'var(--cerberus-colors-color-palette-teal-40)',
    variable: 'var(--cerberus-colors-color-palette-teal-40)',
  },
  'colors.colorPalette.teal.50': {
    value: 'var(--cerberus-colors-color-palette-teal-50)',
    variable: 'var(--cerberus-colors-color-palette-teal-50)',
  },
  'colors.colorPalette.teal.60': {
    value: 'var(--cerberus-colors-color-palette-teal-60)',
    variable: 'var(--cerberus-colors-color-palette-teal-60)',
  },
  'colors.colorPalette.teal.70': {
    value: 'var(--cerberus-colors-color-palette-teal-70)',
    variable: 'var(--cerberus-colors-color-palette-teal-70)',
  },
  'colors.colorPalette.teal.80': {
    value: 'var(--cerberus-colors-color-palette-teal-80)',
    variable: 'var(--cerberus-colors-color-palette-teal-80)',
  },
  'colors.colorPalette.teal.90': {
    value: 'var(--cerberus-colors-color-palette-teal-90)',
    variable: 'var(--cerberus-colors-color-palette-teal-90)',
  },
  'colors.colorPalette.teal.100': {
    value: 'var(--cerberus-colors-color-palette-teal-100)',
    variable: 'var(--cerberus-colors-color-palette-teal-100)',
  },
  'colors.colorPalette.backdrop.initial': {
    value: 'var(--cerberus-colors-color-palette-backdrop-initial)',
    variable: 'var(--cerberus-colors-color-palette-backdrop-initial)',
  },
  'colors.colorPalette.initial': {
    value: 'var(--cerberus-colors-color-palette-initial)',
    variable: 'var(--cerberus-colors-color-palette-initial)',
  },
  'colors.colorPalette.bg.100': {
    value: 'var(--cerberus-colors-color-palette-bg-100)',
    variable: 'var(--cerberus-colors-color-palette-bg-100)',
  },
  'colors.colorPalette.bg.200': {
    value: 'var(--cerberus-colors-color-palette-bg-200)',
    variable: 'var(--cerberus-colors-color-palette-bg-200)',
  },
  'colors.colorPalette.bg.initial': {
    value: 'var(--cerberus-colors-color-palette-bg-initial)',
    variable: 'var(--cerberus-colors-color-palette-bg-initial)',
  },
  'colors.colorPalette.border.100': {
    value: 'var(--cerberus-colors-color-palette-border-100)',
    variable: 'var(--cerberus-colors-color-palette-border-100)',
  },
  'colors.colorPalette.border.200': {
    value: 'var(--cerberus-colors-color-palette-border-200)',
    variable: 'var(--cerberus-colors-color-palette-border-200)',
  },
  'colors.colorPalette.border.initial': {
    value: 'var(--cerberus-colors-color-palette-border-initial)',
    variable: 'var(--cerberus-colors-color-palette-border-initial)',
  },
  'colors.colorPalette.surface.100': {
    value: 'var(--cerberus-colors-color-palette-surface-100)',
    variable: 'var(--cerberus-colors-color-palette-surface-100)',
  },
  'colors.colorPalette.surface.200': {
    value: 'var(--cerberus-colors-color-palette-surface-200)',
    variable: 'var(--cerberus-colors-color-palette-surface-200)',
  },
  'colors.colorPalette.surface.300': {
    value: 'var(--cerberus-colors-color-palette-surface-300)',
    variable: 'var(--cerberus-colors-color-palette-surface-300)',
  },
  'colors.colorPalette.surface.initial': {
    value: 'var(--cerberus-colors-color-palette-surface-initial)',
    variable: 'var(--cerberus-colors-color-palette-surface-initial)',
  },
  'colors.colorPalette.surface.inverse': {
    value: 'var(--cerberus-colors-color-palette-surface-inverse)',
    variable: 'var(--cerberus-colors-color-palette-surface-inverse)',
  },
  'colors.colorPalette.inverse': {
    value: 'var(--cerberus-colors-color-palette-inverse)',
    variable: 'var(--cerberus-colors-color-palette-inverse)',
  },
  'colors.colorPalette.text.100': {
    value: 'var(--cerberus-colors-color-palette-text-100)',
    variable: 'var(--cerberus-colors-color-palette-text-100)',
  },
  'colors.colorPalette.text.200': {
    value: 'var(--cerberus-colors-color-palette-text-200)',
    variable: 'var(--cerberus-colors-color-palette-text-200)',
  },
  'colors.colorPalette.text.300': {
    value: 'var(--cerberus-colors-color-palette-text-300)',
    variable: 'var(--cerberus-colors-color-palette-text-300)',
  },
  'colors.colorPalette.text.initial': {
    value: 'var(--cerberus-colors-color-palette-text-initial)',
    variable: 'var(--cerberus-colors-color-palette-text-initial)',
  },
  'colors.colorPalette.text.inverse': {
    value: 'var(--cerberus-colors-color-palette-text-inverse)',
    variable: 'var(--cerberus-colors-color-palette-text-inverse)',
  },
  'colors.colorPalette.bg.hover': {
    value: 'var(--cerberus-colors-color-palette-bg-hover)',
    variable: 'var(--cerberus-colors-color-palette-bg-hover)',
  },
  'colors.colorPalette.hover': {
    value: 'var(--cerberus-colors-color-palette-hover)',
    variable: 'var(--cerberus-colors-color-palette-hover)',
  },
  'colors.colorPalette.bg.active': {
    value: 'var(--cerberus-colors-color-palette-bg-active)',
    variable: 'var(--cerberus-colors-color-palette-bg-active)',
  },
  'colors.colorPalette.active': {
    value: 'var(--cerberus-colors-color-palette-active)',
    variable: 'var(--cerberus-colors-color-palette-active)',
  },
  'colors.colorPalette.border.focus': {
    value: 'var(--cerberus-colors-color-palette-border-focus)',
    variable: 'var(--cerberus-colors-color-palette-border-focus)',
  },
  'colors.colorPalette.focus': {
    value: 'var(--cerberus-colors-color-palette-focus)',
    variable: 'var(--cerberus-colors-color-palette-focus)',
  },
  'colors.colorPalette.ghost.initial': {
    value: 'var(--cerberus-colors-color-palette-ghost-initial)',
    variable: 'var(--cerberus-colors-color-palette-ghost-initial)',
  },
  'colors.colorPalette.ghost.hover': {
    value: 'var(--cerberus-colors-color-palette-ghost-hover)',
    variable: 'var(--cerberus-colors-color-palette-ghost-hover)',
  },
  'colors.colorPalette.ghost.active': {
    value: 'var(--cerberus-colors-color-palette-ghost-active)',
    variable: 'var(--cerberus-colors-color-palette-ghost-active)',
  },
  'colors.colorPalette.navigation.initial': {
    value: 'var(--cerberus-colors-color-palette-navigation-initial)',
    variable: 'var(--cerberus-colors-color-palette-navigation-initial)',
  },
  'colors.colorPalette.navigation.hover': {
    value: 'var(--cerberus-colors-color-palette-navigation-hover)',
    variable: 'var(--cerberus-colors-color-palette-navigation-hover)',
  },
  'colors.colorPalette.navigation.visited': {
    value: 'var(--cerberus-colors-color-palette-navigation-visited)',
    variable: 'var(--cerberus-colors-color-palette-navigation-visited)',
  },
  'colors.colorPalette.visited': {
    value: 'var(--cerberus-colors-color-palette-visited)',
    variable: 'var(--cerberus-colors-color-palette-visited)',
  },
  'colors.colorPalette.text.static': {
    value: 'var(--cerberus-colors-color-palette-text-static)',
    variable: 'var(--cerberus-colors-color-palette-text-static)',
  },
  'colors.colorPalette.static': {
    value: 'var(--cerberus-colors-color-palette-static)',
    variable: 'var(--cerberus-colors-color-palette-static)',
  },
  'colors.colorPalette.charon-light.text.initial': {
    value: 'var(--cerberus-colors-color-palette-charon-light-text-initial)',
    variable: 'var(--cerberus-colors-color-palette-charon-light-text-initial)',
  },
  'colors.colorPalette.charon-dark.text.initial': {
    value: 'var(--cerberus-colors-color-palette-charon-dark-text-initial)',
    variable: 'var(--cerberus-colors-color-palette-charon-dark-text-initial)',
  },
  'colors.colorPalette.nyx-light.text.initial': {
    value: 'var(--cerberus-colors-color-palette-nyx-light-text-initial)',
    variable: 'var(--cerberus-colors-color-palette-nyx-light-text-initial)',
  },
  'colors.colorPalette.nyx-dark.text.initial': {
    value: 'var(--cerberus-colors-color-palette-nyx-dark-text-initial)',
    variable: 'var(--cerberus-colors-color-palette-nyx-dark-text-initial)',
  },
  'colors.colorPalette.amphiaraus-light.text.initial': {
    value: 'var(--cerberus-colors-color-palette-amphiaraus-light-text-initial)',
    variable:
      'var(--cerberus-colors-color-palette-amphiaraus-light-text-initial)',
  },
  'colors.colorPalette.amphiaraus-dark.text.initial': {
    value: 'var(--cerberus-colors-color-palette-amphiaraus-dark-text-initial)',
    variable:
      'var(--cerberus-colors-color-palette-amphiaraus-dark-text-initial)',
  },
  'colors.colorPalette.styx-light.text.initial': {
    value: 'var(--cerberus-colors-color-palette-styx-light-text-initial)',
    variable: 'var(--cerberus-colors-color-palette-styx-light-text-initial)',
  },
  'colors.colorPalette.styx-dark.text.initial': {
    value: 'var(--cerberus-colors-color-palette-styx-dark-text-initial)',
    variable: 'var(--cerberus-colors-color-palette-styx-dark-text-initial)',
  },
  'colors.colorPalette.thanatos-light.text.initial': {
    value: 'var(--cerberus-colors-color-palette-thanatos-light-text-initial)',
    variable:
      'var(--cerberus-colors-color-palette-thanatos-light-text-initial)',
  },
  'colors.colorPalette.thanatos-dark.text.initial': {
    value: 'var(--cerberus-colors-color-palette-thanatos-dark-text-initial)',
    variable: 'var(--cerberus-colors-color-palette-thanatos-dark-text-initial)',
  },
  'colors.colorPalette.hades-light.text.initial': {
    value: 'var(--cerberus-colors-color-palette-hades-light-text-initial)',
    variable: 'var(--cerberus-colors-color-palette-hades-light-text-initial)',
  },
  'colors.colorPalette.hades-dark.text.initial': {
    value: 'var(--cerberus-colors-color-palette-hades-dark-text-initial)',
    variable: 'var(--cerberus-colors-color-palette-hades-dark-text-initial)',
  },
  'colors.colorPalette.asphodel-light.text.initial': {
    value: 'var(--cerberus-colors-color-palette-asphodel-light-text-initial)',
    variable:
      'var(--cerberus-colors-color-palette-asphodel-light-text-initial)',
  },
  'colors.colorPalette.asphodel-dark.text.initial': {
    value: 'var(--cerberus-colors-color-palette-asphodel-dark-text-initial)',
    variable: 'var(--cerberus-colors-color-palette-asphodel-dark-text-initial)',
  },
  'colors.colorPalette.diverging.50': {
    value: 'var(--cerberus-colors-color-palette-diverging-50)',
    variable: 'var(--cerberus-colors-color-palette-diverging-50)',
  },
  'colors.colorPalette.diverging.100': {
    value: 'var(--cerberus-colors-color-palette-diverging-100)',
    variable: 'var(--cerberus-colors-color-palette-diverging-100)',
  },
  'colors.colorPalette.diverging.200': {
    value: 'var(--cerberus-colors-color-palette-diverging-200)',
    variable: 'var(--cerberus-colors-color-palette-diverging-200)',
  },
  'colors.colorPalette.diverging.300': {
    value: 'var(--cerberus-colors-color-palette-diverging-300)',
    variable: 'var(--cerberus-colors-color-palette-diverging-300)',
  },
  'colors.colorPalette.diverging.400': {
    value: 'var(--cerberus-colors-color-palette-diverging-400)',
    variable: 'var(--cerberus-colors-color-palette-diverging-400)',
  },
  'colors.colorPalette.diverging.500': {
    value: 'var(--cerberus-colors-color-palette-diverging-500)',
    variable: 'var(--cerberus-colors-color-palette-diverging-500)',
  },
  'colors.colorPalette.diverging.600': {
    value: 'var(--cerberus-colors-color-palette-diverging-600)',
    variable: 'var(--cerberus-colors-color-palette-diverging-600)',
  },
  'colors.colorPalette.diverging.700': {
    value: 'var(--cerberus-colors-color-palette-diverging-700)',
    variable: 'var(--cerberus-colors-color-palette-diverging-700)',
  },
  'colors.colorPalette.diverging.800': {
    value: 'var(--cerberus-colors-color-palette-diverging-800)',
    variable: 'var(--cerberus-colors-color-palette-diverging-800)',
  },
  'colors.colorPalette.diverging.900': {
    value: 'var(--cerberus-colors-color-palette-diverging-900)',
    variable: 'var(--cerberus-colors-color-palette-diverging-900)',
  },
  'colors.colorPalette.sequential.100': {
    value: 'var(--cerberus-colors-color-palette-sequential-100)',
    variable: 'var(--cerberus-colors-color-palette-sequential-100)',
  },
  'colors.colorPalette.sequential.200': {
    value: 'var(--cerberus-colors-color-palette-sequential-200)',
    variable: 'var(--cerberus-colors-color-palette-sequential-200)',
  },
  'colors.colorPalette.sequential.300': {
    value: 'var(--cerberus-colors-color-palette-sequential-300)',
    variable: 'var(--cerberus-colors-color-palette-sequential-300)',
  },
  'colors.colorPalette.sequential.400': {
    value: 'var(--cerberus-colors-color-palette-sequential-400)',
    variable: 'var(--cerberus-colors-color-palette-sequential-400)',
  },
  'colors.colorPalette.sequential.500': {
    value: 'var(--cerberus-colors-color-palette-sequential-500)',
    variable: 'var(--cerberus-colors-color-palette-sequential-500)',
  },
  'colors.colorPalette.sequential.600': {
    value: 'var(--cerberus-colors-color-palette-sequential-600)',
    variable: 'var(--cerberus-colors-color-palette-sequential-600)',
  },
  'colors.colorPalette.qualitative.100': {
    value: 'var(--cerberus-colors-color-palette-qualitative-100)',
    variable: 'var(--cerberus-colors-color-palette-qualitative-100)',
  },
  'colors.colorPalette.qualitative.200': {
    value: 'var(--cerberus-colors-color-palette-qualitative-200)',
    variable: 'var(--cerberus-colors-color-palette-qualitative-200)',
  },
  'colors.colorPalette.qualitative.300': {
    value: 'var(--cerberus-colors-color-palette-qualitative-300)',
    variable: 'var(--cerberus-colors-color-palette-qualitative-300)',
  },
  'colors.colorPalette.qualitative.400': {
    value: 'var(--cerberus-colors-color-palette-qualitative-400)',
    variable: 'var(--cerberus-colors-color-palette-qualitative-400)',
  },
  'colors.colorPalette.qualitative.500': {
    value: 'var(--cerberus-colors-color-palette-qualitative-500)',
    variable: 'var(--cerberus-colors-color-palette-qualitative-500)',
  },
  'colors.colorPalette.qualitative.600': {
    value: 'var(--cerberus-colors-color-palette-qualitative-600)',
    variable: 'var(--cerberus-colors-color-palette-qualitative-600)',
  },
  'colors.colorPalette.qualitative.700': {
    value: 'var(--cerberus-colors-color-palette-qualitative-700)',
    variable: 'var(--cerberus-colors-color-palette-qualitative-700)',
  },
  'colors.colorPalette.progress.start': {
    value: 'var(--cerberus-colors-color-palette-progress-start)',
    variable: 'var(--cerberus-colors-color-palette-progress-start)',
  },
  'colors.colorPalette.start': {
    value: 'var(--cerberus-colors-color-palette-start)',
    variable: 'var(--cerberus-colors-color-palette-start)',
  },
  'colors.colorPalette.progress.end': {
    value: 'var(--cerberus-colors-color-palette-progress-end)',
    variable: 'var(--cerberus-colors-color-palette-progress-end)',
  },
  'colors.colorPalette.end': {
    value: 'var(--cerberus-colors-color-palette-end)',
    variable: 'var(--cerberus-colors-color-palette-end)',
  },
  'colors.colorPalette.progress.complete': {
    value: 'var(--cerberus-colors-color-palette-progress-complete)',
    variable: 'var(--cerberus-colors-color-palette-progress-complete)',
  },
  'colors.colorPalette.complete': {
    value: 'var(--cerberus-colors-color-palette-complete)',
    variable: 'var(--cerberus-colors-color-palette-complete)',
  },
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar
