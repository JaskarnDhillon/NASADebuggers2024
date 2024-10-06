'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

interface Quiz {
  _id: string;
  name: string;
  description: string;
  questions: {
    question: string;
    options: {
      option: string;
      correct: boolean;
    }[];
  }[];
}

const QuizPage = () => {
  const { id } = useParams(); // Extract the id from the dynamic route params
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/v1/quizzes/${id}`);
        const quizData = await response.json();
        if (quizData && quizData.questions) {
          setQuiz(quizData);
        } else {
          console.error("Invalid quiz data:", quizData);
        }
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };

    if (id) {
      fetchQuiz();
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:4000/api/v1/quizzes/${id}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answers }),
    });

    const data = await response.json();
    setResult(data.message);
  };

  const handleAnswerChange = (questionIndex: number, option: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: option,
    }));
  };

  if (!quiz) {
    return <p className="text-white text-center">Loading...</p>;
  }

  if (!quiz.questions || quiz.questions.length === 0) {
    return <p className="text-white text-center">No questions available for this quiz.</p>;
  }

  return (
    <div className="quiz-container">
      <h1 className="text-5xl font-extrabold mb-4 text-white">{quiz.name}</h1>
      <p className="text-lg mb-6 text-white-200">{quiz.description}</p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl p-6 space-y-6"
      >
        {quiz.questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question">
            <h3 className="text-2xl font-semibold mb-4 text-white">{question.question}</h3>
            <div className="space-y-2">
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id={`q${questionIndex}_o${optionIndex}`}
                    name={`question-${questionIndex}`}
                    value={option.option}
                    onChange={() => handleAnswerChange(questionIndex, option.option)}
                    className="h-4 w-4 text-blue-600 bg-gray-800 border-gray-600 focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor={`q${questionIndex}_o${optionIndex}`}
                    className="text-white hover:text-blue-200 transition"
                  >
                    {option.option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="w-full py-3 px-6 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition transform duration-200"
        >
          Submit Quiz
        </button>
      </form>

      {result && (
        <p
          className={`result-message mt-6 p-4 rounded-lg ${
            result.includes("Success")
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {result}
        </p>
      )}
      
      <div className="wave"></div>

      <style jsx>{`
        .quiz-container {
          background: url('/wave-image.jpg') no-repeat center center fixed; /* Replace with your wave image */
          background-size: cover;
          min-height: 100vh;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: url('/path/to/wave.svg') no-repeat center bottom; /* Add your wave SVG */
          background-size: cover;
          animation: wave 10s infinite linear;
        }

        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        h1, h3 {
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
        }

        .question {
          background: linear-gradient(to bottom right, rgba(173, 216, 230, 0.6), rgba(135, 206, 250, 0.6));
          border-radius: 10px;
          padding: 20px;
          backdrop-filter: blur(5px);
        }

        input[type="radio"] {
          accent-color: #0099cc; /* Modern browsers */
        }

        button {
          background: linear-gradient(to right, #4db8ff, #0066cc);
          box-shadow: 0 4px 15px rgba(0, 100, 200, 0.5);
        }

        .result-message {
          animation: fadeIn 1s;
        }
      `}</style>
    </div>
  );
};

export default QuizPage;
