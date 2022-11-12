import { Comment } from '../../types/types';
import RewiewItem from '../rewiew-item/rewiew-item';
import CommentSendForm from '../../components/comment-send-form/comment-send-form';

type Props = {
  comments: Comment[];
}

export default function RewiewsList({ comments }: Props): JSX.Element {

  return (
    <section className='property__reviews reviews'>
      <div>
        <h2 className='reviews__title'>Reviews &middot; <span className='reviews__amount'>{comments.length}</span></h2>

        <ul className='reviews__list'>
          {comments.map((comment) => (
            <RewiewItem
              comment={comment} key={comment.id}
            />
          ))}
        </ul >
      </div>
      <CommentSendForm />
    </section>
  );
}

