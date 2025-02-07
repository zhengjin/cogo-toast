import { ReactNode, MouseEventHandler } from 'react';

export type Options = Partial<{
	hideAfter: number;
	position:
		| 'top-left'
		| 'top-center'
		| 'top-right'
		| 'bottom-left'
		| 'bottom-center'
		| 'bottom-right';
	heading: string;
	icon: ReactNode;
	bar: Partial<{
		size: string;
		style: 'solid' | 'dashed' | 'dotted';
		color: string;
	}>;
	onClick: MouseEventHandler;
}>;

export type HideToastFunction = () => void;

export type Method = {
	(message: string, options?: Options & { hideAfter: 0 }): HideToastFunction;
	(message: string, options?: Options): Promise<void>;
};

declare namespace cogoToast {
	export const loading: Method;
	export const success: Method;
	export const error: Method;
	export const warn: Method;
	export const info: Method;
}

export default cogoToast;
