import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
 
    
    svg {
        width: 40px;
        height: 40px;
        fill: #555;
    }

    svg line {
        transition: transform 0.2s ease-in-out;
    }

    &:hover svg line:nth-child(1) {
        transform: translateX(-5px);
    }

    &:hover svg line:nth-child(2) {
        transform: translateX(5px);
    }

    &:hover svg line:nth-child(3) {
        transform: translateX(-5px);
    }

    &:hover .tooltip {
        opacity: 1;
        visibility: visible;
    }
`;

const Tooltip = styled.div`
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
    z-index: 1000; /* Ensure the tooltip is on top */
`;
interface ButtonProps {
    onClick?: () => void;
    tooltipText?: string;
}
const HamburgerMenu: React.FC<ButtonProps> = ({ onClick, tooltipText }) => (
    <Button onClick={onClick} aria-label="Menu">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <line x1="3" y1="6" x2="15" y2="6" stroke="#555" strokeWidth="2"/>
            <line x1="3" y1="12" x2="21" y2="12" stroke="#555" strokeWidth="2"/>
            <line x1="3" y1="18" x2="21" y2="18" stroke="#555" strokeWidth="2"/>
        </svg>
        {tooltipText && <Tooltip className="tooltip">{tooltipText}</Tooltip>}
    </Button>
);

export default HamburgerMenu;
