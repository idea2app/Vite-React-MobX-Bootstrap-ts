import { Downloader } from 'mobx-downloader';

import RepositoryModel from './Repository';

export const repositoryStore = new RepositoryModel('idea2app');
export const downloader = new Downloader();
