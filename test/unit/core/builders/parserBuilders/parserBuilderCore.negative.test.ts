import { parserBuilderCore } from '@app/core/builders/parserBuilders';
import { loadPageHelper } from '@test/helpers';
import { IParseHandler } from '@app/interfaces/core/builders/parserBuilders/parseHandlers';
import { IElementParent } from '@app/interfaces/core/builders/parserBuilders/elements';

const path = 'core/builders/parserBuilders/parserBuilderCore.positive.html';
const url = `file://${global.JEST_APP_TEST_DIR}/fixtures/${path}`;

describe('unit', () => {
	describe('core', () => {
		describe('builders', () => {
			describe('parserBuilders', () => {
				describe('parserBuilderCore', () => {
					describe('negative', () => {
						describe('should return undefined', () => {
							test("when 'elName' has not been found", async () => {
								/*
								 * Arrange
								 */
								const elName = '.UNKNOWN';
								const parseHandler: IParseHandler = async ({ el }) =>
									await el.innerText();

								/*
								 * Act
								 */
								const parser = parserBuilderCore({ elName, parseHandler });
								const elParent = (await loadPageHelper({
									url,
								})) as unknown as IElementParent;
								const found = await parser.parse({ elParent });

								/*
								 * Assert
								 */
								expect(found).toBeUndefined();
							});
						});
						describe('should throw an error', () => {
							test("when 'elName' is an empty string", async () => {
								/*
								 * Arrange
								 */
								const elName = '';
								const errorExpected = "'value' must be a non-empty string";
								const parseHandler: IParseHandler = async ({ el }) =>
									await el.innerText();

								/*
								 * Act
								 */
								const errorHandler = () => {
									parserBuilderCore({ elName, parseHandler });
								};

								/*
								 * Assert
								 */
								expect(errorHandler).toThrow(errorExpected);
							});
						});
					});
				});
			});
		});
	});
});
