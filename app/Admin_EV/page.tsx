import AdminPage from "@/components/Admin/Admin";
import Admin_EVPage from "@/components/Admin/Admin_EV";
import BackgroundVideo from "@/components/Background/BackgroundVideo";
import FloatingNavbar from "@/components/BottomNavbar/BottomNavbar";
import ContactPage from "@/components/GetInTouch/GetInTouch";
import VisitPage from "@/components/VisitPage/VisitPage";
import { main } from "framer-motion/client";

export default function Page() {
    return (

        <>


            <main>

                <FloatingNavbar />

                <Admin_EVPage />



            </main>
        </>

    );
}