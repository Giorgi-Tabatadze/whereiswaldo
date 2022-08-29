import { useState, useEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebase-config";

function LeaderboardList(props) {
  const [leaderboard, SetLeaderboard] = useState([]);
  const { gameId } = props;
  const leaderBoardRef = collection(db, `${gameId}Leaderboard`);

  ///  Hooks ////////////////////////////////////////////////////////////
  useEffect(() => {
    const getLeaderboardInfo = async function () {
      const data = await getDocs(leaderBoardRef);
      console.log("gotdata");
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
      }));
      // eslint-disable-next-line array-callback-return, consistent-return
      const sortedData = filteredData.sort((a, b) => {
        if (a.time < b.time) {
          return -1;
        }
        if (a.time > b.time) {
          return 1;
        }
        if (a.time === b.time) {
          return 0;
        }
      });

      SetLeaderboard(sortedData);
    };

    getLeaderboardInfo();
  }, [gameId]);

  const table = (
    <table>
      <thead>
        <tr>
          <th>Place</th>
          <th>Name</th>
          <th>time</th>
        </tr>{" "}
      </thead>
      <tbody>
        {leaderboard.map((player, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={`${player.time}${index}`}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.time}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return table;
}

export default LeaderboardList;
