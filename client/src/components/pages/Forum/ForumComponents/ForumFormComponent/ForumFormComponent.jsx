import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import {
  createPostUser,
  updatePost,
} from "../../../../Redux/actions/postsActions";
import { useHistory } from "react-router-dom";
import "./form.css";
const ForumFormComponent = ({ currentId, setCurrentId }) => {
  const history = useHistory();
  const [postData, setPostData] = useState({
    title: "",
    message: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((p) => p._id === currentId) : null
  );
  const token = localStorage.getItem("jwtToken");
  const user = jwt_decode(token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(
        updatePost(currentId, {
          ...postData,
          fullName: `${user?.firstName} ${user?.lastName}`,
          email: user?.email,
        })
      );
    } else {
      dispatch(
        createPostUser(
          {
            ...postData,
            fullName: `${user?.firstName} ${user?.lastName}`,
            email: user?.email,
          },
          history
        )
      );
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      messageType: "",
    });
  };
  return (
    <div id="form-div">
      <form onSubmit={handleSubmit} className="forum-form" id="form1">
        <p className="name">
          <input
            name="title"
            type="text"
            className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
            placeholder="כותרת..."
            value={postData.title}
            id="name"
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </p>
        <p className="text">
          <input
            name="message"
            className="validate[required,length[6,300]] feedback-input"
            id="comment"
            placeholder="תוכן הפוסט..."
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          ></input>
          <select
            onSelect={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          >
            <option>נושא ההודעה</option>
            <option>{"interview"}</option>
            <option>{"information"}</option>
            <option>{"tips"}</option>
          </select>
        </p>

        <div className="submit">
          <button type="submit" value="SEND" id="button-forum-submit">
            {currentId ? "ערוך" : "שלח"}
          </button>
          <div className="ease"></div>
        </div>
      </form>
    </div>
  );
};

export default ForumFormComponent;
