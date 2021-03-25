import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({bg}) => bg || 'white'};
  justify-content: ${({centered}) => (!centered ? 'flex-start' : 'center')};
  align-items: ${({centered}) => (!centered ? 'flex-start' : 'center')};
`;

export const Panel = styled.View`
  background-color: ${({bg}) => bg || 'white'};
  width: 80%;
  padding: 10%;
  border-radius: 10px;
  elevation: 10;
`;

const InputContainer = styled.View`
  width: 100%;
  border: 2px solid ${({bcolor}) => bcolor || 'black'};
  border-radius: 4px;
  margin-vertical: 10px;
`;

const Input = styled.TextInput``;

export const TextInput = props => (
  <InputContainer bcolor={props.bcolor}>
    <Input {...props} />
  </InputContainer>
);
