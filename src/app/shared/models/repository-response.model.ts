import { Repository } from "@app/shared/models/repository.model";

export interface RepositoryResponse {
  success: boolean;
  items: Repository[];
  total: number;
}
