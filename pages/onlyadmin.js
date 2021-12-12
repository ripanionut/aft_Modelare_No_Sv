import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import withAuth from "@/hoc/withAuth";

const Onlyadmin = ({ user, loading }) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <h2>I am Secret - hello {user.name}</h2>
      </BasePage>
    </BaseLayout>
  );
};

// High Order Component - HOC  ->  tage a component and return a new /br
// comp with some extra functionality

export default withAuth(Onlyadmin)('admin');
