import Link from "next/link";
import { useSession } from "next-auth/react";
import Login from "@/components/auth/login";
import DeleteItem from "@/components/layout/delete/DeleteItem";
import AddItem from "@/components/layout/add/AddItem";
import AddPicture from "@/components/layout/add/AddPicture";
import DeleteItems from "@/components/layout/delete/DeleteItems";

const AdminPage = () => {
  const { data: session, status } = useSession({ required: true });
  // required: true czyli strona jest zabezpieczona authem

  if (status === "authenticated") {
    return (
      <>
        <h1>Panel Administracyjny</h1>
        <Login />
        <Link href="/start">Powrót do strony</Link>
        <AddItem />
        <DeleteItem />
        <AddPicture />
        <DeleteItems />
        {/* <CsvParser /> */}
        {/* <AuthForm /> */}
      </>
    );
  } else {
    return (
      <div>
        <h1>LOADING...</h1>
        {/* <p>Nie jesteś zalogowany</p> */}
        <Login />
      </div>
    );
  }
};

export default AdminPage;
