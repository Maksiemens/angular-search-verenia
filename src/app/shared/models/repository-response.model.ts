import { Repository } from "@app/shared/models/repository.model";

export interface RepositoryResponse {
  incomplete_results: boolean;
  items: Repository[];
  total_count: number;
}
