import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "@/pages/home";
import { Privacity } from "../pages/privacity";


export const routes = {
  home: '/',
  privacity: '/politica-de-privacidade'
}

export const RoutesFunction = () => {
  return (
    <Routes>
      {/* A rota(URL) "/" ira renderizar o conteúdo da Home */}
      <Route path="/" element={<Home />} />

      {/* A rota(URL) "/politica-de-privacidade" ira renderizar o conteúdo de política de privacidade */}
      <Route path="/politica-de-privacidade" element={<Privacity />} />

      {/* Qualquer rota(URL) que não estiver configurada em routes.tsx ira ser redirecionada para a home  */}
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};