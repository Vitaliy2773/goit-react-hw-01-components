import Profile from "./componentUserTask1/Profile";
import Statistics from "./componentsStatisticsTask2/Statistics";
import user from "./componentUserTask1/user.json";
import dataStatistics from "./componentsStatisticsTask2/data.json"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
  userName={user.username}
  tag={user.tag}
  location={user.location}
  userPhotoUrl={user.avatar}
        stats={user.stats} />
      
      <Statistics
        title={dataStatistics.title}
        // stats={dataStatistics.stats}
      />
    </div>
  );
};
