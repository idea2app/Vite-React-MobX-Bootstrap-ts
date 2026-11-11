import { textJoin } from 'mobx-i18n';
import { observer } from 'mobx-react';
import { FormEvent } from 'react';
import {
  Button,
  Container,
  Form,
  FormControl,
  FormFloatingLabel
} from 'idea-react';
import { formToJSON } from 'web-utility';

import { Downloader } from '../component/Downloader';
import { downloader } from '../model/service';
import { i18n } from '../model/Translation';

const { t } = i18n;

const addTask = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = event.currentTarget;
  const { path } = formToJSON(form);

  if (typeof path !== 'string' || path.length === 0)
    throw new Error('A download URL is required');

  await downloader.createTask(path).start({ chunkSize: 1024 ** 2 / 2 });
  form.reset();
};

export const DownloaderPage = observer(() => (
  <Container>
    <h1 className="my-4">{textJoin(t('downloader'), t('examples'))}</h1>

    <Form className="d-flex align-items-center gap-3 mb-3" onSubmit={addTask}>
      <FormFloatingLabel className="flex-fill">
        <FormControl
          id="download-url"
          placeholder="URL"
          type="url"
          name="path"
          required
        />
        <label htmlFor="download-url">URL</label>
      </FormFloatingLabel>

      <Button type="submit" variant="solid" theme="primary">
        +
      </Button>
    </Form>

    <Downloader />
  </Container>
));
