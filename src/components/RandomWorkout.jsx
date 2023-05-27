import React, { useState } from 'react';
import styled from 'styled-components';

// Import the exercise images
import backImage from '../assets/images/back.jpg';
import legsImage from '../assets/images/legs.jpg';
import armImage from '../assets/images/arm.jpg';
import chestImage from '../assets/images/chest.jpg';
import shoulderImage from '../assets/images/shoulder.jpg';

const RandomWorkoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  color: rgb(96, 172, 96);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const WorkoutText = styled.p`
  font-size: 1.2rem;
  color:  rgb(96, 172, 96);
`;

const ExerciseContainer = styled.div`
  overflow: hidden;
  margin-bottom: 1rem;
  border-radius: 50%;
  box-shadow: 0 0 30px  rgb(96, 172, 96);
  width: 300px; /* Adjust the width as needed */
  height: 300px; /* Set a fixed height for the container */
`;

const ExerciseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const GenerateButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #2ecc71;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #27ae60;
  }
`;

const RandomWorkout = () => {
  const exercises = [
    { name: 'Back', image: backImage },
    { name: 'Legs', image: legsImage },
    { name: 'Arm', image: armImage },
    { name: 'Chest', image: chestImage },
    { name: 'Shoulder', image: shoulderImage },
  ];

  const [workout, setWorkout] = useState(generateRandomWorkout());

  function generateRandomWorkout() {
    const randomIndex = Math.floor(Math.random() * exercises.length);
    return exercises[randomIndex];
  }

  function handleButtonClick() {
    setWorkout(generateRandomWorkout());
  }

  return (
    <RandomWorkoutWrapper>
      <Title>Random Workout</Title>
      <ExerciseContainer>
        <ExerciseImage src={workout.image} alt={workout.name} />
      </ExerciseContainer>
      <WorkoutText>Today's suggested exercise: {workout.name}</WorkoutText>
      <GenerateButton onClick={handleButtonClick}>
        Generate Workout
      </GenerateButton>
    </RandomWorkoutWrapper>
  );
};

export default RandomWorkout;
