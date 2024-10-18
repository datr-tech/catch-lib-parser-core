import { parserBuilderCore } from './parserBuilderCore';
import { ParserTypeEnum } from '@app/config/enums';
import {
	IParseHandler,
	IParseHandlerOutput,
} from '@app/interfaces/core/builders/parserBuilders/parseHandlers';

export const parserBuilderIter = ({ childParser }) => {
	const { elName, parserType } = childParser;
	const useParent = true;

	if (parserType !== ParserTypeEnum.LEAF && parserType !== ParserTypeEnum.STEM) {
		throw new TypeError('Use a LEAF or a STEM child parser');
	}

	const parseHandler: IParseHandler = async ({ el }) => {
		const childItems: IParseHandlerOutput[] = [];

		for (let i = 0; i < (await el.count()); i++) {
			const childItem = (await childParser.parse({
				elParent: el.nth(i),
				useParent,
			})) as IParseHandlerOutput;

			childItems.push(childItem);
		}

		return childItems;
	};

	return parserBuilderCore({
		elName,
		parseHandler,
		parserType: ParserTypeEnum.ITER,
	});
};
