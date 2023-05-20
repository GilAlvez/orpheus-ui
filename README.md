# Orpheus UI

## Overview

Orpheus UI is a comprehensive and easy-to-use UI component library built with modern technologies such as React, TypeScript, Radix and Tailwind CSS. 

A component library for React aiming to provide variety, polymorphism, and easy customization for developers needing to create modern interfaces.

Explore the live component previews: [Storybook](https://gilalvez.github.io/orpheus-ui/)

## Installation

At present, the package is **not** available for installation via npm packages as I am validating several use cases and conducting tests across different browsers and frameworks. After thorough feasibility testing, version **0.1.0** will be made available for installation.

## Technologies

- **React**: The foundational UI library for the project.
- **TypeScript**: Ensures static typing, increasing maintainability and developer efficiency.
- **Tailwind CSS**: Facilitates component styling, enabling customization and consistent design throughout the library.
- **Storybook**: Provides a live preview environment for the library's components, also serving as the main component documentation platform.
- **Radix-UI**: Assists in creating accessible design system components.
- **Vitest**: Handles testing to ensure high-quality components.
- **Parcel**: Helps in easy and efficient application bundling.

## Features

- Highly polymorphic, i.e., the rendered tag can be easily changed.
- Full TypeScript support for efficient development and maintainability.
- Customizable styles with Tailwind CSS, allowing for design consistency and flexibility.
- Allow to easily override styles by passing className.
- Most components are client components, but they offer many features uncommon in UI libraries, such as masking for text fields, multiple select with search, compound components, among others.
- Accessibility-focused components with the help of Radix-UI.
- Includes some logic utilities, such as hooks for implementing pagination and tables, augmenting functionality and facilitating development. 

## Peer Dependency

- TailwindCSS: Orpheus UI **dont** build any necessary CSS in bundle, its necessary Tailwind in project to use the components properly.

## Theming

Its possible extends/override Orpheus theme using the `withOrpheus` function in your `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */

const withOrpheus = require("orpheus-ui/dist/withOrpheus.js");

module.exports = withOrpheus({
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: { // Easy color extends will reflect in all components
          50: "#fef2f3",
          100: "#fde6e7",
          200: "#fbd0d5",
          300: "#f7aab2",
          400: "#f27a8a",
          500: "#ea546c",
          600: "#d5294d",
          700: "#b31d3f",
          800: "#961b3c",
          900: "#811a39",
          950: "#48091a",
        },
        // secondary and tailwind color remains
        // its possible to override or add any color based in existing key
      },
    },
  },
  plugins: [],
});
```

The actual Orpheus preset is this:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./node_modules/orpheus-ui/dist/index.js', './node_modules/orpheus-ui/dist/index.cjs'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			'3xl': '1920px',
		},
		colors: ({ colors }) => ({
			primary: {  
				50: '#eff8ff',
				100: '#dbeefe',
				200: '#c0e3fd',
				300: '#94d2fc',
				400: '#62b8f8',
				500: '#3d9af4',
				600: '#277de9',
				700: '#1f67d6',
				800: '#2053ad',
				900: '#1f4989',
				950: '#182d53',
			},
			secondary: {
				50: '#fef8ee',
				100: '#feefd6',
				200: '#fbdbad',
				300: '#f8c079',
				400: '#f49c43',
				500: '#f17f1e',
				600: '#e26414',
				700: '#bc4d12',
				800: '#953c17',
				900: '#783416',
				950: '#411809',
			},
			inherit: colors.inherit,
			current: colors.current,
			transparent: colors.transparent,
			black: colors.black,
			white: colors.white,
            // ... all others tailwind colors
		}),
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			body: ['Roboto', 'sans-serif'],
			serif: ['Roboto Slab', 'Roboto Serif', 'Roboto', 'serif'],
			condensed: ['Roboto Condensed', 'Roboto', 'sans-serif'],
			mono: ['Roboto Mono', 'Roboto', 'monospace'],
		},
	},
	plugins: [],
};

```

## Components

Currently, the Storybook doesn't provide specific information about each component, but merely their variations and appearances. For now, I'll use this section to describe some possibilities of the existing components. Later, this information will be exclusively available in the Storybook.

#### Button

- Has  all tailwind color variations compound with design variations (filled, outlined and ghost) plus primary and secondary colors.
- asSlot prop: better informations here https://www.radix-ui.com/docs/primitives/utilities/slot

#### Text

- Text is a container component with 5 Types: Display(h1), Heading(h2), Title(h2), Label(label) and Body(p). Each type has 3 sizes: sm, md(default) and lg. Based in Material Text Theme of Flutter framework: [Flutter TextTheme](https://api.flutter.dev/flutter/material/TextTheme-class.html)
- Any text style is easily override by passing className. Including size.
- as prop: override base element tag
- Default usage:
```javascript
import { Text } from "orpheus-ui";

export default function MyComponent() {
  return (
    <>
      <Text.Display as='h2'>Hello</Text.Display>
      <Text.Heading size'lg'>Hello</Text.Heading>
      <Text.Title weight={700}>Hello</Text.Title>
    </>
  );
}
```

#### TextField

- For now TextField has many responsabilities: the container, label, input and error message.
- To override input styles use prop `classNames` that is a object with above elements. i.e. `classNames={{container: 'w-1/2', error: 'text-pink-500'}}`
- togglePasswordVisibility prop: Shows up a "show/hide password" icon
- Only has primary color usage, its possible to override but its many classes, you can change primary color in tailwind.config with `withOrpheus` feature.
- mask prop: built-in mask feature using `useMaskedInput` hook, highly based in [react-input-mask](https://github.com/sanniassin/react-input-mask), works with controlled and uncontrolled input


## Authors

- [@GilAlves](https://www.github.com/GilAlvez)

