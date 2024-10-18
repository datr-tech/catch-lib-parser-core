import { IParserBuilderIterInput } from './IParserBuilderIterInput';
import { IParserBuilderIterOutput } from './IParserBuilderIterOutput';

export interface IParserBuilderIter {
	(args: IParserBuilderIterInput): IParserBuilderIterOutput;
}
