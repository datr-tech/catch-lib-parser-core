import { parserBuilderCore, parserBuilderIter } from '@app/core/builders/parserBuilders';
import { IParseHandler } from '@app/interfaces/core/builders/parserBuilders/parseHandlers';

describe('unit', () => {
	describe('core', () => {
		describe('builders', () => {
			describe('parserBuilders', () => {
				describe('parserBuilderIter', () => {
					describe('negative', () => {
						describe('should throw an error', () => {
							test("when 'childParer.parserType' is undefined", async () => {
								/*
								 * Arrange
								 */
								const elNameChild = 'span.child';
								const errorExpected = 'Use a LEAF or a STEM child parser';
								const parseHandlerChild: IParseHandler = async ({ el }) =>
									(await el.innerText()) as string;
								const childParser = parserBuilderCore({
									elName: elNameChild,
									parseHandler: parseHandlerChild,
								});

								/*
								 * Act
								 */
								const handler = () => {
									parserBuilderIter({ childParser });
								};

								/*
								 * Assert
								 */
								expect(handler).toThrow(errorExpected);
							});
						});
					});
				});
			});
		});
	});
});
