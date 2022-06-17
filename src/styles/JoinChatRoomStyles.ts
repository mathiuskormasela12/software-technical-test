// ========== JoinChatRoom Styles
// import all modules
import styled from 'styled-components';
import { IFormSectionProps } from '../interfaces';
import { Colors } from '../themes';

export const JoinChatRoomHero = styled.div`
	background-color: white;
`;

export const HeroFlex = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const Header = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Form = styled.form`
	flex: 5;
	display: flex;
	justify-content: center;
`;

export const Title = styled.h1`
	text-align: center;
	font-size: 2.1rem;
`;

export const Control = styled.div`
	margin-bottom: 1.5rem;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const TextField = styled.input`
	outline: none;
	border: 1px solid ${Colors.secondLigth};
	background-color: ${Colors.light};
	width: 100%;
	height: 3.5rem;
	border-radius: 9px;
	padding-left: .8rem;
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

export const Button = styled.button`
	width: 100%;
	height: 3.5rem;
	outline: none;
	border: none;
	color: white;
	background-color: ${Colors.primary};
	border-radius: 25px;
	font-size: 1.5rem;
	cursor: pointer;
`;

export const FormSection = styled.section<IFormSectionProps>`
	width: 100%;
	
	&:first-child {
		height: 50%;
	}

	&:last-child {
		height: 50%;
	}

	${(props) => {
    if (props.flexDirectionColumn) {
      return `
				flex-direction: column;
			`;
    }

    return '';
  }}
`;

export const FormRow = styled.div`
	width: 20rem;
	display: flex;
	flex-direction: column;
`;

export const ErrorMessage = styled.p`
	color: ${Colors.danger};
	font-size: 1rem;
	text-align: center;
	margin-bottom: 1rem;
	font-weight: bold;
`;
