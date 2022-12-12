import en from './en.json';
import ar from './ar.json';
import tr from './tr.json';

export const defaultLocale = localStorage.getItem('lang') || 'en';
// export const defaultLocale ='en';

	export const languages = {
		en: en,
		ar: ar,
		tr: tr,
	}