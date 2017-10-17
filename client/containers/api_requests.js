import React, {Component} from 'react'
import { connect } from 'react-redux'

class ApiRequests extends Component {
  render() {
    const { requests, responses } = this.props
		return (
      <div>
        <div>
          {requests && JSON.stringify(requests.last())}
        </div>
        <div>
          {responses && JSON.stringify(responses.last())}
        </div>
			</div>
		)
	}
}

export default connect(
	(state, props) => {
		return {
			requests: state.getIn(['apiRequests', 'requests']),
			responses: state.getIn(['apiRequests', 'responses'])
		}
	}
)(ApiRequests)
