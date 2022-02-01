import { connect } from "react-redux";
import { appStateType } from "../../redux/store";
import Login from "./Login";

type Props = {

}

const LoginContainer: React.FC<Props> = ({  }) => {
    return (
        <Login/>
    )
}

let mapStateToProps = (state: appStateType) => ({

});

export default connect(mapStateToProps, {  })(LoginContainer);