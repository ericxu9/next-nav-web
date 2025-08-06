export interface Site {
  id: string;
  name: string;
  url: string;
  description: string;
  icon?: string;
  category: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

// 中文分类数据
export const categories: Category[] = [
  {
    id: "search",
    name: "搜索引擎",
    description: "各种搜索引擎和搜索工具",
    icon: "FcSearch",
    color: "bg-blue-500",
  },
  {
    id: "social",
    name: "社交媒体",
    description: "主流社交媒体平台",
    icon: "FcComments",
    color: "bg-green-500",
  },
  {
    id: "news",
    name: "新闻资讯",
    description: "新闻网站和资讯平台",
    icon: "FcNews",
    color: "bg-red-500",
  },
  {
    id: "tech",
    name: "技术开发",
    description: "编程、开发和技术资源",
    icon: "FcLinux",
    color: "bg-purple-500",
  },
  {
    id: "design",
    name: "设计创意",
    description: "设计工具和创意资源",
    icon: "FcCloseUpMode",
    color: "bg-pink-500",
  },
  {
    id: "productivity",
    name: "效率工具",
    description: "提高工作效率的工具",
    icon: "FcFlashOn",
    color: "bg-yellow-500",
  },
  {
    id: "education",
    name: "学习教育",
    description: "在线学习和教育资源",
    icon: "FcGraduationCap",
    color: "bg-indigo-500",
  },
  {
    id: "entertainment",
    name: "娱乐休闲",
    description: "视频、音乐和娱乐平台",
    icon: "FcVideoCall",
    color: "bg-orange-500",
  },
];

// 中文网站数据
export const sites: Site[] = [
  // 搜索引擎
  {
    id: "google",
    name: "Google",
    url: "https://www.google.com",
    description: "全球最大的搜索引擎",
    icon: "FcGoogle",
    category: "search",
    tags: ["搜索", "引擎"],
  },
  {
    id: "baidu",
    name: "百度",
    url: "https://www.baidu.com",
    description: "中国最大的搜索引擎",
    icon: "FcSearch",
    category: "search",
    tags: ["搜索", "引擎"],
  },
  {
    id: "bing",
    name: "必应",
    url: "https://www.bing.com",
    description: "微软搜索引擎",
    icon: "FcSearch",
    category: "search",
    tags: ["搜索", "引擎"],
  },
  // 社交媒体
  {
    id: "weibo",
    name: "微博",
    url: "https://weibo.com",
    description: "新浪微博社交平台",
    icon: "FcComments",
    category: "social",
    tags: ["社交", "微博"],
  },
  // 新闻资讯
  {
    id: "zhihu",
    name: "知乎",
    url: "https://www.zhihu.com",
    description: "中国问答社区",
    icon: "FcNews",
    category: "news",
    tags: ["新闻", "问答"],
  },
  {
    id: "v2ex",
    name: "V2EX",
    url: "https://www.v2ex.com",
    description: "创意工作者社区",
    icon: "FcNews",
    category: "news",
    tags: ["新闻", "社区", "技术"],
  },
  {
    id: "toutiao",
    name: "头条",
    url: "https://www.toutiao.com",
    description: "个性化新闻推荐平台",
    icon: "FcNews",
    category: "news",
    tags: ["新闻", "推荐"],
  },
  // 技术开发
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com",
    description: "代码托管平台",
    icon: "FcLinux",
    category: "tech",
    tags: ["技术", "代码", "git"],
  },
  {
    id: "stackoverflow",
    name: "Stack Overflow",
    url: "https://stackoverflow.com",
    description: "程序员问答社区",
    icon: "FcLinux",
    category: "tech",
    tags: ["技术", "问答", "编程"],
  },
  // 设计创意
  {
    id: "behance",
    name: "Behance",
    url: "https://www.behance.net",
    description: "创意作品展示平台",
    icon: "FcCloseUpMode",
    category: "design",
    tags: ["设计", "创意"],
  },
  {
    id: "dribbble",
    name: "Dribbble",
    url: "https://dribbble.com",
    description: "设计师作品分享平台",
    icon: "FcCloseUpMode",
    category: "design",
    tags: ["设计", "创意"],
  },
  {
    id: "figma",
    name: "Figma",
    url: "https://www.figma.com",
    description: "在线设计协作工具",
    icon: "FcCloseUpMode",
    category: "design",
    tags: ["设计", "协作"],
  },
  {
    id: "excalidraw",
    name: "Excalidraw",
    url: "https://excalidraw.com",
    description: "本地白板绘制工具",
    icon: "FcCloseUpMode",
    category: "design",
    tags: ["设计", "创意"],
  },
  // 效率工具
  {
    id: "notion",
    name: "Notion",
    url: "https://www.notion.so",
    description: "多功能协作平台",
    icon: "FcFlashOn",
    category: "productivity",
    tags: ["效率", "协作"],
  },
  {
    id: "yuque",
    name: "羽雀",
    url: "https://www.yuque.com",
    description: "知识管理与文档协作平台",
    icon: "FcDocument",
    category: "productivity",
    tags: ["效率", "文档", "知识管理"],
  },
  {
    id: "tinypng",
    name: "TinyPNG",
    url: "https://tinypng.com",
    description: "智能PNG和JPEG图片压缩工具",
    icon: "FcImage",
    category: "productivity",
    tags: ["效率", "压缩", "图片"],
  },
  {
    id: "zhale",
    name: "炸了么",
    url: "https://zhale.me",
    description: "网络拨测工具",
    icon: "FcNetwork",
    category: "productivity",
    tags: ["效率", "网络", "拨测"],
  },
  // 学习教育
  {
    id: "coursera",
    name: "Coursera",
    url: "https://www.coursera.org",
    description: "在线课程平台",
    icon: "FcGraduationCap",
    category: "education",
    tags: ["教育", "课程"],
  },
  {
    id: "edx",
    name: "edX",
    url: "https://www.edx.org",
    description: "在线教育平台",
    icon: "FcGraduationCap",
    category: "education",
    tags: ["教育", "课程"],
  },
  // 娱乐休闲
  {
    id: "youtube",
    name: "YouTube",
    url: "https://www.youtube.com",
    description: "视频分享平台",
    icon: "FcVideoCall",
    category: "entertainment",
    tags: ["娱乐", "视频"],
  },
  {
    id: "netflix",
    name: "Netflix",
    url: "https://www.netflix.com",
    description: "流媒体视频服务",
    icon: "FcVideoCall",
    category: "entertainment",
    tags: ["娱乐", "流媒体"],
  },
];

// 获取分类数据
export const getCategories = (): Category[] => {
  return categories;
};

// 获取网站数据
export const getSites = (): Site[] => {
  return sites;
};

// 根据分类获取网站
export const getSitesByCategory = (categoryId: string): Site[] => {
  return sites.filter((site) => site.category === categoryId);
};

// 搜索网站
export const searchSites = (query: string): Site[] => {
  const lowercaseQuery = query.toLowerCase();

  return sites.filter((site) => {
    return (
      site.name.toLowerCase().includes(lowercaseQuery) ||
      site.description.toLowerCase().includes(lowercaseQuery) ||
      site.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
    );
  });
};
