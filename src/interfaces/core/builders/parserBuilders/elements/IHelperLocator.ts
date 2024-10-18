import { IElementChild } from './IElementChild';

export interface IHelperLocator {
	(selector: string): IElementChild;
}
