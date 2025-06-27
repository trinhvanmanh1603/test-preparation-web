import { getTestSample } from "@/service/testSample";

export const fetchAllTestSamples = async () => {
  return await getTestSample.getAllType();
};

export const fetchTestSampleById = async (id) => {
  return await getTestSample.getById(id);
};

export const fetchTestSampleByType = async (type) => {
  return await getTestSample.getByType(type);
};

