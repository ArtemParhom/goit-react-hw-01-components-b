import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../user.json';
import statsData from '../data.json';
import friendsData from '../friends.json';
import transactions from '../transactions.json';

const profileUser = user;

export const App = () => {
  return (
    <div
      style={{
         padding: '150px',
        display: 'flex',
         flexDirection: 'column',
        justifyContent: 'center',
         alignItems: 'center',
         fontSize: 40,
        color: '#010101',
       }}
    >
      React homework template
      <Profile
        username={profileUser.username}
        tag={profileUser.tag}
        location={profileUser.location}
        avatar={profileUser.avatar}
        stats={profileUser.stats}
      />
      <Statistics
        title="Upload stats"
        stats={statsData}
      />
      <FriendList
        friends={friendsData} />
      <TransactionHistory
        items={transactions} />
    </div>

  );
};




