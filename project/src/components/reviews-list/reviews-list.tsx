import { Comment } from '../../types/types';
import RewiewItem from '../rewiew-item/rewiew-item';

type Props = {
  comment: Comment;
}

export default function RewiewsList({ comment }: Props): JSX.Element {

  return (
    <ul className='reviews__list'>
      <RewiewItem
        comment={comment}
      />
    </ul >

  );
}

