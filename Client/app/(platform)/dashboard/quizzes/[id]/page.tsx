'use client';

import { useParams } from 'next/navigation'; // Import useParams to extract params from URL
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
    <div className="quiz-container bg-gray-900 min-h-screen text-white p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-400 animate-bounce">{quiz.name}</h1>
      <p className="text-lg mb-6 text-gray-400">{quiz.description}</p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-lg p-6 space-y-6"
      >
        {quiz.questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question bg-gray-700 p-4 rounded-md">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
              {question.question}
            </h3>
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
                    className="text-gray-300 hover:text-white transition"
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
          className="w-full py-3 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition transform duration-200 hover:bg-gradient-to-l"
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
    </div>
  );
};

export default QuizPage;
