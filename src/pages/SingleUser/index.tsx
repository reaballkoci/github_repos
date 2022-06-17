import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RepositoryCard from '../../components/RepositoryCard';
import { Repository } from '../../models/RepositoriesModel';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchRepositories } from '../../store/repositoriesAction';
import './style.scss';

const SingleUser = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const repositories = useAppSelector((state) => state.repositories.repositories);

  useEffect(() => {
    dispatch(fetchRepositories(params.id!, 1));
  }, [params.id]);

  return (
    <>
      <img src={repositories[0]?.owner.avatar_url} alt='avatar' className='avatar' />
      <div className='author-name'> {repositories[0]?.owner.login}</div>
      <div className='repositories'>
        {repositories?.map((repository: Repository) => (
          <RepositoryCard key={repository?.name} repository={repository} />
        ))}
      </div>
    </>
  );
};

export default SingleUser;
