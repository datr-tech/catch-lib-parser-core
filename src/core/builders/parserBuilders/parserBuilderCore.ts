import { IElementChild } from '@app/interfaces/core/builders/parserBuilders/elements';
import { IParse } from '@app/interfaces/core/builders/parserBuilders/parse';
import { IParserBuilder } from '@app/interfaces/core/builders/parserBuilders';
import { assertNonEmptyStr } from '@app/core/assertions';

export const parserBuilderCore: IParserBuilder = ({
	elName,
	parseHandler,
	parserType,
}) => {
	assertNonEmptyStr({ value: elName });

	const parse: IParse = async ({ elParent, count, useParent = false }) => {
		const el: IElementChild = useParent
			? (elParent as unknown as IElementChild)
			: elParent.locator(elName);
		const hasElementBeenFound = (await el.count()) > 0;

		return hasElementBeenFound ? await parseHandler({ el, count }) : undefined;
	};

	return { parse, elName, parserType };
};
