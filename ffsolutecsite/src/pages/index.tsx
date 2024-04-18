import BasicLayout from "@/@core/layout/BasicLayout";
import HomePageView from "@/views/home";
import InferGetStaticPropsType from "next";

export default function Home({
  cursos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <BasicLayout>
      <HomePageView />
    </BasicLayout>
  );
}

export const getStaticProps = async (context: any) => {
  return { props: { cursos: {} } };
};
