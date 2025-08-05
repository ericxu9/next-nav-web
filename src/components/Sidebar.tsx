"use client";

import { Category } from "@/data/sites";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DynamicIcon from "./DynamicIcon";

interface SidebarProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  isOpen: boolean;
  onClose: () => void;
  collapsed?: boolean;
}

export default function Sidebar({
  categories,
  selectedCategory,
  onSelectCategory,
  isOpen,
  onClose,
  collapsed = false,
}: SidebarProps) {
  const handleCategorySelect = (categoryId: string | null) => {
    onSelectCategory(categoryId);
    onClose();
  };

  return (
    <>
      {/* 桌面端侧边栏 */}
      <div
        className={`hidden lg:block fixed inset-y-0 left-0 z-[60] border-r bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        <div
          className={`flex items-center h-16 px-4  ${
            collapsed ? "justify-center" : "justify-between"
          }`}
        >
          <div className={`flex items-center ${collapsed ? 'justify-center' : 'space-x-3'}`}>
            <div 
              className="flex h-10 w-10 items-center justify-center rounded-lg gradient-bg cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => window.location.reload()}
              title="点击刷新首页"
            >
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                collapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'
              }`}
            >
              <div className="whitespace-nowrap">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  NextNav
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  网站导航
                </p>
              </div>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          <Button
            variant={selectedCategory === null ? "secondary" : "ghost"}
            className={`w-full justify-start h-12 transition-all duration-300 ease-in-out ${
              collapsed ? "justify-center px-0 hover:bg-gray-100 dark:hover:bg-gray-800" : ""
            }`}
            onClick={() => handleCategorySelect(null)}
            title={collapsed ? "全部网站" : undefined}
          >
            <div className={`flex items-center transition-all duration-300 ease-in-out ${
              collapsed ? 'justify-center' : 'w-full'
            }`}>
              <div className="flex items-center justify-center w-6 h-6">
                <DynamicIcon iconName="FcHome" size={18} />
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  collapsed ? 'w-0 opacity-0 ml-0' : 'w-auto opacity-100 ml-3'
                }`}
              >
                <span className="whitespace-nowrap">全部网站</span>
              </div>
            </div>
          </Button>

          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "secondary" : "ghost"}
              className={`w-full justify-start h-12 transition-all duration-300 ease-in-out ${
                collapsed ? "justify-center px-0 hover:bg-gray-100 dark:hover:bg-gray-800" : ""
              }`}
              onClick={() => handleCategorySelect(category.id)}
              title={collapsed ? category.name : undefined}
            >
              <div className={`flex items-center transition-all duration-300 ease-in-out ${
                collapsed ? 'justify-center' : 'w-full'
              }`}>
                <div className="flex items-center justify-center w-6 h-6">
                  <DynamicIcon iconName={category.icon} size={18} />
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    collapsed ? 'w-0 opacity-0 ml-0' : 'w-auto opacity-100 ml-3'
                  }`}
                >
                  <span className="whitespace-nowrap">{category.name}</span>
                </div>
              </div>
            </Button>
          ))}
        </nav>
      </div>

      {/* 移动端对话框 */}
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-bg">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span>分类导航</span>
            </DialogTitle>
          </DialogHeader>
          <nav className="space-y-2">
            <Button
              variant={selectedCategory === null ? "secondary" : "ghost"}
              className="w-full justify-start h-12"
              onClick={() => handleCategorySelect(null)}
            >
              <DynamicIcon iconName="FcHome" size={18} className="mr-3" />
              全部网站
            </Button>

            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "secondary" : "ghost"
                }
                className="w-full justify-start h-12"
                onClick={() => handleCategorySelect(category.id)}
              >
                <DynamicIcon
                  iconName={category.icon}
                  size={18}
                  className="mr-3"
                />
                {category.name}
              </Button>
            ))}
          </nav>
        </DialogContent>
      </Dialog>
    </>
  );
}
