import React from 'react';

const StaticPage = ({ title, content }) => {
    return (
        <div className="p-4 sm:p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{title}</h1>
            <div className="prose prose-sm sm:prose-base text-gray-700 space-y-4">
                {content ? (
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                ) : (
                    <p>Content for {title} will be loaded here.</p>
                )}
            </div>
        </div>
    );
};

export default StaticPage;
