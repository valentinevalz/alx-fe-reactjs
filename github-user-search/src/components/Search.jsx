import { searchGithubUsers } from '../services/githubService';

const fetchResults = async () => {
  if (!query.trim()) return;

  setLoading(true);
  setError(null);

  try {
    const users = await searchGithubUsers({
      username: query,
      location: '',      // You can later add UI to input this
      minRepos: 0        // Update if needed
    });

    setResults(users);
  } catch (err) {
    setError('Error fetching data');
  }

  setLoading(false);
};
