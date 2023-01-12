import React, {ChangeEvent, SyntheticEvent, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {postComment} from '../../store/api-actions';
import {UserComment} from '../../types/user-comment';
import {APIRoute} from '../../const';
import {errorHandle} from '../../services/error-handle';

const MAX_LEN_REVIEW = 400;
const MIN_LEN_REVIEW = 50;

function ReviewForm(): JSX.Element{
  const id = Number(useParams().id);

  const [reviewData, setReviewData] = React.useState({
    rating: 0,
    review: ''
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const [isRatingFilled, setIsRatingFilled] = useState(false);
  const [isReviewFilled, setIsReviewFilled] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const reviewTextChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setReviewData({ ...reviewData, [name]: value });
    if (evt.target.value.length > MIN_LEN_REVIEW && evt.target.value.length < MAX_LEN_REVIEW) {
      setIsReviewFilled(true);
      setIsDisabled(false);
    } else {
      setIsReviewFilled(false);
      setIsDisabled(true);
    }
  };

  const ratingChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setReviewData({ ...reviewData, [name]: +value });
    if (evt.target.value) {
      setIsRatingFilled(true);
      setIsDisabled(false);
    } else {
      setIsRatingFilled(false);
      setIsDisabled(true);
    }
  };

  const submitHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();
    setIsDisabled(true);
    onSubmit({comment: reviewData.review, rating: reviewData.rating, filmId: id.toString()});
  };

  const onSubmit = (commentData: UserComment) => {
    dispatch(postComment(commentData))
      .then(() => {
        setIsDisabled(false);
        navigate(`${APIRoute.Films}/${id}`);
      })
      .catch((err) => {
        setIsDisabled(false);
        errorHandle(`Can't post a form: ${err.message}`);
      });
  };

  return (
    <div className='add-review'>
      <form onSubmit={submitHandler} className='add-review__form'>
        <div className='rating'>
          <div className='rating__stars'>
            {Array.from({ length: 10 }, (_, i) => i + 1)
              .reverse()
              .map((number) => (
                <React.Fragment key={number}>
                  <input
                    className='rating__input'
                    id={`star-${number}`}
                    type='radio'
                    name='rating'
                    value={number}
                    onChange={ratingChangeHandler}
                  />
                  <label className='rating__label' htmlFor={`star-${number}`}>
                    {`Rating ${number}`}
                  </label>
                </React.Fragment>
              ))}
          </div>
        </div>

        <div className='add-review__text'>
          <textarea
            className='add-review__textarea'
            name='review'
            id='review-text'
            placeholder='Review text'
            onChange={reviewTextChangeHandler}
          >
          </textarea>
          <div className='add-review__submit'>
            <button
              className='add-review__btn'
              type='submit'
              disabled={isDisabled || !isRatingFilled || !isReviewFilled}
            >
              Post
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
