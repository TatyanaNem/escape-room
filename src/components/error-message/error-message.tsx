import { useAppSelector } from '../../hooks';
import { selectErrorMessage } from '../../store/app-process/selectors';

export default function ErrorMessage() {
  const error = useAppSelector(selectErrorMessage);

  return (error) ? <div className='error-message'>{error}</div> : null;
}
