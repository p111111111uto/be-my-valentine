import React, { useState } from "react";
import Confetti from "react-confetti";

const App = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showFinalSection, setShowFinalSection] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);

  const questions = [
    {
      question: "How did we first meet?",
      options: ["At a coffee shop", "At school", "At a party", "Luis"],
      answer: "Luis",
    },
    {
      question: "What is my favorite color?",
      options: ["Blue", "Red", "Green", "Black"],
      answer: "Red",
    },
    {
      question: "What is our anniversary date?",
      options: ["February 14th", "June 5th", "January 11th", "March 8th"],
      answer: "January 11th",
    },
    {
      question: "What’s my favorite meal?",
      options: ["Pizza", "Pasta", "Sushi", "Burgers"],
      answer: "Sushi",
    },
    {
      question: "What is my dream vacation destination?",
      options: ["Paris", "Hawaii", "Japan", "Greece"],
      answer: "Japan",
    },
    {
      question: "What’s the first movie we watched together?",
      options: ["Revenge of the Sith", "Sonic", "Bound", "Interstellar"],
      answer: "Sonic",
    },
    {
      question: "Where was our first date?",
      options: ["The movies", "The Falls", "Arcade", "Santas"],
      answer: "The Falls",
    },
    {
      question: "Who confessed their feelings first?",
      options: ["Me", "You"],
      answer: "You",
    },
    {
      question: "Who asked the other out first",
      options: ["Me", "You"],
      answer: "Me",
    },
  ];

  const handleAnswer = (selected) => {
    if (questions[step].answer === selected) {
      setScore(score + 1);
      setWrongAnswer(false);
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        setStep(step + 1);
      }
    } else {
      setWrongAnswer(true);
    }
  };

  const handleFinalSection = () => {
    setShowFinalSection(true);
  };

  const handleValentineResponse = (response) => {
    if (response === "yes") {
      setShowConfetti(true);
    } else {
      alert("Oh no! Maybe next time 💔");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffe6f0",
        padding: "16px",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      {showConfetti && <Confetti />}
      <h1 style={{ fontSize: "2rem", color: "#ff4d88", marginBottom: "16px", textAlign: "center" }}>
        Valentine's Day Quiz
      </h1>
      {step < questions.length ? (
        <Card>
          <CardContent>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              {questions[step].question}
            </p>
            {questions[step].options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(option)}
                style={{ marginBottom: "8px", width: "100%" }}
              >
                {option}
              </Button>
            ))}
            {wrongAnswer && (
              <p style={{ color: "red", marginTop: "8px", textAlign: "center" }}>
                Wow, you really don't know the answer? Try again
              </p>
            )}
          </CardContent>
        </Card>
      ) : showFinalSection ? (
        <Card>
          <CardContent>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              Will you be my Valentine? ❤️
            </h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
              <Button onClick={() => handleValentineResponse("yes")}>Yes</Button>
              <Button
                onClick={() => handleValentineResponse("no")}
                style={{ backgroundColor: "#ccc", color: "#333" }}
              >
                No
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              {score === questions.length
                ? "You know our relationship so well!"
                : "That was fun, wasn’t it?"}
            </h2>
            <p style={{ marginBottom: "16px", textAlign: "center" }}>
              You scored {score}/{questions.length}.
            </p>
            <Button onClick={handleFinalSection}>And one more thing...</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

const Card = ({ children }) => (
  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      margin: "8px",
      backgroundColor: "#fff",
      width: "90%",
      maxWidth: "600px",
      boxSizing: "border-box",
    }}
  >
    {children}
  </div>
);

const CardContent = ({ children }) => <div>{children}</div>;

const Button = ({ children, onClick, style }) => (
  <button
    onClick={onClick}
    style={{
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#ff4d88",
      color: "#fff",
      cursor: "pointer",
      width: "100%",
      ...style,
    }}
  >
    {children}
  </button>
);

export default App;