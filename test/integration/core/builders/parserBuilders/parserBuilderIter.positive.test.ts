import {
	parserBuilderIter,
	parserBuilderLeaf,
	parserBuilderStem,
	IElementParent,
	IParseHandler,
} from '@dist/index';
import { loadPageHelper } from '@test/helpers';

const path = 'core/builders/parserBuilders/parserBuilderIter.positive.html';
const url = `file://${global.JEST_APP_TEST_DIR}/fixtures/${path}`;

const validChildParsers = [
	{
		name: 'parserBuilderLeaf',
		parserBuilder: parserBuilderLeaf,
	},
	{
		name: 'parserBuilderStem',
		parserBuilder: parserBuilderStem,
	},
];

describe('unit', () => {
	describe('core', () => {
		describe('builders', () => {
			describe('parserBuilders', () => {
				describe('parserBuilderIter', () => {
					describe('positive', () => {
						describe('should return the expected array of child outputs', () => {
							test.each(validChildParsers)(
								"when $name is passed to 'parserBuilderIter'",
								async ({ parserBuilder }) => {
									/*
									 * Arrange
									 */
									const elNameChild = 'span.child';
									const elNameParent = 'div.parent';
									const numParsedChildrenExpected = 4;

									/*
									 * Arrange: child
									 */
									const parseHandlerChild: IParseHandler = async ({ el }) =>
										(await el.innerText()) as string;
									const childParser = parserBuilder({
										elName: elNameChild,
										parseHandler: parseHandlerChild,
									});

									/*
									 * Arrange: elParent
									 */
									const page = (await loadPageHelper({
										url,
									})) as unknown as IElementParent;
									const elParent = page.locator(elNameParent);

									/*
									 * Act
									 */
									const iterParser = parserBuilderIter({ childParser });
									const parsedChildren = (await iterParser.parse({
										elParent,
									})) as string[];
									const numParsedChildrenFound = parsedChildren.length;

									/*
									 * Assert
									 */
									expect(numParsedChildrenFound).toBe(numParsedChildrenExpected);
								},
							);
						});
					});
				});
			});
		});
	});
});
