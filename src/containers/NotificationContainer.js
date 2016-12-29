import { connect } from 'react-redux'
import { hideNotification } from '../store/notifications'
import Notification from '../components/Notification'

const mapDispatchToProps = {
  close : () => hideNotification()
}

const mapStateToProps = (state) => ({
  isShown: state.notifications.isShown,
  message: state.notifications.message
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
