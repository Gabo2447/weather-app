import Title from "@/components/global/title";
import WeatherDashboard from "@/components/home/weatherDashboard";

const Page = () => {
  return (
    <>
      <Title className="text-4xl sm:text-6xl my-24 gradient bg-linear-to-b from-neutral-50 to-neutral-300 leading-[calc(1lh+1rem)]">
        How's the sky looking today?
      </Title>
      <WeatherDashboard />
    </>
  );
};

export default Page;
