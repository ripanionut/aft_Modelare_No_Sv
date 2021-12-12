import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { useGetUser } from "@/actions/user";

export default function Blogs() {
  const { data,  loading } = useGetUser();

  return (
    <BaseLayout user={data} loading={loading}>
      {" "}
      <BasePage>
        <h2>BLOGS</h2>
      </BasePage>
    </BaseLayout>
  );
}
