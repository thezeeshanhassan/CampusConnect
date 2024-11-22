import PostItem from './PostItem';

const Posts = () => {
  const postItems = [
    {
      avatar: '/placeholder.svg?height=40&width=40',
      name: 'Alejandro Gamboa',
      time: '1d ago',
      category: 'General discussion',
      title: 'I would like to know your opinion',
      content: 'I met a girl at a disco, and we ended up kissing a lot. 2 weeks later we had our first date...',
      likes: 2,
      comments: 6,
      commenters: [
        '/placeholder.svg?height=24&width=24&text=1',
        '/placeholder.svg?height=24&width=24&text=2',
        '/placeholder.svg?height=24&width=24&text=3',
        '/placeholder.svg?height=24&width=24&text=4',
        '/placeholder.svg?height=24&width=24&text=5'
      ],
      latestComment: 'New comment 3h ago'
    },
    {
      avatar: '/placeholder.svg?height=40&width=40',
      name: 'Maria Anders',
      time: '2d ago',
      category: 'Tech Talk',
      title: 'What are your thoughts on AI?',
      content: 'AI is transforming industries. I’m curious to know if you think it’s more of a boon or a bane...',
      likes: 5,
      comments: 12,
      commenters: [
        '/placeholder.svg?height=24&width=24&text=1',
        '/placeholder.svg?height=24&width=24&text=2',
        '/placeholder.svg?height=24&width=24&text=3',
        '/placeholder.svg?height=24&width=24&text=4',
        '/placeholder.svg?height=24&width=24&text=5'
      ],
      latestComment: 'New comment 5h ago'
    },
    {
      avatar: '/placeholder.svg?height=40&width=40',
      name: 'John Doe',
      time: '3h ago',
      category: 'Health & Wellness',
      title: 'Tips for a healthy lifestyle',
      content: 'Consistency is key when it comes to health. Start small, focus on your diet, and stay active...',
      likes: 8,
      comments: 10,
      commenters: [
        '/placeholder.svg?height=24&width=24&text=1',
        '/placeholder.svg?height=24&width=24&text=2',
        '/placeholder.svg?height=24&width=24&text=3',
        '/placeholder.svg?height=24&width=24&text=4',
        '/placeholder.svg?height=24&width=24&text=5'
      ],
      latestComment: 'New comment 1h ago'
    }
  ];

  return (
    <div className="container space-y-6 mt-5">
      {postItems.map((post, index) => (
        <PostItem key={index} {...post} />
      ))}
    </div>
  );
};

export default Posts;
