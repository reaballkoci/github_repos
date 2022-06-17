import { Circle, GitFork, Star } from 'phosphor-react';
import { Repository } from '../models/RepositoriesModel';
import './RepositoryCard.scss';

interface RepositoryCardProps {
  repository: Repository;
}
const RepositoryCard = ({
  repository: { stargazers_count, language, forks, name, owner, description },
}: RepositoryCardProps) => {
  return (
    <>
      <div className='repo-card'>
        <span className='repo-name'>
          {name}/{owner.login}
        </span>
        <div>{description == null ? 'No description' : description}</div>
        <div className='information'>
          <div className='icon'>
            <Circle />
            {language == null ? 'Unknown' : language}
          </div>
          <div className='icon'>
            <GitFork />
            {forks}
          </div>
          <div className='icon'>
            <Star />
            {stargazers_count}
          </div>
        </div>
      </div>
    </>
  );
};

export default RepositoryCard;
