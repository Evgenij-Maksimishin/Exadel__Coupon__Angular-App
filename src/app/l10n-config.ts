import {L10nConfig, L10nLoader} from 'angular-l10n';

import {i18nAsset} from './i18n';

export const l10nConfig: L10nConfig = {
  format: 'language',
  providers: [{name: 'app', asset: i18nAsset}],
  cache: true,
  keySeparator: '.',
  defaultLocale: {
    language: 'en',
  },
  schema: [
    {
      locale: {language: 'en'},
      dir: 'ltr',
      text: 'English (US)',
    },
    {
      locale: {language: 'ru'},
      dir: 'ltr',
      text: 'Russian',
    },
  ],
};

export function initL10n(l10nLoader: L10nLoader): () => Promise<void> {
  return () => l10nLoader.init();
}
