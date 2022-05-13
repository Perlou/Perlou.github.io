/**
 * InfoOverlay.tsx
 * @author Perlou(perloukevin@gmail.com)
 */

import React, { useEffect, useRef, useState } from 'react'
import FreeCamToggle from './FreeCamToggle'
import MuteToggle from './MuteToggle'
import { motion } from 'framer-motion'
import github from '../../../static/textures/UI/github.svg'
interface InfoOverlayProps {
    visible: boolean
}

const NAME_TEXT = 'Perlou'
const TITLE_TEXT = 'Software Engineer'

const MULTIPLIER = 1

const InfoOverlay: React.FC<InfoOverlayProps> = ({ visible }) => {
    const visRef = useRef(visible)
    const [nameText, setNameText] = useState('')
    const [titleText, setTitleText] = useState('')
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const timeRef = useRef(time)
    const [timeText, setTimeText] = useState('')
    const [textDone, setTextDone] = useState(false)
    const [volumeVisible, setVolumeVisible] = useState(false)
    const [freeCamVisible, setFreeCamVisible] = useState(false)
    const [githubVisible, setGithubVisible] = useState(false)

    const typeText = (
        i: number,
        curText: string,
        text: string,
        setText: React.Dispatch<React.SetStateAction<string>>,
        callback: () => void,
        refOverride?: React.MutableRefObject<string>
    ) => {
        if (refOverride) {
            text = refOverride.current
        }
        if (i < text.length) {
            setTimeout(() => {
                if (visRef.current === true)
                    window.postMessage(
                        { type: 'keydown', key: `_AUTO_${text[i]}` },
                        '*'
                    )

                setText(curText + text[i])
                typeText(
                    i + 1,
                    curText + text[i],
                    text,
                    setText,
                    callback,
                    refOverride
                )
            }, Math.random() * 50 + 50 * MULTIPLIER)
        } else {
            callback()
        }
    }

    useEffect(() => {
        if (visible && nameText == '') {
            setTimeout(() => {
                typeText(0, '', NAME_TEXT, setNameText, () => {
                    typeText(0, '', TITLE_TEXT, setTitleText, () => {
                        typeText(
                            0,
                            '',
                            time,
                            setTimeText,
                            () => {
                                setTextDone(true)
                            },
                            timeRef
                        )
                    })
                })
            }, 400)
        }
        visRef.current = visible
    }, [visible])

    useEffect(() => {
        if (textDone) {
            setTimeout(() => {
                setVolumeVisible(true)
                setTimeout(() => {
                    setFreeCamVisible(true)
                    setTimeout(() => {
                        setGithubVisible(true)
                    }, 250)
                }, 250)
            }, 250)
        }
    }, [textDone])

    useEffect(() => {
        window.postMessage({ type: 'keydown', key: `_AUTO_` }, '*')
    }, [githubVisible,freeCamVisible, volumeVisible])

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        timeRef.current = time
        textDone && setTimeText(time)
    }, [time])

    return (
        <div style={styles.wrapper}>
            {nameText !== '' && (
                <div style={styles.container}>
                    <p>{nameText}</p>
                </div>
            )}
            {titleText !== '' && (
                <div style={styles.container}>
                    <p>{titleText}</p>
                </div>
            )}
            {timeText !== '' && (
                <div style={styles.lastRow}>
                    <div
                        style={Object.assign(
                            {},
                            styles.container,
                            styles.lastRowChild
                        )}
                    >
                        <p>{timeText}</p>
                    </div>
                    {volumeVisible && (
                        <div style={styles.lastRowChild}>
                            <MuteToggle />
                        </div>
                    )}
                    {freeCamVisible && (
                        <div style={styles.lastRowChild}>
                            <FreeCamToggle />
                        </div>
                    )}
                    {githubVisible && (
                        <div style={styles.lastRowChild}>
                            <div
                                style={styles.icon}
                                className="icon-control-container"
                                id="github-click"
                                onClick={() => {
                                    window.open('https://github.com/Perlou', '__blank')
                                }}
                            >
                                <motion.img
                                    id="prevent-click"
                                    src={github}
                                    height={26.5}
                                    width={26.5}
                                    variants={iconVars}
                                />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

const iconVars = {
    // hovering: {
    //     // scale: 1.2,
    //     opacity: 0.8,
    //     transition: {
    //         duration: 0.1,
    //         ease: 'easeOut',
    //     },
    // },
    // active: {
    //     scale: 0.8,
    //     opacity: 0.5,
    //     transition: {
    //         duration: 0.1,
    //         ease: Easing.expOut,
    //     },
    // },
    default: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: 'easeOut',
        },
    },
}


const styles: StyleSheetCSS = {
    icon: {
        background: 'white',
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
    container: {
        background: 'black',
        padding: 4,
        paddingLeft: 16,
        paddingRight: 16,
        textAlign: 'center',
        display: 'flex',
        marginBottom: 4,
        boxSizing: 'border-box',
    },
    wrapper: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    blinkingContainer: {
        // width: 100,
        // height: 100,
        marginLeft: 8,
        paddingBottom: 2,
        paddingRight: 4,
    },
    lastRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    lastRowChild: {
        marginRight: 4,
    },
}

export default InfoOverlay
