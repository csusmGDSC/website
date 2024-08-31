"use client";

import { useState } from "react";

/**
 * A custom React hook for managing a multi-step form.
 *
 * @param {number} steps - The total number of steps in the form.
 * @param {number} lastStepIndex - The index of the last step in the form.
 * @return {object} An object containing the current step index, total steps, and functions to navigate between steps.
 */
export function useMultipleStepForm(steps: number) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const nextStep = () => {
    if (currentStepIndex < steps - 1) {
      setCurrentStepIndex((i) => i + 1);
    }
    if (currentStepIndex === steps - 1) {
      setShowSuccessMsg(true);
    }
  };

  const previousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((i) => i - 1);
    }
  };

  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };

  return {
    currentStepIndex,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps - 1,
    showSuccessMsg,
    goTo,
    nextStep,
    previousStep,
  };
}
