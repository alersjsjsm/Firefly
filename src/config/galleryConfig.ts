import type { GalleryConfig } from "@/types/galleryConfig";

// 相册配置
export const galleryConfig: GalleryConfig = {
	// 相册列表
	albums: [
		// 相册列表为空。添加方式：
		// 1. 在 public/gallery/ 下建子目录放入图片（jpg/png/webp/avif/gif）
		// 2. 按下面格式加一项：
		// {
		// 	id: "my-album",           // 对应 public/gallery/my-album/
		// 	name: "相册名称",
		// 	description: "相册描述",
		// 	location: "拍摄地点",
		// 	date: "2026-10-18",
		// 	tags: ["标签"],
		// },
	],

	// 瀑布流最小列宽(px)，浏览器根据容器宽度自动计算列数，默认 240
	// 值越小列数越多，值越大列数越少
	columnWidth: 240,
};
