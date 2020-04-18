import React, {
  useRef,
  useState,
} from 'react';

import propTypes from 'prop-types';

import arrowImg from './img/arrow.svg';

const Acordion = ({ title, content, bgColor }) => {
    const [isExpanded, setExpanded] = useState(false);
    const contentRef = useRef();

    const toggle = () => setExpanded(!isExpanded);

    const panelStyles = {
        alignItems: 'center',
        background: bgColor,
        color: '#FFF',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5em 1em',
        userSelect: 'none',
    };

    const contentStyles = {
        border: '1px solid ' + bgColor,
        height: isExpanded ? contentRef.current.scrollHeith : '0',
        overflow: 'hidden',
        padding: isExpanded ? '1em 0.5em' : '0 0.5em',
        transition: 'all 350ms ease-out',
    };

    const imageStyles = {
        transform: isExpanded ? 'rotate(90deg)' : 'rotate(0)',
        transition: 'transform 250ms ease',
        width: '18px',
    };

    return (
        <div>
            <div
                style={panelStyles}
                onClick={toggle}
            >
                <span>{title}</span>
                <img
                    src={arrowImg}
                    alt='Flecha'
                    style={imageStyles}
                />
            </div>
            <div
                style={contentStyles}
                ref={contentRef}>
                {content}
            </div>
        </div>
    );
}

Acordion.defaultProps = {
    bgColor: '#523da5',
    content: '',
    title: '',
};

Acordion.propTypes = {
    bgColor: propTypes.string,
    content: propTypes.string,
    title: propTypes.string,
};

export default Acordion;
