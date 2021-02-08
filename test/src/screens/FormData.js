/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {View, StyleSheet, Dimensions, Image, Alert} from 'react-native';
import Background from './Background';
import Wizard from 'react-native-wizard';
import {StepLine, Button} from 'components';
import {Form1, Form2, ScreenAllOk} from 'screens';
import PathServer from './../constants/PathServer';
var {width} = Dimensions.get('window');
const FormData = (props) => {
  const wizard = useRef({next: () => null});

  const [currentStep, setCurrentStep] = useState(0);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [cellphone, setCellphone] = useState('');

  const handleFirstname = (value) => {
    setFirstname(value);
  };
  const handleLastname = (value) => {
    setLastname(value);
  };
  const handleCellphone = (value) => {
    setCellphone(value);
  };
  const SendData = () => {
    return fetch(PathServer.url + 'form/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        cellphone: cellphone,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        const {success, message} = response;
        if (success) {
          wizard.current.next();
        } else {
          Alert.alert('Ocurrio un problema', 'Error: ' + message);
        }
      })
      .catch((error) => {});
  };
  const stepList = [
    {
      content: (
        <Form1
          onChangeFirstName={handleFirstname}
          onChangeLastName={handleLastname}
          firstname={firstname}
          lastname={lastname}
        />
      ),
    },
    {
      content: <Form2 onChangeCellphone={handleCellphone} email={cellphone} />,
    },
    {
      content: <ScreenAllOk />,
    },
  ];
  return (
    <Background>
      {currentStep !== 2 ? (
        <View style={{marginTop: 40}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
              marginHorizontal: 60,
            }}>
            <View style={{justifyContent: 'center'}}>
              {currentStep === 0 ? (
                <Image
                  style={styles.Numbers}
                  source={require('./../assets/Images/Group4015.png')}
                />
              ) : (
                <Image
                  style={styles.Numbers}
                  source={require('./../assets/Images/Group4016.png')}
                />
              )}
            </View>
            <View>
              {currentStep === 1 ? (
                <Image
                  style={styles.Numbers}
                  source={require('./../assets/Images/Group4023.png')}
                />
              ) : (
                <Image
                  style={styles.Numbers}
                  source={require('./../assets/Images/Group4019.png')}
                />
              )}
            </View>
          </View>
          <StepLine step={String(currentStep + 1)} />
        </View>
      ) : null}

      <View style={styles.ContainerStep}>
        <Wizard
          ref={wizard}
          steps={stepList}
          onNext={() => {}}
          onPrev={() => {}}
          currentStep={({currentStep: cs}) => {
            setCurrentStep(cs);
          }}
        />
        <View
          style={{
            marginHorizontal: width * 0.25,
            borderRadius: 30,
          }}>
          {currentStep !== 2 ? (
            currentStep === 0 ? (
              <Button
                theme="primary"
                title="¡Enviar!"
                onPress={() => {
                  wizard.current.next();
                }}
              />
            ) : (
              <Button theme="primary" title="Continuar" onPress={SendData} />
            )
          ) : null}
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  Numbers: {
    width: 30,
    height: 30,
  },
  NextButton: (color) => ({
    backgroundColor: color,
    width: 30,
  }),
});

export default FormData;
