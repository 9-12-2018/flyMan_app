import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, Button,  } from 'react-native';
import { Image } from 'react-native';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';
import StepFour from './stepFour';
import styles from './styles';

const Stepper = ({
    step,
    nextStep,
    prevStep,
    question,
    stepsData
  }) => {
    return (
      <>
        <Text style={styles.question_title}>{question}</Text>
        <ChooseStep index={step} stepsData={stepsData} />
        <View style={styles.question_buttons}>
          <Button title="Atras" onPress={prevStep} />
          <Button title="Siguiente" onPress={nextStep} />
        </View>
      </>
    );
}

const ChooseStep = ({ index, stepsData }) => {
  const {
    stepOneData,
    stepTwoData,
    stepThreeData,
    stepFourData
  } = stepsData; 

  if (index === 0) {
    return (<StepOne data={stepOneData} />);
  } else if (index === 1) {
    return (<StepTwo data={stepTwoData} />);
  } else if (index === 2) {
    return (<StepThree data={stepThreeData} />);
  } else if (index === 3) {
    return (<StepFour data={stepFourData} />);
  }

  return null;
}

export default function CarDetailScreen() {

  const [step, setStep] = useState(0);
  const [damage, setDamage] = useState(false);
  const [tires, setTires] = useState(false);
  const [securityKit, setSecurityKit] = useState(false);
  const [documents, setDocuments] = useState(false);
  const [cleanliness , setCleanliness ] = useState(false);
  const [fuelLoad, setFuelLoad ] = useState(false);

  const stepOneData = {
    setters: {
      setDamage,
    },
    values: {
     damage,
    }
  }

  const stepTwoData = {
    setters: {
      setTires,
      setSecurityKit,
      setDocuments,
    },
    values: {
      tires,
      securityKit,
      documents
    }
  }

  const stepThreeData = {
    setters: {
      setCleanliness,
    },
    values: {
     cleanliness,
    }
  }

  const stepFourData = {
    setters: {
      setFuelLoad,
    },
    values: {
      fuelLoad,
    }
  }

  const stepsData = {
    stepOneData,
    stepTwoData,
    stepThreeData,
    stepFourData,
  }

  const body = {
    damage,
    tires,
    securityKit,
    documents,
    cleanliness,
    fuelLoad,
  }

  const questionnaire = [
    "¿Hay algún daño exterior?",
    "¿Se encuentran los siguientes elementos?",
    "¿Cómo calificarías la limpieza del vehículo?",
    "¿Se le cargó combustible?",
  ]

  const handleStepNext = () => {
    if (step != questionnaire.length - 1) setStep(prev => prev + 1)
  }
  
  const handleStepPrev = () => {
    if (step > 0) setStep(prev => prev - 1)
  }

  const question = questionnaire[step];

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.screen_title}>Reporte de Usuarios</Text>
          <Stepper 
            step={step}
            nextStep={handleStepNext}
            prevStep={handleStepPrev}
            question={question}
            stepsData={stepsData}
          />
        </View>
    </SafeAreaView>
    )
}








