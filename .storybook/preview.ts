import { ThemeDecorator } from './../src/shared/config/storybook/decorators/ThemeDecorator';
import type { Preview } from '@storybook/react-vite'
import '../src/app/styles/index.scss'

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "theme",
      description: "App theme",
      toolbar: {
        icon: 'circlehollow',
        items: [
          {value: "blue-theme", title: "Blue"},
          {value: "pink-theme", title: "Pink"}
        ],
        dynamicTitle: true
      }
    }
  },
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      test: "todo"
    }
  },

  decorators: [ThemeDecorator]
};

export default preview;