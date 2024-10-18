import { ParserTypeEnum } from '@app/config/enums';
import { IElementName } from '@app/interfaces/core/builders/parserBuilders/elements';
import { IParse } from '@app/interfaces/core/builders/parserBuilders/parse';

export interface IParserBuilderOutput {
	parse: IParse;
	elName: IElementName;
	parserType?: ParserTypeEnum;
}
