import { DBService } from "@/service/chemistryDbService";

export const getQuestionByID = async (id) => {
    return await DBService.getByID(id);
};

export const getAllQuestions = async () => {
    return await DBService.getAll();
};
