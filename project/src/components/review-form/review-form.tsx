import React, {ChangeEvent, SyntheticEvent} from 'react';

function ReviewForm(): JSX.Element{
  const [reviewData, setReviewData] = React.useState({
    rating: 0,
    review: ''
  });

  const reviewTextChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const ratingChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setReviewData({ ...reviewData, [name]: +value });
  };

  const submitHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();
  };

  return (
    <div className='add-review'>
      <form onSubmit={submitHandler} className='add-review__form'>
        <div className='rating'>
          <div className='rating__stars'>
            {Array.from({ length: 10 }, (_, i) => i + 1)
              .reverse()
              .map((id) => (
                <>
                  <input
                    className='rating__input'
                    id={`star-${id}`}
                    type='radio'
                    name='rating'
                    value={id}
                    onChange={ratingChangeHandler}
                  />
                  <label className='rating__label' htmlFor={`star-${id}`}>
                    {`Rating ${id}`}
                  </label>
                </>
              ))}
          </div>
        </div>

        <div className='add-review__text'>
          <textarea
            className='add-review__textarea'
            name='review-text'
            id='review-text'
            placeholder='Review text'
            onChange={reviewTextChangeHandler}
          >
          </textarea>
          <div className='add-review__submit'>
            <button className='add-review__btn' type='submit'>Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
