import { IElementParent } from '@app/interfaces/core/builders/parserBuilders/elements';

export interface IParseInput {
	elParent: IElementParent;
	count?: number;
	useParent?: boolean;
}
