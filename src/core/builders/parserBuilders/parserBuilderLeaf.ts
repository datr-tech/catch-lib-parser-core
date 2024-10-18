import { parserBuilderCore } from './parserBuilderCore';
import { ParserTypeEnum } from '@app/config/enums';

export const parserBuilderLeaf = ({ elName, parseHandler }) =>
	parserBuilderCore({
		elName,
		parseHandler,
		parserType: ParserTypeEnum.LEAF,
	});
