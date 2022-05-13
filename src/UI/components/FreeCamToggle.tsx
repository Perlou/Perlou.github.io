/**
 * FreeCamToggle.tsx
 * @author Perlou(perloukevin@gmail.com)
 */

import React, { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import UIEventBus from '../EventBus'
import { Easing } from '../animation'
// @ts-ignore
import camera from '../../../static/textures/UI/camera.svg'
// @ts-ignore
import mouse from '../../../static/textures/UI/mouse.svg'

interface FreeCamToggleProps {}

const FreeCamToggle: React.FC<FreeCamToggleProps> = ({}) => {
    const [isHovering, setIsHovering] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [freeCamActive, setFreeCamActive] = useState(false)
    const [blockEvents, setBlockEvents] = useState(true)

    const onMouseDownHandler = useCallback(
        (event) => {
            setIsActive(true)
            event.preventDefault()
            setFreeCamActive(!freeCamActive)
        },
        [freeCamActive]
    )

    const iconSize = freeCamActive
        ? window.innerWidth < 768
            ? 8
            : 10
        : window.innerWidth < 768
        ? 4
        : 6

    const onMouseUpHandler = useCallback(() => {
        setIsActive(false)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setBlockEvents(false)
        }, 100)
    }, [])

    useEffect(() => {
        if (!blockEvents) {
            window.postMessage({ type: 'keydown', key: `_AUTO_` }, '*')
            UIEventBus.dispatch('freeCamToggle', freeCamActive)
        }
    }, [freeCamActive])

    return (
        <div style={styles.wrapper}>
            <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={styles.container}
                onMouseDown={onMouseDownHandler}
                onMouseUp={onMouseUpHandler}
                className="icon-control-container"
                id="prevent-click"
            >
                <motion.img
                    id="prevent-click"
                    src={freeCamActive ? mouse : camera}
                    style={{ opacity: isActive ? 0.2 : isHovering ? 0.8 : 1 }}
                    height={iconSize}
                    animate={
                        isActive
                            ? 'active'
                            : isHovering
                            ? 'hovering'
                            : 'default'
                    }
                    variants={iconVars}
                />
            </div>
        </div>
    )
}

const iconVars = {
    hovering: {
        // scale: 1.2,
        opacity: 0.8,
        transition: {
            duration: 0.1,
            ease: 'easeOut',
        },
    },
    active: {
        scale: 0.8,
        opacity: 0.5,
        transition: {
            duration: 0.1,
            ease: Easing.expOut,
        },
    },
    default: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: 'easeOut',
        },
    },
}

const indicatorVars = {
    active: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.2,
            ease: Easing.expOut,
        },
    },
    hidden: {
        x: -4,
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: Easing.expOut,
        },
    },
}

const styles: StyleSheetCSS = {
    container: {
        background: 'black',
        // padding: 4,
        paddingLeft: 8,
        paddingRight: 8,
        textAlign: 'center',
        display: 'flex',
        // position: 'absolute',
        boxSizing: 'border-box',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
}

export default FreeCamToggle
