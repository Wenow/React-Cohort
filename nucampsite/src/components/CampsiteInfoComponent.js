import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

class CampsiteInfoComponent extends Component {
  renderCampsite(campsite) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
    console.log(comments);
    if (comments) {
      // comments !== null
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map((comment) => {
            return (
              <div>
                <p>{comment.text}</p>
                -- {comment.author}{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div>No comments available</div>;
    }
  }

  //   let arr = ["comment1", "c2", "c3"]
  //   let arr = ["<div><p>c1</p> --author date </div>", "<div><p>c2</p> --author date </div>", "<div><p>c3</p> --author date </div>"]

  render() {
    if (this.props.campsite) {
      return (
        <div className="row">
          {this.renderCampsite(this.props.campsite)}
          {this.renderComments(this.props.campsite.comments)}
        </div>
      );
    } else {
      return <div>No campsite selected yet</div>;
    }
  }
}

export default CampsiteInfoComponent;

