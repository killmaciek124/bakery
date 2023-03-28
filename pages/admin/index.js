import Link from "next/link";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
// import AuthForm from "@/components/auth/auth-form";
import { useSession, signOut } from "next-auth/react";
import Login from "@/components/auth/login";

const AdminPage = () => {
  const { data: session, status } = useSession({ required: true });
  // required: true czyli strona jest zabezpieczona authem

  /// FORMIK :
  const initialValues = {
    id: "",
    price: "",
    title: "",
  };
  const onSubmitHandler = async (values) => {
    console.log("onSubmit", values);
    const response = await fetch("/api/new-product", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
  };
  const validationSchema = Yup.object({
    id: Yup.string().required("Wpisz id"),
    price: Yup.string().required("Wpisz cene"),
    title: Yup.string().required("Wpisz nazwę"),
  });
  /// =========================

  if (status === "authenticated") {
    return (
      <>
        <Login />
        <h1>Panel Administracyjny</h1>
        <button>Dodaj zdjęcie</button>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmitHandler}
          validationSchema={validationSchema}
        >
          {() => (
            <Form>
              <div>
                <Field name="id" placeholder="Id" />
                <div>
                  <ErrorMessage name="id" component="span" />
                </div>
              </div>
              <div>
                <Field name="price" placeholder="Cena" />
                <div>
                  <ErrorMessage name="price" component="span" />
                </div>
              </div>
              <div>
                <Field name="title" placeholder="Tytuł" />
                <div>
                  <ErrorMessage name="title" component="span" />
                </div>
              </div>
              <button type="submit">Dodaj nowy produkt FORMIK</button>
            </Form>
          )}
        </Formik>
        <button>Usuń zdjęcie</button>
        <button>Usuń produkt</button>
        <Link href="/start">Powrót do strony</Link>
        {/* <CsvParser /> */}
        {/* <AuthForm /> */}
      </>
    );
  } else {
    return (
      <div>
        <p>Nie jesteś zalogowany</p>
        <Login />
      </div>
    );
  }
};

export default AdminPage;
