import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import ParticlesBackground from "@/components/layout/ParticlesBackground";
import mypic from "../assets/logo.jpg";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const HomePage = (props) => {
  return (
    <div className={styles.wrapper}>
      <ParticlesBackground />
      <Head>
        <title>Maziuk's bakery</title>
        <meta name="description" content="Best bakery in EU." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.intro}>
        <h1 className={styles.h1}>
          <Link className={styles.link} href="/start">
            Zaczynamy...
          </Link>
        </h1>
        <div className={styles.logo}>
          <Image className={styles.pic} src={mypic} alt="logo" />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
