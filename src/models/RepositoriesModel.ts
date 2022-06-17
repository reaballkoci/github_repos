import { UserModel } from './UserModel';

export interface Repository {
  owner: UserModel;
  name: string;
  description: string;
  forks: number;
  language: string;
  stargazers_count: number;
}

export interface RepositoriesState {
  repositories: Repository[];
}
