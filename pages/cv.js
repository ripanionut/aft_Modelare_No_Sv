import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from "../components/BasePage"
import { useGetUser } from "@/actions/user";
import withAuth from "@/hoc/withAuth";


const Cv = () => {
  const { data,  loading } = useGetUser();

    return (
      <BaseLayout user={data} loading={loading}>
      <BasePage>
      <h2>Cv</h2>
      </BasePage>
    </BaseLayout>
    )
  }
  

  export default withAuth(Cv)();
