import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const search = ({ handleSearch, search, setSearch, loading }: any) => {
  return (
    <form
      onSubmit={handleSearch}
      className="flex justify-center items-center gap-2 w-full mx-auto"
    >
      <Input
        type="text"
        placeholder="Search for a place..."
        className="bg-neutral-900 max-w-88"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        variant={"default"}
        className="button-jump bg-blue-600 text-neutral-50 hover:bg-blue-500"
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </Button>
    </form>
  );
};

export default search;
