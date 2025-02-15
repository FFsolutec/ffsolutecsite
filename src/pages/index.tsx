import BasicLayout from "@/@core/layout/BasicLayout";
import HomePageView from "@/views/home";
import HomePageViewNew from "@/views/newHome";

export default function Home() {
  return (
    <BasicLayout>
      <HomePageViewNew />
    </BasicLayout>
  );
}
