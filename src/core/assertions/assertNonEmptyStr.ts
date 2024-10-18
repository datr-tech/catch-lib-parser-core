import { IAssertNonEmptyStr } from '@app/interfaces/core/assertions';

export const assertNonEmptyStr: IAssertNonEmptyStr = ({ value }) => {
	if (!value) {
		throw new TypeError("'value' must be a non-empty string");
	}
};
