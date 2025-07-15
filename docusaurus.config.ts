import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	title: "Aki-Lite",
	tagline: "一个基于 Lagrange.Core 的轻量级 QQ Bot",
	favicon: "img/favicon.ico",

	future: {
		v4: true,
	},

	url: "https://docs.allenyou.wang",
	baseUrl: "/AkiLite/",

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	i18n: {
		defaultLocale: "zh-Hans",
		locales: ["zh-Hans"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					editUrl: "https://github.com/Allenyou1126/AkiLiteDoc/tree/master/",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		navbar: {
			title: "Aki-Lite",
			items: [
				{
					type: "docSidebar",
					sidebarId: "documentSidebar",
					position: "left",
					label: "文档",
				},
				{
					type: "docSidebar",
					sidebarId: "developSidebar",
					position: "left",
					label: "开发",
				},
				{
					href: "https://github.com/Allenyou1126/AkiLiteDoc",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "文档",
					items: [
						{
							label: "使用文档",
							to: "/docs/document/intro",
						},
						{
							label: "开发文档",
							to: "/docs/develop/intro",
						},
					],
				},
				{
					title: "更多",
					items: [
						{
							label: "GitHub",
							href: "https://github.com/facebook/docusaurus",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Allenyou. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
