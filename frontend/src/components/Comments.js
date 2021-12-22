import itinerariesActions from "../redux/actions/itinerariesActions"
import { useRef } from "react"
import {connect} from "react-redux"

function Comments(props) {
    const editComment = useRef()

    function handleEditComment(e){ 
        e.preventDefault()
            props.editComments(
                props.comment._id,
                editComment.current.value
            )
            editComment.current.value = ""
    }

    return(
        <div>
            {props.comment.user && (
            <div className="conteinerComments">
                <img className="imgComment" src={props.comment.user.photo} />
                <p>{props.comment.message}</p>    
            </div>
            )}
            {props.comment.user && props.comment.user._id === props.user._id &&
                (<form onSubmit={handleEditComment}>
                    <input
                        ref={editComment}
                        type="text"
                        className="comentar"
                        placeholder="escribime algo"
                        />
                    <input type="submit" value="Submit" />
                </form>
                )
            }
        </div>
    )
}
const mapDispatchToProps = {
    editComments: itinerariesActions.editComments,
    deleteComments: itinerariesActions.deleteComments,
}
export default connect(null, mapDispatchToProps)(Comments)
