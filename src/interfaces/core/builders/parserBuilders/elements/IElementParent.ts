import { IHelperGetAttribute } from './IHelperGetAttribute';
import { IHelperInnerText } from './IHelperInnerText';
import { IHelperLocator } from './IHelperLocator';
import { IHelperTextContent } from './IHelperTextContent';
import { IHelperTitle } from './IHelperTitle';

export interface IElementParent {
	getAttribute: IHelperGetAttribute;
	innerText: IHelperInnerText;
	locator: IHelperLocator;
	textContent: IHelperTextContent;
	title: IHelperTitle;
}
