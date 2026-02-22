import React from 'react';
import mytodooLogo from '../assets/mytodoo-adaptive-icon.png';

/**
 * Shared header for all legal/static pages.
 * Props:
 *  - title      : string  – page heading
 *  - subtitle   : string  – smaller line beneath the heading (optional)
 *  - badge      : string  – small coloured pill text, e.g. "Last updated: Feb 2026" (optional)
 *  - badgeColor : string  – tailwind bg colour class, defaults to "bg-blue-50 text-blue-700"
 */
const LegalPageHeader = ({ title, subtitle, badge, badgeColor }) => {
    return (
        <div className="bg-white border-b border-gray-100 px-5 pt-8 pb-6">
            <div className="flex flex-col items-center text-center gap-3">
                {/* Logo */}
                <div className="rounded-[20px] overflow-hidden shadow-sm border border-gray-100 w-[56px] h-[56px] flex-shrink-0">
                    <img
                        src={mytodooLogo}
                        alt="MyToDoo"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Title */}
                <div className="space-y-1">
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">{title}</h1>
                    {subtitle && (
                        <p className="text-xs text-gray-500 leading-relaxed max-w-xs">{subtitle}</p>
                    )}
                </div>

                {/* Optional badge / date pill */}
                {badge && (
                    <span className={`text-[10px] font-semibold px-3 py-1 rounded-full ${badgeColor || 'bg-blue-50 text-blue-700'}`}>
                        {badge}
                    </span>
                )}
            </div>
        </div>
    );
};

export default LegalPageHeader;
