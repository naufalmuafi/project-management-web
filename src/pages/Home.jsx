import { Link } from "react-router-dom";
import useProjectStore from "../stores/projectStore";
import { useEffect } from "react";

export default function Home() {
    const { fetchProjects, loading, error, projects } = useProjectStore();

    useEffect(() => {
        fetchProjects();
    }, []);

    if (loading)
        return (
            <div class="w-auto h-screen animate-pulse">
                <h1 className="text-2xl font-bold text-orange-500 mb-6">
                    Active Projects
                </h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="p-4 bg-gray-200 rounded shadow hover:shadow-md transition">
                        <div class="h-5 bg-gray-300 rounded w-1/2"></div>
                        <div class="h-4 bg-gray-300 rounded w-full mt-2"></div>
                        <div class="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
                    </div>
                    <div class="p-4 bg-gray-200 rounded shadow hover:shadow-md transition">
                        <div class="h-5 bg-gray-300 rounded w-1/2"></div>
                        <div class="h-4 bg-gray-300 rounded w-full mt-2"></div>
                        <div class="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
                    </div>
                    <div class="p-4 bg-gray-200 rounded shadow hover:shadow-md transition">
                        <div class="h-5 bg-gray-300 rounded w-1/2"></div>
                        <div class="h-4 bg-gray-300 rounded w-full mt-2"></div>
                        <div class="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
                    </div>
                    <div class="p-4 bg-gray-200 rounded shadow hover:shadow-md transition">
                        <div class="h-5 bg-gray-300 rounded w-1/2"></div>
                        <div class="h-4 bg-gray-300 rounded w-full mt-2"></div>
                        <div class="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
                    </div>
                    <div class="p-4 bg-gray-200 rounded shadow hover:shadow-md transition">
                        <div class="h-5 bg-gray-300 rounded w-1/2"></div>
                        <div class="h-4 bg-gray-300 rounded w-full mt-2"></div>
                        <div class="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
                    </div>
                    <div class="p-4 bg-gray-200 rounded shadow hover:shadow-md transition">
                        <div class="h-5 bg-gray-300 rounded w-1/2"></div>
                        <div class="h-4 bg-gray-300 rounded w-full mt-2"></div>
                        <div class="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
                    </div>
                </div>
            </div>
        );
    if (error) return <div className="p-6 text-red-500">Error: {error}</div>;

    return (
        <div className="w-auto h-screen">
            <h1 className="text-2xl font-bold mb-6 text-orange-500">
                Active Projects
            </h1>
            {projects.length === 0 ? (
                <div className="max-w-auto mx-auto">
                    <div className="bg-white rounded-lg shadow p-5 flex justify-center items-center">
                        <p className="text-xl font-semibold">
                            No project founds!
                        </p>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => {
                        return (
                            <Link
                                key={project.id}
                                to={`/project/${project.id}`}
                                className="p-4 bg-white rounded shadow hover:shadow-md transition"
                            >
                                <h2 className="text-lg font-semibold">
                                    {project.name}
                                </h2>
                                <p className="text-gray-500">
                                    {project.description}
                                </p>
                                <div className="mt-2 text-sm text-gray-400">
                                    {new Date(
                                        project.startDate
                                    ).toLocaleDateString()}{" "}
                                    -{" "}
                                    {new Date(
                                        project.startDate
                                    ).toLocaleTimeString()}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
