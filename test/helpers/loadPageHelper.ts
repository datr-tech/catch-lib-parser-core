import { Page } from 'playwright';
import { chromium } from 'playwright-extra';

export const loadPageHelper = async ({ url }): Promise<Page> => {
	try {
		const browser = await chromium.launch();
		const context = await browser.newContext();
		const page = await context.newPage();
		await page.goto(url);

		return page;
	} catch (error) {
		const { message } = error;
		throw new TypeError(message);
	}
};
