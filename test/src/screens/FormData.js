import React, {useRef, useState} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import Background from './Background';
import Wizard from 'react-native-wizard';
import {StepLine, Button} from 'components';
import {Form1, Form2} from 'screens';

var {width, height} = Dimensions.get('window');
const FormData = (props) => {
  const wizard = useRef({next: () => null});
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [isLastStep, setIsLastStep] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, onChangeEmail] = useState('');

  const handleName = (value) => {
    setName(value);
  };
  const handleSecondName = (value) => {
    setSecondName(value);
  };

  const stepList = [
    {
      content: (
        <Form1
          onChangeName={handleName}
          onChangeSecondName={handleSecondName}
          name={name}
          secondName={secondName}
        />
      ),
    },
    {
      content: <Form2 />,
    },
  ];
  return (
    <Background>
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
          <Button
            theme="primary"
            title="¡Enviar!"
            onPress={() => {
              wizard.current.next();
            }}
          />
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
