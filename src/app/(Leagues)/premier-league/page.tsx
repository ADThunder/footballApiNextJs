import { filterLeague } from "@/api";
import LeagueTable from "@/app/components/LeagueTable";

const PremierLeague = async () => {
  const getEnglishLeague = await filterLeague("Premier League");

  console.log(getEnglishLeague);

  return (
    <div className="w-[600px]">
      {getEnglishLeague.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  );
};

export default PremierLeague;
