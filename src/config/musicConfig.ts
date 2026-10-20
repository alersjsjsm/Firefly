import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: false,

	// 是否在侧边栏显示音乐播放器组件（显示在个人资料卡片下方）
	showInSidebar: true,

	// 使用方式："meting" 使用 Meting API 在线歌单，"local" 使用本地音乐列表
	// 这里用 local：曲目固定为下面 playlist 里列出的这些，不依赖第三方歌单 ID
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.6,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否启用歌词
	showLyrics: true,

	// Meting API 配置（mode 为 "meting" 时使用；当前用 local，这里仅作备用）
	meting: {
		api: "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
		server: "netease",
		type: "playlist",
		id: "",
		auth: "",
		fallbackApis: [
			"https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		],
	},

	// 本地音乐列表（mode 为 "local" 时使用）
	// 说明：音频、封面、歌词都通过 Meting 接口实时获取，不需要在仓库里放 mp3 文件
	// 想增删歌曲：复制一项，把 id 换成网易云歌曲 ID，cover 里的 id 换成该歌曲封面 ID
	local: {
		playlist: [
			{
				name: "月声尽，心灯明",
				artist: "鸣潮先约电台 / jixwang / Cassie Wei",
				url: "https://api.injahow.cn/meting/?server=netease&type=url&id=3440655477",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951173993049764",
				lrc: "https://api.injahow.cn/meting/?server=netease&type=lrc&id=3440655477",
			},
			{
				name: "万相由心何妨问天机",
				artist: "鸣潮先约电台 / jixwang / 陈乐一",
				url: "https://api.injahow.cn/meting/?server=netease&type=url&id=3440655476",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951173993049764",
				lrc: "https://api.injahow.cn/meting/?server=netease&type=lrc&id=3440655476",
			},
			{
				name: "远航星的告别",
				artist: "鸣潮先约电台 / jixwang / Tarokiki / Emi Evans",
				url: "https://api.injahow.cn/meting/?server=netease&type=url&id=3346496288",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951172692547015",
				lrc: "https://api.injahow.cn/meting/?server=netease&type=lrc&id=3346496288",
			},
			{
				name: "愿戴荣光坠入天渊",
				artist: "鸣潮先约电台 / jixwang / VISION SOUND",
				url: "https://api.injahow.cn/meting/?server=netease&type=url&id=2693626963",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951170712564084",
				lrc: "https://api.injahow.cn/meting/?server=netease&type=lrc&id=2693626963",
			},
			{
				name: "「拉海洛」之心",
				artist: "鸣潮先约电台 / baitian / Victor Borba / Casey Lee Williams",
				url: "https://api.injahow.cn/meting/?server=netease&type=url&id=3375694932",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951173136952043",
				lrc: "https://api.injahow.cn/meting/?server=netease&type=lrc&id=3375694932",
			},
			{
				name: "玄翎谣",
				artist: "鸣潮先约电台 / jkinss / 薄荷Miint",
				url: "https://api.injahow.cn/meting/?server=netease&type=url&id=3405072664",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951173538451935",
				lrc: "https://api.injahow.cn/meting/?server=netease&type=lrc&id=3405072664",
			},
			{
				name: "心月辞·长相望",
				artist: "鸣潮先约电台 / 苏诗丁",
				url: "https://api.injahow.cn/meting/?server=netease&type=url&id=3437047695",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951173948135484",
				lrc: "https://api.injahow.cn/meting/?server=netease&type=lrc&id=3437047695",
			},
			{
				name: "小小奇迹",
				artist: "鸣潮先约电台 / jixwang / 飞行雪绒",
				url: "https://api.injahow.cn/meting/?server=netease&type=url&id=3346496228",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951172692547015",
				lrc: "https://api.injahow.cn/meting/?server=netease&type=lrc&id=3346496228",
			},
			{
				name: "自无垠处归航之星",
				artist: "鸣潮先约电台 / jixwang / R!N / Gemie",
				url: "https://api.injahow.cn/meting/?server=netease&type=url&id=3375693251",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951173136952043",
				lrc: "https://api.injahow.cn/meting/?server=netease&type=lrc&id=3375693251",
			},
			{
				name: "清仙谣",
				artist: "鸣潮先约电台 / win7mus / 玄觞",
				url: "https://api.injahow.cn/meting/?server=netease&type=url&id=3423471848",
				cover: "https://api.injahow.cn/meting/?server=netease&type=pic&id=109951173782760037",
				lrc: "https://api.injahow.cn/meting/?server=netease&type=lrc&id=3423471848",
			},
		],
	},
};
