import { IParseHandlerInput } from './IParseHandlerInput';
import { IParseHandlerOutput } from './IParseHandlerOutput';

export interface IParseHandler {
	(args: IParseHandlerInput): Promise<IParseHandlerOutput>;
}
