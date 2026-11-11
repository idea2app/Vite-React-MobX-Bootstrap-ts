import { observer } from 'mobx-react';
import { PureComponent } from 'react';
import {
  Badge,
  Button,
  Container,
  Table,
  TableSpinner,
  text2color
} from 'idea-react';

import { GitRepository } from 'mobx-github';
import { repositoryStore } from '../model/service';
import { i18n } from '../model/Translation';

@observer
export class PaginationPage extends PureComponent {
  componentDidMount() {
    void repositoryStore.loadPageAt(0);
  }

  componentWillUnmount() {
    repositoryStore.clearList();
  }

  renderRepository = ({
    id,
    full_name,
    html_url,
    homepage,
    language,
    topics,
    stargazers_count
  }: GitRepository) => (
    <tr key={id}>
      <th scope="row">
        <a target="_blank" href={html_url} rel="noreferrer">
          {full_name}
        </a>
      </th>
      <td>
        {homepage && (
          <a target="_blank" href={homepage} rel="noreferrer">
            {homepage}
          </a>
        )}
      </td>
      <td>{language}</td>
      <td>
        {topics?.map(topic => (
          <Badge
            key={topic}
            className="me-2 text-decoration-none"
            variant="subtle"
            theme={text2color(topic, ['light'])}
            target="_blank"
            href={`https://github.com/topics/${topic}`}
          >
            {topic}
          </Badge>
        ))}
      </td>
      <td>{stargazers_count?.toLocaleString() ?? '—'}</td>
    </tr>
  );

  render() {
    const {
      currentPage,
      pageIndex,
      pageCount,
      totalCount,
      downloading
    } = repositoryStore;
    const { t } = i18n;

    return (
      <Container className="d-flex flex-column" style={{ minHeight: '80vh' }}>
        <h1 className="my-4">{t('pagination')}</h1>
        <Table className="text-center" striped hover responsive>
          <thead>
            <tr>
              <th scope="col">{t('repository_name')}</th>
              <th scope="col">{t('home_page')}</th>
              <th scope="col">{t('programming_language')}</th>
              <th scope="col">{t('topic')}</th>
              <th scope="col">{t('star_count')}</th>
            </tr>
          </thead>
          <tbody>
            {currentPage.map(this.renderRepository)}
            {downloading > 0 && <TableSpinner colSpan={5} />}
          </tbody>
        </Table>

        <div className="d-flex align-items-center justify-content-between mt-auto">
          <span>
            {totalCount?.toLocaleString() ?? '—'} {t('repositories')}
          </span>
          <div className="d-flex gap-2">
            <Button
              variant="solid"
              theme="primary"
              size="sm"
              disabled={downloading > 0 || pageIndex <= 0}
              onClick={() => void repositoryStore.loadPageAt(pageIndex - 1)}
            >
              {t('previous')}
            </Button>
            <span className="align-self-center">
              {pageCount === 0 ? 0 : pageIndex + 1} / {pageCount}
            </span>
            <Button
              variant="solid"
              theme="primary"
              size="sm"
              disabled={downloading > 0 || pageIndex + 1 >= pageCount}
              onClick={() => void repositoryStore.loadPageAt(pageIndex + 1)}
            >
              {t('next')}
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}
