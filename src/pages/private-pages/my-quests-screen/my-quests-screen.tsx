import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchMyQuests } from '../../../store/api-actions';
import { selectMyQuests } from '../../../store/data-process/selectors';
import MyQuestsList from '../../../components/my-quests-list/my-quests-list';
import NoQuests from '../../../components/no-quests/no-quests';

export default function MyQuestsScreen() {
  const dispatch = useAppDispatch();
  const myQuests = useAppSelector(selectMyQuests);

  useEffect(() => {
    dispatch(fetchMyQuests());
  }, [dispatch]);

  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"/>
          <img
            src="img/content/maniac/maniac-bg-size-m.jpg"
            srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
            width="1366"
            height="1959"
            alt=""
          />
        </picture>
      </div>
      <div className="container">
        {
          myQuests.length === 0
            ? <NoQuests block="my-quests"/>
            : <MyQuestsList myQuests={myQuests}/>
        }
      </div>
    </main>
  );
}
