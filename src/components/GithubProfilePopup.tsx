import React, { useState, useEffect, useRef } from 'react';

interface GitHubUser {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface GitHubProfilePopupProps {
  usernames: string[];
  children: React.ReactNode;
}

const GitHubProfilePopup: React.FC<GitHubProfilePopupProps> = ({ usernames, children }) => {
  const [users, setUsers] = useState<(GitHubUser | null)[]>([]);
  const [loading, setLoading] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const userPromises = usernames.slice(0, 3).map(async (username) => {
          const response = await fetch(`https://api.github.com/users/${username}`);
          if (response.ok) {
            return await response.json();
          }
          return null;
        });
        const fetchedUsers = await Promise.all(userPromises);
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching GitHub users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [usernames]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsHovering(true), 300);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsHovering(false), 300);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovering && (
        <div className="absolute z-10 p-2 sm:p-4 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-md shadow-lg bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-gray-200 w-[280px] sm:w-auto max-w-[90vw]">
          {/* Tooltip arrow */}
          <div className="absolute w-3 h-3 bg-gray-900 border-r border-b border-gray-700 transform rotate-45 -bottom-1.5 left-1/2 -translate-x-1/2"></div>
          {loading ? (
            <p className="text-gray-300">Loading...</p>
          ) : users.length > 0 ? (
            <div className={`flex flex-col sm:flex-row ${users.length > 1 ? 'gap-4' : ''}`}>
              {users.map((user) => (
                user && (
                  <div key={user.login} className="flex flex-col items-center gap-1 w-full sm:w-auto max-w-[200px]">
                    <img src={user.avatar_url} alt={user.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-2 sm:mb-3 border border-neutral-100/25" />
                    <h3 className="lg:text-lg sm:text-md font-semibold text-white mb-1 text-center">{user.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-300 mb-1 sm:mb-2">@{user.login}</p>
                  
                  </div>
                )
              ))}
            </div>
          ) : (
            <p className="text-gray-300">Failed to load user data</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default GitHubProfilePopup;
