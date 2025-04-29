import useAuthStore from "../stores/authStore";

export default function Home() {
    const user = useAuthStore((state) => state.user);

    return (
        <div className="w-screen h-screen">
            <h1 className="text-2xl font-bold mb-6">Active Projects</h1>
            {/* <h3 className="text-lg mb-4">
                Welcome, {user.name}! <small>({user.email})</small>
            </h3> */}
        </div>
    );
}
