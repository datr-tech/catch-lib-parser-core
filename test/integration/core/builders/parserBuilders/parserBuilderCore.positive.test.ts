import { parserBuilderCore, IElementParent, IParseHandler } from '@dist/index';
import { loadPageHelper } from '@test/helpers';

const path = 'core/builders/parserBuilders/parserBuilderCore.positive.html';
const url = `file://${global.JEST_APP_TEST_DIR}/fixtures/${path}`;

describe('integration', () => {
	describe('core', () => {
		describe('builders', () => {
			describe('parserBuilders', () => {
				describe('parserBuilderCore', () => {
					describe('positive', () => {
						describe('should return a parser (loaded from dist)', () => {
							test('which could then be used to parse an element', async () => {
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
						});
					});
				});
			});
		});
	});
});
