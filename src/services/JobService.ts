import { Job } from 'models/Job';
import { api } from 'utils/api';

export class JobServices {
  static getJobById = ({ queryKey }: any) => {
    const { id } = queryKey;
    return api.get<Job>(`job/detail/${id}`);
  };

  static getAllJobs = ({ queryKey }: any) => {
    const { Page = 1, PageSize = 10 } = queryKey;
    return api.get<Job[]>(`jobs/?Page=${Page}&PageSize=${PageSize}`);
  };

  static searchJobs = ({ queryKey }: any) => {
    const { keyword, isRemote, page = 1, pageSize = 10 } = queryKey;
    return api.get<Job[]>(
      `jobs/search?keyword=${keyword}&isRemote=${isRemote}&page=${page}&pageSize=${pageSize}`,
    );
  };
}
