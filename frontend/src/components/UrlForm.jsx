import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

function UrlForm() {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setShortUrl('');

        if (!originalUrl) {
            setError('Please enter a URL');
            return;
        }

        try {
            const response = await axios.post(`${API_URL}/shorten`, { original_url: originalUrl });
            setShortUrl(response.data.short_url);
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred');
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="url"
                        value={originalUrl}
                        onChange={(e) => setOriginalUrl(e.target.value)}
                        placeholder="Enter your URL"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
                >
                    Shorten URL
                </button>
            </form>
            {shortUrl && (
                <div className="mt-6 p-4 bg-green-100 rounded-lg text-center">
                    <p className="text-green-800">Short URL:</p>
                    <a
                        href={shortUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        {shortUrl}
                    </a>
                </div>
            )}
            {error && (
                <div className="mt-6 p-4 bg-red-100 rounded-lg text-center">
                    <p className="text-red-800">{error}</p>
                </div>
            )}
        </div>
    );
}

export default UrlForm;
