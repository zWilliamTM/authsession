import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native'

const StyledView = styled.View`
  display: flex;
  flex: 1;
  background-color: papayawhip;
  align-items: center;
  justify-content: center;
`

export default () => {
  return (
    <StyledView>
      <Text>HelloWorld</Text>
    </StyledView>
  );
};
