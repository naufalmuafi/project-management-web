import { useEffect, useState } from "react";
import useAuthStore from "../stores/authStore";
import api from "../utils/api";

export default function Profile() {
    const { token } = useAuthStore();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUseProfile = async () => {
            try {
                const response = await api.get("/api/auth/me");
                setUser(response.data);
            } catch (error) {
                console.error("Failed fetching user profile:", error);
            }
        };

        fetchUseProfile();
    }, [token]);

    if (!user) {
        return (
            <div className="max-w-2xl mx-auto animate-pulse">
                <h1 className="text-2xl font-bold mb-6">Profile</h1>

                <div className="bg-white rounded-lg shadow p-6 mt-6">
                    <div className="space-y-4">
                        <div>
                            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                            <div className="mt-2 h-6 bg-gray-200 rounded w-3/4"></div>
                        </div>

                        <div>
                            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                            <div className="mt-2 h-6 bg-gray-200 rounded w-3/4"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    console.log(user.user);

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-orange-500">Profile</h1>

            <div className="bg-white rounded-lg shadow p-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <p className="mt-1 text-lg">{user.user.name}</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <p className="mt-1 text-lg">{user.user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
