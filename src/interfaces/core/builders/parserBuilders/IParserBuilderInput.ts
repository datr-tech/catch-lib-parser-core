import { ParserTypeEnum } from '@app/config/enums';
import { IElementName } from '@app/interfaces/core/builders/parserBuilders/elements';
import { IParseHandler } from '@app/interfaces/core/builders/parserBuilders/parseHandlers';

export interface IParserBuilderInput {
	elName: IElementName;
	parseHandler: IParseHandler;
	parserType?: ParserTypeEnum;
}
