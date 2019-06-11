import Styled from 'styled-components';


export const StyledP = Styled.p`
    font-size: ${props => props.styles.fontSize};
    color: ${props => props.styles.color};
	animation: ${props => props.styles.animate};

`;