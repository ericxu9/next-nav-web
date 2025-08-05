// 获取网站图标 - 自动生成本地图片路径
export const getFavicon = (url: string): string | null => {
  try {
    const domain = new URL(url).hostname;
    // 自动生成本地图片路径，格式：/favicons/domain.com.png
    return `/favicons/${domain}.png`;
  } catch {
    return null;
  }
}; 