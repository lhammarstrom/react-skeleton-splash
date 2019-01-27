import React from 'react';
import styled, { keyframes } from 'styled-components';

const fade = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: calc(200px + 100%) 0;
    }
`;

const Wave = styled.div`
    animation: ${fade} 2s ease-in-out infinite;
    background-color: ${props => props.baseColor};
    background-image: linear-gradient(
        90deg, 
        ${props => props.baseColor},
        ${props => props.shineColor},
        ${props => props.baseColor}
    );
    background-size: 200px 100%;
    background-repeat: no-repeat;
`;

export default function Skeleton({
    style = { height: '100%', width: '100%', borderRadius: 5 },
    baseColor = '#f4f4f4',
    shineColor = '#e5e5e5',
}) {
    return (
        <Wave
            style={style}
            baseColor={baseColor}
            shineColor={shineColor}
        />
    );
}
