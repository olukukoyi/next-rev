import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex justify-center items-center flex-col ">
        Choose One:
        <Link href="/users">
          <h1 className="cursor-pointer font-bold text-2xl hover:opacity-70 mt-3 ">
            To Users
          </h1>
        </Link>
        <Link href="/about">
          <h1 className="cursor-pointer  font-bold text-2xl hover:opacity-70 mt-3 ">
            To About
          </h1>
        </Link>
      </div>
    </div>
  );
}
