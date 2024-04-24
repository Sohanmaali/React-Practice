import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();
  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        GitHub follwers :{data.followers}
        <img src={data.avatar_url} alt="git image" width="300px" />
      </div>
    </>
  );
}

export default GitHub;

export const gitHubLoader = async () => {
  const response = await fetch("https://api.github.com/users/Sohanmaali");
  return response.json();
};
