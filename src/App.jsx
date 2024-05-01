import { Toaster } from "sonner";
import { AppProvidersWrapper, BackToTop } from "./components";
// import AllRoutes from "./routes/Routes";
// import { configureFakeBackend } from "@/common";
import AdminLayout from "./layouts/AdminLayout"
import AdminDashboard from "./app/admin/dashboard/page"

// styles
import "@/assets/css/style.css";

// configureFakeBackend();

const App = () => {
  return (
    <AppProvidersWrapper>
      <AdminLayout><AdminDashboard /></AdminLayout>
      <BackToTop />
      <Toaster richColors />
    </AppProvidersWrapper>
  );
};

export default App;
