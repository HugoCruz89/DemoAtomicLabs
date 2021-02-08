import React, {useRef, useState} from 'react';
import {View, StyleSheet, Button, Text, Image} from 'react-native';
import Background from './Background';
import Wizard from 'react-native-wizard';
import {StepLine} from 'components';
import {Form1, Form2} from 'screens';
const FormData = (props) => {
  const wizard = useRef({next: () => null});
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [isLastStep, setIsLastStep] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const stepList = [
    {
      content: <Form1 />,
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
                source={require('./../assets/Images/Group4015.png')}
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

        <Text style={{color:'white'}}>{currentStep }. Step</Text>
        <Button
          disabled={isLastStep}
          title="Next"
          onPress={() => wizard.current.next()}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  Numbers: {
    width: 30,
    height: 30,
  },
});

export default FormData;
