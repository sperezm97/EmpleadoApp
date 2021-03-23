import { useTheme } from 'hooks/useTheme';
import React from 'react';
import { Pressable } from 'react-native';

import { faHeart as OutlineHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

interface LikeButtonProps {
  value: boolean;
  toggleValue: () => void;
}

export const LikeButton: React.FC<LikeButtonProps> = (props) => {
  const { value, toggleValue } = props;
  const { colors } = useTheme();

  const icon = value ? SolidHeart : OutlineHeart;
  const color = value ? colors.primaryColor : colors.secondaryColor;

  return (
    <Pressable onPress={toggleValue}>
      <FontAwesomeIcon icon={icon} color={color} size={35} />
    </Pressable>
  );
};
