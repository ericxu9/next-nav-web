"use client";

import { Category } from "@/data/sites";
import { FiChevronRight } from "react-icons/fi";
import DynamicIcon from "./DynamicIcon";

interface CategoryCardProps {
  category: Category;
  siteCount: number;
  onClick: () => void;
}

export default function CategoryCard({
  category,
  siteCount,
  onClick,
}: CategoryCardProps) {
  return (
    <div className="category-card p-6 cursor-pointer" onClick={onClick}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-lg text-white ${category.color}`}
          >
            <DynamicIcon iconName={category.icon} size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300 ease-in-out">
              {category.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {category.description}
            </p>
            <div className="flex items-center mt-2">
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {siteCount} 个网站
              </span>
            </div>
          </div>
        </div>
        <FiChevronRight className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors duration-300 ease-in-out" />
      </div>
    </div>
  );
}
