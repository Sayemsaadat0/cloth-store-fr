import { Outlet } from "react-router-dom";
import { Navbar } from "../core/Navbar";
// import Navbar from "../Shared/Navbar";
// import Footar from "../Shared/Footar";

const PublicMain = () => {
    return (
        <div className="relative min-h-screen ">
            {/* Fixed Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="fixed  -z-10 h-screen w-full object-cover"
            >
                <source src="/bg.mp4" type="video/mp4" />
            </video>

            {/* Content with Navbar */}
            <Navbar />
            <main className="relative z-30 pt-16 px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl space-y-8">
                    <Outlet />
                </div>
            </main>
            {/* <Footar></Footar> */}
        </div>
    );
};

export default PublicMain;