import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/loading"); // Navigate to the loading page
  };

  return (
    <div className="container bg-black flex items-center justify-center h-screen">
      <button
        onClick={handleClick}
        className="bg-white text-black py-2 px-4 rounded"
      >
        Start
      </button>
    </div>
  );
};

export default Home;
