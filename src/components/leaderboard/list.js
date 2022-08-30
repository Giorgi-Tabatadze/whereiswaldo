import { useState, useEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
import styled from "styled-components";
import { db } from "../../firebase-config";

const Td = styled.td``;
const Th = styled.th`
  text-align: start;
  font-size: 20px;
  background-color: black;
`;
const Tr = styled.tr`
  display: grid;
  grid-template-columns: 200px 400px 400px;
  border: 1px solid white;
`;

function LeaderboardList(props) {
  const [leaderboard, SetLeaderboard] = useState([]);
  const { gameId, setLoading } = props;
  const leaderBoardRef = collection(db, `${gameId}Leaderboard`);

  ///  Hooks ////////////////////////////////////////////////////////////
  useEffect(() => {
    const getLeaderboardInfo = async function () {
      setLoading(true);
      const data = await getDocs(leaderBoardRef);
      setLoading(false);

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
        <Tr>
          <Th>Place</Th>
          <Th>Name</Th>
          <Th>Time</Th>
        </Tr>{" "}
      </thead>
      <tbody>
        {leaderboard.map((player, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Tr key={`${player.time}${index}`}>
              <Td>{index + 1}</Td>
              <Td>{player.name}</Td>
              <Td>{player.time}</Td>
            </Tr>
          );
        })}
      </tbody>
    </table>
  );

  return table;
}

export default LeaderboardList;
