import { observer } from 'mobx-react';
import { PureComponent, UIEvent } from 'react';
import { Col, Container, Row } from 'idea-react';

import { GitCard } from '../component/Git/Card';
import { repositoryStore } from '../model/service';
import { i18n } from '../model/Translation';

@observer
export class ScrollListPage extends PureComponent {
  componentDidMount() {
    void repositoryStore.loadPageAt(0);
  }

  componentWillUnmount() {
    repositoryStore.clearList();
  }

  loadMore = ({ currentTarget }: UIEvent<HTMLDivElement>) => {
    const { scrollHeight, scrollTop, clientHeight } = currentTarget;

    if (scrollHeight - scrollTop - clientHeight < 120)
      void repositoryStore.loadNextPage();
  };

  render() {
    const { allItems, downloading, noMore } = repositoryStore;

    return (
      <Container>
        <h1 className="my-4">{i18n.t('scroll_list')}</h1>
        <div
          className="overflow-auto"
          style={{ maxHeight: '75vh' }}
          onScroll={this.loadMore}
        >
          <Row as="ul" className="list-unstyled g-4" xs={1} sm={2}>
            {allItems.map(item => (
              <Col key={item.id} as="li">
                <GitCard className="h-100 shadow-sm" {...item} />
              </Col>
            ))}
          </Row>
          {downloading > 0 && (
            <p className="text-center" role="status">
              {i18n.t('load_more')}
            </p>
          )}
          {noMore && (
            <p className="text-center text-body-secondary">{i18n.t('no_more')}</p>
          )}
        </div>
      </Container>
    );
  }
}
