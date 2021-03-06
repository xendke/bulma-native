import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { select, boolean, text } from '@storybook/addon-knobs';

import { BUTTON_VARIANTS, SIZES, COLORS } from '../../constants';
import Button from './Button';

storiesOf('Elements/Button', module)
  .addParameters({ component: Button })
  .add('Basic Text Button', () => <Button>Basic Button</Button>)
  .add('Interactive Text Button', () => (
    <Button
      color={select('color', COLORS, undefined)}
      disabled={boolean('disabled', false)}
      loading={boolean('loading', false)}
      onPress={action('clicked-text')}
      rounded={boolean('rounded', false)}
      size={select('size', SIZES, 'normal')}
      static={boolean('static', false)}
      variant={select('variant', BUTTON_VARIANTS, 'solid')}
    >
      <Text>Default Button</Text>
    </Button>
  ))
  .add('Basic with Icon', () => <Button iconLeft="beer">Basic Button</Button>)
  .add('Interactive Text & Icon Button', () => (
    <Button
      color={select('color', COLORS, undefined)}
      disabled={boolean('disabled', false)}
      iconLeft={text('iconLeft', 'beer')}
      iconRight={text('iconRight', 'check')}
      loading={boolean('loading', false)}
      onPress={action('clicked-text')}
      rounded={boolean('rounded', false)}
      size={select('size', SIZES, 'normal')}
      variant={select('variant', BUTTON_VARIANTS, 'solid')}
    >
      <Text>Default Button</Text>
    </Button>
  ))
  .add('Basic Icon Button', () => <Button iconLeft="beer" />)
  .add('Interactive Icon Button', () => (
    <Button
      color={select('color', COLORS, undefined)}
      disabled={boolean('disabled', false)}
      iconLeft={text('iconName', 'beer')}
      loading={boolean('loading', false)}
      onPress={action('clicked-text')}
      rounded={boolean('rounded', false)}
      size={select('size', SIZES, 'normal')}
      variant={select('variant', BUTTON_VARIANTS, 'solid')}
    />
  ));
