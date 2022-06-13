import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, Button, } from 'react-native';
import { Image } from 'react-native';
import { updateService } from '../../api/services';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';
import StepFour from './stepFour';
import StepFive from './stepFive';
import styles from './styles';

const Stepper = ({
  step,
  nextStep,
  prevStep,
  question,
  stepsData,
  questionnaireLength,
  terminateService
}) => {
  return (
    <>
      <Text style={styles.question_title}>{question}</Text>
      <ChooseStep index={step} stepsData={stepsData} />
      <View style={styles.question_buttons}>
        {step !== 0 && <Button title="Atras" onPress={prevStep} />}
        {step !== questionnaireLength
          ? <Button title="Siguiente" onPress={nextStep} />
          : <Button title="Finalizar servicio" onPress={terminateService} />
        }
      </View>
    </>
  );
}

const ChooseStep = ({ index, stepsData }) => {
  const {
    stepOneData,
    stepTwoData,
    stepThreeData,
    stepFourData,
    stepFiveData,
  } = stepsData;

  if (index === 0) {
    return (<StepOne data={stepOneData} />);
  } else if (index === 1) {
    return (<StepTwo data={stepTwoData} />);
  } else if (index === 2) {
    return (<StepThree data={stepThreeData} />);
  } else if (index === 3) {
    return (<StepFour data={stepFourData} />);
  } else if (index === 4) {
    return (<StepFive data={stepFiveData} />);
  }

  return null;
}

export default function CarDetailScreen({ route, navigation}) {

  const [step, setStep] = useState(0);
  const [damage, setDamage] = useState(false);
  const [damageDescription, setDamageDescription] = useState('');
  const [tires, setTires] = useState(false);
  const [securityKit, setSecurityKit] = useState(false);
  const [documents, setDocuments] = useState(false);
  const [cleanliness, setCleanliness] = useState(1);
  const [fuelLoad, setFuelLoad] = useState(false);
  const [fuelLoadPrice, setFuelLoadPrice] = useState(0);
  const [cleanTask, setCleanTask] = useState(false);
  const [inflateTireTask, setInflateTask] = useState(false);
  const [lampFixTask, setLampFixTask] = useState(false);

  const { serviceId } = route.params;

  const stepOneData = {
    setters: {
      setDamage,
      setDamageDescription
    },
    values: {
      damage,
      damageDescription
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
      setFuelLoadPrice
    },
    values: {
      fuelLoad,
      fuelLoadPrice
    }
  }

  const stepFiveData = {
    setters: {
      setCleanTask,
      setInflateTask,
      setLampFixTask,
    },
    values: {
      cleanTask,
      inflateTireTask,
      lampFixTask,
    }
  }

  const stepsData = {
    stepOneData,
    stepTwoData,
    stepThreeData,
    stepFourData,
    stepFiveData,
  }

  const questionnaire = [
    "¿Hay algún daño exterior?",
    "¿Se encuentran los siguientes elementos?",
    "¿Cómo calificarías la limpieza del vehículo?",
    "¿Se le cargó combustible?",
    "¿Cúales fueron los servicios realizados?",
  ]

  const handleStepNext = () => {
    if (step != questionnaire.length - 1) setStep(prev => prev + 1)
  }

  const handleStepPrev = () => {
    if (step > 0) setStep(prev => prev - 1)
  }

  const body = {
    damage: {
      isDamaged: damage,
      damageDescription
    },
    fuel: {
      fuelLoad,
      fuelPrice: parseInt(fuelLoadPrice)
    },
    tires,
    securityKit,
    documents,
    cleanliness: parseInt(cleanliness),
    tasks: [{
      cleanTask,
      inflateTireTask,
      lampFixTask,
    }],
  }

  const handleTerminateService = async () => {
    try{
      await updateService({ id: serviceId, body });
    } catch (e) { 
      console.log('error');
    } 
    finally {
      navigation.navigate("Reservas")
    }
  }

  const question = questionnaire[step];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Stepper
          step={step}
          nextStep={handleStepNext}
          prevStep={handleStepPrev}
          question={question}
          stepsData={stepsData}
          questionnaireLength={questionnaire.length - 1}
          terminateService={handleTerminateService}
        />
      </View>
    </SafeAreaView>
  )
}








