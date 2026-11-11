import { Icon, Progress } from 'idea-react';
import { DownloadTask } from 'mobx-downloader';
import { observer } from 'mobx-react';
import { FC } from 'react';
import { Button, Card, CardBody, CardFooter, CardTitle } from 'idea-react';

import { downloader } from '../model/service';

export const DTCard: FC<{ task: DownloadTask }> = observer(({ task }) => (
  <Card>
    <CardBody>
      <CardTitle>{task.name}</CardTitle>
      <div className="position-relative">
        <Progress
          aria-label={`${task.name}: ${task.percent}%`}
          striped={task.percent < 100}
          animated={task.executing}
          value={task.percent}
          max={100}
        />
        <span className="position-absolute top-50 start-50 translate-middle">
          {task.percent}%
        </span>
      </div>
    </CardBody>
    <CardFooter className="d-flex justify-content-between align-items-center">
      <small>
        {task.loadedSize.toShortString()} / {task.totalSize.toShortString()}
      </small>
      <div className="d-flex gap-3">
        {task.percent < 100 &&
          (task.executing ? (
            <Button
              aria-label="Pause download"
              size="sm"
              variant="solid"
              theme="warning"
              onClick={() => task.pause()}
            >
              <Icon name="pause" />
            </Button>
          ) : (
            <Button
              aria-label="Resume download"
              size="sm"
              variant="solid"
              theme="success"
              onClick={() => task.start()}
            >
              <Icon name="play" />
            </Button>
          ))}
        <Button
          aria-label="Delete download"
          size="sm"
          variant="solid"
          theme="danger"
          disabled={task.executing}
          onClick={() => downloader.destroyTask(task.name)}
        >
          <Icon name="trash" />
        </Button>
      </div>
    </CardFooter>
  </Card>
));

export const Downloader: FC = observer(() => (
  <ol className="list-unstyled d-flex flex-column gap-3">
    {downloader.tasks.map(task => (
      <li key={task.id}>
        <DTCard task={task} />
      </li>
    ))}
  </ol>
));
