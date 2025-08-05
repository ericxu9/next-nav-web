"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SiteCard from "@/components/SiteCard";
import {
  getCategories,
  getSites,
  getSitesByCategory,
  searchSites,
  Site,
} from "@/data/sites";
import { FiGrid, FiList } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filteredSites, setFilteredSites] = useState<Site[]>([]);

  // 获取中文数据
  const categories = getCategories();
  const sites = getSites();

  // 初始化过滤后的网站数据
  useEffect(() => {
    setFilteredSites(sites);
  }, [sites]);

  // 键盘快捷键支持
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + B 切换侧边栏
      if ((event.ctrlKey || event.metaKey) && event.key === 'b') {
        event.preventDefault();
        handleSidebarCollapse(!sidebarCollapsed);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sidebarCollapsed]);

  useEffect(() => {
    let result: Site[];

    if (searchQuery) {
      result = searchSites(searchQuery);
    } else if (selectedCategory) {
      result = getSitesByCategory(selectedCategory);
    } else {
      result = sites;
    }

    setFilteredSites(result);
  }, [selectedCategory, searchQuery, sites]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory(null);
  };

  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    setSearchQuery("");
    setSidebarOpen(false);
  };

  const handleSidebarCollapse = (collapsed: boolean) => {
    setSidebarCollapsed(collapsed);
  };

  const selectedCategoryData = selectedCategory
    ? categories.find((cat) => cat.id === selectedCategory)
    : null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header
        onSearch={handleSearch}
        onToggleSidebar={() => setSidebarOpen(true)}
        onToggleCollapse={() => handleSidebarCollapse(!sidebarCollapsed)}
        sidebarCollapsed={sidebarCollapsed}
      />

      <div className="flex">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          collapsed={sidebarCollapsed}
        />

        <main
          className={`flex-1 transition-all duration-300 ease-in-out ${
            sidebarCollapsed ? "lg:ml-16" : "lg:ml-64"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* 页面标题和操作栏 */}
            {/* 只在非全部网站页面显示标题和描述 */}
            {(selectedCategory || searchQuery) && (
              <div className="mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                        {selectedCategoryData
                          ? selectedCategoryData.name
                          : "全部网站"}
                      </h1>
                      {selectedCategoryData && (
                        <p className="text-gray-500 dark:text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">
                          {selectedCategoryData.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant={viewMode === "grid" ? "secondary" : "ghost"}
                      size="icon"
                      onClick={() => setViewMode("grid")}
                      className="h-10 w-10"
                    >
                      <FiGrid className="h-4 w-4" />
                      <span className="sr-only">网格视图</span>
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "secondary" : "ghost"}
                      size="icon"
                      onClick={() => setViewMode("list")}
                      className="h-10 w-10"
                    >
                      <FiList className="h-4 w-4" />
                      <span className="sr-only">列表视图</span>
                    </Button>
                  </div>
                </div>

                {searchQuery && (
                  <div className="text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 rounded-lg p-3 border">
                    搜索 "{searchQuery}" 的结果：{filteredSites.length} 个网站
                  </div>
                )}
              </div>
            )}



            {/* 内容区域 */}
            {!selectedCategory && !searchQuery ? (
              // 显示按分类排列的所有网站
              <div className="space-y-8">
                {categories.map((category) => {
                  const categorySites = getSitesByCategory(category.id);
                  if (categorySites.length === 0) return null;
                  
                  return (
                    <div key={category.id} className="space-y-4">
                                             {/* 分类标题 */}
                       <div className="pb-3">
                         <div className="flex items-center justify-between">
                           <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                             {category.name}
                           </h2>
                           {categories.indexOf(category) === 0 && (
                             <div className="flex items-center space-x-2">
                               <Button
                                 variant={viewMode === "grid" ? "secondary" : "ghost"}
                                 size="icon"
                                 onClick={() => setViewMode("grid")}
                                 className="h-10 w-10"
                               >
                                 <FiGrid className="h-4 w-4" />
                                 <span className="sr-only">网格视图</span>
                               </Button>
                               <Button
                                 variant={viewMode === "list" ? "secondary" : "ghost"}
                                 size="icon"
                                 onClick={() => setViewMode("list")}
                                 className="h-10 w-10"
                               >
                                 <FiList className="h-4 w-4" />
                                 <span className="sr-only">列表视图</span>
                               </Button>
                             </div>
                           )}
                         </div>
                       </div>
                      
                      {/* 该分类下的网站 */}
                      <div
                        className={
                          viewMode === "grid"
                            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                            : "space-y-4"
                        }
                      >
                        {categorySites.map((site) => (
                          <SiteCard key={site.id} site={site} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              // 显示网站卡片
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                    : "space-y-4"
                }
              >
                {filteredSites.length > 0 ? (
                  filteredSites.map((site) => (
                    <SiteCard key={site.id} site={site} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-16">
                    <div className="text-gray-400 dark:text-gray-500 text-lg mb-2">
                      没有找到相关网站
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      尝试使用不同的关键词搜索
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
