import itinerariesActions from "../redux/actions/itinerariesActions"
import { useRef, useState } from "react"
import { connect } from "react-redux"
import swal from 'sweetalert'
import {BsTrash} from "react-icons/bs"

function Comments(props) {
    const editComment = useRef()
    const [edit, setEdit] = useState(false)
    const trash = < BsTrash />

    function handleEditComment(e) {
        e.preventDefault()
        props.editComments(
            props.comment._id,
            editComment.current.value
        )
        editComment.current.value = ""
    }

    function deleteComment() {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this comment!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            props.deleteComments(
              props.comment._id,
            )
            swal("Your comment has been deleted!", {
              icon: "success",
            })
          } else {
            swal("Your comment is safe!")
          }
        })
      }

    return (
        <div className="allComments">
            {props.comment.user && (
                <div className="conteinerComments">
                    <img className="imgComment" src={props.comment.user.photo} />
                    <p className="commentText">{props.comment.message}</p>
                </div>
            )}
            {props.comment.user && props.comment.user._id === props.user._id &&
                (<div className="editAndDelete">
                    <p className="editBtn" onClick={() => { setEdit(!edit) }}>Edit/Delete </p>
                    {edit && (
                        <>
                            <form onSubmit={handleEditComment}>
                                <input
                                    ref={editComment}
                                    type="text"
                                    className="change-input"
                                    placeholder=" change your comment"
                                />
                                <input className="btn-submit" type="submit" value="Modify" />
                            </form>
                            <p className="btnDelete" onClick={deleteComment}> {trash} </p>
                        </>
                    )}
                </div>
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
