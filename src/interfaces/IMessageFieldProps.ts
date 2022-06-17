// ========== IMessageFieldProps

import React from 'react';

export interface IMessageFieldProps {
	placeholder: string;
	value: string;
	type: React.HTMLInputTypeAttribute;
	// eslint-disable-next-line no-unused-vars
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	// eslint-disable-next-line no-unused-vars
	onSubmit: () => void;
}
