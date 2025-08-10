import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

function UrlsTable() {
    const [urls, setUrls] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUrls = async () => {
            try {
                const response = await axios.get(`${API_URL}/admin/urls`);
                setUrls(response.data);
            } catch (err) {
                setError(err.response?.data?.error || 'An error occurred');
            }
        };

        fetchUrls();
    }, [<a></a>]);

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-md overflow-x-auto">
            <table className="w-full table-auto">
                <thead>
                    <tr className="bg-green-200 text-green-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Original URL</th>
                        <th className="py-3 px-6 text-left">Short URL</th>
                        <th className="py-3 px-6 text-center">Visits</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {urls.map((url) => (
                        <tr key={url._id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <a href={url.original_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate max-w-xs block">
                                    {url.original_url}
                                </a>
                            </td>
                            <td className="py-3 px-6 text-left">
                                <a href={`${'http://localhost:5000'}/${url.short_code}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    {`${'http://localhost:5000'}/${url.short_code}`}
                                </a>
                            </td>
                            <td className="py-3 px-6 text-center">{url.visit_count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UrlsTable;
