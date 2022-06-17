// ========== MessageField Styles
// import all modules
import styled from 'styled-components';
import { Colors } from '../themes';

export const InputContainer = styled.div`
	outline: none;
	border: 1px solid ${Colors.secondLigth};
	background-color: ${Colors.light};
	width: 22rem;
	height: 3.5rem;
	border-radius: 25px;
	font-size: 1rem;
	display: flex;
	overflow: hidden;
	padding-left: 1rem;
`;

export const InputLeft = styled.div`
	width: 82%;
	height: 100%;
`;

export const InputRight = styled.div`
	width: 18%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Icon = styled.img`
	width: .9rem;
	height: .9rem;
`;

export const InputField = styled.input`
	border: none;
	outline: none;
	background-color: transparent;
	height: 100%;
	width: 100%;
	font-size: 1rem;

	&::-webkit-input-placeholder {
		color: ${Colors.gray};
	}

	&::-moz-input-placeholder {
		color: ${Colors.gray};
	}

	&::-ms-input-placeholder {
		color: ${Colors.gray};
	}
`;

export const SendButton = styled.button`
	outline: none;
	border: none;
	background-color: ${Colors.primary};
	height: 2.2rem;
	width: 2.2rem;
	cursor: pointer;
	border-radius: 50%;
`;
