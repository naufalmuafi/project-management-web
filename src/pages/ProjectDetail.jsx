import { useParams } from "react-router-dom";
import useProjectStore from "../stores/projectStore";
import { useEffect } from "react";

export default function ProjectDetail() {
    const { projectId } = useParams();
    const { fetchProjectDetail, projectDetail, loading, error } =
        useProjectStore();
    console.log(projectId, projectDetail, loading, error);

    useEffect(() => {
        if (projectId) {
            fetchProjectDetail(projectId);
        }
    }, []);

    if (loading)
        return (
            <div class="p-6 bg-white rounded shadow space-y-8 animate-pulse">
                <div>
                    <div class="h-6 text-2xl font-bold mb-4 bg-gray-200 rounded w-1/2"></div>

                    <div class="text-gray-600 mb-2">
                        <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>

                    <div class="text-gray-600 mb-2">
                        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>

                    <div class="text-gray-600 mb-2">
                        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>

                    <div class="text-gray-600 mb-2">
                        <div class="h-4 bg-gray-200 rounded w-1/4"></div>
                    </div>
                </div>
            </div>
        );
    if (error)
        return (
            <div className="max-w-auto mx-auto">
                <div className="bg-white rounded-lg shadow p-5 flex justify-center items-center">
                    <div className="p-6 text-red-500">Error: {error}</div>
                </div>
            </div>
        );
    if (!projectDetail)
        return (
            <div className="max-w-auto mx-auto">
                <div className="bg-white rounded-lg shadow p-5 flex justify-center items-center">
                    <div className="p-6 text-lg text-red-500">
                        Project not found or no project detail available.
                    </div>
                </div>
            </div>
        );

    return (
        <div className="p-6 bg-white rounded shadow space-y-8">
            {/* Project Info */}
            <div>
                <h1 className="text-2xl font-bold mb-4 text-orange-400">
                    {projectDetail.name}
                </h1>

                <div className="text-gray-600 mb-2">
                    <strong>Status:</strong> {projectDetail.status}
                </div>

                <div className="text-gray-600 mb-2">
                    <strong>Duration:</strong>{" "}
                    {new Date(projectDetail.startDate).toLocaleDateString()} -{" "}
                    {new Date(projectDetail.endDate).toLocaleDateString()}
                </div>

                <div className="text-gray-600 mb-2">
                    <strong>Description:</strong> {projectDetail.description}
                </div>

                <div className="text-gray-600 mb-2">
                    <strong>Created By:</strong>{" "}
                    {projectDetail.createdBy?.name || "Unknown"}
                </div>
            </div>
        </div>
    );
}
