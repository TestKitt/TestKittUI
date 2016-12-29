import React, { PropTypes } from 'react'
import style from './Canvas.scss'
import Subheader from 'components/Subheader'

export const Canvas = (props) => (
  <div className={style.canvas}>
    <div>
      <Subheader text="Given" />
      {
        props.given.length === 0
          ? <p>No steps in this test yet</p>
          : <div>Render step</div>
      }
    </div>
    <div>
      <Subheader text="When" />
      {
        props.when.length === 0
          ? <p>No steps in this test yet</p>
          : <div>Render step</div>
      }
    </div>
    <div>
      <Subheader text="Then" />
      {
        props.then.length === 0
          ? <p>No steps in this test yet</p>
          : <div>Render step</div>
      }
    </div>
  </div>
)

Canvas.propTypes = {
  given: PropTypes.array,
  when: PropTypes.array,
  then: PropTypes.array
}

Canvas.defaultProps = {
  given: [],
  when: [],
  then: []
}

export default Canvas
