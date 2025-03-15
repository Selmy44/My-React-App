import PropTypes from 'prop-types'
function UserGreeting(props) {
    return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> : 
                              <h2 className="login-prompt">Please log in to continue</h2>);
    
    // this is another way to write a condition
    const welcomeMessage = <h2 className="welcome-message">
                            Welcome {props.username}</h2>
    const loginPrompt = <h2>
                        Please log in to continue
                        </h2>
    return (props.isLoggedIn ? welcomeMessage : loginPrompt);
    // this is another way to write a condition
    if (props.isLoggedIn) {
        return <h2>Welcome {props.username}</h2>
    }
    else {
        return <h2>Please log in to continue</h2>
    }
}
UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting