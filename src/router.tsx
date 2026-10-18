import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { RootLayout } from "@/layouts/RootLayout";
import RouteError from "@/pages/RouteError";

const Home = lazy(() => import("@/pages/Home"));
const Nosotros = lazy(() => import("@/pages/Nosotros"));
const ProyectosImpacto = lazy(() => import("@/pages/ProyectosImpacto"));
const ComoFunciona = lazy(() => import("@/pages/ComoFunciona"));
const Beneficios = lazy(() => import("@/pages/Beneficios"));
const Aliados = lazy(() => import("@/pages/Aliados"));
const RecibirDonacion = lazy(() => import("@/pages/RecibirDonacion"));
const Contacto = lazy(() => import("@/pages/Contacto"));
const PoliticaPrivacidad = lazy(() => import("@/pages/PoliticaPrivacidad"));
const Terminos = lazy(() => import("@/pages/Terminos"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <Home /> },
      { path: "nosotros", element: <Nosotros /> },
      { path: "proyectos-e-impacto", element: <ProyectosImpacto /> },
      { path: "como-funciona", element: <ComoFunciona /> },
      { path: "beneficios", element: <Beneficios /> },
      { path: "aliados", element: <Aliados /> },
      { path: "recibir-donacion", element: <RecibirDonacion /> },
      { path: "contacto", element: <Contacto /> },
      { path: "politica-privacidad", element: <PoliticaPrivacidad /> },
      { path: "terminos", element: <Terminos /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
