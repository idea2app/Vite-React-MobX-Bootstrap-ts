import { RepositoryModel as GitHubRepositoryModel } from 'mobx-github';

export class RepositoryModel extends GitHubRepositoryModel {
  async loadPageAt(pageIndex: number) {
    if (pageIndex < 0 || (this.pageCount > 0 && pageIndex >= this.pageCount))
      throw new RangeError(`Repository page index ${pageIndex} is out of range`);

    if (this.downloading > 0) return;

    await this.getList(this.filter, pageIndex, this.pageSize);
  }

  async loadNextPage() {
    if (this.downloading > 0 || this.noMore) return;

    await this.loadPageAt(this.pageIndex + 1);
  }
}

export default RepositoryModel;
