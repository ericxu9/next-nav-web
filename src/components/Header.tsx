"use client";

import SearchBar from "./SearchBar";
import { Button } from "@/components/ui/button";
import { FiMenu, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  onSearch: (query: string) => void;
  onToggleSidebar?: () => void;
  onToggleCollapse?: () => void;
  sidebarCollapsed?: boolean;
}

export default function Header({ onSearch, onToggleSidebar, onToggleCollapse, sidebarCollapsed }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 sm:space-x-4">
            {onToggleSidebar && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggleSidebar}
                className="lg:hidden"
              >
                <FiMenu className="h-5 w-5" />
                <span className="sr-only">Toggle sidebar</span>
              </Button>
            )}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4 mr-4">
            <SearchBar onSearch={onSearch} />
            <ThemeToggle />
          </div>
        </div>
      </div>
      
      {/* 收缩按钮 - 固定在左侧 */}
      {onToggleCollapse && (
        <div 
          className="hidden lg:block fixed top-4 z-[70] transition-all duration-300 ease-in-out"
          style={{ left: sidebarCollapsed ? '5rem' : '17rem' }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleCollapse}
            className="h-8 w-8 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
            title="切换侧边栏"
          >
            {sidebarCollapsed ? (
              <FiChevronRight className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            ) : (
              <FiChevronLeft className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            )}
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>
      )}
    </header>
  );
}
