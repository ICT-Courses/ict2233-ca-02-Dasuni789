
export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-ceter min-h-screen bg-gray-100text-gray-800">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl  mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-6">
            </p>
            <a href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Go Home </a>
        </div>
    );
}