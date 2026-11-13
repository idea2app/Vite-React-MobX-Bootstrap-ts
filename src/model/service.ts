import { Downloader } from 'mobx-downloader';
import { RepositoryModel } from 'mobx-github';

export const repositoryStore = new RepositoryModel('idea2app');
export const downloader = new Downloader();
