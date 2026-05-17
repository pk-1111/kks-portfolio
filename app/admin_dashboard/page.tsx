import AdminPage from "@/components/Admin/Admin";

import FloatingNavbar from "@/components/BottomNavbar/BottomNavbar";
import ContactPage from "@/components/GetInTouch/GetInTouch";
import VisitPage from "@/components/VisitPage/VisitPage";
import { main } from "framer-motion/client";

export default function Page() {
    return (

        <>


            <main>

                <FloatingNavbar />

                <AdminPage />



            </main>
        </>

    );
}