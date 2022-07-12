import Link from "next/link";
import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    // creates id/paths array
    return {
      params: { id: user.id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: {
      user: data,
    },
  };
};

function Details({ user }) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-3 ">
        <div className="justify-center items-center">
          Details Page for:
          <span className="font-bold pl-2 underline "> {user.name}</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>Email: {user.email}</div>
          <div> Website: {user.website}</div>
          <div>City: {user.address.city}</div>
        </div>
        <Link href="/">
          <button className="border border-black px-2 py-1 rounded-full hover:bg-black hover:text-white transition ease-in-out ">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Details;
