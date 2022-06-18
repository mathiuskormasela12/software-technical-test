// ========== ChatBuble Styles
// import all modules
import styled from 'styled-components';
import { IChatBubbleProps } from '../interfaces';
import { Colors } from '../themes';

interface IBubleContainer {
	myMessage: boolean;
}

export const BubbleContainer = styled.div<IBubleContainer>`
		margin-bottom: 1.5rem;
		display: flex;
		flex-direction: column;

		${(props) => {
    if (props.myMessage) {
      return `
					align-items: flex-end;
				`;
    }

    return `
		align-items: flex-start;
				`;
  }}
`;

export const ChatBubleStyles = styled.div<IChatBubbleProps>`
	padding: .7rem 1rem .7rem 1rem;
	border-radius: 10px;
	max-width: 17rem;
	width: auto;

	${(props) => {
    if (props.myMessage) {
      return `
				background-color: ${Colors.light};
			`;
    }

    return `
			background-color: ${Colors.primary};
			color: white;
		`;
  }}
`;

export const BubbleText = styled.p`
	font-size: 1rem;
`;

export const SenderName = styled.p`
	font-size: 1rem;
	margin-bottom: .5rem;
	text-transform: capitalize;
`;
