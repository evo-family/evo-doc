import type { StarlightUserConfig } from '@astrojs/starlight/types';
import { group } from './config/sidebar';

export const sidebar = [
	// Start tab
	group('start', {
		items: [
			'getting-started',
			'start/quickstart',
			group('start.features', {
				items: ['start/features/multimodal'],
			}),
			group('start.faq', {
				items: ['start/faq/entry'],
			}),
		],
	}),

	// Guides tab
	group('guides', {
		items: [
			group('guides.message', {
				items: ['guides/message/entry'],
			}),
			group('guides.assistant', {
				items: ['guides/assistant/entry'],
			}),
			group('guides.knowledge', {
				items: ['guides/knowledge/entry'],
			}),
			group('guides.mcp', {
				items: ['guides/mcp/entry'],
			}),
			group('guides.setting.model', {
				items: ['guides/settings/model'],
			}),
			group('guides.setting.general', {
				items: ['guides/settings/general'],
			}),
			group('guides.setting.data', {
				items: ['guides/settings/data'],
			}),
			group('guides.setting.shortcut', {
				items: ['guides/settings/shortcut'],
			}),
		],
	}),

	// Reference tab
	// group('reference', {
	// 	items: [
	// 		group('reference.intro', {
	// 			items: ['development/getting-started'],
	// 		}),
	// 		group('reference.architecture', {
	// 			items: ['development/architecture'],
	// 		}),
	// 		group('reference.directory', {
	// 			items: ['development/directory-structure'],
	// 		}),
	// 		group('reference.state', {
	// 			items: ['development/state-management'],
	// 		}),
	// 		group('reference.i18n', {
	// 			items: ['development/i18n'],
	// 		}),
	// 	],
	// }),

	// // Integrations tab
	// group('integrations', {
	// 	items: [
	// 		group('integrations.check', {
	// 			items: ['deployment/environment-check'],
	// 		}),
	// 		group('integrations.deploy', {
	// 			items: ['deployment/mcp-setup'],
	// 		}),
	// 		group('integrations.faq', {
	// 			items: ['deployment/common-mcp-issues'],
	// 		}),
	// 	],
	// }),
] satisfies StarlightUserConfig['sidebar'];
