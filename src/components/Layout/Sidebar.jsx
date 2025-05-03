import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton";

export default function Sidebar() {
    return (
        <div className="w-64 h-full bg-white shadow-lg flex flex-col justify-between items-start">
            <div className="w-full">
                <div className="p-6 font-bold text-xl borber-b">
                    Project Manager
                </div>

                <nav className="flex flex-col p-4 space-y-2">
                    <Link to="/" className="hover:bg-gray-100 p-2 rounded">
                        Dashboard
                    </Link>
                    <Link
                        to="/profile"
                        className="hover:bg-gray-100 p-2 rounded"
                    >
                        Profile
                    </Link>
                </nav>
            </div>

            <div className="w-full p-6 border-t">
                <LogoutButton />
            </div>
        </div>
    );
}
