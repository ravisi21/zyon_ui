import React, { useEffect, useState, useMemo } from "react";
import { post } from "../../api/base";

const COMPETITION_ID = "1234";

// Medal/Crown component
const WinnerCrown = ({ rank }) => {
  if (rank > 3) return null;

  const colors = {
    1: "#FFD700", // Gold
    2: "#C0C0C0", // Silver
    3: "#CD7F32", // Bronze
  };

  const trophies = {
    1: "🥇", // Gold trophy
    2: "🥈", // Silver trophy
    3: "🥉", // Bronze trophy
  };

  return (
    <div className="flex items-center">
      <div
        className="flex items-center justify-center w-6 h-6 rounded-full mr-2"
        style={{ backgroundColor: colors[rank] }}
      >
        <span className="text-xs font-bold text-black">#{rank}</span>
      </div>
      <span className="text-lg">{trophies[rank]}</span>
    </div>
  );
};

const LeaderboardStats = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [accountId, setAccountId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Find the user's entry and rank
  const userEntry = useMemo(() => {
    if (!accountId) return null;
    return (
      leaderboard.find((entry) => entry.userAccount?.id === accountId) || null
    );
  }, [leaderboard, accountId]);

  const userRank = useMemo(() => {
    if (!accountId) return null;
    const idx = leaderboard.findIndex(
      (entry) => entry.userAccount?.id === accountId,
    );
    if (idx === -1) return -1;
    return idx + 1;
  }, [leaderboard, accountId]);

  // Top 10 entries
  const top10 = useMemo(() => leaderboard.slice(0, 10), [leaderboard]);
  const isUserInTop10 = userRank && userRank <= 10;

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await post("/leaderboards/leaderboardByCompetition", {
          competitionId: COMPETITION_ID,
        });
        setLeaderboard(data.leaderboard || []);
        setAccountId(data.accountId);
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  if (loading)
    return (
      <div className="bg-dark-bg-2 rounded-lg p-3 flex-1 font-family-roboto overflow-hidden">
        Loading leaderboard...
      </div>
    );
  if (error)
    return (
      <div className="bg-dark-bg-2 rounded-lg p-3 flex-1 font-family-roboto overflow-hidden text-red-500">
        Error: {error}
      </div>
    );

  return (
    <div className="bg-dark-bg-2 rounded-lg p-3 flex-1 font-family-roboto overflow-hidden flex flex-col items-center">
      {/* Top 10 Table */}
      <div className="w-full max-w-2xl bg-dark-bg rounded-xl shadow-lg p-4 border border-neutral-700">
        <div className="text-base font-semibold text-blue-400 mb-4 text-center">
          🏆 Top 10 Leaderboard
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-700">
                <th className="py-3 px-3 text-neutral-400 font-bold">Rank</th>
                <th className="py-3 px-3 text-neutral-400 font-bold">
                  Account Name
                </th>
                <th className="py-3 px-3 text-neutral-400 font-bold">
                  Total Value
                </th>
              </tr>
            </thead>
            <tbody>
              {top10.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center py-8 text-neutral-400">
                    No data available
                  </td>
                </tr>
              )}
              {top10.map((entry, idx) => {
                const isCurrentUser = entry.userAccount?.id === accountId;
                const rank = idx + 1;

                return (
                  <tr
                    key={entry.userAccount?.id + idx}
                    className={
                      isCurrentUser
                        ? "bg-gradient-to-r from-green-400 to-green-600 border-2 border-green-300 shadow-lg"
                        : rank <= 3
                          ? "bg-gradient-to-r from-blue-900 to-blue-800"
                          : idx % 2 === 0
                            ? "bg-dark-bg"
                            : "bg-dark-bg-2"
                    }
                  >
                    <td className="py-3 px-3 flex items-center">
                      {rank <= 3 ? (
                        <WinnerCrown rank={rank} />
                      ) : (
                        <div className="flex items-center justify-center w-6 h-6 rounded-full mr-2 bg-neutral-600">
                          <span className="text-xs font-bold text-white">
                            #{rank}
                          </span>
                        </div>
                      )}
                    </td>
                    <td
                      className={`py-3 px-3 font-semibold ${isCurrentUser ? "text-white" : "text-neutral-200"}`}
                    >
                      {entry.userAccount?.accountDisplayName ||
                        entry.userAccount?.id ||
                        "Unknown"}
                    </td>
                    <td
                      className={`py-3 px-3 font-bold ${isCurrentUser ? "text-white" : "text-neutral-200"}`}
                    >
                      {entry.totalValue.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                );
              })}

              {/* Show user's position as 11th row if not in top 10 */}
              {!isUserInTop10 && userEntry && (
                <tr className="bg-gradient-to-r from-green-400 to-green-600 border-2 border-green-300 shadow-lg">
                  <td className="py-3 px-3 flex items-center">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full mr-2 bg-neutral-600">
                      <span className="text-xs font-bold text-white">
                        #{userRank}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-3 font-semibold text-white">
                    {userEntry.userAccount?.accountDisplayName ||
                      userEntry.userAccount?.id ||
                      "You"}
                  </td>
                  <td className="py-3 px-3 font-bold text-white">
                    {userEntry.totalValue.toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardStats;
