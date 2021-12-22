import { Card } from "react-bootstrap"
import { useEffect, useState } from "react"
import { AiOutlineHeart } from "react-icons/ai"
import { AiOutlineDollarCircle } from "react-icons/ai"
import { connect } from "react-redux"
import activitiesActions from "../redux/actions/activitiesActions"
import itinerariesActions from "../redux/actions/itinerariesActions"
import { toast } from 'react-toastify'
import Comments from "./Comments"
import { useRef } from "react"

function Itinerary(props) {
  const heart = <AiOutlineHeart />
  const plata = <AiOutlineDollarCircle />

  const [liked, setliked] = useState("")
  const [likes, setlikes] = useState("")
  const [display, setDisplay] = useState(false)

  const handleClick = () => {
    setDisplay(!display)
    props.getActivities(props.itinerary._id)
    props.getAllComments()
  }

  const comment = useRef()

  function handleComment(e) {
    e.preventDefault()
    props.postComments(
      props.itinerary._id,
      props.user._id,
      comment.current.value
    )
    comment.current.value = ""
  }

   function deleteComment(id) {
    props.deleteComment(id),
    getComments()
   }

  useEffect(() => {
    !props.user && setliked(false)
    if (props.user) {

      setliked(props.itinerary.likes.some((id) => id === props.user._id))
    }
  }, [props.user])

  if (props.itinerary && liked === "" && likes === "") {
    if (props.user) {
      setliked(props.itinerary.likes.some((id) => id === props.user._id))

    }
    setlikes(props.itinerary.likes.length)
  }

  function handleLike() {
    if (localStorage.getItem("token")) {
      setliked(!liked)
      liked ? setlikes(likes - 1) : setlikes(likes + 1)
      props.likes(props.user._id, props.itinerary._id, props.params)
    } else {
      toast.warning("You must be loged to do this action", {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }

  function money(price) {
    return Array.from({ length: price })
  }

  return (
    <div key={props.index} className="itinerariesAll">
      {props.itinerary && (
        <Card className="card-iti">
          <Card.Header className="title-cardIti">{props.itinerary.title}</Card.Header>
          <Card.Body className="conteinerCardBody">
            <div className="card-iti-content">
              <div className="user">
                <img
                  className="image-card-iti"
                  variant="top"
                  alt="card_city"
                  src={props.itinerary.src}
                />
                <p className="name-only">{props.itinerary.name}</p>
              </div>
              <div className="body-content">
                <div className="itinerary-text">
                  <span> Duration : {props.itinerary.duration}hs</span>
                </div>
                <div className="likes">
                  <p>{likes}</p><p onClick={() => handleLike()}>
                    {liked ? <img className="heartlike" src="../assets/like-full.png"></img> :
                      <img className="heartlike" src="../assets/like-empty.png"></img>}

                  </p>
                </div>

                <div className="macaGrax">
                  <p>Price: </p>
                  {money(props.itinerary.price).map((index) => (
                    <span key={index} className="cash">
                      {plata}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="hashtags">
              {props.itinerary.hashtags.map((hash) => (
                <div className="tag"> #{hash}</div>
              ))}
            </div>

            <div className="buttonViewMore">
              {display &&
                props.activities[0] &&
                props.activities.map((activity) => {
                  if (activity.itinerary._id === props.itinerary._id) {
                    return (
                      <div className="activity">
                        <div
                          className="activityPic"
                          style={{ backgroundImage: `url("${activity.image}")` }}
                        >
                          <h5 className="title-act">{activity.title}</h5>
                        </div>
                      </div>
                    )
                  }
                })}
            </div>
            <div>
              {display && (props.comments && props.comments.map(comment => {
                if (comment.itinerary === props.itinerary._id) {
                  return (
                    <div>
                      <Comments comment={comment} itinerary={props.itinerary._id} user={props.user} />

                    </div>
                  )
                }
              }
              ))
              }
              {display && (
                <div className="comment-bg">
                  {<form onSubmit={handleComment}>
                    <div className="leaveComment">
                    <input
                      ref={comment}
                      type="text"
                      className="comment-input"
                      placeholder="Leave your comment here"
                    />
                    <div className='submitBtn'>
                      <input className='btn-submit' type="submit" value="Submit" />
                    </div>
                    </div>
                  </form>}
                </div>
              )}
            </div>
            <button onClick={handleClick} className="btn-warning">
              {" "}
              {display ? "View less" : "View more"}
            </button>
          </Card.Body>
        </Card>
      )}
    </div>
  )
}

const mapDispatchToProps = {
  getActivities: activitiesActions.getActivities,
  likes: itinerariesActions.likes,
  getAllComments: itinerariesActions.getAllComments,
  postComments: itinerariesActions.postComments,
  deleteComment: itinerariesActions.deleteComment
}

const mapStateToProps = (state) => {
  return {
    comments: state.itinerariesReducer.comments
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)
