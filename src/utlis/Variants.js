export const fadeInLeftVariant = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'tween', duration: 1 } },
}

export const fadeInRightVariant = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'tween', duration: 1 } },
}

export const fadeInDownVariant = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'tween', duration: 1 } },
}

export const fadeInUpVariant = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'tween', duration: 1 } },
}

export const slideInLeftVariant = {
    hidden: { x:'-100vh', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'tween', duration: 1 } },
    exit: { x: '-100vh', opacity: 0, transition: { type: 'tween', duration: 0.5 }}
}

export const slideInRightVariant = {
    hidden: { x:'100vh', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'tween', duration: 1 } },
    exit: { x: '100vh', opacity: 0, transition: { type: 'tween', duration: 0.5 }}
}