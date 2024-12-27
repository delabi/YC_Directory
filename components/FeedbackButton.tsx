"use client";

// Create a React component to render the feedback button
import React from 'react';
import * as Sentry from '@sentry/nextjs';

const FeedbackButton = () => {
  const handleClick = () => {
    Sentry.showReportDialog({
        title: "Feedback",
        subtitle: "Please provide your feedback",
        subtitle2: "",
        labelName: "Name",
        labelEmail: "Email",
        labelComments: "Comments",
        labelClose: "Close",
        labelSubmit: "Submit",
        errorGeneric: "An error occurred while submitting your feedback.",
        successMessage: "Thank you for your feedback!",
      });
  };

  return (
    <button onClick={handleClick} style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
      Send Feedback
    </button>
  );
};

export default FeedbackButton;