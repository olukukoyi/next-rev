import Link from "next/link";
// import styles from "../styles/Home.module.css";

export default function Users({ ninjas }) {
  console.log(ninjas);
  return (
    <div className="flex justify-center items-center">
      <div className="flex-col flex justify-center  items-start">
        <h1 className="text-2xl font-bold underline mb-3 ">Users:</h1>
        {ninjas.map((item) => (
          <Link key={item.id} href={"/users/" + item.id}>
            <div className="cursor-pointer">
              {item.id}) {item.name}
            </div>
          </Link>
        ))}
        <Link href="/">
          <button className="border px-4 py-1 border-black rounded-full mt-4 hover:bg-black hover:text-white transition ease-in-out ">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      ninjas: data,
    },
  };
};
