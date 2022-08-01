import ListBets from '../components/feed/ListBets';
import Layout from './LayoutDashboard';

function Feed(): JSX.Element {
  return (
    <Layout>
      <div className="flex justify-between px-7 py-12">
        <div className="w-9/12">
          <ListBets />
        </div>
        <div>
          <div>
            <p>Stats par caté</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Feed;
