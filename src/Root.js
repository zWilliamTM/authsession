import React from 'react';
import {Alert, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {PressButton} from './PressButton';
import {Formik} from 'formik';
import {Panel, TextInput} from './Components';
import * as Yup from 'yup';

const Text = styled.Text`
  font-size: 80px;
`;

export default () => {
  const form = {
    email: '',
    password: '',
  };
  const validate = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .max(6, 'Must be 6 characters or less')
      .required('Required'),
  });

  const onSubmit = (value, {setSubmitting}) => {
    setTimeout(() => {
      Alert.alert('Session', JSON.stringify(value));
      setSubmitting(false);
    }, 500);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <Formik
        initialValues={form}
        validationSchema={validate}
        onSubmit={onSubmit}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'center',
              backgroundColor: 'pink',
            }}>
            <Panel bg="#eee">
              <TextInput
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange('email')}
              />
              <TextInput
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
              />
              <PressButton
                title="Send Info"
                onPress={handleSubmit}
                bgColor="pink"
              />
              {Object.keys(errors).map((k, i) => (
                <Text key={i}>{errors[k]}</Text>
              ))}
            </Panel>
          </ScrollView>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};
