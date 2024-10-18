import { IElementParent } from './IElementParent';
import { IHelperCount } from './IHelperCount';
import { IHelperFirst } from './IHelperFirst';
import { IHelperLast } from './IHelperLast';
import { IHelperNth } from './IHelperNth';

export interface IElementChild extends IElementParent {
	count: IHelperCount;
	first: IHelperFirst;
	last: IHelperLast;
	nth: IHelperNth;
}
