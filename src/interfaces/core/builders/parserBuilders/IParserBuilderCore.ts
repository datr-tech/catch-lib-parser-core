import { IParserBuilderCoreInput } from './IParserBuilderCoreInput';
import { IParserBuilderCoreOutput } from './IParserBuilderCoreOutput';

export interface IParserBuilderCore {
	(args: IParserBuilderCoreInput): IParserBuilderCoreOutput;
}
