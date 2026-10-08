import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/初春飾利.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "逸風Ventus",
	bio: "你好，这是我的博客。下面是我的社交链接，欢迎关注我。",
	links: [
		{
			name: "X",
			icon: "fa7-brands:x-twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://x.com/JingshenTa53017",
		},
		{
			name: "Steam",
			icon: "fa7-brands:steam",
			url: "https://steamcommunity.com/id/star32100/",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/GardenEric260122",
		},
		{
			name: "Weibo",
			icon: "fa7-brands:weibo",
			url: "https://weibo.com/u/7906197179",
		},
		{
			name: "bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/34966405",
		},
		{
			name: "QQ",
			icon: "fa7-brands:qq",
			url: "tencent://message/?uin=1718535409&Site=qq&Menu=yes",
		},
		{
			name: "Email",
			icon: "material-symbols:mail-outline-rounded",
			url: "mailto:jmxw0814@gmail.com",
		},
	],
});
