import React from 'react';
import UrlsTable from '../components/UrlsTable';

function AdminPage() {
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <header className="mb-10 text-center">
                <h1 className="text-5xl font-bold text-gray-800">Admin Panel</h1>
                <p className="text-gray-600">All Shortened URLs</p>
            </header>
            <main className="w-full max-w-4xl mx-auto px-4">
                <UrlsTable />
            </main>
        </div>
    );
}

export default AdminPage;
