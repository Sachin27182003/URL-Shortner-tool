import React from 'react';
import UrlForm from '../components/UrlForm';

function HomePage() {
    return (
        <div className="min-h-screen bg-emerald-50 flex flex-col items-center justify-center">
            <header className="mb-10">
                <h1 className="text-5xl font-bold text-gray-800">URL Shortener</h1>
            </header>
            <main className="w-full max-w-lg px-4 border rounded-lg bg-white shadow-2xl p-8 border-green-500 border-solid border-2">
                <UrlForm />
            </main>
            <footer className="mt-10">
                <p className="text-gray-600">Built with ❤️</p>
            </footer>
        </div>
    );
}

export default HomePage;
