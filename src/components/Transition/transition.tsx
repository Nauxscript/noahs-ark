import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'


// type TransitionProps = CSSTransitionProps & {
//   animation?: AnimationName,
// }

export interface TransitionProps {
  animation?: AnimationName;
  wrapper?: boolean;
}

export const Transition:React.FC<TransitionProps & CSSTransitionProps> = (props) => {
  const {
    animation,
    wrapper,
    children,
    classNames,
    ...restProps
  } = props
  return (
    <CSSTransition
      classNames = { classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true
}

export default Transition