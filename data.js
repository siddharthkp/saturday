export const user = {
  name: 'Sid',
  username: 'siddharthkp',
  avatar:
    'https://pbs.twimg.com/profile_images/1298933888169971712/fj0dQ0M9_400x400.jpg',
};

export const posts = [
  {
    id: 'aa1i3',
    author: {
      name: 'Nitish',
      username: 'nitish24p',
      avatar:
        'https://pbs.twimg.com/profile_images/1110378869473853440/4drIaD4g_400x400.png',
    },
    timestamp: 'Mar 20, 2021 1:55 PM',
    body: `Koi please yeh england bowlers ko Frooti de do, looks like they'll collapse in the Ahmedabad heat.`,
    replies: [],
  },
  {
    id: 'asui3',
    author: {
      name: 'Pavithra',
      username: 'PKodmad',
      avatar:
        'https://pbs.twimg.com/profile_images/1007052431295856640/9D9qHTV6_400x400.jpg',
    },
    timestamp: 'Mar 20, 2021 10:00 AM',
    style: { whiteSpace: 'pre' },
    body: `
guys on twitter with great             highly experienced 
      career prospects                         women devs
                                               🤝

                                   #juniordevforlife

`,
    replies: [
      {
        author: {
          name: 'Sid',
          username: 'siddharthkp',
          avatar:
            'https://pbs.twimg.com/profile_images/1298933888169971712/fj0dQ0M9_400x400.jpg',
        },
        body: `🥵`,
        timestamp: 'Mar 20, 2021 10:30 AM',
      },
      {
        author: {
          name: 'Varsha',
          username: 'saha_varsha',
          avatar:
            'https://pbs.twimg.com/profile_images/1366050993964605441/4lJJUpr7_400x400.jpg',
        },
        body: `ouch!`,
        timestamp: 'Mar 20, 2021 10:35 AM',
      },
    ],
  },
  {
    id: 'po3po',
    author: {
      name: 'Neha',
      username: 'hellonehha',
      avatar:
        'https://pbs.twimg.com/profile_images/1279389930620215296/QFbB4JhB_400x400.jpg',
    },
    timestamp: 'Mar 19, 2021 10:00 AM',
    body: `Amazing things will happen 💖
    
    Art + calligraphy`,
    embed: {
      type: 'image',
      image:
        'https://pbs.twimg.com/media/EwlCOMBVkAEUK1L?format=jpg&name=medium',
    },
    replies: [],
  },
  {
    id: 'repo',
    author: {
      name: 'Sid',
      username: 'siddharthkp',
      avatar: 'https://github.com/siddharthkp.png',
    },
    timestamp: 'Mar 20, 2021 02:00 PM',
    body: `Here's the repo for this example app`,
    embed: {
      type: 'github',
      title: 'saturday.vercel.com',
      image: 'https://image.flaticon.com/icons/png/512/25/25231.png',
      link: {
        title: 'siddharthkp/saturday',
        href: 'https://github.com/siddharthkp/saturday',
      },
    },
    replies: [],
  },
  {
    id: 'ir',
    author: {
      name: 'Sid',
      username: 'siddharthkp',
      avatar: 'https://github.com/siddharthkp.png',
    },
    timestamp: 'Mar 20, 2021 02:00 PM',
    body: `I'm making a course on this topic :)`,
    embed: {
      type: 'github',
      title: 'Build truly Interactive React applications',
      image: 'https://interactive-react.com/favicon.png',
      link: {
        title: 'Interactive React',
        href: 'https://interactive-react.com',
      },
    },
    replies: [],
  },
];

export const newPosts = [
  {
    id: 'ioewj3',
    author: {
      name: 'Megha',
      username: 'Megha_Pathak_',
      avatar:
        'https://pbs.twimg.com/profile_images/1355515222455447554/vh5ohEKK_400x400.jpg',
    },
    timestamp: new Date(),
    body: `I turned 21 today! 🥳🎂

The ONLY thing that kept me excited for today this year was seeing Twitter making balloons float on my profile. 🤣🤣`,
    replies: [],
  },

  {
    id: 'pe3oc',
    author: {
      name: 'Sanket',
      username: 'sanketsahu',
      avatar:
        'https://pbs.twimg.com/profile_images/1369921787568422915/hoyvrUpc_400x400.jpg',
    },
    body: `People outside elevators queue but inside they stack.`,
    timestamp: new Date(),
    replies: [],
  },
  {
    id: 'aa3i3',
    author: {
      name: 'Prateek',
      username: '_prateekbh',
      avatar: 'https://github.com/prateekbh.png',
    },
    timestamp: new Date(),
    body: `2020 @taylorswift13 is such a vibe`,
    replies: [],
  },
];
