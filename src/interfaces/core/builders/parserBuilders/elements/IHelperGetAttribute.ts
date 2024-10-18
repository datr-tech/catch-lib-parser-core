export interface IHelperGetAttribute {
	(name: string): Promise<string | null>;
}
