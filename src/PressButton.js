import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  background-color: ${props => props.bgColor || 'blue'};
  justify-content: center;
  margin-vertical: 10px;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  text-align: center;
`;

export const PressButton = props => (
  <ButtonContainer {...props}>
    <ButtonText>{props.title}</ButtonText>
  </ButtonContainer>
);
