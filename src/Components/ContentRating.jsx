
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRatings: 0,
        handlelikes:() => {
            this.setState((prevState) => ({
                likes: prevState.likes  + 1,
                totalRatings: prevState.totalRatings + 1
            }));
        },
        handledislikes:() => {
            this.setState((prevState) => ({
                dislikes: prevState.dislikes + 1,
                totalRatings: prevState.totalRatings + 1
            }));
        }
    }
  }
  render() {
    return (
     <>
     <div className='content-rating'>
        <p>
            THE TEXT TO RATE
        </p>
        <div className='rating-buttons'>
            <button className="like-button" onClick={this.state.handlelikes}>
                Like ({this.state.likes})
            </button>
            <button className="dislike-button" onClick={this.state.handledislikes}>
                Dislike ({this.state.dislikes})
            </button>
        </div>
        <div className='totals'>
            The Total is:
            <span className='value_of_total_rating'>{this.state.totalRatings}</span>
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
