import React from 'react';
import styled from 'styled-components/native';
import {PressButton} from './PressButton';
import {Formik, useFormik} from 'formik';
import {Container, Panel, TextInput} from './Components';
import * as Yup from 'yup';

const Text = styled.Text`
  font-size: 18px;
`;

export default () => {
  const TInput = props => <TextInput {...props} bcolor={'#999'} />;

  const validate = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .max(6, 'Must be 15 characters or less')
      .required('Required'),
  });

  return (
    <Container centered>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validate}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 500);
        }}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
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
        )}
      </Formik>
    </Container>
  );
};
