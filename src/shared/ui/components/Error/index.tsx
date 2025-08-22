import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../theme';

const Container = styled.View`
  padding: ${theme.spacing.xl}px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: ${theme.colors.error};
  text-align: center;
  margin-bottom: ${theme.spacing.m}px;
`;

const Button = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  padding: ${theme.spacing.s}px ${theme.spacing.m}px;
  border-radius: ${theme.borderRadius.m}px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
`;

interface ErrorProps {
  message: string;
  onRetry?: () => void;
}

export const Error: React.FC<ErrorProps> = ({message, onRetry}) => (
  <Container>
    <Text>{message}</Text>
    {onRetry && (
      <Button onPress={onRetry}>
        <ButtonText>Попробовать снова</ButtonText>
      </Button>
    )}
  </Container>
);
