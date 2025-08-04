// src/services/githubService.js

export const searchGithubUsers = async ({ username, location = '', minRepos = 0 }) => {
  let query = `${username}`;

  // Add filters if provided
  if (location) {
    query += `+location:${location}`;
  }
  if (minRepos > 0) {
    query += `+repos:>=${minRepos}`;
  }

  const url = `https://api.github.com/search/users?q=${query}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('GitHub API error:', error);
    throw new Error('Failed to fetch GitHub users');
  }
};
