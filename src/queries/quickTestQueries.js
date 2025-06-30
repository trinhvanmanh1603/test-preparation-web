import { quickTestService } from "@/service/quickTestService"

export const QuickTestQueries = async (type) => {
    const response = await quickTestService.getQuickTest(type);
    return response;
}