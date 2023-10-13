import Profile from './componentUserTask1/Profile';
import Statistics from './componentsStatisticsTask2/Statistics';
import FriendList from './componentsFriendListTask3/FriendList';
import Transaction from './componentsTransactionHistoryTask4/Transactions';
import user from './componentUserTask1/user.json';
import dataStatistics from './componentsStatisticsTask2/data.json';
import friendsJson from './componentsFriendListTask3/friends.json';
import transactions from './componentsTransactionHistoryTask4/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        userPhotoUrl={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={dataStatistics} />
      <FriendList friends={friendsJson} />
      <Transaction items={transactions} />
    </div>
  );
};
