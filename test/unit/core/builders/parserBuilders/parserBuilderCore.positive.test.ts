import { parserBuilderCore } from '@app/core/builders/parserBuilders';
import { IParseHandler } from '@app/interfaces/core/builders/parserBuilders/parseHandlers';
import { IElementParent } from '@app/interfaces/core/builders/parserBuilders/elements';
import { loadPageHelper } from '@test/helpers';

const path = 'core/builders/parserBuilders/parserBuilderCore.positive.html';
const url = `file://${global.JEST_APP_TEST_DIR}/fixtures/${path}`;

describe('unit', () => {
	describe('core', () => {
		describe('builders', () => {
			describe('parserBuilders', () => {
				describe('parserBuilderCore', () => {
					describe('positive', () => {
						describe('should return a parser', () => {
							test("which could then be used to parse the element identified by 'elName': .child", async () => {
								/*
								 * Arrange
								 */
								const elName = '.child';
								const textExpected = 'TEXT_EXPECTED_CHILD';
								const parseHandler: IParseHandler = async ({ el }) =>
									await el.innerText();

								/*
								 * Act
								 */
								const elParent = (await loadPageHelper({
									url,
								})) as unknown as IElementParent;
								const parser = parserBuilderCore({ elName, parseHandler });
								const textFound = await parser.parse({ elParent });

								/*
								 * Assert
								 */
								expect(textFound).toBe(textExpected);
							});
							test("which (when used with the 'useParent' option) will return the value of the parent title (and not the child title associated with 'elName')", async () => {
								/*
								 * Arrange
								 */
								const elName = '.child';
								const elNameParent = '.parent';
								const titleExpected = 'parent';
								const useParent = true;
								const parseHandler: IParseHandler = async ({ el }) =>
									await el.getAttribute('title');

								/*
								 * Act
								 */
								const page = (await loadPageHelper({
									url,
								})) as unknown as IElementParent;
								const elParent = page.locator(elNameParent);
								const parser = parserBuilderCore({ elName, parseHandler });
								const titleFound = await parser.parse({ elParent, useParent });

								/*
								 * Assert
								 */
								expect(titleFound).toBe(titleExpected);
							});
						});
					});
				});
			});
		});
	});
});
