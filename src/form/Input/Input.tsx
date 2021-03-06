import React, { FC, useContext } from 'react';
import {
  TextInput,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ActivityIndicator,
  View,
  ViewStyle,
  StyleProp,
} from 'react-native';

import { ThemeContext } from '../../theme';
import createStyles from './Input.styles';
import { Icon } from '../../elements';

interface OwnProps {
  /** Bulma Color variable */
  color?: Color;

  /** Styles to pass to the `View` wrapping the `TextInput` */
  containerStyle?: StyleProp<ViewStyle>;

  /** Name of Icon to display on the left side of the Input */
  iconLeft?: string;

  /** Name of Icon to display on the right side of the Input */
  iconRight?: string;

  /** Styles to apply to the icon(s) */
  iconStyle?: StyleProp<ViewStyle>;

  /** @default false */
  loading?: boolean;

  /** @default false */
  rounded?: boolean;

  /** Bulma Size variable
   * @default normal
   */
  size?: Size;
}

export type InputProps = OwnProps & TextInputProps;

/** Stand-in for the [Bulma Form Input](https://bulma.io/documentation/form/input/)  */
const Input: FC<InputProps> = (props: InputProps) => {
  const {
    color,
    containerStyle,
    iconLeft,
    iconRight,
    iconStyle = {},
    loading,
    rounded = false,
    size = 'normal',
    style = {},
    ...rest
  } = props;
  const [focused, setFocus] = React.useState(false);
  const theme = useContext(ThemeContext);
  const styles = createStyles({ color, size }, theme);

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(false);
    props.onBlur?.(e);
  };

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(true);
    props.onFocus?.(e);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        {...rest}
        onBlur={handleBlur}
        onFocus={handleFocus}
        style={[
          styles.input,
          focused && styles.inputFocused,
          rounded && styles.inputRounded,
          !!iconLeft && styles.inputIconLeft,
          !!iconRight && styles.inputIconRight,
          props.editable === false && styles.inputDisabled,
          style,
        ]}
      />
      {iconLeft && (
        <View style={[styles.iconContainer, styles.iconLeft, iconStyle]}>
          <Icon
            name={iconLeft}
            style={[styles.icon, focused && styles.iconFocused]}
          />
        </View>
      )}
      {iconRight && (
        <View style={[styles.iconContainer, styles.iconRight, iconStyle]}>
          <Icon
            name={iconRight}
            style={[styles.icon, focused && styles.iconFocused]}
          />
        </View>
      )}
      {loading && (
        <ActivityIndicator
          color={theme.colors.greyLighter}
          size={size === 'large' ? 'large' : 'small'}
          style={[styles.iconContainer, styles.iconRight]}
        />
      )}
    </View>
  );
};

export default Input;
