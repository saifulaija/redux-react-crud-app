
import { FaExclamationCircle } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <div className="text-red-500 text-6xl mb-4">
          <FaExclamationCircle />
        </div>
        <h1 className="text-3xl font-semibold mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg text-gray-600">We apologize for the inconvenience. Please try again later.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
