/// <reference types="react-scripts" />
interface GitUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

interface GitRepo {
  id: number;
  name: string;
  owner: GitUser;
  html_url: string;
  description: string;
  created_at: string;
  git_url: string;
  stargazers_count: number;
  language: string;
}

interface Response {
  total_count: number;
  items: GitRepo[];
}
