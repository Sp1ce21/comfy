import { connect } from "react-redux"
import { appStateType } from "../../redux/store"
import Home from "./Home"

type Props = {

}

const HomeContainer: React.FC<Props> = ({  }) => {
    return (
        <Home/>
    )
}

let mapStateToProps = (state: appStateType) => ({

});

export default connect(mapStateToProps, {  })(HomeContainer);
