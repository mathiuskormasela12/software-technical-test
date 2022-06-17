// =========== Container Styles
// import all modules
import styled from 'styled-components';
import { IContainerProps } from '../interfaces';

export const ContainerStyles = styled.div<IContainerProps>`
	margin: 0 auto;

	${({ fluid, size }) => {
    if (fluid) {
      return `
				width: 100%;
			`;
    }

    return `
			width: ${size}%;
		`;
  }}

	@media (max-width: 1024px) {
		width: 90%;
	}
`;
