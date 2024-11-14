"use client";

function Error() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-red-500 mb-2">BOOM!</h1>
          <div className="text-9xl mb-4">💥</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Holy Error, Batman!
          </h2>
          <p className="text-gray-600 mb-8">
            Looks like we&apos;ve encountered a villainous bug in the system.
          </p>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transform hover:scale-105 transition-transform duration-200"
        >
          Save the Day (Retry)
        </button>
      </div>
    </div>
  );
}

export default Error;
