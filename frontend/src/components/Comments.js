import itinerariesActions from "../redux/actions/itinerariesActions"
import { useRef, useState } from "react"
import { connect } from "react-redux"
import swal from 'sweetalert'

function Comments(props) {
    const editComment = useRef()
    const [edit, setEdit] = useState(false)

    function handleEditComment(e) {
        console.log(e)
        e.preventDefault()
        props.editComments(
            props.comment._id,
            editComment.current.value
        )
        console.log(editComment.current.value)
        editComment.current.value = ""
    }

    function deleteComment() {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this imaginary file!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            props.deleteComments(
              props.comment._id,
            )
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            })
          } else {
            swal("Your imaginary file is safe!")
          }
        })
      }

    return (
        <div>
            {props.comment.user && (
                <div className="conteinerComments">
                    <img className="imgComment" src={props.comment.user.photo} />
                    <p>{props.comment.message}</p>
                </div>
            )}
            {props.comment.user && props.comment.user._id === props.user._id &&
                (<div className="editAndDelete">
                    <p onClick={() => { setEdit(!edit) }}>Edit </p>
                    {edit && (
                        <>
                            <form onSubmit={handleEditComment}>
                                <input
                                    ref={editComment}
                                    type="text"
                                    className="comentar"
                                    placeholder="change your comment"
                                />
                                <input type="submit" value="Submit" />
                            </form>
                            <p className="btnDelete" onClick={deleteComment}>Delete X</p>
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
