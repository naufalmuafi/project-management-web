import { create } from "zustand";
import api from "../utils/api";

const useProjectStore = create((set) => ({
    projects: [],
    loading: false,
    error: null,
    projectDetail: null,

    fetchProjects: async () => {
        set({ loading: true, error: null });

        try {
            const response = await api.get("/api/projects");
            set({ projects: response.data.data || [] });
        } catch (error) {
            console.error("Failed fetching projects:", error);
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },

    fetchProjectDetail: async (id) => {
        set({ loading: true, error: null, projectDetail: null });

        try {
            const response = await api.get(`/api/projects/${id}`);
            set({ projectDetail: response.data.data || null });
        } catch (error) {
            console.error("Failed fetching project detail:", error);
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },
}));

export default useProjectStore;
