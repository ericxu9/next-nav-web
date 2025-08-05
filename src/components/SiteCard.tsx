"use client";

import { useState } from "react";
import Image from "next/image";
import { Site } from "@/data/sites";
import DynamicIcon from "./DynamicIcon";
import { getFavicon } from "@/data/favicons";

interface SiteCardProps {
  site: Site;
}

export default function SiteCard({ site }: SiteCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    window.open(site.url, "_blank");
  };

  const faviconUrl = getFavicon(site.url);

  return (
    <div 
      className="site-card p-4 cursor-pointer relative" 
      onClick={handleClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3 flex-1">
          <div className="flex-shrink-0">
                         {faviconUrl && !imageError ? (
               <Image
                 src={faviconUrl}
                 alt={`${site.name} icon`}
                 width={32}
                 height={32}
                 className="w-8 h-8 rounded"
                 onError={() => setImageError(true)}
               />
             ) : (
              <DynamicIcon iconName={site.icon || "FcLink"} size={32} />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate group-hover:text-primary transition-colors duration-300 ease-in-out">
              {site.name}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
              {site.description}
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              {site.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-lg shadow-lg z-50 whitespace-nowrap">
          {site.url}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
        </div>
      )}
    </div>
  );
}
