import { parserBuilderCore } from './parserBuilderCore';
import { ParserTypeEnum } from '@app/config/enums';

export const parserBuilderStem = ({ elName, parseHandler }) =>
	parserBuilderCore({
		elName,
		parseHandler,
		parserType: ParserTypeEnum.STEM,
	});
