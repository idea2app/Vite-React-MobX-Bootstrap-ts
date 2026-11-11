import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useSearchParams } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImage,
  CardText,
  CardTitle,
  Col,
  Container,
  Row
} from 'idea-react';

import project, { Project } from '../model/Project';
import { i18n } from '../model/Translation';

const { t } = i18n;

const renderProject = ({
  id,
  name,
  logo,
  description,
  homepage,
  html_url
}: Project) => (
  <Col className="mb-3" key={id}>
    <Card className="h-100">
      {logo && <CardImage src={logo} alt={`${name} logo`} placement="top" />}
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter className="d-flex justify-content-between">
        {homepage && (
          <Button
            variant="solid"
            theme="primary"
            size="sm"
            target="_blank"
            href={homepage}
          >
            {t('home_page')}
          </Button>
        )}
        <Button
          variant="solid"
          theme="success"
          size="sm"
          target="_blank"
          href={html_url}
        >
          {t('source_code')}
        </Button>
      </CardFooter>
    </Card>
  </Col>
);

const HomePage = observer(() => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    project.getList(
      'facebook/react',
      'microsoft/TypeScript',
      'mobxjs/mobx',
      'idea2app/Idea-React',
      'EasyWebApp/KoAJAX'
    );
    return () => project.clearList();
  }, []);

  const guest = searchParams.get('guest');
  const { list } = project;

  return (
    <Container fluid="md">
      <h1 className="my-4">{t('upstream_projects')}</h1>

      {guest && (
        <h2>
          {t('welcome')} {guest}!
        </h2>
      )}
      <Row xs={1} sm={2} lg={4}>
        {list.map(renderProject)}
      </Row>
    </Container>
  );
});

export default HomePage;
