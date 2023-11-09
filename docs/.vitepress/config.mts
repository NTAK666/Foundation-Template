import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Foundation",
	description: "Foundation",
	lang: 'en-US',
	markdown:{
		math: true
	},
	themeConfig: {
		nav: [
			{text: 'Home', link: '/'},
			{text: 'Document', link: '/about/introduce'}
		],

		sidebar: [
			{
				text: 'Template',
				items: [
					{text: 'Getting Started', link: '/template/getting-started'},
					{text: 'Markdown Extension', link: '/template/markdown-extension'},
					{text: 'Custom Component', link: '/template/custom-component'},
				]
			},
			{
				text: 'About Company',
				items: [
					{text: 'Introduce', link: '/about/introduce'},
					{text: 'Change Management', link: '/about/change-management'},
					{text: 'Contribution Guidelines', link: '/about/contribution-guidelines'}
				]
			},
			{
				text: 'Branding',
				items: [
					{text: 'Assets', link: '/branding/assets'},
				]
			},
			{
				text: 'Company',
				items: [
					{text: 'Brand Guidelines', link: '/company/guidelines'},
					{text: 'Core Values', link: '/company/core-values'},
					{text: 'Foundation', link: '/company/foundation'},
					{text: 'Orientation', link: '/company/orientation'},
				]
			},
			{
				text: 'Design System',
				items: [
					{text: 'Design Presentation', link: '/design-system/design-presentation'},
					{text: 'Design Review', link: '/design-system/design-review'},
					{text: 'Design Tool', link: '/design-system/design-tool'},
					{text: 'User Experience', link: '/design-system/user-experience'},
					{text: 'User Interface', link: '/design-system/user-interface'},
				]
			},
			{
				text: 'Development',
				items: [
					{text: 'Community', link: '/development/community'},
					{text: 'Development Types', link: '/development/dev-types'},
					{text: 'Localization', link: '/development/localization'},
					{text: 'Platform', link: '/development/platform'},
					{text: 'Processes', link: '/development/processes'},
					{
						text: 'OS Setup',
						collapsed: true,
						items: [
							{text: 'MacOS Setup', link: '/development/os-setup/macos'},
							{text: 'Linux Setup', link: '/development/os-setup/linux'},
							{text: 'Windows Setup', link: '/development/os-setup/window'},
						]
					},
					{
						text: 'Coding Conventions',
						collapsed: true,
						items: [
							{text: '.Net', link: '/development/coding-conventions/dotnet'},
							{text: 'HTML', link: '/development/coding-conventions/html'},
							{text: 'Javascript', link: '/development/coding-conventions/javascript'},
						]
					},
					{
						text: 'Testing',
						collapsed: true,
						items: [
							{text: 'Unit Testing', link: '/development/testing/unit-testing'},
							{text: 'Integration Testing', link: '/development/testing/integration-testing'},
						]
					},
					{
						text: 'Git Flow',
						collapsed: true,
						items: [
							{text: 'Git Guidelines', link: '/development/git/guidelines'},
						]
					},
					{
						text: 'Environment',
						collapsed: true,
						items: [
							{text: 'Environment Guidelines', link: '/development/environment/guidelines'},
							{text: 'Development Environment', link: '/development/environment/development'},
							{text: 'Staging Environment', link: '/development/environment/staging'},
							{text: 'Production Environment', link: '/development/environment/production'},
						]
					},
				]
			},
			{
				text: 'Project Management',
				items: [
					{text: 'Project Management Guidelines', link: '/project-management/guidelines'},
					{text: 'Project Management Tool', link: '/project-management/tool'},
					{text: 'Agile & Scrum', link: '/project-management/agile-scrum'},
				]
			},
			{
				text: 'Team',
				items: [
					{text: 'Team Guidelines', link: '/team/guidelines'},
					{text: 'Team Structure', link: '/team/structure'},
					{text: 'Way of working', link: '/team/way-of-working'},
					{
						text: 'Communication',
						collapsed: true,
						items: [
							{text: 'Communication Guidelines', link: '/team/communication/guidelines'},
							{text: 'Tool', link: '/team/communication/tool'},
							{text: 'Meetings', link: '/team/communication/meetings'},
						]
					},
					{
						text: 'Roles',
						collapsed: true,
						items: [
							{text: 'Product Owner', link: '/team/roles/product-owner'},
							{text: 'Scrum Master', link: '/team/roles/scrum-master'},
							{text: 'Developer', link: '/team/roles/developer'},
							{text: 'Tester', link: '/team/roles/tester'},
							{text: 'Designer', link: '/team/roles/designer'},
							{text: 'DevOps', link: '/team/roles/devops'},
						]
					}
				]
			},
			{
				text: 'Benefit',
				items: [
					{text: 'About Benefits', link: '/benefit/about'}
				]
			}
		],

		socialLinks: [
			{icon: 'github', link: 'https://github.com/vuejs/vitepress'}
		],
		search: {
			provider: 'local',
			options: {
				detailedView: true,
			},
		},
		editLink: {
			pattern: 'https://github.com/NTAK666/foundation-template/tree/main/react/:path',
			text: 'Edit this page on GitHub',
		},
	}
})
