import { connect } from "react-redux";
import { appStateType } from "../../redux/store";
import Login from "./Login";

const LoginContainer: React.FC = () => {
    return (
        <Login/>
    )
}

let mapStateToProps = (state: appStateType) => ({

});

export default connect(mapStateToProps, {})(LoginContainer);