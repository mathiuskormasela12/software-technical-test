// ========== ChatRoom Styles
// import all modules
import styled from 'styled-components';
import { Colors } from '../themes';

export const HeroChatRoom = styled.div`
	height: 100vh;
	background: white
`;

export const RoomIdText = styled.h1`
	font-size: 1.8rem;
`;

export const ExitText = styled.p`
	font-size: 1.1rem;
	color: ${Colors.primary};
	cursor: pointer;
`;

export const HeroChatRoomFlex = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

export const HeroChatHeader = styled.div`
	display: flex;
	align-items: center;
	height: 10%;
`;

export const HeroChatHeaderCol = styled.div`
	flex: 1;

	&:last-child {
		flex: 5;
		text-align: center;
	}
`;

interface IHeroChatBody {
	isEmpty: boolean;
}

export const HeroChatBody = styled.div<IHeroChatBody>`
	height: 80%;
	display: flex;
	flex-direction: column;

	${(props) => {
    if (props.isEmpty) {
      return `
			justify-content: center;
			align-items: center;
			`;
    }

    return '';
  }}
`;

export const HeroChatFooter = styled.div`
	height: 10%;
`;
