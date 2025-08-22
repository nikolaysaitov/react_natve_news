import React from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';
import {theme} from '../../theme';

const Container = styled.View`
  padding: ${theme.spacing.xl}px;
  align-items: center;
  justify-content: center;
`;

interface LoaderProps {
  size?: 'small' | 'large';
  color?: string;
}

export const Loader = ({size = 'large', color = theme.colors.primary}: LoaderProps) => {
  return (
    <Container>
      <ActivityIndicator size={size} color={color} />
    </Container>
  );
};
