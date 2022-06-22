// AppHeader.stories.ts|tsx

import { ComponentStory, ComponentMeta } from '@storybook/react';

import AppHeader  from './AppHeader';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Tittle',
  component: AppHeader,
} as ComponentMeta<typeof AppHeader>;

export const Primary: ComponentStory<typeof AppHeader> = () => <AppHeader title="Tittle" message="Hello, I am AppHeader!" />