import { Post } from '@prisma/client';
import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../../../lib/fetcher';
import Card from '../../ui/Card/Card';
import PostItem from '../PostItem/PostItem';

import s from './Feed.module.scss';

const Feed = () => {
  const { data, error } = useSWR<{ allPosts: Post[] }>('api/feed', fetcher);

  if (!data) return <p>Fetching now...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Card as="article" padding="lg" className={s.article}>
      <section className={s.section}>
        {data.allPosts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </section>
    </Card>
  );
};

export default React.memo(Feed);
