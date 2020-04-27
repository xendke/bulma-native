import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { withKnobs, select, number } from '@storybook/addon-knobs';

import { COLORS, SIZES } from '../../constants';
import Progress from './Progress';

storiesOf('Progress', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <Progress value={10} />)
  .add('Animated', () => <Progress />)
  .add('Interactive', () => (
    <Progress
      color={select('color', COLORS, undefined)}
      max={number('max', 100)}
      size={select('size', SIZES, 'normal')}
      value={number('value', 10)}
    />
  ));